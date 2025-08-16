import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <div className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="greeting">Player 1 Ready</span>
            <span className="name">Rajesh</span>
            <span className="title">Level 99 Frontend Warrior</span>
            {/* <span className="subtitle">Vue.js & React.js Master</span> */}
            <span className="subtitle">Full Stack Warrior</span>
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
              <span className="btn-icon">🎮</span>
              View Missions
            </button>
            <button className="btn btn-secondary" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
              <span className="btn-icon">⚔️</span>
              Join Party
            </button>
          </div>
        </div>
        
        <div className="hero-visual">
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
        </div>
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
