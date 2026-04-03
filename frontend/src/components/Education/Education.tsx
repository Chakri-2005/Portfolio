import './Education.css';

interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  stream?: string;
  grade?: string;
  icon: string;
  current?: boolean;
}

const educationData: EducationItem[] = [
  {
    degree: 'Bachelor of Technology (B.Tech)',
    institution: 'Amrita Vishwa Vidyapeetham, Coimbatore',
    period: '2023 – Present',
    stream: 'Computer Science and Engineering',
    grade: 'CGPA: 6.59',
    icon: 'fas fa-university',
    current: true,
  },
  {
    degree: 'Pre-University College (Class XII)',
    institution: 'FIITJEE Junior College, Vijayawada',
    period: '2021 – 2023',
    stream: 'MPC (Mathematics, Physics, Chemistry)',
    grade: 'Percentage: 91%',
    icon: 'fas fa-school',
  },
  {
    degree: 'Secondary School (Class X)',
    institution: 'NSM Public School, Andhra Pradesh',
    period: '2020',
    icon: 'fas fa-book-open',
  },
];

export default function Education() {
  return (
    <section id="education" className="section education-section">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <p className="section-subtitle">My academic journey and qualifications</p>

        <div className="timeline">
          {educationData.map((item, index) => (
            <div key={index} className={`timeline-item${item.current ? ' current' : ''}`}>
              <div className="timeline-connector">
                <div className="timeline-dot">
                  <i className={item.icon}></i>
                </div>
                {index < educationData.length - 1 && <div className="timeline-line"></div>}
              </div>

              <div className="education-card">
                {item.current && (
                  <span className="current-badge">
                    <span className="pulse-dot"></span> Currently Enrolled
                  </span>
                )}
                <div className="edu-card-header">
                  <div>
                    <h3 className="edu-degree">{item.degree}</h3>
                    <p className="edu-institution">
                      <i className="fas fa-map-marker-alt"></i> {item.institution}
                    </p>
                  </div>
                  <span className="edu-period">
                    <i className="far fa-calendar-alt"></i> {item.period}
                  </span>
                </div>

                {(item.stream || item.grade) && (
                  <div className="edu-details">
                    {item.stream && (
                      <span className="edu-tag stream-tag">
                        <i className="fas fa-book"></i> {item.stream}
                      </span>
                    )}
                    {item.grade && (
                      <span className="edu-tag grade-tag">
                        <i className="fas fa-star"></i> {item.grade}
                      </span>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
