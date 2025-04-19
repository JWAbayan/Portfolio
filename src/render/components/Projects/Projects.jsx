import './projects-style.css'
import { useState } from 'react'
import StockImage from "./img/stock-image.png"
import '../../../App.css'
import GithubIcon from '/github-mark.svg'

const projectsContent = [ 
    {
        info: {
            title: "Project Title",
            tools: "Framework, Libraries, Tools",
            description: `Description ipsum dolor sit amet, consectetur adipiscing elit. 
            Vestibulum  eleifend sollicitudin orci, at tempus orci gravida in. Cras venenatis  auctor iaculis.
            Maecenas efficitur vel sem non porttitor. Pellentesque  tortor ligula.`
        },
        img:{
            src: StockImage,
            alt: "stock-image"
        }
    },
    {
        info: {
         title: "Project Title",
         tools: "Framework, Libraries, Tools",
         description: `Description ipsum dolor sit amet, consectetur adipiscing elit. 
         Vestibulum  eleifend sollicitudin orci, at tempus orci gravida in. Cras venenatis  auctor iaculis.
          Maecenas efficitur vel sem non porttitor. Pellentesque  tortor ligula.`
         },
         img:{
             src: StockImage,
             alt: "stock-image"
         }
     },
     {
         info: {
          title: "Project Title",
          tools: "Framework, Libraries, Tools",
          description: `Description ipsum dolor sit amet, consectetur adipiscing elit. 
          Vestibulum  eleifend sollicitudin orci, at tempus orci gravida in. Cras venenatis  auctor iaculis.
           Maecenas efficitur vel sem non porttitor. Pellentesque  tortor ligula.`
          },
          img:{
              src: StockImage,
              alt: "stock-image"
          }
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
                <img className="github-icon" src={GithubIcon} alt="github-icon" />
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


function ProjectItem ({content}){
    return(
        <div className="project-item">
            <ProjectInfo info={content.info}/>
            <ProjectImage info={content.img}/>
        </div>
    );
}


function Projects(){
    return(
        <section id="projects" className="projects-section">
            <div className="section-header">
                <h1 className="section-header-text-main">
                        Projects
                </h1>   
                <h1 className="section-header-text-sub">
                    Web Applications and 
                    <br/>
                    Game Development
                </h1>
            </div>
            <div className="projects-content">
                {
                    projectsContent.map( content => {
                        return <ProjectItem key={crypto.randomUUID()} content={content}/>
                    })                    
                }
            </div>
        </section>
    );
}

export default Projects;