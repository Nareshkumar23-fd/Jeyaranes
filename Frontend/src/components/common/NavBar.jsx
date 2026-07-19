import React, { useState, useEffect } from 'react';
import { navLinks, personalInfo } from '../../data/data';
import ThemeToggle from '../ui/ThemeToggle';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Determine active section
      const sections = navLinks.map((link) => document.getElementById(link.id));
      const scrollPos = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsMobileOpen(false);
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner">
        {/* Logo */}
        <div className="navbar-logo" onClick={() => scrollToSection('home')}>
          <span>{personalInfo.firstName}</span>
        </div>

        {/* Desktop Nav Links */}
        <div className="navbar-links">
          {navLinks.map((link) => (
            <a
              key={link.id}
              className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
              onClick={() => scrollToSection(link.id)}
              role="button"
              tabIndex={0}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="navbar-actions">
          <ThemeToggle />
          <button
            className={`hamburger ${isMobileOpen ? 'open' : ''}`}
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileOpen && (
        <div 
          className="mobile-menu-overlay" 
          onClick={() => setIsMobileOpen(false)}
          aria-hidden="true"
        ></div>
      )}

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <a
            key={link.id}
            className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
            onClick={() => scrollToSection(link.id)}
            role="button"
            tabIndex={0}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;