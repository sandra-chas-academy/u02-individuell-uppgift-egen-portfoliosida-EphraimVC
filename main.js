
let workData = []
let educationData = []
let aboutData = []

async function getData() {
    const aboutContainer = document.querySelector(".aboutText")
    try {
        const response = await fetch("/data/cv.json")
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

const renderEdu=() => { 
    const eduContainer = document.querySelector(".eduSection");    
    let educationHtml = educationData.map(edu =>
        `<section class="experience">
                <div class="expLocation" >
                    <h3 class="expPlace">${edu.place}</h3>
                    <p class="expCity">${edu.location}</p>
                </div>
                <div class="expInfo">
                    <div class="expDescription">
                        <h4>${edu.course}</h4>
                       <p class="descriptionText">${edu.description}</p>
                    </div>
                    <div class="expInfo_duration">
                        <p class="periodText1 period">${edu.period}</p> <p class="periodText2 period">${edu.duration}</p>
                    </div>
                </div>
            </section>`).join("");
    eduContainer.innerHTML= educationHtml
}

const renderWork=() => { 
    const workContainer = document.querySelector(".workSection");    
    let workHtml = workData.map(work =>
        `<section class="experience">
                <div class="expLocation" >
                    <h3 class="expPlace">${work.place}</h3>
                    <p class="expCity">${work.location}</p>
                </div>
                <div class="expInfo">
                    <div class="expDescription">
                        <h4>${work.role}</h4>
                       <p class="descriptionText">${work.description}</p>
                    </div>
                    <div class="expInfo_duration">
                        <p class="periodText1 period">${work.period}</p> <p class="periodText2 period">-</p>
                    </div>
                </div>
            </section>`).join("");
    workContainer.innerHTML= workHtml
}

getData();