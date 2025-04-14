import './projects-style.css'
import CircleHalfTone from './img/circle-halftone-1.svg'
import LineLongOne from './img/line-long-1.svg'
import LineShortOne from './img/line-short-1.svg'
import StarOne from './img/star-1.svg'
import RoundedSquareOne from './img/rounded-square-1.svg'
import RoundedSquareOutlineOne from './img/rounded-square-outline-1.svg'
import TriangleOne from './img/triangle-1.svg'
import StarTwo from './img/star-2.svg'
import RoundedSquareTwo from './img/rounded-square-2.svg'
import StarThree from './img/star-3.svg'
import LineLongTwo from "./img/line-long-2.svg"
import LineShortTwo from "./img/line-short-2.svg" 
import { div } from 'three/tsl'
import { ssrDynamicImportKey } from 'vite/module-runner'
import { useState } from 'react'


const introElements = [
    {
        src: CircleHalfTone,
        className:"circle-halftone"
    },
    {
        src: LineLongOne,
        className:"line-long-one"
    },
    {
        src: LineShortOne,
        className:"line-short-one"
    },
    {
        src: StarOne,
        className:"star-one"
    },
    {
        src: RoundedSquareOne,
        className: "rounded-square-one"
    },
    {
        src: RoundedSquareOutlineOne,
        className: "rounded-square-outline-one"
    },
    {
        src: TriangleOne,
        className: "triangle-one"
    },
    {
        src: StarTwo,
        className: "star-two"
    },
    {
        src: RoundedSquareTwo,
        className: "rounded-square-two"
    },
    {
        src: StarThree,
        className: "star-three"
    },
    {
        src: LineLongTwo,
        className: "line-long-two"
    },
    {
        src: LineShortTwo,
        className: "line-short-two"
    }
]


const projectElements = [

]


const projectsInfo = [
    {
        img: "",
        link:"",
        title: "",
        description:""
    },
    {
        img: "",
        link:"",
        title: "",
        description:""
    },
    {
        img: "",
        link:"",
        title: "",
        description:""
    },
    
]

function Projects(){

    const [displayedProject, setDisplayedProject] = useState(0);

    function changeDisplayedProject(index){
        setDisplayedProject(index);
    }

    return(
        <section id="projects" className="projects-section">
            {
                // projectsInfo.map((project,index)=>{
                //     return(
                //         <button 
                //             onClick={()=>changeDisplayedProject(index)} 
                //             style={{backgroundColor: displayedProject === index ? "red" : ""}} 
                //             className="project-navigation-button" 
                //         />
                //     )
                // })
            }
            <h1>{displayedProject}</h1>
        </section>
    );
}

export default Projects;