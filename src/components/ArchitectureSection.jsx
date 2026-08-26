import React, { useState } from 'react';
import './ArchitectureSection.css';

const ArchitectureSection = () => {
  const [activeNode, setActiveNode] = useState(0);

  const nodes = [
    {
      id: 0,
      title: 'CLIENT INTERFACE',
      tech: 'React.js, Context API',
      role: 'Frontend Presentation Layer',
      details: 'Renders the interactive glassmorphic UI. Employs state management through React Context and custom hooks to drive low-latency DOM re-renders and smooth UI changes.',
      status: 'active'
    },
    {
      id: 1,
      title: 'AUTH GATEWAY',
      tech: 'JWT, HTTP-only Cookies',
      role: 'Access Control & Security',
      details: 'Inspects requests, validates JWT authorization tokens, and decrypts payloads. Relies on HTTP-only cookies to eliminate security vectors like XSS token theft.',
      status: 'active'
    },
    {
      id: 2,
      title: 'API CORE CONTROLLER',
      tech: 'Node.js, Express.js Router',
      role: 'Business Logic Layer',
      details: 'Receives and handles RESTful requests. Coordinates operations, processes queries, compiles data payloads, and handles error boundaries cleanly.',
      status: 'active'
    },
    {
      id: 3,
      title: 'REAL-TIME NETWORK GATEWAY',
      tech: 'Socket.IO, WebRTC Signaling',
      role: 'Bidirectional Stream Tunnel',
      details: 'Maintains long-running TCP sockets for instant messaging. Serves as the signaling plane that negotiates direct peer-to-peer WebRTC connections for video communication.',
      status: 'active'
    },
    {
      id: 4,
      title: 'DATABASE & MEDIA ENGINE',
      tech: 'MongoDB, Cloudinary API',
      role: 'Persistence & Asset Store',
      details: 'Persists JSON document databases (User structures, chat historical records) with indexing. Offloads media file compression, hosting, and secure delivery to CDN cloud buckets.',
      status: 'active'
    }
  ];

  return (
    <section id="architecture" className="section architecture-section reveal">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">System Engineering</span>
          <h2 className="section-title">Technical Architecture Flow</h2>
        </div>

        <div className="architecture-grid">
          {/* Node flow diagram */}
          <div className="flow-visual-box card">
            <div className="flow-lines-overlay">
              <svg className="flow-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path 
                  d="M 15,50 Q 32.5,20 50,50 T 85,50" 
                  fill="none" 
                  stroke="rgba(139, 92, 246, 0.1)" 
                  strokeWidth="2" 
                />
                <path 
                  d="M 15,50 Q 32.5,20 50,50 T 85,50" 
                  fill="none" 
                  stroke="url(#flow-gradient)" 
                  strokeWidth="2" 
                  strokeDasharray="15 30"
                  className="pulsing-dash-path"
                />
                <defs>
                  <linearGradient id="flow-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="var(--accent-purple)" />
                    <stop offset="50%" stopColor="var(--accent-cyan)" />
                    <stop offset="100%" stopColor="var(--accent-emerald)" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="nodes-container">
              {nodes.map((node, index) => (
                <button
                  key={node.id}
                  className={`arch-node-btn ${activeNode === index ? 'active' : ''}`}
                  onClick={() => setActiveNode(index)}
                  aria-label={`View architecture node: ${node.title}`}
                >
                  <div className="node-icon-wrapper">
                    <span className="node-num">{index + 1}</span>
                    <span className="node-pulse-ring"></span>
                  </div>
                  <span className="node-title-short">{node.title.split(' ')[0]}</span>
                </button>
              ))}
            </div>

            {/* Custom Interactive flow trace */}
            <div className="flow-legend">
              <span className="legend-item"><span className="indicator client"></span> Request Initiated</span>
              <span className="legend-item"><span className="indicator security"></span> Security Cleared</span>
              <span className="legend-item"><span className="indicator db"></span> Payload Committed</span>
            </div>
          </div>

          {/* Node detailed specifications panel */}
          <div className="node-detail-panel card">
            <div className="panel-header">
              <span className="node-badge">NODE_ID_0{nodes[activeNode].id}</span>
              <span className="node-status-pulse">ONLINE</span>
            </div>
            
            <h3 className="node-panel-title">{nodes[activeNode].title}</h3>
            <span className="node-panel-role">{nodes[activeNode].role}</span>

            <div className="node-divider"></div>

            <div className="node-meta-group">
              <div className="meta-item">
                <span className="meta-lbl">Tech Stack:</span>
                <code className="meta-val">{nodes[activeNode].tech}</code>
              </div>
            </div>

            <p className="node-panel-desc">{nodes[activeNode].details}</p>

            <div className="node-console-simulation">
              <div className="console-prompt">&gt; tail -f /var/log/sys_arch.log</div>
              <div className="console-row">
                <span className="console-time">[{new Date().toLocaleTimeString()}]</span> Connected to {nodes[activeNode].title.toLowerCase()} pipeline...
              </div>
              <div className="console-row highlight">
                <span className="console-time">[{new Date().toLocaleTimeString()}]</span> Node state verified. Handshake latency: 12ms.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArchitectureSection;
