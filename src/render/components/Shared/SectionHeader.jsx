import './sectionHeader-style.css'
import { useRef } from 'react';
import useIntersectionObserver from '../../../hooks/useIntersectionObserver';

export default function SectionHeader({header, subHeader}){
    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
    }

    const observedHeaderRef = useIntersectionObserver({
        callback: entries => animateOnView(entries, "slide-fade-up"),
        options: observerOptions 
    })

    function animateOnView(entries, className){
        if(!entries) return;
        
        entries.forEach(entry=>{
            if(entry.isIntersecting)
                entry.target.classList.add(className);
        })
    }


    return(
        <div ref={observedHeaderRef} className="section-header">
            <h1 className="section-header-text-main">
                {header}
            </h1>   
            <h1 className="section-header-text-sub">
                {subHeader}
            </h1>
        </div>
    );
}