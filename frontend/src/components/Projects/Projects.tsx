import './Projects.css';

interface Project {
  id: number;
  title: string;
  status?: string;
  description: string;
  bullets: string[];
  tech: string[];
  github: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: 0,
    title: 'Autism Learning Platform – Inclusive Education',
    description: 'An inclusive, interactive digital platform designed to support the educational journey of children with Autism Spectrum Disorder (ASD). It provides a sensory-friendly learning environment with adaptive modules and detailed progress tracking.',
    bullets: [
      'Features an adaptive, sensory-friendly UI/UX prioritizing calm colors, clear typography, and minimal distractions.',
      'Enables complete progress tracking and detailed analytics for teachers and parents to monitor learning milestones.',
      'Can be utilized across specialized educational centers or deployed for customized at-home learning sessions.',
      'Core modules include interactive gamified learning activities, role-based dashboards, and individualized lesson curation.',
      'Implemented adhering to strict software engineering life cycles (SDLC), utilizing modern full-stack web technologies and accessibility standards (WCAG).',
    ],
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'SDLC', 'Accessibility'],
    github: 'https://github.com/ratish002/se-project',
    featured: true,
  },
  {
    id: 1,
    title: 'SparkFund – Crowdfunding Platform',
    description: 'A comprehensive MERN-stack crowdfunding platform bridging the gap between creators and backers. It eliminates opaque intermediates, providing secure role-based campaign management and real-time tracking.',
    bullets: [
      'Built a secure, role-based platform allowing Users to back ideas and Admins to moderate campaigns.',
      'Features complete end-to-end CRUD capabilities for transparent campaign creation and ongoing management.',
      'Intended to be used seamlessly by organizations or individuals launching digital fundraisers.',
      'Includes an interactive administrative dashboard equipped with reactive Chart.js analytics for real-time monitoring.',
      'Implemented core concepts such as RESTful APIs, JWT-based authentication, and state management.',
    ],
    tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'JWT', 'Chart.js'],
    github: 'https://github.com/Chakri-2005/Portfolio',
    featured: true,
  },
  {
    id: 3,
    title: 'Explainable Federated Learning for Healthcare',
    status: 'Ongoing',
    description: 'An advanced research system training predictive healthcare models without pooling sensitive patient data. It addresses medical data privacy natively by incorporating localized learning and personalized drift adaptation.',
    bullets: [
      'Secures patient privacy by training localized machine learning models directly on distributed nodal data networks.',
      'Incorporates state-of-the-art eXplainable AI (XAI) methodology to offer medical professionals transparent, interpretable predictions.',
      'Can be directly deployed across hospital alliances to collectively anticipate disease progression without data transfer.',
      'Implements resilient personalized drift adaptation to continuously correct model discrepancies across varying demographic datasets.',
      'Developed using Python, federated learning paradigms, deep learning architectures, and data manipulation libraries.',
    ],
    tech: ['Python', 'Federated Learning', 'NumPy', 'pandas', 'Matplotlib', 'Jupyter'],
    github: 'https://github.com/Chakri-2005/23CSE399-Project-Phase-1',
    featured: true,
  },
  {
    id: 2,
    title: 'Distributed Job Scheduler',
    description: 'A resilient job scheduler engineered to handle intensive tasks across separate virtual nodes. Developed in Go and coordinated via Apache ZooKeeper, it resolves single points of failure in task execution.',
    bullets: [
      'Orchestrates high-volume task scheduling using intelligent, hybrid load-balancing and round-robin strategies.',
      'Eliminates single points of failure by implementing dynamic leader election strategies via Apache ZooKeeper.',
      'Can be utilized directly as a robust backend job queue for enterprise-grade SaaS platforms.',
      'Employs Chandy–Lamport algorithms for global state snapshots, along with precise heartbeat failure detection.',
      'Core technologies implemented include Go concurrency patterns, Docker networking, and Ricart–Agrawala mutual exclusion.',
    ],
    tech: ['Go', 'ZooKeeper', 'Docker', 'TypeScript', 'React', 'REST APIs'],
    github: 'https://github.com/Chakri-2005/Distributed-Job-Scheduler',
    featured: true,
  },
  {
    id: 4,
    title: 'Task Management System',
    description: 'A robust terminal-based task manager engineered entirely using core fundamental data structures. It provides instantaneous, in-memory task resolution without the overhead of any traditional database engine.',
    bullets: [
      'Organizes offline tasks securely using custom-engineered data structures like Stacks, Queues, MinHeaps, and BSTs.',
      'Features highly optimized features including priority scheduling, O(1) undo/redo logic, and instantaneous text lookups.',
      'Ideal as a rapid-access daily planner for developers, power users, or system administrators preferring CLI environments.',
      'Manages complex task interactions accurately through dependency graph resolution and topological sorting.',
      'Implemented completely in Python emphasizing algorithmic efficiency and Object-Oriented design patterns.',
    ],
    tech: ['Python', 'OOP', 'Custom DSA', 'CLI'],
    github: 'https://github.com/Chakri-2005/Portfolio',
  },
  {
    id: 5,
    title: 'Geometry Platform',
    description: 'An engaging web-based platform allowing intuitive visualization and manipulation of geometric shapes. Built on the HTML5 Canvas API, it offers real-time rendering and calculations for educational environments.',
    bullets: [
      'Provides a responsive interactive canvas for free-form drawing and manipulation of geometric entities.',
      'Calculates and updates vital properties like area, perimeter, and intersecting angles in absolute real-time.',
      'Designed to be used on smartboards or accessible browsers within educational institutions and distance learning setups.',
      'Features precision constraints including intuitive snap-to-grid behaviors and smart geometry recognition.',
      'Developed entirely leveraging advanced vanilla JavaScript, the HTML5 Canvas 2D context, and modern CSS layouts.',
    ],
    tech: ['JavaScript', 'CSS3', 'HTML5', 'Canvas API'],
    github: 'https://github.com/Chakri-2005/Geometry-platform',
  },
  {
    id: 6,
    title: 'Weather & Clothing Advisor',
    description: 'A progressive web utility that generates practical daily outfit suggestions based on localized weather API data. It eliminates daily guesswork by processing real-time temperature, wind, and precipitation models.',
    bullets: [
      'Dynamically recommends practical clothing combinations by analyzing complex, real-time meteorological JSON payloads.',
      'Features a snappy, lightning-fast responsive interface ensuring instantaneous weather fetching and visual updates.',
      'Ideally utilized as a daily morning routine tool accessible quickly from mobile or desktop web browsers.',
      'Integrates advanced weather parameters, flagging imminent sudden temperature drops or unforeseen precipitation alerts.',
      'Built cleanly using Vite, JavaScript, asynchronous REST API architecture, and modular CSS frameworks.',
    ],
    tech: ['JavaScript', 'Vite', 'Weather API', 'CSS3'],
    github: 'https://github.com/Chakri-2005/Weather-and-Clothing',
  },
  {
    id: 7,
    title: 'SweetHome Real Estate Portal',
    description: 'A polished, multi-page web application architecture tailored for luxury real estate listings. It prioritizes accessible, high-contrast UI design and modular layout components for optimal browsing speed.',
    bullets: [
      'Delivers an intuitive property browsing experience enriched with intricate location-based filtering algorithms.',
      'Prioritizes an accessible semantic web structure complementing lightning-fast page loading and interaction speeds.',
      'Can be seamlessly adopted and customized by active real estate agencies seeking an immediate professional digital footprint.',
      'Features an adaptive, mobile-first responsive design strategy performing flawlessly across varied screen dimensions.',
      'Developed carefully using pure, fundamental web technologies focusing heavily on UI/UX best practices and CSS layouts.',
    ],
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    github: 'https://github.com/Chakri-2005/Portfolio',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">Things I've built and shipped</p>

        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className={`project-card${project.featured ? ' featured' : ''}`}>
              <div className="project-body">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-badges">
                    {project.status && (
                      <span className="status-badge">
                        <i className="fas fa-spinner fa-spin"></i> {project.status}
                      </span>
                    )}
                    {project.featured && (
                      <span className="featured-badge">
                        <i className="fas fa-star"></i> Featured
                      </span>
                    )}
                  </div>
                </div>
                
                <p className="project-description">{project.description}</p>
                
                <ul className="project-bullets">
                  {project.bullets.map((bullet, index) => (
                    <li key={index}>
                      <i className="fas fa-check-circle"></i> <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="project-tech">
                  {project.tech.map(t => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link github-link"
                    aria-label={`GitHub - ${project.title}`}
                  >
                    <i className="fab fa-github"></i> View Repository
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
