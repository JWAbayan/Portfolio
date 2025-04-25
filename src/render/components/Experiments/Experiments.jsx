import './experiments-style.css'
import '../../../App.css'
import StockImage from '../Projects/img/stock-image.png'
import SectionHeader from '../Shared/SectionHeader';

const experimentsContent = [
    {
        title:"",
        description:"",
        src:StockImage,
        alt: "StockImage"  
    },
    {
        title:"",
        description:"",
        src:StockImage,
        alt: "StockImage"
    },
    {
        title:"",
        description:"",
        src:StockImage,
        alt: "StockImage" 
    },
    {
        title:"",
        description:"",
        src:StockImage,
        alt: "StockImage" 
    },
    {
        title:"",
        description:"",
        src:StockImage,
        alt: "StockImage"
    },
]

function ExperimentItem({content}){
    return (
        <div className="experiment-item">
            <img className='' src={content.src} alt={content.alt} />
        </div>
    );
}

function Experiments(){
    return(
        <section id="experiments" className="experiments-section">
            <SectionHeader 
                header={"Experiments"} 
                subHeader={"Exploring Creative and\nInteresting Topics"}
            />
            <div className="experiments-content">
                {
                    experimentsContent.map(content => {
                        return <ExperimentItem key={crypto.randomUUID()} content={content}/>
                    })  
                }
            </div>
        </section>
    );
}

export default Experiments;