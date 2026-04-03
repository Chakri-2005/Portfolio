import './Footer.css';

const socialLinks = [
  { href: 'https://github.com/Chakri-2005', icon: 'fab fa-github', label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/chakravarthy-vemula-379158308/', icon: 'fab fa-linkedin', label: 'LinkedIn' },
  { href: 'https://www.instagram.com/chakravarthy_vemula?igsh=YzZhcXJvajVrcndh', icon: 'fab fa-instagram', label: 'Instagram' },
  { href: 'https://leetcode.com/u/Chakravarthy_Vemula/', icon: 'fas fa-code', label: 'LeetCode' },
];

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#resume', label: 'Resume' },
  { href: '#contact', label: 'Contact' },
];

export default function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-glow"></div>
      <div className="container footer-inner">
        {/* Brand */}
        <div className="footer-brand">
          <a href="#home" className="footer-logo" onClick={e => handleNavClick(e, '#home')}>
            <span className="logo-bracket">&lt;</span>
            Chakravarthy
            <span className="logo-bracket"> /&gt;</span>
          </a>
          <p className="footer-tagline">
            Building impactful software, one commit at a time. 🚀
          </p>
          <div className="footer-social">
            {socialLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="footer-social-link"
                aria-label={link.label}
              >
                <i className={link.icon}></i>
              </a>
            ))}
          </div>
        </div>

        {/* Nav */}
        <div className="footer-nav">
          <h4>Quick Links</h4>
          <ul>
            {navLinks.map(link => (
              <li key={link.href}>
                <a href={link.href} onClick={e => handleNavClick(e, link.href)}>
                  <i className="fas fa-chevron-right"></i> {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-contact">
          <h4>Contact</h4>
          <div className="footer-contact-list">
            <a href="mailto:chakravarthyvemula25@gmail.com" className="footer-contact-item">
              <i className="fas fa-envelope"></i>
              chakravarthyvemula25@gmail.com
            </a>
            <a href="tel:+918897931310" className="footer-contact-item">
              <i className="fas fa-phone"></i>
              +91 8897931310
            </a>
            <span className="footer-contact-item">
              <i className="fas fa-map-marker-alt"></i>
              Vijayawada, Andhra Pradesh
            </span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© 2026 Vemula Chakravarthy. All rights reserved.</p>
          <p className="footer-made-with">
            Made with <i className="fas fa-heart" style={{ color: '#ef4444' }}></i> using React + TypeScript
          </p>
        </div>
        <button id="scroll-top-btn" className="scroll-top-btn" onClick={scrollToTop} aria-label="Scroll to top">
          <i className="fas fa-arrow-up"></i>
        </button>
      </div>
    </footer>
  );
}
