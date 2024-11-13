import { useGLTF } from '@react-three/drei'
import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Rocket = (props) =>{
    const roketRef = useRef()
    const { scene } = useGLTF('/models/Rocket.glb')

    useGSAP(() => {
        gsap.to(roketRef.current.position, {
            y: roketRef.current.position.y + 0.5,
            duration: 1.5,
            repeat: -1,
            yoyo: true,
        })
    })

    return (
        <mesh {...props} ref={roketRef}>
            <primitive object={scene} />
        </mesh>
    )
}

useGLTF.preload('/models/Rocket.glb')

export default Rocket;