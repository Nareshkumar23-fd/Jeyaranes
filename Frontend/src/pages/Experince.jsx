import React, { useEffect, useRef } from 'react';
import {
  workExperience,
  education,
  projects,
  technicalSkills,
  softSkills,
} from '../data/data';
import SectionTitle from '../components/ui/SectionTitle';
import ScrollReveal from '../components/ui/ScrollReveal';

const Experience = () => {
  return (
    <>
      {/* ===== EXPERIENCE SECTION ===== */}
      <section id="experience" className="section">
        <div className="container">
          <ScrollReveal>
            <SectionTitle
              label="My Journey"
              title="Work Experience"
              subtitle="Professional roles that have shaped my career in accounting and finance"
            />
          </ScrollReveal>

          <div className="timeline">
            {workExperience.map((exp, index) => (
              <ScrollReveal key={exp.id} delay={index * 200}>
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-card gradient-border-card">
                    <span className="timeline-period">
                      {exp.period}
                      {exp.type && <span className="timeline-badge">{exp.type}</span>}
                    </span>
                    <h3 className="timeline-title">{exp.role}</h3>
                    <p className="timeline-company">{exp.company}</p>
                    <p className="timeline-location">📍 {exp.location}</p>
                    {exp.description && (
                      <p className="timeline-description">{exp.description}</p>
                    )}
                    <div className="timeline-responsibilities">
                      {exp.responsibilities.map((resp, i) => (
                        <div key={i} className="timeline-responsibility">
                          <span>{resp}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SKILLS SECTION ===== */}
      <section id="skills" className="section section-alt">
        <div className="container">
          <ScrollReveal>
            <SectionTitle
              label="What I Know"
              title="Skills & Expertise"
              subtitle="Technical proficiencies and personal strengths I bring to the table"
            />
          </ScrollReveal>

          <div className="skills-grid">
            {/* Technical Skills - Animated Bars */}
            <ScrollReveal direction="left">
              <h3 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'var(--fs-lg)',
                fontWeight: 'var(--fw-bold)',
                marginBottom: 'var(--space-xl)',
                color: 'var(--text-primary)'
              }}>
                Technical Skills
              </h3>
              <div className="skill-bars">
                {technicalSkills.map((skill, index) => (
                  <SkillBarItem key={index} skill={skill} delay={index * 200} />
                ))}
              </div>
            </ScrollReveal>

            {/* Soft Skills - Cards */}
            <ScrollReveal direction="right">
              <h3 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'var(--fs-lg)',
                fontWeight: 'var(--fw-bold)',
                marginBottom: 'var(--space-xl)',
                color: 'var(--text-primary)'
              }}>
                Soft Skills
              </h3>
              <div className="soft-skills-grid">
                {softSkills.map((skill, index) => (
                  <div key={index} className="soft-skill-card glass-card">
                    <div className="soft-skill-icon">{skill.icon}</div>
                    <span className="soft-skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== EDUCATION SECTION ===== */}
      <section id="education" className="section">
        <div className="container">
          <ScrollReveal>
            <SectionTitle
              label="Academic Background"
              title="Education"
              subtitle="My academic journey and qualifications"
            />
          </ScrollReveal>

          <div className="education-grid">
            {education.map((edu, index) => (
              <ScrollReveal key={edu.id} delay={index * 150}>
                <div className="education-card gradient-border-card">
                  <span className="education-icon">{edu.icon}</span>
                  <h4 className="education-degree">{edu.degree}</h4>
                  <p className="education-institution">{edu.institution}</p>
                  <p className="education-period">{edu.period} · {edu.location}</p>
                  <span className="education-grade">{edu.grade}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROJECTS SECTION ===== */}
      <section id="projects" className="section section-alt">
        <div className="container">
          <ScrollReveal>
            <SectionTitle
              label="My Work"
              title="Projects"
              subtitle="Research and academic projects I've undertaken"
            />
          </ScrollReveal>

          {projects.map((project) => (
            <ScrollReveal key={project.id} direction="scale">
              <div className="project-card gradient-border-card">
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="project-tag">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="project-highlights">
                  {project.highlights.map((highlight, i) => (
                    <div key={i} className="project-highlight">
                      <span className="project-highlight-icon">✦</span>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </>
  );
};

/* ===== SKILL BAR SUB-COMPONENT ===== */
const SkillBarItem = ({ skill, delay }) => {
  const barRef = useRef(null);

  useEffect(() => {
    const el = barRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.classList.add('animate');
          }, delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div className="skill-bar-item">
      <div className="skill-bar-header">
        <span className="skill-bar-name">{skill.name}</span>
        <span className="skill-bar-percent">{skill.level}%</span>
      </div>
      <div className="skill-bar-track">
        <div
          ref={barRef}
          className="skill-bar-fill"
          style={{ '--fill-width': `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Experience;
