import React, { useState } from 'react';
import './Skills.css';

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const skillDetails = {
    'C': { use: 'Practiced extensively for structural programming concepts and basic memory configurations.', project: 'Academic Foundations' },
    'C++': { use: 'Primary language for solving 500+ Data Structures & Algorithms challenges across competitive platforms.', project: 'LeetCode Problem Solving' },
    'JavaScript': { use: 'Core language for programming full-stack operations, socket handlers, and dynamic DOM actions.', project: 'DevConnect & QuickChat' },
    'HTML5': { use: 'Structuring semantic layout trees and keyboard-accessible structures.', project: 'Client Interfaces' },
    'CSS3': { use: 'Synthesizing custom UI/UX structures with fluid CSS variables and glassmorphism styling.', project: 'Client Interfaces' },
    'React.js': { use: 'Architected dynamic client presentations and handled client states with Hooks & Context API.', project: 'DevConnect & QuickChat' },
    'Next.js': { use: 'Leveraged for server-side generation, SEO configurations, and routing performance.', project: 'Personal Portfolios' },
    'Tailwind CSS': { use: 'Utilized for fast visual prototyping, layout assemblies, and fluid responsive styling.', project: 'Client Interfaces' },
    'Node.js': { use: 'Built lightweight JavaScript runtimes to run controllers, database engines, and socket bridges.', project: 'DevConnect & QuickChat' },
    'Express.js': { use: 'Engineered REST routing endpoints, session parsing middlewares, and data schema controllers.', project: 'DevConnect & QuickChat' },
    'MongoDB': { use: 'Designed document-based collections, indexing schemas, and user relationship mapping.', project: 'DevConnect' },
    'PostgreSQL': { use: 'Studied relational SQL operations, normalizations, and transaction design patterns.', project: 'DBMS Academic Lab' },
    'REST APIs': { use: 'Designed clean endpoints, routing paths, headers, and standard JSON response outputs.', project: 'DevConnect' },
    'JWT Authentication': { use: 'Secured session states using JWTs wrapped in secure HTTP-only cookies to stop XSS theft.', project: 'DevConnect' },
    'Socket.IO': { use: 'Established full-duplex TCP channels for real-time chat messages synchronization.', project: 'QuickChat' },
    'Data Structures and Algorithms': { use: 'Solved 500+ challenges, optimizing time complex algorithms and memory heaps.', project: 'Problem Solving Profile' },
    'Object Oriented Programming': { use: 'Applied modular design, code inheritance patterns, and clean separation of concerns.', project: 'System Architecture Design' },
    'DBMS': { use: 'Analyzed normalization formats, SQL queries optimization, and transaction constraints.', project: 'Academic Database Projects' },
    'Git': { use: 'Tracked code history, managed commit records, and resolved branch merging pipelines.', project: 'Collaborations' },
    'GitHub': { use: 'Hosted code repositories, managed remote releases, and documented development flows.', project: 'All Projects' },
    'VS Code': { use: 'Configured optimized workspaces, debugging extensions, and linting standards.', project: 'All Projects' },
    'Postman': { use: 'Inspected and verified API responses, query formats, and token validations.', project: 'API Debugging' },
    'Cloudinary': { use: 'Connected image upload pipelines, handling media cropping, compression, and delivery.', project: 'DevConnect' }
  };

  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['C', 'C++', 'JavaScript'],
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      )
    },
    {
      title: 'Frontend Development',
      skills: ['HTML5', 'CSS3', 'React.js', 'Next.js', 'Tailwind CSS'],
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      )
    },
    {
      title: 'Backend Development',
      skills: ['Node.js', 'Express.js'],
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
        </svg>
      )
    },
    {
      title: 'Databases',
      skills: ['MongoDB', 'PostgreSQL'],
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
          <path d="M12 6v6l4 2" />
        </svg>
      )
    },
    {
      title: 'Core Concepts & Real-Time',
      skills: ['REST APIs', 'JWT Authentication', 'Socket.IO'],
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
          <path d="M13.73 21a2 2 0 0 1-3.46 0" />
        </svg>
      )
    },
    {
      title: 'CS Fundamentals',
      skills: ['Data Structures and Algorithms', 'Object Oriented Programming', 'DBMS'],
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
      )
    },
    {
      title: 'Tools & Platforms',
      skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Cloudinary'],
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      )
    }
  ];

  return (
    <section id="skills" className="section skills-section reveal">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Expertise</span>
          <h2 className="section-title">Technical Skills</h2>
        </div>

        <div className="skills-layout">
          {/* Left: Interactive Skills Grid */}
          <div className="skills-grid">
            {skillCategories.map((category, idx) => (
              <div key={idx} className="skills-card card">
                <div className="skills-card-header">
                  <span className="skills-card-icon">{category.icon}</span>
                  <h3>{category.title}</h3>
                </div>
                <div className="skills-list">
                  {category.skills.map((skill, sIdx) => (
                    <button
                      key={sIdx}
                      className={`skill-tag-btn ${selectedSkill === skill ? 'active' : ''}`}
                      onMouseEnter={() => setSelectedSkill(skill)}
                      onClick={() => setSelectedSkill(skill)}
                    >
                      {skill}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right: Selected skill detail terminal */}
          <div className="skill-detail-card card">
            <div className="detail-card-header">
              <span className="detail-card-status">CAPABILITY_EXPLORER.bin</span>
              <span className="detail-card-glow"></span>
            </div>
            
            {selectedSkill ? (
              <div className="detail-content animate-fade-in">
                <div className="detail-row">
                  <span className="detail-lbl">Technology:</span>
                  <span className="detail-val highlight">{selectedSkill}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-lbl">How I Use It:</span>
                  <p className="detail-text">{skillDetails[selectedSkill]?.use}</p>
                </div>
                <div className="detail-row">
                  <span className="detail-lbl">Associated Context:</span>
                  <span className="detail-val font-mono">{skillDetails[selectedSkill]?.project}</span>
                </div>
              </div>
            ) : (
              <div className="detail-placeholder">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="placeholder-icon">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4M12 8h.01" />
                </svg>
                <p>Hover over any technology badge to inspect SDE capability logs and project associations.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
