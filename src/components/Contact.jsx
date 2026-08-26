import React, { useState, useEffect } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({
    type: null, // 'success' | 'error' | null
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [dbLogs, setDbLogs] = useState([]); // Sessions message storage
  const [compileSteps, setCompileSteps] = useState([]); // Running console logs
  const { name, email, subject, message } = formData;

  // Retrieve existing messages from localStorage on load
  useEffect(() => {
    try {
      const stored = localStorage.getItem('sde_contact_logs');
      if (stored) {
        setDbLogs(JSON.parse(stored));
      }
    } catch (e) {
      console.error('Failed to load local contact records:', e);
    }
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, message: '' });
    setCompileSteps([]);

    const steps = [
      'Establishing tunnel handshake...',
      'Validating payload structure...',
      'Running security check on email...',
      'Compiling database transaction query...',
      'Writing document to local database context...',
      'Commit complete. Connection closed.'
    ];

    // Trigger sequential console steps
    steps.forEach((step, index) => {
      setTimeout(() => {
        setCompileSteps((prev) => [...prev, `[SYS] ${step}`]);
        
        // Final completion logic
        if (index === steps.length - 1) {
          const newMessage = {
            id: Date.now(),
            name: formData.name,
            email: formData.email,
            subject: formData.subject || 'N/A',
            message: formData.message,
            timestamp: new Date().toLocaleTimeString()
          };

          try {
            const updatedLogs = [newMessage, ...dbLogs];
            localStorage.setItem('sde_contact_logs', JSON.stringify(updatedLogs));
            setDbLogs(updatedLogs);
            
            setStatus({
              type: 'success',
              message: 'Your message has been compiled and committed to client-side localStorage database!'
            });
            setFormData({
              name: '',
              email: '',
              subject: '',
              message: ''
            });
          } catch (err) {
            setStatus({
              type: 'error',
              message: 'Failed to write to client storage.'
            });
          } finally {
            setLoading(false);
          }
        }
      }, (index + 1) * 300); // 300ms staggered delay
    });
  };

  const clearDbLogs = () => {
    try {
      localStorage.removeItem('sde_contact_logs');
      setDbLogs([]);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <section id="contact" className="section contact-section reveal">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Get In Touch</span>
          <h2 className="section-title">Contact</h2>
        </div>

        <div className="contact-grid">
          {/* Methods and information */}
          <div className="contact-info">
            <h3 className="contact-heading">Let's build something meaningful.</h3>
            <p className="contact-text">
              I am open to discuss Software Development Engineer (SDE) roles, full-stack opportunities, internships, or technical collaborations. Feel free to reach out via email, phone, or form submission.
            </p>

            <div className="contact-methods">
              <div className="contact-method-card card">
                <div className="method-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div className="method-details">
                  <h4>Email</h4>
                  <a href="mailto:parashardevansh165@gmail.com" className="method-link">
                    parashardevansh165@gmail.com
                  </a>
                </div>
              </div>

              <div className="contact-method-card card">
                <div className="method-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div className="method-details">
                  <h4>Phone</h4>
                  <a href="tel:+918923948499" className="method-link">
                    +91-8923948499
                  </a>
                </div>
              </div>

              <div className="contact-method-card card">
                <div className="method-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div className="method-details">
                  <h4>Location</h4>
                  <p className="method-value">Meerut, Uttar Pradesh, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="contact-form-container card">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Full Name <span className="required">*</span></label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  disabled={loading}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address <span className="required">*</span></label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  disabled={loading}
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={subject}
                  onChange={handleChange}
                  placeholder="Collaboration Opportunities"
                  disabled={loading}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message <span className="required">*</span></label>
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  rows="4"
                  required
                  disabled={loading}
                ></textarea>
              </div>

              {/* Staggered execution terminal log display */}
              {compileSteps.length > 0 && (
                <div className="contact-compile-terminal">
                  <div className="terminal-prompt">$ node compile_message.js</div>
                  {compileSteps.map((log, idx) => (
                    <div key={idx} className="terminal-step">{log}</div>
                  ))}
                </div>
              )}

              {status.type && (
                <div className={`form-status ${status.type === 'success' ? 'status-success' : 'status-error'}`}>
                  {status.type === 'success' ? (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="status-icon">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  ) : (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="status-icon">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="8" x2="12" y2="12" />
                      <line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                  )}
                  <span>{status.message}</span>
                </div>
              )}

              <button type="submit" className="btn btn-primary btn-submit" disabled={loading}>
                {loading ? (
                  <>
                    <span className="spinner"></span>
                    <span>Compiling Payload...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Database log table - client log persistence visualization */}
        {dbLogs.length > 0 && (
          <div className="contact-db-logs card">
            <div className="db-logs-header">
              <span className="db-logs-title-lbl">CLIENT_DB_RECORDS // LOCALSTORAGE</span>
              <button className="clear-logs-btn" onClick={clearDbLogs}>
                Flush Database Tables
              </button>
            </div>
            
            <div className="logs-scroller">
              <table className="logs-table">
                <thead>
                  <tr>
                    <th>Timestamp</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Subject</th>
                    <th>Message Snippet</th>
                  </tr>
                </thead>
                <tbody>
                  {dbLogs.map((log) => (
                    <tr key={log.id}>
                      <td className="font-mono text-cyan">{log.timestamp}</td>
                      <td>{log.name}</td>
                      <td>{log.email}</td>
                      <td>{log.subject}</td>
                      <td className="log-msg-td">{log.message}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
