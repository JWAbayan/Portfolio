import { useState } from "react";
import './navbar-styles.css'

import personalLogo from '../../assets/img/personal-logo_1.svg'
import expandMenuFilled from '../../assets/img/menu-collapse-filled.svg'
import collapseMenuFilled from '../../assets/img/angle-left-filled.svg'
import nightModeFilled from '../../assets/img/night-filled_1.svg'

const navlinks = [
  {
    id:"projects",
    title: "PROJECTS"
  },
  {
    id:"extras",
    title: "EXTRAS"
  },
  {
    id:"about",
    title: "ABOUT"
  },
]

function Navbar(){

    const [menuExpanded, expandMenu] = useState(true);

    function navigateToSection(link){
      
    }

    return(
        <div className="nav-bar">
        <img className="personal-logo" src={personalLogo} alt="Personal Logo"/>
        <div className="nav-actions">
            { 
              menuExpanded ?
                <div className="nav-links">
                  {
                    navlinks.map(link => {
                      return(
                        <button key={link.id} onClick={link => navigateToSection(link)}>
                          <h3 id={link.id} className="nav-links-text">{link.title}</h3>
                        </button>
                      );
                    })   
                  }
                </div> 
              : null
            }
          <button className="action-button" onClick={()=>{expandMenu(!menuExpanded)}}>
            {
              menuExpanded ? 
              <img src={collapseMenuFilled} alt="Personal Logo"/>:  
              <img src={expandMenuFilled} alt="Personal Logo"/> 
            }
          </button>
          <button className="action-button">
            <img src={nightModeFilled} alt="Personal Logo"/>
          </button>
        </div>
      </div>
    );
}

export default Navbar;


