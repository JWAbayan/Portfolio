import GridOne from '../../assets/parallaxElements/hero-element-3.svg'
import SphereOne from '../../assets/parallaxElements/hero-element-4.svg'
import './intro-style.css'

function HeroElementTwo(){
    return(
        <>
            <img className="grid-one" src={GridOne} alt="double-circle" />
            <img className="sphere-one" src={SphereOne} alt="donut" />
        </>
    );
}

export default HeroElementTwo;