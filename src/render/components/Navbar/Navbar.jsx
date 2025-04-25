import {useEffect, useRef, useState } from "react";
import './navbar-styles.css'
import useIntersectionObserver from "../../../hooks/useIntersectionObserver";

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
    id:"experiments",
    title: "EXPERIMENTS"
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


function NavButton ({index, id, title}){

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
  }

  const buttonRef = useIntersectionObserver({
      callback: (entries) => {animateOnView(entries)} ,
      options: observerOptions
  })

  function animateOnView(entries){
    if(!entries) return;
    
    entries.forEach(entry => {
        entry.target.classList.add("slide-in-"+index)
    })
  }

  function scrollToSection(){
    document.getElementById(id).scrollIntoView({behavior:"smooth"});
  }

  return(
    <button ref={buttonRef}u key={id} className="nav-button" onClick={scrollToSection}>
      <h3 className="nav-links-text">{title}</h3>
    </button>
  );
}

function Navbar(){
  const [menuOpened, openMenu] = useState(false);
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
  }

  const logoObserverRef = useIntersectionObserver({
    callback: (entries) => { animateOnView(entries) },
    options: observerOptions
  })

  function animateOnView(entries){
    if(!entries) return;
    entries.forEach(entry => {
      entry.target.classList.add("slide-in-0");
    })
  }

  return(
    <>
      <div className="nav-bar">
        <img ref={logoObserverRef} className="personal-logo" src={personalLogo} alt="Personal Logo"/>
        <div className="nav-actions">
        <div className="nav-links">
          {
            navlinks.map((link, index) => {
              return(
                <NavButton index={index} id={link.id} title={link.title}/>
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


