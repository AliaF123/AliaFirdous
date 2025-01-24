import React, { useState } from "react";
import "../styles/navbar.scss";

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  // Close menu when overlay is clicked
  const closeMenu = () => {
    setMenuActive(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="container">
          {/* Logo */}
          <div className="logo" onClick={() => alert("Welcome to my journey...!")}>
            MY PORTFOLIO
          </div>

          {/* Navigation Links */}
          <ul className="nav-links">
            <li><a href="#hero">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

          {/* Hamburger Menu */}
          <div
            className={`hamburger ${menuActive ? "active" : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>

        {/* Mobile Navigation Links */}
        <ul className={`nav-links-mobile ${menuActive ? "active" : ""}`}>
          <li><a href="#hero" onClick={closeMenu}>About</a></li>
          <li><a href="#experience" onClick={closeMenu}>Experience</a></li>
          <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
          <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
        </ul>

        {/* Overlay */}
        <div
          className={`overlay ${menuActive ? "active" : ""}`}
          onClick={closeMenu}
        ></div>
      </nav>
    </>
  );
};

export default Navbar;
