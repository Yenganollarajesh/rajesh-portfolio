import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Character Stats</h2>
          <p className="section-subtitle">Unlock the secrets of this coding warrior</p>
        </div>
        
        <div className="about-content">
          <div className="about-left">
            <div className="experience-timeline">
                <h3 className="about-subtitle">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ display: 'inline', marginRight: '0.5rem' }}>
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/>
                    <line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                  Quest Log
                </h3>
              <div className="timeline-item">
                <div className="timeline-date">Oct 2024 - Nov 2024</div>
                <div className="timeline-content">
                  <h4>Zysk Technologies Homepage</h4>
                  <p>Developed a static website for Zysk Technologies showcasing their services and company information</p>
                  <a 
                    href="https://zysk-technologies-nu.vercel.app" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: '0.5rem' }}>
                      <circle cx="12" cy="12" r="10"/>
                      <line x1="2" y1="12" x2="22" y2="12"/>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                    </svg>
                    View Live Project
                  </a>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-date">Nov 2024 - Dec 2024</div>
                <div className="timeline-content">
                  <h4>Task Tracker Application</h4>
                  <p>Built a task management application to help users organize and track their daily tasks</p>
                  <a 
                    href="https://task-tracker-gray-eta.vercel.app" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: '0.5rem' }}>
                      <circle cx="12" cy="12" r="10"/>
                      <line x1="2" y1="12" x2="22" y2="12"/>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                    </svg>
                    View Live Project
                  </a>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-date">Dec 2024 - Present</div>
                <div className="timeline-content">
                  <h4>Frontend Developer at AlterSquare</h4>
                  <p>Building cutting-edge web applications with modern technologies. 
                  Developed a comprehensive Project Management Platform integrating calendar scheduling, 
                  task management, and lead tracking with real-time notifications.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="about-right">
            <div className="about-description">
                <h3 className="about-subtitle">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ display: 'inline', marginRight: '0.5rem' }}>
                    <circle cx="12" cy="12" r="10"/>
                    <circle cx="12" cy="12" r="6"/>
                    <circle cx="12" cy="12" r="2"/>
                  </svg>
                  Mission Statement
                </h3>
              <p>
                I am a motivated Frontend Developer with 8 months of hands-on experience, 
                primarily focused on front-end development using JavaScript and Vue.js. 
                I specialize in building reliable and high-performing applications, with 
                a strong emphasis on delivering smooth, user-friendly experiences.
              </p>
              
                              <h3 className="about-subtitle">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ display: 'inline', marginRight: '0.5rem' }}>
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                  </svg>
                  Core Abilities
                </h3>
              <p>
                Known for attention to detail and a passion for creating practical, 
                efficient solutions. I thrive on conquering coding challenges and 
                transforming complex requirements into elegant, user-centric applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
