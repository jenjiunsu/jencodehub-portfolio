import { useState } from "react"
import { navLinks } from "../constants";

const NavItems = () => {
    return (
        <ul className="nav-ul">
            {navLinks.map(({ id, href, name}) => (
                <li key={id} className="nav-li">
                    <a href={href} className="nav-li_a" onClick={() => {}}>
                        {name}
                    </a>
                </li>
            ))}
        </ul>
    )
}

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(prevIsOpen => !prevIsOpen);

    return (
    <header className="px-24 fixed top-0 left-0 right-0 z-[9999]  bg-black/90">
        <div className="max-w-71 mx-auto">
            <div className="flex justify-between items-center py-5  c-space sm:flex-row">
                <a href="/" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">
                Jen JIun Su
                </a>

                <button onClick={toggleMenu} className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex" aria-label="Toggle menu">
                    <img src={isOpen ? "assets/close.svg" : "assets/menu.svg"} alt="toggle" className="w-6 h-6" />
                </button>

                <nav className="sm:flex hidden">
                    <NavItems />
                </nav>
            </div>
        </div>

        <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
            <nav>
                <NavItems />
            </nav>
        </div>
    </header>
    )
}

export default Navbar
