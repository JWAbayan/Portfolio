
import './intro-style.css'
import { Canvas } from '@react-three/fiber';
import { useEffect, useState, useRef } from 'react';
import Earth from './Earth';

import { OrbitControls, SoftShadows } from '@react-three/drei';
import useInterval from '../../../hooks/useInterval';

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
    const [cameraCustomParams, setCameraCustomParams] = useState({})
    const [fade, setFade] = useState(Fade.in)
    const fadeDuration = 3000;
    
    const camereFov = 50;
    const planeAspectRatio = 16 / 9;

    // useEffect(()=>{
    //   window.addEventListener("resize",()=>{
    //     let customParams = {
    //       aspect: 0,
    //       fov: 0,
    //     }

    //     customParams.aspect = window.innerWidth / window.innerHeight;
	
    //     if (customParams.aspect > planeAspectRatio) {
    //       // window too large
    //       const cameraHeight = Math.tan(MathUtils.degToRad(camereFov / 2));
    //       const ratio = customParams.aspect / planeAspectRatio;
    //       const newCameraHeight = cameraHeight / ratio;
    //       customParams.fov = MathUtils.radToDeg(Math.atan(newCameraHeight)) * 2;
    //     } else {
    //       // window too narrow
    //       customParams.fov = camereFov;
    //     }

    //     setCameraCustomParams(customParams);
    //   })
    // },[])

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
            <h1 className="hero-header">
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
          <div className="hero-canvas">
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