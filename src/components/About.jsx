import React, { useState } from 'react';
import './About.css';

const About = () => {
  const [activeStep, setActiveStep] = useState(0);

  const workflowSteps = [
    {
      label: 'IDEA',
      title: 'Conceptualization & Spec Analysis',
      detail: 'Deconstructing problem statements, analyzing time/space complexities, identifying constraints, and mapping engineering requirements before writing a single line of code.'
    },
    {
      label: 'ARCHITECTURE',
      title: 'System & Schema Design',
      detail: 'Drafting entity-relationship models, planning secure JWT/Http-only cookie tokens pathways, and detailing the data flow from clients to Express handlers and MongoDB storage.'
    },
    {
      label: 'CODE',
      title: 'Modular & Scalable Assembly',
      detail: 'Writing highly organized, linted, and semantic React and Node code. Applying object-oriented programming principles and functional patterns to keep codebase sizes compact and clean.'
    },
    {
      label: 'TEST',
      title: 'Validation & Boundary Checks',
      detail: 'Validating payload schemas, testing authentication states, tracing API endpoints with Postman, and verifying responsive mobile touch actions.'
    },
    {
      label: 'DEBUG',
      title: 'Tracing & Performance Profiling',
      detail: 'Inspecting logs, analyzing Chrome performance timelines, identifying memory leak issues, and tweaking algorithms to maximize system speeds.'
    },
    {
      label: 'DEPLOY',
      title: 'Optimized Builds',
      detail: 'Compiling minimized client bundles, compressing media assets on CDN buckets, and setting up proper static client configurations.'
    },
    {
      label: 'ITERATE',
      title: 'Review & Refactoring Loop',
      detail: 'Analyzing user reviews, tracking CPU/network usage, upgrading dependencies, and continuous refactoring of logic blocks for peak software lifespan.'
    }
  ];

  return (
    <section id="about" className="section about-section reveal">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Introduction</span>
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="about-grid">
          {/* Summary Narrative */}
          <div className="about-text">
            <h3 className="about-heading">
              Building Scalable Applications &amp; Solving Complex Problems
            </h3>
            <p>
              I am an Aspiring Software Development Engineer and Full-Stack Developer pursuing a B.Tech in Information Technology at <strong>ABES Engineering College</strong> (AKTU). With a solid foundation in software engineering principles, I specialize in building end-to-end web applications using the <strong>MERN Stack</strong>.
            </p>
            <p>
              Beyond development, I focus on coding efficiency and optimization by actively practicing <strong>Data Structures &amp; Algorithms</strong>. I am experienced in implementing secure session handling, designing RESTful APIs, and developing real-time communication systems.
            </p>
            <p className="about-quote">
              "Dedicated to implementing clean architecture, secure session handling, and low-latency communication to solve real-world problems."
            </p>
          </div>

          {/* Academic/Professional Quick Facts */}
          <div className="about-info-card card">
            <div className="info-card-header">
              <h4>Academic Profile</h4>
              <span className="info-card-code">SDE_CANDIDATE.json</span>
            </div>
            
            <div className="info-list">
              <div className="info-item">
                <span className="info-label">Degree</span>
                <span className="info-value">B.Tech in Information Technology</span>
              </div>
              <div className="info-item">
                <span className="info-label">Institution</span>
                <span className="info-value">ABES Engineering College</span>
              </div>
              <div className="info-item">
                <span className="info-label">University</span>
                <span className="info-value">AKTU (Uttar Pradesh)</span>
              </div>
              <div className="info-item">
                <span className="info-label">Academic Status</span>
                <span className="info-value">Oct 2023 – July 2027</span>
              </div>
              <div className="info-item">
                <span className="info-label">Current CGPA</span>
                <span className="info-value text-highlight">8.32 / 10</span>
              </div>
              <div className="info-item">
                <span className="info-label">Location</span>
                <span className="info-value">Meerut, Uttar Pradesh</span>
              </div>
            </div>
          </div>
        </div>

        {/* How I Think Workflow (New SDE interactive section) */}
        <div className="workflow-section card">
          <div className="workflow-header">
            <span className="workflow-title-lbl">HOW I THINK</span>
            <h3>Software Development Lifecycle</h3>
          </div>

          <div className="workflow-pipeline">
            {workflowSteps.map((step, idx) => (
              <button
                key={idx}
                className={`workflow-step-btn ${activeStep === idx ? 'active' : ''}`}
                onClick={() => setActiveStep(idx)}
                aria-label={`View workflow step: ${step.label}`}
              >
                <span className="step-num">0{idx + 1}</span>
                <span className="step-label">{step.label}</span>
                {idx < workflowSteps.length - 1 && <span className="step-arrow"></span>}
              </button>
            ))}
          </div>

          <div className="workflow-detail card">
            <h4 className="detail-step-title">{workflowSteps[activeStep].title}</h4>
            <p className="detail-step-text">{workflowSteps[activeStep].detail}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
