import React from 'react';

const SectionTitle = ({ label, title, subtitle, gradient = true }) => {
  return (
    <div className="section-header">
      {label && <span className="section-label">{label}</span>}
      <h2 className="section-title">
        {gradient ? <span className="gradient-text">{title}</span> : title}
      </h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
      <div className="section-divider"></div>
    </div>
  );
};

export default SectionTitle;
