import './projects-style.css'

function ProjectsIntroElements({elements}){
    return(
        elements.map( e =>{
            return(
                <img src={e.src} className={e.className}/>
            )
        })
    );
}

export default ProjectsIntroElements;