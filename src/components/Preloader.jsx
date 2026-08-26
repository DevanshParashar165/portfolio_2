import React, { useState, useEffect } from 'react';
import './Preloader.css';

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [logIndex, setLogIndex] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  const logs = [
    'Initializing SDE client environment...',
    'Loading components (Navbar, Hero, About)...',
    'Compiling data structures & algorithms...',
    'Establishing secure local session context...',
    'Mounting system design nodes...',
    'Handshake complete. Launching Devansh.P portfolio...'
  ];

  useEffect(() => {
    // Progress increment timer
    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          return 100;
        }
        // Jump randomly to simulate varying network speeds/compilation steps
        const step = Math.floor(Math.random() * 15) + 5;
        return Math.min(prev + step, 100);
      });
    }, 150);

    return () => clearInterval(progressTimer);
  }, []);

  useEffect(() => {
    // Cycle terminal logs based on progress thresholds
    const interval = 100 / logs.length;
    const currentLogIdx = Math.min(Math.floor(progress / interval), logs.length - 1);
    if (currentLogIdx !== logIndex) {
      setLogIndex(currentLogIdx);
    }

    if (progress === 100) {
      const fadeTimeout = setTimeout(() => {
        setFadeOut(true);
        const completeTimeout = setTimeout(() => {
          onComplete();
        }, 600); // match CSS fade-out duration
        return () => clearTimeout(completeTimeout);
      }, 300); // slight delay at 100%
      return () => clearTimeout(fadeTimeout);
    }
  }, [progress, logIndex, onComplete]);

  return (
    <div className={`preloader-wrapper ${fadeOut ? 'fade-out' : ''}`}>
      <div className="preloader-content">
        <div className="preloader-brand">
          <span className="preloader-logo-text">DEVANSH</span>
          <span className="preloader-logo-dot">.P</span>
        </div>

        <div className="preloader-terminal">
          <div className="terminal-header">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
            <span className="terminal-title">bash --sde-init</span>
          </div>
          <div className="terminal-body">
            <div className="terminal-log-row">
              <span className="terminal-prompt">$</span> {logs[logIndex]}
            </div>
          </div>
        </div>

        <div className="preloader-progress-container">
          <div className="preloader-progress-bar" style={{ width: `${progress}%` }}></div>
          <div className="preloader-percentage">{progress}%</div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
