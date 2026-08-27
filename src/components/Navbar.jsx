import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = ({ theme, setTheme }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isThemeDropdownOpen, setIsThemeDropdownOpen] = useState(false);

  const themesList = [
    {
      id: 'midnight',
      label: 'Midnight Dev',
      icon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        </svg>
      )
    },
    {
      id: 'cyberpunk',
      label: 'Cyberpunk',
      icon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      )
    },
    {
      id: 'minimal',
      label: 'Minimal White',
      icon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
        </svg>
      )
    },
    {
      id: 'terminal',
      label: 'Terminal Mode',
      icon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="4 17 10 11 4 5" />
          <line x1="12" y1="19" x2="20" y2="19" />
        </svg>
      )
    }
  ];

  const getThemeIcon = (currentTheme) => {
    const found = themesList.find(t => t.id === currentTheme);
    return found ? found.icon : themesList[0].icon;
  };

  const getThemeLabel = (currentTheme) => {
    const found = themesList.find(t => t.id === currentTheme);
    return found ? found.label : 'Theme';
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Architecture', id: 'architecture' },
    { name: 'Achievements', id: 'achievements' },
    { name: 'Education', id: 'education' },
    { name: 'Certifications', id: 'certifications' },
    { name: 'Contact', id: 'contact' }
  ];

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (isThemeDropdownOpen && !e.target.closest('.theme-switcher')) {
        setIsThemeDropdownOpen(false);
      }
    };
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, [isThemeDropdownOpen]);

  useEffect(() => {
    const handleScroll = () => {
      // Add sticky class on scroll
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Check current section active status
      const scrollPosition = window.scrollY + 150; // offset
      for (const link of navLinks) {
        const el = document.getElementById(link.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = (id) => {
    setIsMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container container">
        <a href="#home" className="navbar-logo" onClick={(e) => { e.preventDefault(); handleLinkClick('home'); }}>
          <span className="logo-icon">&lt;&sol;&gt;</span>
          <span className="logo-text">DEVANSH</span>
          <span className="logo-dot">.P</span>
        </a>

        {/* Controls block wrapper for alignments */}
        <div className="navbar-controls">
          {/* Theme Switcher */}
          <div className="theme-switcher">
            <button 
              className="theme-toggle-btn"
              onClick={() => setIsThemeDropdownOpen(!isThemeDropdownOpen)}
              aria-label="Select Theme"
              aria-expanded={isThemeDropdownOpen}
            >
              {getThemeIcon(theme)}
              <span className="theme-active-name">{getThemeLabel(theme)}</span>
              <svg className="dropdown-arrow" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            
            {isThemeDropdownOpen && (
              <ul className="theme-dropdown-menu">
                {themesList.map((t) => (
                  <li key={t.id}>
                    <button 
                      className={`theme-dropdown-item ${theme === t.id ? 'active' : ''}`}
                      onClick={() => {
                        setTheme(t.id);
                        setIsThemeDropdownOpen(false);
                      }}
                    >
                      {t.icon}
                      <span>{t.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Mobile menu trigger */}
          <button 
            className={`mobile-menu-btn ${isMobileMenuOpen ? 'open' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle Navigation Menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>

        {/* Nav Links */}
        <ul className={`nav-links ${isMobileMenuOpen ? 'mobile-active' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.id} className="nav-item">
              <a
                href={`#${link.id}`}
                className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.id);
                }}
              >
                {link.name}
                <span className="active-dot-indicator"></span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
