import React from 'react';
import { personalInfo, stats } from '../data/data';
import ScrollReveal from '../components/ui/ScrollReveal';
import AnimatedText from '../components/ui/AnimatedText';
import { Hand, Mail, User, Briefcase, Target, Zap } from 'lucide-react';

const Home = () => {
  const typingTexts = [
    personalInfo.title || 'Finance Professional',
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
        <div className="hero-inner">
          {/* Left - Content */}
          <div className="hero-content">
            <ScrollReveal animation="fade-up" delay={100}>
              <div className="hero-greeting">
                <span className="wave">
                  <Hand size={20} />
                </span>
                <span>Hello, I'm</span>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <h1 className="hero-name">
                <span className="gradient-text">{personalInfo.firstName || 'John'}</span>
                {personalInfo.lastName && ` ${personalInfo.lastName}`}
              </h1>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={300}>
              <div className="hero-title-wrapper">
                <span className="hero-title-prefix">I'm a</span>
                <AnimatedText 
                  texts={typingTexts} 
                  className="hero-title"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={400}>
              <p className="hero-description">
                {personalInfo.shortBio || 'Passionate finance professional with expertise in financial analysis, investment strategies, and business management.'}
              </p>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={500}>
              <div className="hero-buttons">
                <a href="#contact" className="btn btn-primary">
                  <Mail size={18} />
                  <span>Contact Me</span>
                </a>
                <a href="#about" className="btn btn-outline">
                  <User size={18} />
                  <span>About Me</span>
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={600}>
              <div className="hero-stats">
                {stats && stats.map((stat, index) => (
                  <div className="hero-stat" key={index}>
                    <div className="hero-stat-value">{stat.value || '0'}</div>
                    <div className="hero-stat-label">{stat.label || 'Stats'}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right - Modern Sleek Image */}
          <div className="hero-image-modern">
            <ScrollReveal animation="fade-left" delay={300}>
              <div className="modern-image-wrapper">
                <div className="modern-glow"></div>
                <img 
                  src={personalInfo.profileImage || "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop"} 
                  alt={personalInfo.name || 'Profile'} 
                  className="modern-image"
                  loading="lazy"
                />
                <div className="modern-badge">
                  <div className="modern-badge-icon">
                    <Briefcase size={20} />
                  </div>
                  <div className="modern-badge-text">
                    <span className="modern-badge-title">Finance Pro</span>
                    <span className="modern-badge-subtitle">Open to work</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;