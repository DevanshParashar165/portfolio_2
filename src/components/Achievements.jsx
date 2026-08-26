import React from 'react';
import './Achievements.css';

const Achievements = () => {
  const achievements = [
    {
      title: 'Smart India Hackathon',
      subtitle: 'Internal National Nomination Round (2025)',
      description: 'Qualified for the Smart India Hackathon 2025 National Nomination Round. Ranked in the Top 50 teams out of 328 entries, presenting full-stack solutions under strict timelines.',
      badge: 'Top 50 / 328 Teams',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      )
    },
    {
      title: 'Algorithmic Problem Solving',
      subtitle: '500+ Challenges Solved',
      description: 'Solved 500+ Data Structures & Algorithms problems across LeetCode and other platforms. Highly proficient in Arrays, Strings, Recursion, Dynamic Programming, Trees, Graphs, and Greedy Algorithms.',
      badge: '500+ DSA Solved',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
      )
    },
    {
      title: 'Continuous Learning',
      subtitle: 'NPTEL Certifications from IITs',
      description: 'Completed multiple NPTEL certifications from Indian Institutes of Technology (IITs), demonstrating initiative, discipline, and advanced understanding of core computer science subjects.',
      badge: 'NPTEL Certified',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
        </svg>
      )
    }
  ];

  return (
    <section id="achievements" className="section achievements-section reveal">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Milestones</span>
          <h2 className="section-title">Achievements</h2>
        </div>

        <div className="achievements-grid">
          {achievements.map((item, idx) => (
            <div key={idx} className="achievement-card card">
              <div className="achievement-top">
                <div className="achievement-icon-box">{item.icon}</div>
                <span className="achievement-badge">{item.badge}</span>
              </div>
              
              <h3 className="achievement-title">{item.title}</h3>
              <h4 className="achievement-subtitle">{item.subtitle}</h4>
              
              <p className="achievement-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
