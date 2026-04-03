import { useEffect, useRef } from 'react';
import './Skills.css';

interface Skill {
  name: string;
  icon: string;
  color: string;
}

const allSkills: Skill[] = [
  { name: 'HTML5', icon: 'fab fa-html5', color: '#E34F26' },
  { name: 'CSS3', icon: 'fab fa-css3-alt', color: '#1572B6' },
  { name: 'JavaScript', icon: 'fab fa-js', color: '#F7DF1E' },
  { name: 'TypeScript', icon: 'fas fa-file-code', color: '#3178C6' },
  { name: 'React', icon: 'fab fa-react', color: '#61DAFB' },
  { name: 'Node.js', icon: 'fab fa-node-js', color: '#339933' },
  { name: 'Python', icon: 'fab fa-python', color: '#3776AB' },
  { name: 'Java', icon: 'fab fa-java', color: '#007396' },
  { name: 'C', icon: 'fas fa-copyright', color: '#A8B9CC' },
  { name: 'Go', icon: 'fas fa-external-link-alt', color: '#00ADD8' },
  { name: 'Haskell', icon: 'fas fa-code-branch', color: '#5e5086' },
  { name: 'SQL', icon: 'fas fa-database', color: '#4479A1' },
  { name: 'MongoDB', icon: 'fas fa-leaf', color: '#47A248' },
  { name: 'Docker', icon: 'fab fa-docker', color: '#2496ED' },
  { name: 'Git', icon: 'fab fa-git-alt', color: '#F05032' },
  { name: 'Data Structures', icon: 'fas fa-sitemap', color: '#818cf8' },
  { name: 'Operating Systems', icon: 'fas fa-desktop', color: '#a78bfa' },
  { name: 'Network Security', icon: 'fas fa-shield-alt', color: '#ef4444' },
  { name: 'DBMS', icon: 'fas fa-server', color: '#f59e0b' },
];

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-pop-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const skillItems = document.querySelectorAll('.skill-circle-item');
    skillItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="section skills-section" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <p className="section-subtitle">Technologies, frameworks, and tools I use</p>

        <div className="skills-circle-grid">
          {allSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="skill-circle-item"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="skill-icon-wrapper" style={{ '--brand-color': skill.color } as React.CSSProperties}>
                <i className={skill.icon}></i>
              </div>
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
