
import './intro-style.css'
import HeroElementOne from './HeroElementOne';
import HeroElementTwo from './HeroElementTwo';
import HeroElementThree from './HeroElementThree';
import HeroElementFour from './HeroElementFour'; 
import brushStroke from '../../assets/parallaxElements/brush-stroke.svg'


function Intro(){
    return(
        <section className="intro-section">
          <HeroElementOne/>
          <HeroElementTwo/>
          <HeroElementThree/>
          <HeroElementFour/>
          <h1 className="hero-header">
              <img className="brush-stroke" src={brushStroke} alt="brush-stroke" />
              Hey, I’m <span style={{color:"#45CB85"}}>John Abayan</span>.
              <br/>
              A developer with passion for clean designs 
          </h1> 
          <a href="" className="hero-subheader">
            <p>
              Check out my projects
            </p>
          </a>
        {/* <div class="personal-photo-container">
          <img className="personal-photo" src={personalPhoto} alt="personal-photo"/>
        </div> */}
        {/* <div className="hero">
          <h1 className="hero-text">
            Hey, I’m <span style={{color:"#45CB85"}}>John Abayan</span>.
            <br/>
            You can check out my works here.
          </h1>
          <img className="down-arrow" src={downArrow} alt="down-arrow-icon"/>
        </div> */}
      </section>
    );
}

export default Intro;