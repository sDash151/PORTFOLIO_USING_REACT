import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import useThemeToggle from '../hooks/useThemeToggle';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  useThemeToggle();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Close mobile menu when clicking on a link
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };
  
  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);
  
  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 992 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileMenuOpen]);

  return (
    <header>
      <div className="container">
        <nav>
          <Link to="home" spy={true} smooth={true} offset={-70} duration={500} className="logo">
            Sourav<span>.</span>
          </Link>
          
          {/* Desktop Navigation */}
          <ul className="nav-links">
            <li>
              <Link to="home" spy={true} smooth={true} offset={-70} duration={500}>
                Home
              </Link>
            </li>
            <li>
              <Link to="about" spy={true} smooth={true} offset={-70} duration={500}>
                About
              </Link>
            </li>
            <li>
              <Link to="resume" spy={true} smooth={true} offset={-70} duration={500}>
                Resume
              </Link>
            </li>
            <li>
              <Link to="projects" spy={true} smooth={true} offset={-70} duration={500}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="contact" spy={true} smooth={true} offset={-70} duration={500}>
                Contact
              </Link>
            </li>
          </ul>
          
          <div className="nav-right">
            <ThemeToggle />
            
            {/* Mobile Menu Toggle Button */}
            <div 
              className={`menu-toggle ${mobileMenuOpen ? 'active' : ''}`} 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </nav>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div className={`mobile-nav ${mobileMenuOpen ? 'active' : ''}`}>
        <ul className="mobile-nav-links">
          <li>
            <Link to="home" spy={true} smooth={true} offset={-70} duration={500} onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" spy={true} smooth={true} offset={-70} duration={500} onClick={closeMobileMenu}>
              About
            </Link>
          </li>
          <li>
            <Link to="resume" spy={true} smooth={true} offset={-70} duration={500} onClick={closeMobileMenu}>
              Resume
            </Link>
          </li>
          <li>
            <Link to="projects" spy={true} smooth={true} offset={-70} duration={500} onClick={closeMobileMenu}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="contact" spy={true} smooth={true} offset={-70} duration={500} onClick={closeMobileMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
      
      {/* Overlay when mobile menu is open */}
      <div 
        className={`overlay ${mobileMenuOpen ? 'active' : ''}`} 
        onClick={closeMobileMenu}
      ></div>
    </header>
  );
};

export default Header;