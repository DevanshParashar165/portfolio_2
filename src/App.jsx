import React, { useState, useEffect } from 'react';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ArchitectureSection from './components/ArchitectureSection';
import DsaHighlight from './components/DsaHighlight';
import Achievements from './components/Achievements';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!isLoaded) return;

    // Observe elements for fluid scrolling reveals
    const revealElements = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target); // keep active once triggered
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, [isLoaded]);

  // Prevent background scroll when preloader is running
  useEffect(() => {
    if (!isLoaded) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isLoaded]);

  return (
    <>
      {!isLoaded && <Preloader onComplete={() => setIsLoaded(true)} />}
      
      <div className="app-container">
        <CustomCursor />
        
        {/* Sleek background grids & neon radial glow highlights */}
        <div className="bg-grid"></div>
        <div className="bg-radial-gradient"></div>
        
        <Navbar />
        
        <main style={{ visibility: isLoaded ? 'visible' : 'hidden' }}>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <ArchitectureSection />
          <DsaHighlight />
          <Achievements />
          <Education />
          <Certifications />
          <Contact />
        </main>
        
        {isLoaded && <Footer />}
      </div>
    </>
  );
}

export default App;
