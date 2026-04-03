import { useState } from 'react';
import './Certifications.css';

const certifications = [
  {
    title: 'Python for Data Science Bootcamp',
    issuer: 'Udemy',
    date: 'April 2025',
    icon: 'fab fa-python',
    color: '#3b82f6',
  },
  {
    title: 'Certified Front-End Web Developer',
    issuer: 'Coursera',
    date: 'August 2024',
    icon: 'fas fa-code',
    color: '#8b5cf6',
  },
];

export default function Certifications() {
  const [open, setOpen] = useState(false);

  return (
    <section id="certifications" className="section certifications-section">
      <div className="container">
        <h2 className="section-title">Certifications</h2>
        <p className="section-subtitle">Professional credentials and achievements</p>

        <div className="cert-toggle-wrapper">
          <button
            id="cert-toggle-btn"
            className={`cert-toggle-btn${open ? ' open' : ''}`}
            onClick={() => setOpen(prev => !prev)}
          >
            <i className={`fas fa-${open ? 'chevron-up' : 'certificate'}`}></i>
            {open ? 'Hide Certifications' : 'View My Certifications'}
            <span className="cert-count">{certifications.length}</span>
          </button>
        </div>

        <div className={`cert-grid${open ? ' visible' : ''}`}>
          {certifications.map(cert => (
            <div key={cert.title} className="cert-card">
              <div className="cert-icon-wrapper" style={{ background: `${cert.color}20`, borderColor: `${cert.color}40` }}>
                <i className={cert.icon} style={{ color: cert.color }}></i>
              </div>
              <div className="cert-info">
                <h3 className="cert-title">{cert.title}</h3>
                <div className="cert-meta">
                  <span className="cert-issuer">
                    <i className="fas fa-building"></i> {cert.issuer}
                  </span>
                  <span className="cert-date">
                    <i className="far fa-calendar-alt"></i> {cert.date}
                  </span>
                </div>
              </div>
              <div className="cert-badge">
                <i className="fas fa-check-circle"></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
