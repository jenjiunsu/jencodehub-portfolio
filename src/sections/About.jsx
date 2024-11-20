import { useState, useEffect } from 'react';
import { Box } from '../components/AllChange.jsx';
import Button from "../components/Button";

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
    <section className="c-space my-20" id="about">
      <h3 className="head-text">About Me</h3>
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="p-3 grid-container custom-border">
          <img src="assets/photo-1.png" alt="photo-1" className="w-full sm:h-[276 px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Hi, I’m Jen Jiun Su</p>
              <p className="grid-subtext">
              With a degree in Information and Communication and five years in the service industry, I have honed my skills in both fronted and backend dev, creating dynamic and responsive websites.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="p-4 grid-container custom-border">
            <img src="assets/tech.png" alt="tech" className="w-full sm:h-[276px] h-fit object-contain" />
            
            <p className="grid-headtext">Tech Stack</p>
            <p className="grid-subtext">I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable applications.
            </p>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4 relative">
          <div className="grid-container custom-border">
          
            <div className="rounded-3xl w-full sm:h-[276px] h-fit flex justify-center items-center">
              {/* <GlitchAnimation /> */}
            
            <div className="relative z-10">
              <p className="grid-headtext"></p>
              <p className="grid-headtext">This will be a website I created to document my self-learning journey.</p>
              <p className="grid-subtext">You are welcome to leave messages and interact with me on the site!</p>
              <a href="#">
                        <Button name="Welcome to my Blog!" containerClass="sm:tracking-normal md:tracking-wide lg:tracking-wider"/>
                    </a>
            </div>
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container custom-border">
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[316px] h-fit object-contain" />
            <div className="text-input-field">
              <span className="typing-animation">{text}</span>
            </div>

            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
              I’m driven by the challenge of bringing ideas to life through code. 
              I’m always eager to explore new technologies and elevate my skills.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="pl-5 pt-5 flex grid-container custom-border">
              <Box className="absolute inset-0 z-0" />
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">jenjingsu860630@gmail.com</p>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;