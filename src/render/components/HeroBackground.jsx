import { Canvas } from "@react-three/fiber";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";


const meshColor = { 
    red: "#ffffff"
}

function MyRotatingBox() {
    const meshRef = useRef();
    const [meshColor, setMeshColor] = useState("#45CB85");
    
    useFrame(({ clock }) => {
        const time = clock.elapsedTime;
    });

    function setTouchPosStart(event){
        console.log(event.screenX);
    }

    function setTouchPosEnd(event){
        console.log(event.screenY);
    }

    const box = document.getElementById("box");
    if(box != null){
        box.addEventListener("touchStart", setTouchPosStart);
        box.addEventListener("touchEnd", setTouchPosEnd);
    }

    return (
        <mesh ref={meshRef} position={[1,2,-2]}>
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial color={meshColor} />
        </mesh>
    );
}

function HeroBackground (){
    return (
        <div className="hero">
            
        </div>
    );
}

export default HeroBackground;