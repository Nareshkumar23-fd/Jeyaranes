import React from 'react';
import { personalInfo, navLinks, socialLinks } from '../../data/data';
import ScrollReveal from '../ui/ScrollReveal';
import { Link, Mail, Phone, Globe } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      
    }
  };

  const socialIcons = {
    linkedin: <Link size={18} />,
    email: <Mail size={18} />,
    phone: <Phone size={18} />,
  };

  return (
    <footer className="footer">
      <div className="container">
        <ScrollReveal>
          <div className="footer-grid">
            {/* Brand */}
            <div className="footer-brand">
              <div className="navbar-logo">
                <span>{personalInfo.firstName}</span>
              </div>
              <p>
                {personalInfo.title} based in {personalInfo.city}.
                Passionate about accounting, finance, and contributing to
                organizational growth.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="footer-title">Quick Links</h4>
              <div className="footer-links">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    className="footer-link"
                    onClick={() => scrollToSection(link.id)}
                    role="button"
                    tabIndex={0}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="footer-title">Contact</h4>
              <div className="footer-links">
                <span className="footer-link" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Mail size={14} /> {personalInfo.email}
                </span>
                <span className="footer-link" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Phone size={14} /> {personalInfo.phone}
                </span>
                <span className="footer-link" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Globe size={14} /> {personalInfo.city}
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <div className="footer-socials">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                className="footer-social-link"
                target="_blank"
                rel="noopener noreferrer"
                title={social.name}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                {socialIcons[social.icon] || <Globe size={18} />}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;