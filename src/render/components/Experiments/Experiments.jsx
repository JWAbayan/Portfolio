import './experiments-style.css'
import '../../../App.css'
import StockImage from '../Projects/img/stock-image.png'

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
        <section className="experiments-section">
            <div className="section-header">
                <h1 className="section-header-text-main">
                        Experiments
                </h1>   
                <h1 className="section-header-text-sub">
                    Exploring Creative and 
                    <br/>
                    Interesting Topics
                </h1>
            </div>
            <div className="experiments-content">
                {
                    experimentsContent.map(content => {
                        return <ExperimentItem content={content}/>
                    })  
                }
            </div>
        </section>
    );
}

export default Experiments;