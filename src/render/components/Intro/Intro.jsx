
import './intro-style.css'
import { Canvas } from '@react-three/fiber';
import { useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import Earth from './Earth';
import { CameraControls, OrbitControls } from '@react-three/drei';
import { OrthographicCamera } from '@react-three/drei';


function Intro(){
    return(
        <section className="intro-section">
          <div className="hero-content">
            <h1 className="hero-header">
                Hey, I’m <span style={{color:"#45CB85"}}>John Abayan</span>.
                <br/>
                A developer with passion for 
                <br/>

                <span style={{color:"#45CB85"}}>
                front-end development
                </span>
            </h1>
          </div>
          <Canvas camera={OrthographicCamera} >
            <ambientLight intensity={Math.PI / 2} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
            <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
            <Earth position={[0, -0.5, 0]} scale={1.4} />
            <OrbitControls enableZoom={false} enablePan={false}/> 
          </Canvas>
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