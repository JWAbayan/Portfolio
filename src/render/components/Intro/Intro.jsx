
import './intro-style.css'
import { Canvas } from '@react-three/fiber';
import { useEffect, useState, useRef } from 'react';
import Earth from './Earth';

import { OrbitControls, SoftShadows } from '@react-three/drei';
import useInterval from '../../../hooks/useInterval';
import useIntersectionObserver from '../../../hooks/useIntersectionObserver';

const passions = [
  "front-end development",
  "recreational programming",
  "game development",
  "3D modelling"
]


const Fade = {
  in: "text-fade-in",
  out: "text-fade-out"
}


function Intro(){

    const canvasRef = useRef();
    const [passionIndex, setPassionIndex] = useState(0);
    const [fade, setFade] = useState(Fade.in)
    const fadeDuration = 3000;

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    }

    const observedHeaderRef = useIntersectionObserver({
      callback: (entries) => {animateOnView(entries, "slide-in-animation")},
      options: observerOptions,
    });

    const observedCanvasRef = useIntersectionObserver({
      callback: (entries) => {animateOnView(entries, "fade-in-animation")},
      options: observerOptions,
    });

    function animateOnView(entries, animationClass){
      if(!entries) return;
      
      entries.forEach(entry => {
          entry.target.classList.add(animationClass)
      })
    }

    useInterval(()=>{
       setFade(Fade.out);

       setTimeout(()=>{
        setPassionIndex(passionIndex=>(passionIndex + 1) % passions.length);
        setFade(Fade.in);
       }, 1000)
    }, fadeDuration)

    return(
        <section className="intro-section">
          <div className="hero-content">
            <h1 ref={observedHeaderRef} className="hero-header">
                Hey, I’m <span style={{color:"#45CB85"}}>John Abayan</span>.
                <br/>
                A developer with passion for 
                <br/>

                <span style={{color:"#45CB85"}} className={`passion-text ${fade}`}>
                  {
                    passions[passionIndex]
                  }
                </span>
            </h1>
          </div>
          <div ref={observedCanvasRef} className="hero-canvas">
            <Canvas ref={canvasRef} camera={{near: 0.1, far: 1000, position: [0, 0, 5], ...cameraCustomParams }} >
              <SoftShadows/>
              <ambientLight intensity={1} color={"fffffff"}/>
              <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} color={"#ffffff"}/>
              <Earth position={[0, -0.5, 0]} scale={1.5} />
              <OrbitControls enableZoom={false} enablePan={false}/> 
            </Canvas>
          </div>
      </section>
    );
}

export default Intro;