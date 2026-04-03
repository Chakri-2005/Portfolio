import photo from '../../Photo.jpg';
import resumePdf from '../../assets/chakravarthy_resume_updated.pdf';
import './About.css';

const infoItems = [
  { icon: 'fas fa-user', label: 'Name', value: 'Vemula Chakravarthy' },
  { icon: 'fas fa-envelope', label: 'Email', value: 'chakravarthyvemula25@gmail.com' },
  { icon: 'fas fa-phone', label: 'Phone', value: '+91 8897931310' },
  { icon: 'fas fa-map-marker-alt', label: 'Location', value: 'Vijayawada, Andhra Pradesh' },
  { icon: 'fas fa-graduation-cap', label: 'University', value: 'Amrita Vishwa Vidyapeetham' },
  { icon: 'fab fa-github', label: 'GitHub', value: 'Chakri-2005' },
];

const stats = [
  { value: '15+', label: 'Projects Built' },
  { value: '6.59', label: 'CGPA' },
  { value: '2+', label: 'Certifications' },
];

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">A passionate developer on a mission to build impactful software</p>

        <div className="about-grid">
          {/* LEFT - Photo */}
          <div className="about-image-wrapper">
            <div className="about-image-container">
              <img src={photo} alt="Vemula Chakravarthy" className="about-photo" />
              <div className="image-glow"></div>
            </div>
            <div className="about-stats">
              {stats.map(stat => (
                <div key={stat.label} className="stat-item">
                  <span className="stat-value">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT - Content */}
          <div className="about-content">
            <div className="about-text-block">
              <p>
                I am a <strong>B.Tech Computer Science &amp; Engineering</strong> student at Amrita
                Vishwa Vidyapeetham, Coimbatore, with a strong passion for building scalable,
                maintainable, and user-centric software. My journey in software development has
                evolved into a deep-rooted drive to solve real-world problems through code.
              </p>
              <p>
                I specialize in <strong>full-stack development</strong> using the MERN stack,
                with additional experience in <strong>Python</strong> for data-driven
                applications and <strong>Go</strong> for high-performance distributed systems.
                I enjoy designing clean, responsive user interfaces in React, building robust
                backend APIs, and applying advanced data structures to solve algorithmic challenges.
              </p>
              <p>
                Beyond the keyboard, I actively participate in <strong>hackathons</strong>,
                collaborate on open-source projects, and explore emerging domains like
                <strong> Federated Learning</strong> and <strong>distributed computing</strong>.
                My goal is to join a forward-thinking team where I can contribute meaningfully, grow
                rapidly, and build software that makes a difference.
              </p>
            </div>

            <div className="about-info-grid">
              {infoItems.map(item => (
                <div key={item.label} className="info-chip">
                  <i className={item.icon}></i>
                  <div>
                    <span className="info-label">{item.label}</span>
                    <span className="info-value">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="about-actions">
              <a
                href="#contact"
                className="btn btn-primary"
                onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              >
                <i className="fas fa-paper-plane"></i> Get In Touch
              </a>
              <a href={resumePdf} download="chakravarthy_resume_updated.pdf" className="btn btn-outline">
                <i className="fas fa-download"></i> Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
