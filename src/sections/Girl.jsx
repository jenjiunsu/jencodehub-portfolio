import { PerspectiveCamera } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import SwitchGirl from "../components/SwitchGirl";
import { Suspense, useState, useEffect } from "react";
import CanvasLoader from "../components/CanvasLoader";
import { Leva} from "leva";
import { useMediaQuery } from 'react-responsive';
import { calculateSizes } from "../constants";
import Rocket from "../components/Rocket";
import Cube from "../components/Cube";
import GirlCamera from "../components/GirlCamera";
import Button from "../components/Button";

const Girl = () => {
    const [setCanvasSize] = useState({ width: window.innerWidth, height: window.innerHeight });

    useEffect(() => {
        const handleResize = () => {
            setCanvasSize({ width: window.innerWidth, height: window.innerHeight });
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // const x = useControls('SwitchGirl', {
    //     positionX: {
    //         value: 2.5,
    //         min: -10,
    //         max: 15,
    //     },
    //     positionY: {
    //         value: 2.5,
    //         min: -10,
    //         max: 15,
    //     },
    //     positionZ: {
    //         value: 2.5,
    //         min: -10,
    //         max: 15,
    //     },
    //     rotationX: {
    //         value: 0,
    //         min: -10,
    //         max: 10,
    //     },
    //     rotationY: {
    //         value: 0,
    //         min: -10,
    //         max: 10,
    //     },
    //     rotationZ: {
    //         value: 0,
    //         min: -10,
    //         max: 10,
    //     },
    //     scale: {
    //         value: 1,
    //         min: 0.1,
    //         max: 15,
    //     }
    // })
    const isSmall = useMediaQuery({ maxWidth: 440});
    const isMobile = useMediaQuery({ maxWidth: 768});
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024});

    const sizes = calculateSizes(isSmall, isMobile, isTablet);

    return (
        <section className='min-h-[40vh] max-h-screen flex-col relative' id='home'>
            {/* <Leva /> */}
            <div className='mx-auto flex flex-col sm:mt-[8rem] mt-[8rem] c-space gap-3 letter-spacing-wide'>
                <p className='sm:text-2xl text-1xl font-medium text-gray_gradient tracking-wide'>Hello, I’m Jen Jiun!</p>
                <p className='girl_tag text-2xl sm:text-3xl md:text-5xl font-medium text-white text-center md:text-left tracking-wide'>
                    Crafting Code,<br />
                    Turning Ideas into <br /> Interactive Experiences
                </p>

                <div className="custom-button text-white">
                    <a href="#about">
                        <Button name="Let’s work together!" containerClass="sm:tracking-normal md:tracking-wide lg:tracking-wider"/>
                    </a>
                </div>
            </div>

            <div className="w-full h-full absolute inset-0">
                <Canvas className='w-full h-full'>
                    <Suspense fallback={<CanvasLoader />}>
                        {/* To hide controller */}
                        <Leva hidden />
                        <PerspectiveCamera 
                            makeDefault 
                            position={isMobile ? [2, 3, 35] : isTablet ? [0, -1.5, 40] : [0, -2, 45]} 
                        />

                        <GirlCamera isMobile={isMobile}>
                            <SwitchGirl 
                                position={isMobile ? [11.5, 4, 8] : isTablet ? [19, 0, 10] : [17, -0.5, 10]}
                                rotation={[0, -2, 0]}
                                scale={isMobile ? [10, 10, 10] : isTablet ? [18, 18, 18] : [23, 23, 23]}
                            />
                        </GirlCamera>
                        
                        <Rocket 
                            position={isMobile ? [6, 7, 5] : isTablet ? [13, 7, 8.5] : [5, 7, 5]}
                            rotation={[-10, Math.PI / -1.5, -10]}
                            scale={isMobile ? [2, 2, 2] : isTablet ? [3, 3, 3] : [4, 4, 4]}
                        />
                        <Cube 
                            position={isMobile ? [22, -0.2, -5] : isTablet ? [28, -10, 8] : [47, -10, 0]}
                            scale={isMobile ? [0.5, 0.5, 0.5] : isTablet ? [1, 1, 1] : [1.5, 1.5, 1.5]}
                        />
                        <ambientLight intensity={3.5} />
                        <directionalLight position={[15, 30, 10]} intensity={0.5} />
                    </Suspense>
                </Canvas>
            </div>
        </section>
    )
}

export default Girl
