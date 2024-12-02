
let workData = []
let educationData = []
let aboutData = []
let themeBtn = document.querySelector(".themeToggle")
let toggleModeStatus = document.querySelector(".toggleMode")
let toggleStatus = false

let toggleLs = localStorage.setItem("themeMode", false)



async function getData() {
    const aboutContainer = document.querySelector(".about_text")
    try {
        const response = await fetch("./data/cv.json")
        if (!response.ok)throw new Error("failed to fetch data");
        const data = await response.json();
        workData = data.work
        educationData = data.education
        aboutData = data.about
        renderEdu();
        renderWork();
        aboutContainer.innerHTML = aboutData[0].text;
    } catch (error) { 
        console.error("error message",error)
    }
}


themeBtn.addEventListener("click",() => { 
    console.log("togg clicked");
    toggleStatus = !toggleStatus;
    toggleModeStatus.src = !toggleStatus ? "./assests/darkMode.svg" : "./assests/lightMode.svg";
    toggleModeStatus.alt = !toggleStatus ? "dark mode icon" : "light mode icon";
    })


const renderEdu=() => { 
    const eduContainer = document.querySelector(".education_container");    
    let educationHtml = educationData.map(edu =>
        ` <div class="work work1">
                        <div class="work_titles">
                            <p class="title1">${edu.course}</p>
                            <span class="title2">${edu.duration}</span>
                        </div>
                        <div class="work_place">
                            <div class="work_zone">
                                <p class="work_company">${edu.place}</p>
                                <p class="work_country">${edu.location}</p>
                            </div>
                            <p class="work_period">${edu.period}</p>
                        </div>
                    </div>`).join("");
    eduContainer.innerHTML= educationHtml
}

const renderWork=() => { 
    const workContainer = document.querySelector(".worklist_container");    
    let workHtml = workData.map(work =>
        `<div class="work work1">
                        <div class="work_titles">
                            <p class="title1">${work.role}</p>
                            <span class="title2">${work.duration}</span>
                        </div>
                        <div class="work_place">
                            <div class="work_zone">
                                <p class="work_company">${work.place}</p>
                                <p class="work_country">${work.location}</p>
                            </div>
                            <p class="work_period">sep2021 - dec 2021</p>
                        </div>
                    </div>`).join("");
    workContainer.innerHTML= workHtml
}

getData();


// document.addEventListener("DOMContentLoaded", () => { 
    
// })






