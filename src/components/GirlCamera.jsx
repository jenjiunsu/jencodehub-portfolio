import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";

const GirlCamera = ({ children, isMobile }) => {
    const groupRef = useRef();
    
    useFrame((state, delta) => {
        easing.damp3(state.camera.position, [0, -2, 40], 0.25, delta);
        
        if(!isMobile){
            easing.dampE(groupRef.current.rotation, [-state.pointer.y / 10, -state.pointer.x / 18, 0], 0.25, delta);
            easing.damp3(state.camera.position, [0, 0.8, 40], 0.25, delta);

        }
    })


    return (
    <group ref={groupRef}>
        { children }
    </group>
    )
}

export default GirlCamera
