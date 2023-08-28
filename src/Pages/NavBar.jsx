import React, { useState } from "react";

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <div>
            <nav id="desktop-nav">
                <div className="logo">Harsh</div>
                <div>
                    <ul className="nav-links">
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li>
                            <a href="#experience">Experience</a>
                        </li>
                        <li>
                            <a href="#projects">Projects</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <nav id="hamburger-nav">
                <div className="logo">Harsh</div>
                <div className={`hamburger-menu ${isMenuOpen ? "open" : ""}`}>
                    <div className="hamburger-icon" onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="menu-links">
                        <li>
                            <a href="#about" onClick={closeMenu}>
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#experience" onClick={closeMenu}>
                                Experience
                            </a>
                        </li>
                        <li>
                            <a href="#projects" onClick={closeMenu}>
                                Projects
                            </a>
                        </li>
                        <li>
                            <a href="#contact" onClick={closeMenu}>
                                Contact
                            </a>
                        </li>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;
