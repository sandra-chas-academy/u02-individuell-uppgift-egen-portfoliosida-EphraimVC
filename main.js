
let workData = []
let educationData = []


async function getData() {
    try {
        const response = await fetch("/data/cv.json")
        if (!response.ok)throw new Error("failed to fetch data");
        const data = await response.json();
        workData = data.work
        educationData = data.education
        renderItems();
    } catch (error) { 
        console.error("error message",error)
    }
}

const renderItems=() => { 
    const container = document.querySelector(".cvExperience")
    
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
    container.innerHTML= educationHtml
}

getData();