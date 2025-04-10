import SpiralSquare from '../../assets/parallaxElements/hero-element-7.svg'
import Triangle from '../../assets/parallaxElements/hero-element-8.svg'
import './intro-style.css'

function HeroElementFour(){
    return(
        <>
            <img className="spiral-square" src={SpiralSquare} alt="grid-two"/>
            <img className="triangle" src={Triangle} alt="sphere-two"/>
        </>
    );
}
 
export default HeroElementFour;