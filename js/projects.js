let reposData = []
async function getProjects() { 
    try {
        const response = await fetch("https://api.github.com/users/ephraimvc/repos")
        if (!response.ok) { 
            throw new error(`error: ${response.status}`)
        }
        const data = await response.json();
        reposData = data

        let projectList = document.querySelector(".projects_wrapper")
        projectList.innerHTML = reposData.map((projects) => (` 
            <div class="projects_card">
                        <img src="./assests/project1.png" alt="abstract" />
                        <section class="card_text">
                            <h2 class="project_title">${projects.name}</h2>
                            <p class="p_text">
                                This is sample project description random things
                                are here in description This is sample project
                                lorem ipsum generator for dummy content
                            </p>
                            <p class="p_text">
                                <strong>Techstack :</strong> ${projects.language}
                            </p>
                            <div class="links_wrapper">
                               
                                <div class="links_boxes">
                                    <img
                                        class="link_icons"
                                        src="./assests/gitb.svg"
                                        alt="github icon"
                                    />
                                    <p class="projects_links code_link">
                                        <a href=${projects.clone_url}>View Code</a>
                                    </p>
                                </div>
                            </div>
                        </section>
</div>
         `)
        ).join("")
    }
    catch (error) {
        console.error("error",error)
     }
}

getProjects();



                