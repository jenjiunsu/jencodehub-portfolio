import React, { useRef, useEffect } from 'react';
import { useGLTF, useAnimations, useVideoTexture } from '@react-three/drei';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const DemoComputer = (props) => {
    const group = useRef();
    const { nodes, materials, animations } = useGLTF('/models/Imac.glb');
    const { actions } = useAnimations(animations, group);

    const videoTexture = useVideoTexture(
        props.texture || 'textures/project/project1.mp4',
        {
            crossOrigin: 'Anonymous',
            loop: true,
            muted: true,
            autoplay: true,
        }
    );

    useEffect(() => {
        if (videoTexture) {
            videoTexture.flipY = true;
            videoTexture.needsUpdate = true;
        }
    }, [videoTexture]);

    useGSAP(() => {
        gsap.from(group.current.rotation, {
            y: Math.PI / 2,
            duration: 1,
            ease: 'power3.out'
        });
    });

    return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0 ]} scale={0.006}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            position={[-15.25, 2820, -165]}
            rotation={[0.043 + Math.PI / 60, Math.PI, 0]}
            scale={[6300, 3700, 1]}
          >
            <planeGeometry attach="geometry" args={[1, 1]} />
            <meshBasicMaterial attach="material" map={videoTexture} />
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Display_iMac_0.geometry}
            material={materials.iMac}
            position={[0, 2500, 70]}
            rotation={[-1.484, 0, -Math.PI]}
            scale={3500}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Base_Base_0.geometry}
            material={materials.Base}
            position={[2, -500, 90]}
            rotation={[-Math.PI / 2, 0, -Math.PI]}
            scale={3500}
          />

        </group>
      </group>
    </group>
    )
}

useGLTF.preload('/models/Imac.glb')

export default DemoComputer