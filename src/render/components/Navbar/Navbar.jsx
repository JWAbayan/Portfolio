import { useEffect, useState } from "react";
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


function ToggleableMenu({opened, openMenu}){

  useEffect(()=>{
    document.body.style.overflow = opened ? "hidden" : ""   

    return (()=>{document.body.style.overflow = ""})
  },[]) 

  return(
    <div className="toggleable-menu">
      <div className="menu-header">
        <img className="menu-personal-logo" src={personalLogo} alt="Personal Logo"/>
        <button className="close-menu-button" onClick={()=>openMenu(false)}>
          <img src={collapseMenuFilled} alt="Personal Logo"/>
        </button>
      </div>
      <div className="menu-links">
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
    </div>
  );
}

function Navbar(){

    const [menuOpened, openMenu] = useState(false);

    function navigateToSection(link){
      
    }

    return(
      <>
        <div className="nav-bar">
          <img className="personal-logo" src={personalLogo} alt="Personal Logo"/>
          <div className="nav-actions">
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
          <button className="night-mode-button">
            <img src={nightModeFilled} alt="Personal Logo"/>
          </button>
          <button className="open-menu-button" onClick={()=>{openMenu(!menuOpened)}}>
            <img src={expandMenuFilled} alt="Personal Logo"/>
          </button>
          </div>
        </div>
        {
          menuOpened && <ToggleableMenu opened={menuOpened} openMenu={openMenu}/>
        }
      </>
    );
}

export default Navbar;


