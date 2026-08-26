import React, { useEffect, useRef, useState } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [hoverText, setHoverText] = useState('');

  useEffect(() => {
    // Check if device supports touch or if user prefers reduced motion
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (isTouchDevice || prefersReducedMotion) {
      return;
    }

    setIsVisible(true);

    const onMouseMove = (e) => {
      const { clientX: x, clientY: y } = e;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
    };

    const onMouseOver = (e) => {
      // Check if target or parent matches interactive elements
      const target = e.target;
      const interactiveEl = target.closest('a, button, input, textarea, [role="button"], .project-card, .skills-card, .node-marker, .pipeline-node');
      
      if (interactiveEl) {
        setIsHovered(true);
        // Custom interactive labels
        if (interactiveEl.tagName === 'A' || interactiveEl.closest('.nav-links')) {
          setHoverText('LINK');
        } else if (interactiveEl.classList.contains('project-card') || interactiveEl.closest('.project-card')) {
          setHoverText('VIEW');
        } else if (interactiveEl.tagName === 'BUTTON' || interactiveEl.closest('button')) {
          setHoverText('CLICK');
        } else {
          setHoverText('EXPAND');
        }
      } else {
        setIsHovered(false);
        setHoverText('');
      }
    };

    const onMouseLeave = () => {
      if (dotRef.current) dotRef.current.style.opacity = '0';
      if (ringRef.current) ringRef.current.style.opacity = '0';
    };

    const onMouseEnter = () => {
      if (dotRef.current) dotRef.current.style.opacity = '1';
      if (ringRef.current) ringRef.current.style.opacity = '1';
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <div ref={dotRef} className="cursor-dot"></div>
      <div ref={ringRef} className={`cursor-ring ${isHovered ? 'hovered' : ''}`}>
        {hoverText && <span className="cursor-text">{hoverText}</span>}
      </div>
    </>
  );
};

export default CustomCursor;
