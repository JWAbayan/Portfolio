import DoubleCircle from '../../assets/parallaxElements/hero-element-1.svg'
import Donut from '../../assets/parallaxElements/hero-element-2.svg'
import './intro-style.css'

function HeroElementOne(){
    return(
        <>
            <img className="double-circle" src={DoubleCircle} alt="double-circle" />
            <img className="donut" src={Donut} alt="donut" />
        </>
    );
}

export default HeroElementOne;