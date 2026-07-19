import React, { useState, useEffect } from 'react';
import { navLinks, personalInfo } from '../../data/data';
import ThemeToggle from '../ui/ThemeToggle';
import { Download, Menu, X } from 'lucide-react';
import { assets } from '../../assets/assets';

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
      if (window.innerWidth > 992) {
        setIsMobileOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileOpen]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsMobileOpen(false);
    }
  };

  const handleDownloadCV = () => {
    const cvUrl = assets.resume;
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = `${personalInfo.firstName}_${personalInfo.lastName}_CV.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-inner">
          {/* Logo */}
          <div className="navbar-logo" onClick={() => scrollToSection('home')}>
            <span className="logo-text">{personalInfo.firstName}</span>
            <span className="logo-dot">.</span>
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
                onKeyPress={(e) => e.key === 'Enter' && scrollToSection(link.id)}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="navbar-actions">
            <ThemeToggle />
            <button 
              className="btn-download-cv" 
              onClick={handleDownloadCV}
              aria-label="Download CV"
            >
              <Download size={18} />
              <span>Download CV</span>
            </button>
            <button
              className={`hamburger ${isMobileOpen ? 'open' : ''}`}
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMobileOpen}
            >
              {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <div className={`mobile-drawer-overlay ${isMobileOpen ? 'active' : ''}`} onClick={() => setIsMobileOpen(false)}></div>
      <div className={`mobile-drawer ${isMobileOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-header">
          <div className="mobile-drawer-logo">
            <span>{personalInfo.firstName}</span>
            <span className="logo-dot">.</span>
          </div>
          <button 
            className="mobile-drawer-close"
            onClick={() => setIsMobileOpen(false)}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <div className="mobile-drawer-body">
          {navLinks.map((link) => (
            <a
              key={link.id}
              className={`mobile-nav-link ${activeSection === link.id ? 'active' : ''}`}
              onClick={() => scrollToSection(link.id)}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => e.key === 'Enter' && scrollToSection(link.id)}
            >
              <span className="mobile-nav-link-number">0{navLinks.indexOf(link) + 1}</span>
              <span className="mobile-nav-link-text">{link.label}</span>
              <span className="mobile-nav-link-line"></span>
            </a>
          ))}
        </div>

        <div className="mobile-drawer-footer">
          <button 
            className="mobile-download-cv" 
            onClick={handleDownloadCV}
          >
            <Download size={18} />
            <span>Download CV</span>
          </button>
          <div className="mobile-drawer-social">
            <a href="#" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;