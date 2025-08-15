import React from 'react';
import './Projects.css';

function Projects() {
  const projects = [
    {
      id: 1,
      title: "AI-Powered Project Management Platform",
      description: "A comprehensive project management system designed to streamline team collaboration, task tracking, and client engagement.",
      features: [
        "Meeting scheduling interface",
        "Task and issue management system",
        "Role-based authentication system",
        "Responsive dashboard",
        "Lead management and follow-up tracking",
        "File upload system with cloud storage"
      ],
      technologies: ["Vue.js", "JavaScript", "AI Integration", "Real-time Notifications"],
      image: "🎯",
      difficulty: "Legendary",
      rewards: "Team Collaboration, Client Engagement, Project Health Monitoring"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Mission Log</h2>
          <p className="section-subtitle">Epic quests completed and legendary projects conquered</p>
        </div>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-header">
                <div className="project-icon">{project.image}</div>
                <div className="project-meta">
                  <span className="project-difficulty">{project.difficulty}</span>
                  <span className="project-type">Main Quest</span>
                </div>
              </div>
              
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              <div className="project-features">
                <h4 className="features-title">🎮 Key Features Unlocked:</h4>
                <ul className="features-list">
                  {project.features.map((feature, index) => (
                    <li key={index} className="feature-item">
                      <span className="feature-icon">✅</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="project-tech">
                <h4 className="tech-title">⚔️ Weapons Used:</h4>
                <div className="tech-tags">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              
              <div className="project-rewards">
                <h4 className="rewards-title">🏆 Rewards Earned:</h4>
                <p className="rewards-text">{project.rewards}</p>
              </div>
              
              <div className="project-actions">
                <button className="btn btn-primary">
                  <span className="btn-icon">🎮</span>
                  View Mission Details
                </button>
                <button className="btn btn-secondary">
                  <span className="btn-icon">⚔️</span>
                  Deploy Code
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="projects-cta">
          <h3 className="cta-title">Ready for the Next Mission?</h3>
          <p className="cta-text">Join forces with this coding warrior to create epic digital experiences!</p>
          <button className="btn btn-outline" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
            <span className="btn-icon">🚀</span>
            Start New Quest
          </button>
        </div>
      </div>
    </section>
  );
}

export default Projects;
