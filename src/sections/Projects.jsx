import React, { useState, Suspense } from "react";
import { myProjects } from "../constants"
import { Canvas, useThree } from "@react-three/fiber";
import { Center,OrbitControls } from "@react-three/drei";
import CanvasLoader from "../components/CanvasLoader";
import DemoComputer from "../components/DemoComputer";


const projectCount = myProjects.length;

const Projects = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNavigation = (direction) => {
        if (direction === 'next') {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % myProjects.length);
        } else if (direction === 'previous') {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + myProjects.length) % myProjects.length);
        }
    };

    const currentProject = myProjects[currentIndex];

    const DynamicScaleGroup = ({ children }) => {
        const { size } = useThree();
        const baseWidth = 1500;
        const baseHeight = 1200;
        const scale = Math.min(size.width / baseWidth, size.height / baseHeight) * 0.4;

        const position = [0, -0.8, 0];
        
        const rotation = [0, Math.PI + Math.PI / 2, 0];

        return (
            <group scale={[scale, scale, scale]} position={position} rotation={rotation}>
                {children}
            </group>
        );
    };

    return (
        <section className="c-space my-20">
            <p className="head-text">My Project</p>

            <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full relative">
                <img src={currentProject.spotlight} alt="spotlight" className="absolute top-0 right-0 w-full h-96 object-cover rounded-xl" />
                
                <div className=" custom-border flex flex-col gap-5 sm:p-10 py-10 px-5 shadow-2xl relative z-10">
                    <div className="p-3 w-fit rounded-lg">
                        <img src={currentProject.logo} alt="logo" className="w-auto h-auto max-w-full max-h-15 shadow-sm" />
                    </div>

                    <div className="flex flex-col gap-5 text-white my-5">
                        <p className="text-white text-2xl font-semibold animatedText">
                        {currentProject.title}
                        </p>
                        <p className="animatedText">{currentProject.desc}</p>
                        <p className="animatedText">{currentProject.subdesc}</p>
                    </div>
                    <div className="flex items-center justify-between flex-wrap gap-5">
                        <div className="flex items-center gap-3">
                        {currentProject.tags.map((tag, index) => (
                            <div key={index} className="tech-logo">
                                <img src={tag.path} alt={tag.name} />
                            </div>
                        ))}
                        </div>
                        {currentProject.title !== 'Coming Soon...' && (
                            <a 
                                className="flex items-center gap-2 cursor-pointer text-white font-bold tracking-wider"
                                href={currentProject.href}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <p>Check Live Site</p>
                                <img src="assets/Arrow.png" alt="Arrow" className="w-8 h-8" />
                            </a>
                        )}
                    </div>
                    <div className="flex justify-between items-center mt-7">
                        <button className="arrow-btn" onClick={() => handleNavigation('previous')}>
                            <img src="/assets/left-arrow.png" alt="left arrow" />
                        </button>
                        <button className="arrow-btn" onClick={() => handleNavigation('next')}>
                            <img src="/assets/right-arrow.png" alt="right arrow" className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                <div className="custom-border border-black-300 bg-black-200 rounded-lg h-96 md:h-full">
                    <Canvas style={{ width: '100%', height: '100%' }}>
                        <ambientLight intensity={11} />
                        <directionalLight position={[10, 10, 5]} intensity={2} />
                        <pointLight position={[-10, -10, -10]} intensity={1.5} />
                        <Center>
                            <Suspense fallback={<CanvasLoader />}>
                                <DynamicScaleGroup>
                                    <DemoComputer texture={currentProject.texture} />
                                </DynamicScaleGroup>
                            </Suspense>
                        </Center>
                        <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
                    </Canvas>
                </div>
            </div>
        </section>
    )
    }

export default Projects
