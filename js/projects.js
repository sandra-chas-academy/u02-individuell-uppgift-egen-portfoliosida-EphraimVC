let reposData = []
async function getProjects() { 
    try {
        const response = await fetch("https://api.github.com/users/ephraimvc/repos")
        if (!response.ok) { 
            throw new error(`error: ${response.status}`)
        }
        const data = await response.json();
        reposData = data
        console.log(reposData);

        // let projectList = document.querySelector(".projectItem_wrapper")
        // projectList.innerHTML = reposData.map((projects) => (` 
        //     <a href=${projects.clone_url}>
        //     <div class="projectSection" id=${projects.id}>
        //     <div class="projectImageContainer">
        //         <img class="projectItem_image" src="/assets/img3.webp" alt="">
        //     </div>
        //     <section class="projectItemText_container">
        //         <h2 class="projectItem_heading">${projects.name}</h2>
        //         <p class="projectItem_stack" >techstack: ${projects.language}</p>
        //     </section>
        //  </div></a>
        //  `)
        // ).join("")
    }
    catch (error) {
        console.error("error",error)
     }
}

getProjects();
