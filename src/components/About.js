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
          <div className="about-text">
            <div className="about-description">
              <h3 className="about-subtitle">🎯 Mission Statement</h3>
              <p>
                I am a motivated Frontend Developer with 8 months of hands-on experience, 
                primarily focused on front-end development using JavaScript and Vue.js. 
                I specialize in building reliable and high-performing applications, with 
                a strong emphasis on delivering smooth, user-friendly experiences.
              </p>
              
              <h3 className="about-subtitle">⚡ Core Abilities</h3>
              <p>
                Known for attention to detail and a passion for creating practical, 
                efficient solutions. I thrive on conquering coding challenges and 
                transforming complex requirements into elegant, user-centric applications.
              </p>
            </div>
            
            <div className="experience-timeline">
              <h3 className="about-subtitle">📅 Quest Log</h3>
              <div className="timeline-item">
                <div className="timeline-date">Dec 2024 - Jul 2025</div>
                <div className="timeline-content">
                  <h4>Frontend Developer</h4>
                  <p>Building cutting-edge web applications with modern technologies</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-date">Jan 2025 - July 2025</div>
                <div className="timeline-content">
                  <h4>AI-Powered Project Management Platform</h4>
                  <p>Developed a comprehensive system integrating calendar scheduling, 
                  task management, and lead tracking with real-time notifications.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="about-visual">
            <div className="skill-tree">
              <div className="skill-node primary">
                <span className="skill-icon">⚡</span>
                <span className="skill-name">Frontend</span>
                <span className="skill-level">Master</span>
              </div>
              <div className="skill-branch"></div>
              <div className="skill-node secondary">
                <span className="skill-icon">🎯</span>
                <span className="skill-name">Vue.js</span>
                <span className="skill-level">Expert</span>
              </div>
              <div className="skill-branch"></div>
              <div className="skill-node secondary">
                <span className="skill-icon">⚔️</span>
                <span className="skill-name">React.js</span>
                <span className="skill-level">Expert</span>
              </div>
              <div className="skill-branch"></div>
              <div className="skill-node secondary">
                <span className="skill-icon">🛡️</span>
                <span className="skill-name">JavaScript</span>
                <span className="skill-level">Expert</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
