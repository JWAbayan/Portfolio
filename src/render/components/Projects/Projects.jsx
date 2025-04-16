import './projects-style.css'
import { useState } from 'react'
import StockImage from "./img/stock-image.png"

const projectsContent = [
    {
        title: "Project Title",
        tools: "Framework, Libraries, Tools",
        description: `Description ipsum dolor sit amet, consectetur adipiscing elit. 
        Vestibulum  eleifend sollicitudin orci, at tempus orci gravida in. Cras venenatis  auctor iaculis.
         Maecenas efficitur vel sem non porttitor. Pellentesque  tortor ligula.`
    },
    {
        src: StockImage,
        alt: "stock-image"
    },
    {
        title: "Project Title",
        tools: "Framework, Libraries, Tools",
        description: `Description ipsum dolor sit amet, consectetur adipiscing elit. 
        Vestibulum  eleifend sollicitudin orci, at tempus orci gravida in. Cras venenatis  auctor iaculis.
         Maecenas efficitur vel sem non porttitor. Pellentesque  tortor ligula.`
    },
    {
        src: StockImage,
        alt: "stock-image"
    },
    {
        title: "Project Title",
        tools: "Framework, Libraries, Tools",
        description: `Description ipsum dolor sit amet, consectetur adipiscing elit. 
        Vestibulum  eleifend sollicitudin orci, at tempus orci gravida in. Cras venenatis  auctor iaculis.
         Maecenas efficitur vel sem non porttitor. Pellentesque  tortor ligula.`
    },
    {
        src: StockImage,
        alt: "stock-image"
    }
]


function ProjectImage({info}){
    return(
        <div className="project-image">
            <img src={info.src} alt={info.alt} />
        </div>
    );
}

function ProjectInfo({info}){
    return(
        <div className="project-info">
            <div className="project-title">
                <h1>
                    {info.title}
                </h1>
                <img src="" alt="github-icon" />
            </div>
            <div className="project-tools">
                <p>
                    {info.tools}  
                </p>
            </div>
            <div className="project-description">
                <p>
                    {info.description}
                </p>
            </div>
        </div>
    );
}


function Projects(){

    const [displayedProject, setDisplayedProject] = useState(0);

    function changeDisplayedProject(index){
        setDisplayedProject(index);
    }

    return(
        <section id="projects" className="projects-section">
            <div className="projects-header">
                <h1 className="projects-header-text-main">
                        Projects
                </h1>
                <h1 className="projects-header-text-sub">
                    Web Applications and 
                    <br/>
                    Game Development
                </h1>
            </div>
            <div className="projects-content">
                {
                    projectsContent.map((content, index) => {
                        if(index % 2 == 0){
                            return <ProjectInfo key={crypto.randomUUID()} info={projectsContent[index]}/>
                        }else{
                            return <ProjectImage key={crypto.randomUUID()} info={projectsContent[index]} />
                        }
                    })                    
                }
            </div>
        </section>
    );
}

export default Projects;