import React from 'react';
import './Education.css';

const Education = () => {
  const educationData = [
    {
      degree: 'B.Tech in Information Technology',
      institution: 'ABES Engineering College',
      board: 'AKTU (Dr. A.P.J. Abdul Kalam Technical University)',
      duration: 'October 2023 – July 2027',
      scoreLabel: 'CGPA',
      scoreValue: '8.32',
      location: 'Ghaziabad, Uttar Pradesh, India',
      isCurrent: true
    },
    {
      degree: 'Intermediate (Class XII)',
      institution: 'Translam Academy International',
      board: 'CBSE (Central Board of Secondary Education)',
      duration: '2022 – 2023',
      scoreLabel: 'Percentage',
      scoreValue: '95.8%',
      location: 'Meerut, Uttar Pradesh, India',
      isCurrent: false
    },
    {
      degree: 'High School (Class X)',
      institution: 'Translam Academy International',
      board: 'CBSE (Central Board of Secondary Education)',
      duration: '2020 – 2021',
      scoreLabel: 'Percentage',
      scoreValue: '91%',
      location: 'Meerut, Uttar Pradesh, India',
      isCurrent: false
    }
  ];

  return (
    <section id="education" className="section education-section reveal">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Academic Journey</span>
          <h2 className="section-title">Education</h2>
        </div>

        <div className="timeline-container">
          <div className="timeline-track"></div>
          
          <div className="timeline-items">
            {educationData.map((item, idx) => (
              <div key={idx} className="timeline-item">
                <div className="timeline-dot-box">
                  <div className={`timeline-dot ${item.isCurrent ? 'active-dot' : ''}`}></div>
                </div>
                
                <div className="timeline-content card">
                  <div className="timeline-header">
                    <span className="timeline-duration">{item.duration}</span>
                    {item.isCurrent && <span className="current-badge">In Progress</span>}
                  </div>
                  
                  <h3 className="timeline-degree">{item.degree}</h3>
                  <h4 className="timeline-institution">{item.institution}</h4>
                  
                  <p className="timeline-board">{item.board}</p>
                  
                  <div className="timeline-footer">
                    <div className="timeline-score">
                      <span className="score-label">{item.scoreLabel}:</span>
                      <span className="score-value">{item.scoreValue}</span>
                    </div>
                    
                    <div className="timeline-location">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      <span>{item.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
