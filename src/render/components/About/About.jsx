import './about-style.css'
import SectionHeader from '../Shared/SectionHeader';
import PersonalPhoto from './img/personal-photo.png'
import { div } from 'three/tsl';


const experiencesContent = [
    {
        header: "Front-end Development",
        subHeader: "HTML, CSS, Tailwind CSS, Javascript, React, Firebase"
    },
    {
        header: "Back-end Development",
        subHeader: "NodeJS, ExpressJS, SQL, MySQL"
    },
    {
        header: "3D Technologies",
        subHeader: "ThreeJS, Blender"
    },
    {
        header: "Game Development",
        subHeader: "Unity Game Engine, C# Scripting"
    },
    {
        header: "Tools and Technologies",
        subHeader: "Adobe Illustrator, Adobe Photoshop, Figma, Git, GitHub"
    }
]

function ExperienceItem ({header, subHeader}){
    return(
        <div className="experience-item">
            <h1>
                <span className="experience-item-header" >{header}</span>
            </h1>
            <p className="experience-item-subheader">{subHeader}</p>
        </div>
    );
}

function About(){
    return(
        <section className="about-section">
            <SectionHeader 
                header={"About"} 
                subHeader={"Areas of Experience"}
            />
            <div className="about-content">
                <img 
                    className="personal-photo" 
                    src={PersonalPhoto} 
                    alt="personal-photo" 
                />
                <div className="experiences">
                    {
                        experiencesContent.map(content=>{
                            return <ExperienceItem header={content.header} subHeader={content.subHeader} />
                        })
                    }
                </div>
            </div>
        </section>
    );
}

export default About;