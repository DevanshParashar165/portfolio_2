import React from 'react';
import './Footer.css';

const Footer = () => {
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <a href="#home" className="footer-logo" onClick={(e) => { e.preventDefault(); handleScrollTo('home'); }}>
            <span>DEVANSH</span><span className="logo-dot">.P</span>
          </a>
          <p className="footer-tagline">Aspiring SDE &amp; Full-Stack Developer</p>
        </div>

        <ul className="footer-links">
          <li>
            <a href="#about" onClick={(e) => { e.preventDefault(); handleScrollTo('about'); }}>
              About
            </a>
          </li>
          <li>
            <a href="#skills" onClick={(e) => { e.preventDefault(); handleScrollTo('skills'); }}>
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" onClick={(e) => { e.preventDefault(); handleScrollTo('projects'); }}>
              Projects
            </a>
          </li>
          <li>
            <a href="#achievements" onClick={(e) => { e.preventDefault(); handleScrollTo('achievements'); }}>
              Achievements
            </a>
          </li>
          <li>
            <a href="#education" onClick={(e) => { e.preventDefault(); handleScrollTo('education'); }}>
              Education
            </a>
          </li>
          <li>
            <a href="#certifications" onClick={(e) => { e.preventDefault(); handleScrollTo('certifications'); }}>
              Certifications
            </a>
          </li>
          <li>
            <a href="#contact" onClick={(e) => { e.preventDefault(); handleScrollTo('contact'); }}>
              Contact
            </a>
          </li>
        </ul>

        <div className="footer-bottom">
          <p className="copyright">&copy; 2026 Devansh Parashar. All rights reserved.</p>
          <button 
            className="back-to-top"
            onClick={() => handleScrollTo('home')}
            aria-label="Scroll to top"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="12" y1="19" x2="12" y2="5" />
              <polyline points="5 12 12 5 19 12" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
