import { useState } from 'react';

import { navLinks } from '../constants/index.jsx';

const NavItems = ({ onClick }) => (
    <ul className="nav-ul">
        {navLinks.map((item) => (
            <li 
                key={item.id} 
                className="nav-li cursor-pointer" 
                onClick={(e) => {
                    e.preventDefault();
                    const targetElement = document.querySelector(item.href);
                    if (targetElement) {
                        targetElement.scrollIntoView({ behavior: 'smooth' });
                    }
                    onClick();
                }}
            >
                <a
                    href={item.href}
                    className="nav-li_a block w-full h-full"
                >
                    {item.name}
                </a>
            </li>
        ))}
    </ul>
);

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleNavItemClick = () => {
        setIsOpen(false);
    };

    return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
        <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
            <a href="/" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">
            Jen Jiun Su
            </a>

            <button
            onClick={toggleMenu}
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
            aria-label="Toggle menu">
            <img src={isOpen ? 'assets/close.svg' : 'assets/menu.svg'} alt="toggle" className="w-6 h-6" />
            </button>

            <nav className={`hidden sm:flex`}>
            <NavItems onClick={handleNavItemClick} />
            </nav>
        </div>
        </div>

        <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <nav className="p-5">
            <NavItems onClick={handleNavItemClick} />
        </nav>
        </div>
    </header>
    );
};

export default Navbar;
