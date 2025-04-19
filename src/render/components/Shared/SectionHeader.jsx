import './sectionHeader-style.css'

export default function SectionHeader({header, subHeader}){
    return(
        <div className="section-header">
            <h1 className="section-header-text-main">
                {header}
            </h1>   
            <h1 className="section-header-text-sub">
                {subHeader}
            </h1>
        </div>
    );
}