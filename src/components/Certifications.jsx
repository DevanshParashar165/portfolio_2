import React from 'react';
import './Certifications.css';

const Certifications = () => {
  const certificationsData = [
    {
      title: 'IIT NPTEL Certifications',
      issuer: 'Indian Institutes of Technology (IITs)',
      details: 'Completed multiple technical courses demonstrating high performance and active learning in engineering domains.',
      tags: ['Python', 'Data Science', 'C Programming', 'Discrete Mathematics'],
      badge: 'NPTEL'
    },
    {
      title: 'Data Structures and Algorithms',
      issuer: 'Infosys Springboard',
      date: 'April 2025',
      details: 'Successfully completed the comprehensive Data Structures and Algorithms certification, focusing on code efficiency, logic design, and problem solving.',
      tags: ['DSA', 'Data Structures', 'Algorithms'],
      badge: 'Infosys'
    },
    {
      title: 'Problem Solving (Basic & Intermediate)',
      issuer: 'HackerRank',
      details: 'Achieved HackerRank credentials in Problem Solving, demonstrating proficiency in data structures, algorithms, and analytical logic execution.',
      tags: ['Problem Solving', 'Data Structures', 'Algorithms'],
      badge: 'HackerRank'
    }
  ];

  return (
    <section id="certifications" className="section certifications-section reveal">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Credentials</span>
          <h2 className="section-title">Certifications</h2>
        </div>

        <div className="certs-grid">
          {certificationsData.map((cert, idx) => (
            <div key={idx} className="cert-card card">
              <div className="cert-header">
                <span className="cert-issuer-badge">{cert.badge}</span>
                {cert.date && <span className="cert-date">{cert.date}</span>}
              </div>
              
              <h3 className="cert-title">{cert.title}</h3>
              <h4 className="cert-issuer">{cert.issuer}</h4>
              
              <p className="cert-details">{cert.details}</p>
              
              <div className="cert-tags">
                {cert.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="cert-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
