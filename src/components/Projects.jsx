import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [activeModal, setActiveModal] = useState(null); // null | project index

  const projectsData = [
    {
      title: 'DevConnect',
      category: 'Developer Social Media Platform',
      year: '2025',
      techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Cloudinary'],
      description: 'Architected a full-stack social media platform for developers to connect, collaborate, and share knowledge through posts and comments.',
      highlights: [
        'Integrated JWT-based authentication and authorization using HTTP-only cookies to enforce secure session handling and access control.',
        'Engineered core features including post creation, update, deletion, and user profile management.',
        'Leveraged Cloudinary for secure image and media uploads, deletion, and performance optimization.',
        'Designed a responsive and intuitive UI using React Hooks and Context API for scalable state management.',
        'Applied RESTful API design principles to ensure backend scalability, maintainability, and clean separation of concerns.'
      ],
      caseStudy: {
        problem: 'Developers need a noise-free social network to share code files and collaborate, requiring secure route auth and optimized media loading.',
        architecture: 'React Client (Context API) -> Express Auth Gateway (HTTP-only Cookies validation) -> Node core dispatcher -> MongoDB DB Cluster / Cloudinary storage APIs.',
        implementation: 'Divided code into modular router models, validation controllers, and utility files. Managed active profile contexts in React.',
        challenges: 'Vulnerabilities associated with saving session access tokens in local storage, which exposes credentials to XSS script injection attacks.',
        solution: 'Switched session storage entirely to secure Http-Only cookie headers. Configured strong CORS parameters and sanitised all inputs.',
        result: 'Achieved high SDE grade audit on session security, low page load delays, and zero credentials exposure vectors.'
      }
    },
    {
      title: 'QuickChat',
      category: 'Real-Time Chat & Video Calling App',
      year: '2025',
      techStack: ['React.js', 'Node.js', 'Express.js', 'Socket.IO', 'WebRTC', 'MERN Stack'],
      description: 'Built a real-time communication application supporting one-to-one and group communication.',
      highlights: [
        'Enabled low-latency real-time messaging via Socket.IO for instant message synchronization.',
        'Secured user access through robust authentication and session management using MERN best practices.',
        'Crafted a responsive UI/UX in React to deliver smooth cross-device interaction.',
        'Optimized backend workflows to support concurrent users and real-time data synchronization.'
      ],
      caseStudy: {
        problem: 'Real-time text sync and low-overhead video calling capability are required in a single interface, calling for persistent channels.',
        architecture: 'React Client -> Socket.IO (full-duplex persistent connections) -> Node.js Signal Router -> WebRTC (direct P2P media streams handshake).',
        implementation: 'Established concurrent websocket events. Wired connection status variables to trigger WebRTC video negotiaton paths dynamically.',
        challenges: 'Managing unstable web sockets, high signaling latency, and sudden user disconnects during video streaming.',
        solution: 'Implemented connection retry fallbacks, connection heartbeats, and offline chat buffering models in Node.',
        result: 'Decreased connection signaling latencies, achieved responsive peer-to-peer data syncing, and unified text and voice features.'
      }
    }
  ];

  const handleCardTilt = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const xc = rect.width / 2;
    const yc = rect.height / 2;
    
    // Compute rotations (scale bounds to max 6deg)
    const rotateY = ((x - xc) / xc) * 6;
    const rotateX = -(((y - yc) / yc) * 6);
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
  };

  const handleCardReset = (e) => {
    const card = e.currentTarget;
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
  };

  return (
    <section id="projects" className="section projects-section reveal">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Portfolio</span>
          <h2 className="section-title">Featured Projects</h2>
        </div>

        {/* Cinematic horizontal projects display */}
        <div className="projects-grid">
          {projectsData.map((project, idx) => (
            <div 
              key={idx} 
              className="project-card card"
              onMouseMove={handleCardTilt}
              onMouseLeave={handleCardReset}
            >
              <div className="project-header">
                <span className="project-category">{project.category}</span>
                <span className="project-year">{project.year}</span>
              </div>
              
              <h3 className="project-title">{project.title}</h3>
              
              <p className="project-description">{project.description}</p>
              
              <div className="project-tech-list">
                {project.techStack.map((tech, tIdx) => (
                  <span key={tIdx} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-actions">
                <button 
                  className="btn btn-secondary btn-sm"
                  onClick={() => setActiveModal(idx)}
                >
                  Explore Case Study
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <polyline points="9 6 18 6 18 15" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Fullscreen Modal */}
      {activeModal !== null && (
        <div className="case-study-backdrop" onClick={() => setActiveModal(null)}>
          <div className="case-study-modal card" onClick={(e) => e.stopPropagation()}>
            <button 
              className="modal-close-btn"
              onClick={() => setActiveModal(null)}
              aria-label="Close Case Study"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <div className="modal-header-section">
              <span className="modal-cat">{projectsData[activeModal].category}</span>
              <h3 className="modal-title">{projectsData[activeModal].title} — Technical Deep Dive</h3>
            </div>

            <div className="modal-grid">
              <div className="study-section">
                <div className="section-indicator">01 // THE CHALLENGE</div>
                <h4>Problem Statement</h4>
                <p>{projectsData[activeModal].caseStudy.problem}</p>
              </div>

              <div className="study-section">
                <div className="section-indicator">02 // DATA FLOW</div>
                <h4>Architecture</h4>
                <p className="architecture-flow">{projectsData[activeModal].caseStudy.architecture}</p>
              </div>

              <div className="study-section">
                <div className="section-indicator">03 // STRATEGY</div>
                <h4>Implementation Details</h4>
                <p>{projectsData[activeModal].caseStudy.implementation}</p>
              </div>

              <div className="study-section">
                <div className="section-indicator">04 // RISK ASSESSMENT</div>
                <h4>Key Challenges</h4>
                <p>{projectsData[activeModal].caseStudy.challenges}</p>
              </div>

              <div className="study-section">
                <div className="section-indicator">05 // ENGINEERING RESOLUTION</div>
                <h4>Solution</h4>
                <p>{projectsData[activeModal].caseStudy.solution}</p>
              </div>

              <div className="study-section">
                <div className="section-indicator">06 // PERFORMANCE LOGS</div>
                <h4>System Result</h4>
                <p>{projectsData[activeModal].caseStudy.result}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
