import GridOne from '../../assets/parallaxElements/hero-element-3.svg'
import SphereTwo from '../../assets/parallaxElements/hero-element-5.svg'
import './intro-style.css'

function HeroElementThree(){
    return(
        <>
            <img className="grid-two" src={GridOne} alt="grid-two"/>
            <img className="sphere-two" src={SphereTwo} alt="sphere-two"/>
        </>
    );
}
 
export default HeroElementThree;