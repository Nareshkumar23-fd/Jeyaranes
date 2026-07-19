import React from 'react';
import { personalInfo, stats } from '../data/data';
import ScrollReveal from '../components/ui/ScrollReveal';
import AnimatedText from '../components/ui/AnimatedText';
import { Hand, Mail, User, Briefcase, Target, Zap } from 'lucide-react';

const Home = () => {
  const typingTexts = [
    personalInfo.title,
    'Finance Enthusiast',
    'B.Com Graduate',
    'Quick Learner',
  ];

  return (
    <section id="home" className="hero">
      {/* Background Decorations */}
      <div className="hero-bg-shapes">
        <div className="hero-shape hero-shape-1"></div>
        <div className="hero-shape hero-shape-2"></div>
        <div className="hero-shape hero-shape-3"></div>
      </div>

      <div className="container">
        <div className="hero-inner" style={{ padding: '0 2rem' }}>
          {/* Left - Content */}
          <div className="hero-content">
            <div className="hero-greeting">
              <span className="wave" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                <Hand size={24} className="text-accent-primary" />
              </span>
              <span>Hello, I'm</span>
            </div>

            <h1 className="hero-name">
              <span className="gradient-text">{personalInfo.firstName}</span>

              {personalInfo.lastName}
            </h1>

            <div className="hero-title-wrapper">
              <span className="hero-title-prefix">I'm a</span>
              <AnimatedText texts={typingTexts} />
            </div>

            <p className="hero-description">{personalInfo.shortBio}</p>

            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Mail size={18} /> Contact Me
              </a>
              <a href="#about" className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <User size={18} /> About Me
              </a>
            </div>

            <div className="hero-stats">
              {stats.map((stat, index) => (
                <div className="hero-stat" key={index}>
                  <div className="hero-stat-value">{stat.value}</div>
                  <div className="hero-stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Animated Banner */}
          {/* Right - Modern Sleek Image */}
          <div className="hero-image-modern">
            <div className="modern-image-wrapper">
              <div className="modern-glow"></div>
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop" 
                alt={personalInfo.name} 
                className="modern-image"
              />
              <div className="modern-badge">
                <div className="modern-badge-icon"><Briefcase size={24} /></div>
                <div className="modern-badge-text">
                  <span className="modern-badge-title">Finance Pro</span>
                  <span className="modern-badge-subtitle">Open to work</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;