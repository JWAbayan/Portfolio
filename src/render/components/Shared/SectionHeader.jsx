import './sectionHeader-style.css'
import useObserve from '../../../hooks/useIntersectionObserver';
import { useRef } from 'react';

export default function SectionHeader({header, subHeader}){
    const headerRef = useRef()
    
    useObserve(()=>{

    },headerRef.current, null)

    return(
        <div ref={headerRef} className="section-header">
            <h1 className="section-header-text-main">
                {header}
            </h1>   
            <h1 className="section-header-text-sub">
                {subHeader}
            </h1>
        </div>
    );
}