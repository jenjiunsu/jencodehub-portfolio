import { useState, useEffect } from 'react';

const About = () => {
    const [hasCopied, setHasCopied] = useState(false);
    const [text, setText] = useState('');
    const [index, setIndex] = useState(0);
    const message = "Hello, World!";
    const typingSpeed = 200; 
    const pauseDuration = 2000; 

    useEffect(() => {
        if (index < message.length) {
            const timeout = setTimeout(() => {
                setText((prev) => prev + message[index]);
                setIndex((prev) => prev + 1);
            }, typingSpeed);

            return () => clearTimeout(timeout);
        } else {
            const timeout = setTimeout(() => {
                setText('');
                setIndex(0);
            }, pauseDuration);

            return () => clearTimeout(timeout);
        }
    }, [index]);

    const handleCopy = () => {
        navigator.clipboard.writeText('jenjingsu860630@gmail.com')
            .then(() => setHasCopied(true));
    };

    return (
        <section className="px-25 my-20" id="about">
            <div className="h=full grid xl:grid-cols-3 xl:grid-rows-2 md:grid-cols-2 grid-cols-1 gap-3 h-full about-inner">
                <div className="xl:col-span-1 xl:row-span-1 custom-border">
                    <div className="about-top-bar">
                        <span className="dot dot-1"></span>
                        <span className="dot dot-2"></span>
                        <span className="dot dot-3"></span>
                    </div>
                    <div className="grid-container">
                        <img src="assets/photo-1.png" alt="photo-1" className="w-full sm:h-[200px] h-fit object-contain" />
                        <div className="space-y-2">
                            <p className="grid-subtext text-center">Contact me</p>
                            <div className="copy-container" onClick={handleCopy}>
                                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">jenjingsu860630@gmail.com</p>
                            </div>
                        </div>
                        <div>
                            <p className="grid-headtext">Hi, I’m Jen Jiun Su</p>
                            <p className="grid-subtext">
                                With a degree in Information and Communication and five years in the service industry, I have honed my skills in both fronted and backend dev, creating dynamic and responsive websites.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-span-2 xl:row-span-2 custom-border">
                    <div className="grid-container">
                        <div className="hexagonrounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                        </div>
                        <div>
                            <p className="grid-headtext">Tech Stack</p>
                            <p className="grid-subtext">I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable applications.</p>
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-1 xl:row-span-1 custom-border">
                    <div className="grid-container">
                    <img src="assets/grid3.png" alt="grid-" className="w-full sm:h-[276px] h-fit object-contain" />
                        <div className="text-input-field">
                            <span className="typing-animation">{text}</span>
                        </div>
                        <div>
                            <p className="grid-headtext">My Passion for Coding</p>
                            <p className="grid-subtext">
                                I’m driven by the challenge of bringing ideas to life through code. I’m always eager to explore new technologies and elevate my skills.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
