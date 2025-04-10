import './projects-style.css'
import CircleHalfTone from './img/circle-halftone-1.svg'
import LineLongOne from './img/line-long-1.svg'
import LineShortOne from './img/line-short-1.svg'
import StarOne from './img/star-1.svg'
import RoundedSquareOne from './img/rounded-square-1.svg'
import RoundedSquareOutlineOne from './img/rounded-square-outline-1.svg'
import TriangleOne from './img/triangle-1.svg'
import StarTwo from './img/star-2.svg'

import ProjectsIntroElements from './ProjectsIntroElements'


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
    }
]


function Projects(){
    return(
        <>
            <section className="projects-intro">
                <h1 className="projects-intro-text" data-content="Projects">Projects</h1>
                <ProjectsIntroElements elements={introElements}/>
            </section>
            <div id="projects" className="projects-section">
                <h1> MY WORKS </h1>
            </div>
        </>
    );
}

export default Projects;