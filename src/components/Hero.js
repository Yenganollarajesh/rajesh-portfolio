import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <div className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            {/* <span className="greeting">Player 1 Ready</span> */}
            <span className="name">Rajesh</span>
            <span className="title">Full Stack Warrior</span>
            {/* <span className="subtitle">Vue.js & React.js Master</span> */}
          </h1>
          
          <p className="hero-description">
            Experienced Frontend Developer with 8 months of proven expertise in building enterprise-level applications. 
            Specializing in JavaScript, Vue.js, and React.js, I deliver robust, scalable solutions that 
            drive business value. Currently leading frontend development at AlterSquare, crafting 
            sophisticated project management systems used by real companies.
          </p>
          
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-label">EXPERIENCE</span>
              <span className="stat-value">8 Months</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">PROJECTS</span>
              <span className="stat-value">2+ Live</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">CURRENT</span>
              <span className="stat-value">AlterSquare</span>
            </div>
          </div>
          
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
              <span className="btn-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </span>
              View Missions
            </button>
            <button className="btn btn-secondary" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
              <span className="btn-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </span>
              Join Party
            </button>
          </div>
        </div>
        
        {/* <div className="hero-visual">
          <div className="hero-image-placeholder">
            <div className="profile-circle">
              <div className="pixel-avatar">
                <div className="pixel-row">
                  <div className="pixel"></div>
                  <div className="pixel active"></div>
                  <div className="pixel active"></div>
                  <div className="pixel"></div>
                </div>
                <div className="pixel-row">
                  <div className="pixel active"></div>
                  <div className="pixel active"></div>
                  <div className="pixel active"></div>
                  <div className="pixel active"></div>
                </div>
                <div className="pixel-row">
                  <div className="pixel active"></div>
                  <div className="pixel"></div>
                  <div className="pixel"></div>
                  <div className="pixel active"></div>
                </div>
                <div className="pixel-row">
                  <div className="pixel active"></div>
                  <div className="pixel active"></div>
                  <div className="pixel active"></div>
                  <div className="pixel active"></div>
                </div>
              </div>
              <div className="level-badge">99</div>
            </div>
          </div>
        </div> */}
      </div>
      
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
        <span>Press SPACE to continue</span>
      </div>
      
      <div className="game-ui">
        <div className="ui-corner top-left"></div>
        <div className="ui-corner top-right"></div>
        <div className="ui-corner bottom-left"></div>
        <div className="ui-corner bottom-right"></div>
      </div>
    </div>
  );
}

export default Hero;
