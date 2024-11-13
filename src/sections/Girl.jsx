import { PerspectiveCamera } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import SwitchGirl from "../components/SwitchGirl";
import { Suspense, useState, useEffect } from "react";
import CanvasLoader from "../components/CanvasLoader";
// import { Leva, useControls } from "leva";
import { useMediaQuery } from 'react-responsive';
import { calculateSizes } from "../constants";
import Rocket from "../components/Rocket";
import Cube from "../components/Cube";
import GirlCamera from "../components/GirlCamera";

const Girl = () => {
    const [canvasSize, setCanvasSize] = useState({ width: window.innerWidth, height: window.innerHeight });

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
        <section className='min-h-screen w-full flex-col relative'>
            {/* <Leva /> */}
            <div className='w-full mx-auto flex flex-col sm:mt-30 mt-20 lg:ml-60 c-space gap-3 letter-spacing-wide'>
                <p className='sm:text-2xl text-1xl font-medium text-gray_gradient tracking-wide'>Hello, I’m Jen Jiun!</p>
                <p className='girl_tag text-2xl sm:text-3xl md:text-5xl font-medium text-white text-center md:text-left tracking-wide'>
                    Crafting Code,<br />
                    Turning Ideas into <br /> Interactive Experiences
                </p>
                <button className="custom-button text-white text-base sm:text-lg md:text-xl lg:text-2xl tracking-wide sm:tracking-normal md:tracking-wide lg:tracking-wider">
                    Let’s work together!
                </button>
            </div>

            <div className="w-full h-full absolute inset-0 flex flex-col sm:flex-row justify-center items-center">
                <div className='flex justify-center items-center'>
                    <Canvas style={{ width: canvasSize.width, height: canvasSize.height }}>
                        <Suspense fallback={<CanvasLoader />}>
                            <PerspectiveCamera 
                                makeDefault 
                                position={isMobile ? [2, 3, 35] : isTablet ? [0, -1.5, 40] : [0, -2, 45]} 
                            />

                            <GirlCamera isMobile={isMobile}>
                                <SwitchGirl 
                                    position={isMobile ? [4, 9, 10] : isTablet ? [9, 7.5, 10] : [9.1, 6.5, 10]}
                                    rotation={[0.2, -1.8, -0.2]}
                                    scale={isMobile ? [5.8, 5.8, 5.8] : isTablet ? [9, 9, 9] : [12, 12, 12]}
                                />
                            </GirlCamera>
                            
                            <Rocket 
                                position={isMobile ? [1, 10, 10] : isTablet ? [3, 11, 10] : [3, 11, 10]}
                                rotation={[-10, Math.PI / -1.5, -10]}
                                scale={isMobile ? [1.45, 1.45, 1.45] : isTablet ? [1.95, 1.95, 1.95] : [2.85, 2.75, 2.75]}
                            />
                            <Cube 
                                position={isMobile ? [8, 7, 8.5] : isTablet ? [12.5, 3.5, 8.5] : [19.1, 1.3, 0]}
                                scale={isMobile ? [0.45, 0.45, 0.45] : isTablet ? [0.6, 0.6, 0.6] : [0.85, 0.75, 0.75]}
                            />
                                <ambientLight intensity={3.5} />
                                <directionalLight position={[15, 30, 10]} intensity={0.5} />
                        </Suspense>
                    </Canvas>
                </div>
            </div>
        </section>
    )
}

export default Girl
