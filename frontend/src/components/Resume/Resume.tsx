import { useState } from 'react';
import resumePdf from '../../assets/chakravarthy_resume_updated.pdf';
import './Resume.css';

export default function Resume() {
  const [previewOpen, setPreviewOpen] = useState(false);

  return (
    <section id="resume" className="section resume-section">
      <div className="container">
        <h2 className="section-title">My Resume</h2>
        <p className="section-subtitle">View or download my latest resume</p>

        <div className="resume-wrapper">
          <div className="resume-actions-bar">
            <div className="resume-info">
              <div className="resume-icon">
                <i className="fas fa-file-pdf"></i>
              </div>
              <div>
                <p className="resume-filename">chakravarthy_resume.pdf</p>
                <p className="resume-meta">Updated 2026 · Computer Science &amp; Engineering</p>
              </div>
            </div>

            <div className="resume-btns">
              <button
                id="resume-preview-btn"
                className={`btn btn-outline${previewOpen ? ' active' : ''}`}
                onClick={() => setPreviewOpen(prev => !prev)}
              >
                <i className={`fas fa-${previewOpen ? 'eye-slash' : 'eye'}`}></i>
                {previewOpen ? 'Hide Preview' : 'Preview'}
              </button>
              <a
                href={resumePdf}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline"
              >
                <i className="fas fa-expand"></i> Full Screen
              </a>
              <a
                href={resumePdf}
                download="chakravarthy_resume_updated.pdf"
                className="btn btn-primary"
              >
                <i className="fas fa-download"></i> Download
              </a>
            </div>
          </div>

          {previewOpen && (
            <div className="resume-preview-container">
              <iframe
                src={`${resumePdf}#view=fitH`}
                title="Chakravarthy Resume Preview"
                className="resume-iframe"
              ></iframe>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
