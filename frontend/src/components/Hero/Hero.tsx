import { useEffect, useRef, useState } from 'react';
import './Hero.css';

const roles = [
  'Computer Science Student',
  'Software Developer',
  'Aspiring Software Engineer',
  'Problem Solver',
  'Open Source Enthusiast',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const current = roles[roleIndex];
    const speed = isDeleting ? 60 : 110;

    timeoutRef.current = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(current.slice(0, displayText.length + 1));
        if (displayText.length + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayText(current.slice(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setRoleIndex(prev => (prev + 1) % roles.length);
        }
      }
    }, speed);

    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section id="home" className="hero section">
      <div className="hero-bg">
        <div className="hero-orb orb1"></div>
        <div className="hero-orb orb2"></div>
        <div className="hero-orb orb3"></div>
        <div className="grid-overlay"></div>
      </div>

      <div className="container hero-container">
        <div className="hero-content">
          <p className="hero-greeting animate-item delay-1">
            <span className="wave">👋</span> Hello, World!
          </p>
          <h1 className="hero-name animate-item delay-2">
            I'm <span className="name-highlight">Vemula Chakravarthy</span>
          </h1>
          <div className="hero-role-wrapper animate-item delay-3">
            <span className="role-label">I'm a </span>
            <span className="role-text">{displayText}</span>
            <span className="cursor">|</span>
          </div>
          <p className="hero-description animate-item delay-4">
            Motivated B.Tech CSE undergraduate at Amrita Vishwa Vidyapeetham, passionate about
            building scalable full-stack applications, distributed systems, and solving complex
            algorithmic challenges. Turning ideas into impactful software.
          </p>
          <div className="hero-actions animate-item delay-5">
            <a href="#projects" className="btn btn-primary" onClick={e => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}>
              <i className="fas fa-rocket"></i> View Projects
            </a>
            <a href="#contact" className="btn btn-outline" onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
              <i className="fas fa-paper-plane"></i> Hire Me
            </a>
          </div>
          <div className="hero-social animate-item delay-6">
            <a href="https://github.com/Chakri-2005" target="_blank" rel="noreferrer" className="social-link" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/chakravarthy-vemula-379158308/" target="_blank" rel="noreferrer" className="social-link" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://leetcode.com/u/Chakravarthy_Vemula/" target="_blank" rel="noreferrer" className="social-link" aria-label="LeetCode">
              <i className="fas fa-code"></i>
            </a>
            <a href="mailto:chakravarthyvemula25@gmail.com" className="social-link" aria-label="Email">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>

        <div className="hero-visual animate-item delay-3">
          <div className="code-card">
            <div className="code-header">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
              <span className="code-title">developer.ts</span>
            </div>
            <pre className="code-body">
{`const developer = {
  name: "Chakravarthy",
  role: "Software Developer",
  university: "Amrita",
  cgpa: 6.59,
  skills: [
    "React", "Node.js",
    "Python", "Go",
    "MongoDB", "Docker"
  ],
  passion: "Building impactful
            software 🚀",
  available: true,
};`}
            </pre>
          </div>
          <div className="floating-badge badge1">
            <i className="fab fa-react"></i> React
          </div>
          <div className="floating-badge badge2">
            <i className="fab fa-node-js"></i> Node
          </div>
          <div className="floating-badge badge3">
            <i className="fab fa-python"></i> Python
          </div>
          <div className="floating-badge badge4">
            <i className="fas fa-server"></i> Go
          </div>
        </div>
      </div>

      <a href="#about" className="scroll-down" onClick={e => { e.preventDefault(); document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' }); }} aria-label="Scroll down">
        <div className="scroll-indicator">
          <i className="fas fa-chevron-down"></i>
        </div>
      </a>
    </section>
  );
}
