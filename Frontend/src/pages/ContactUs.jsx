import React, { useState } from 'react';
import { contactDetails, contactFormFields, personalInfo } from '../data/data';
import SectionTitle from '../components/ui/SectionTitle';
import ScrollReveal from '../components/ui/ScrollReveal';
import { Mail, Send, CheckCircle } from 'lucide-react';

const ContactUs = () => {
  const [formData, setFormData] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Frontend only — just show success message
    setSubmitted(true);
    setFormData({});
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="section section-alt">
      <div className="container">
        <ScrollReveal>
          <SectionTitle
            label="Get In Touch"
            title="Contact Me"
            subtitle="Have a question or want to work together? Drop me a message!"
          />
        </ScrollReveal>

        <div className="contact-grid">
          {/* Left - Contact Info Cards */}
          <div>
            <ScrollReveal direction="left">
              <div className="contact-cards">
                {contactDetails.map((detail, index) => (
                  <div key={detail.id} className="contact-card glass-card">
                    <span className="contact-card-icon">{detail.icon}</span>
                    <span className="contact-card-title">{detail.title}</span>
                    <span className="contact-card-value">
                      <a href={detail.link} target="_blank" rel="noopener noreferrer">
                        {detail.value}
                      </a>
                    </span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={200}>
              <div className="glass-card" style={{ padding: 'var(--space-xl)', textAlign: 'center' }}>
                <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--fs-sm)', lineHeight: '1.8' }}>
                  I'm currently open to new opportunities and collaborations.
                  Whether you have a question, a proposal, or just want to say hello —
                  feel free to reach out!
                </p>
                <div style={{ marginTop: 'var(--space-lg)' }}>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="btn btn-primary"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                  >
                    <Mail size={18} /> Send an Email
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right - Contact Form */}
          <ScrollReveal direction="right">
            <form className="contact-form" onSubmit={handleSubmit}>
              {contactFormFields.map((field) => (
                <div key={field.id} className="form-group">
                  <label htmlFor={field.id} className="form-label">
                    {field.label}
                  </label>
                  {field.type === 'textarea' ? (
                    <textarea
                      id={field.id}
                      name={field.id}
                      className="form-textarea"
                      placeholder={field.placeholder}
                      required={field.required}
                      value={formData[field.id] || ''}
                      onChange={handleChange}
                    />
                  ) : (
                    <input
                      id={field.id}
                      name={field.id}
                      type={field.type}
                      className="form-input"
                      placeholder={field.placeholder}
                      required={field.required}
                      value={formData[field.id] || ''}
                      onChange={handleChange}
                    />
                  )}
                </div>
              ))}

              <button type="submit" className="btn btn-primary form-submit" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center' }}>
                <Send size={18} /> Send Message
              </button>

              {submitted && (
                <div className="form-success" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle size={18} /> Message sent successfully! I'll get back to you soon.
                </div>
              )}
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
