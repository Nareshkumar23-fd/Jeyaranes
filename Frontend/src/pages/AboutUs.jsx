import React from 'react';
import { personalInfo, areasOfInterest } from '../data/data';
import SectionTitle from '../components/ui/SectionTitle';
import ScrollReveal from '../components/ui/ScrollReveal';

const AboutUs = () => {
  return (
    <section id="about" className="section section-alt">
      <div className="container">
        <ScrollReveal>
          <SectionTitle
            label="Get to Know Me"
            title="About Me"
            subtitle="A passionate commerce graduate driven by curiosity and dedication"
          />
        </ScrollReveal>

        <div className="about-grid">
          {/* Left - About Text & Info */}
          <ScrollReveal direction="left">
            <div className="about-text">
              <p>{personalInfo.objective}</p>
              <p>{personalInfo.shortBio}</p>

              <div className="about-info-grid">
                <div className="about-info-item">
                  <span className="about-info-label">Name</span>
                  <span className="about-info-value">{personalInfo.name}</span>
                </div>
                <div className="about-info-item">
                  <span className="about-info-label">Email</span>
                  <span className="about-info-value">{personalInfo.email}</span>
                </div>
                <div className="about-info-item">
                  <span className="about-info-label">Location</span>
                  <span className="about-info-value">{personalInfo.city}</span>
                </div>
                <div className="about-info-item">
                  <span className="about-info-label">Phone</span>
                  <span className="about-info-value">{personalInfo.phone}</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right - Areas of Interest */}
          <div className="interest-cards">
            {areasOfInterest.map((interest, index) => (
              <ScrollReveal key={index} direction="right" delay={index * 150}>
                <div className="interest-card glass-card">
                  <div className="interest-icon">{interest.icon}</div>
                  <div>
                    <h4>{interest.name}</h4>
                    <p>{interest.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;