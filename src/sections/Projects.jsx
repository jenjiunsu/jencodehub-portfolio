import React, { useState, Suspense } from "react";
import { myProjects } from "../constants"
import { Canvas, useThree } from "@react-three/fiber";
import { Center,OrbitControls } from "@react-three/drei";
import CanvasLoader from "../components/CanvasLoader";
import DemoComputer from "../components/DemoComputer";
import { useMediaQuery } from 'react-responsive';


const projectCount = myProjects.length;

const Projects = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const isSmallScreen = useMediaQuery({ maxWidth: 640 });
    const isSmallOrMedium = useMediaQuery({ maxWidth: 1024 });

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
        const baseWidth = 2050;
        const baseHeight = 1750;
        const scale = Math.min(size.width / baseWidth, size.height / baseHeight) * 0.4;

        const position = [0, -0.8, 0];
        
        const rotation = [0, Math.PI + Math.PI / 2, 0];

        return (
            <group scale={[scale, scale, scale]} position={position} rotation={rotation}>
                {children}
            </group>
        );
    };

    const renderTitle = (title) => {
        return title.split('').map((char, index) => (
            <span key={index} className="letter-animation">{char}</span>
        ));
    };

    return (
        <section className="c-space my-20" id="project">
            <p className="head-text">My Project</p>

            <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full relative">
                <div
                    className="bg-black-100 custom-border flex flex-col relative p-5 sm: px-5 shadow-2xl shadow-black-200 "
                >
                    {currentProject.title !== 'Coming Soon...' && (
                        <div className="p-3 backdrop-filter backdrop-blur-1xl w-fit rounded-lg" style={currentProject.logoStyle}>
                            <img className="w-25 h-20 shadow-sm" src={currentProject.logo} alt="logo" />
                        </div>
                    )}

                    <div 
                        className="flex flex-col gap-5 text-white-600 my-5"
                        style={{ 
                            marginTop: currentProject.title === 'Coming Soon...' 
                                ? (isSmallOrMedium ? '7rem' : '15rem') 
                                : 'initial' 
                        }}
                    >
                        <p className={`text-white text-2xl font-semibold animatedText ${currentProject.title === 'Coming Soon...' ? 'coming-soon-text' : ''}`}>
                            {currentProject.title === 'Coming Soon...' ? renderTitle(currentProject.title) : currentProject.title}
                        </p>

                        {currentProject.title !== 'Coming Soon...' && (
                            <>
                                <p className="animatedText">{currentProject.desc}</p>
                                <p className="animatedText">{currentProject.subdesc}</p>
                            </>
                        )}
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

                <div className="custom-border bg-black-200 rounded-lg h-96 sm:h-full">
                    <Canvas>
                        <ambientLight intensity={10} />
                        <directionalLight position={[15, 15, 5]} intensity={50} />
                        <pointLight position={[-10, -10, -10]} intensity={40} />
                        <Center>
                            <Suspense fallback={<CanvasLoader />}>
                                <DynamicScaleGroup>
                                    <group rotation={[0, -Math.PI / 2, 0]} position={[0, -5, 0]}>
                                        <DemoComputer texture={currentProject.texture} />
                                    </group>
                                </DynamicScaleGroup>
                            </Suspense>
                        </Center>
                        <OrbitControls maxPolarAngle={Math.PI} enableZoom={false} />
                    </Canvas>
                </div>
            </div>
        </section>
    )
    }

export default Projects
