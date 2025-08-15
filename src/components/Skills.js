import React from 'react';
import './Skills.css';

function Skills() {
  const skillCategories = [
    {
      name: "Frontend Arsenal",
      icon: "⚔️",
      skills: [
        { name: "HTML", level: 90, icon: "🌐" },
        { name: "CSS", level: 85, icon: "🎨" },
        { name: "JavaScript", level: 88, icon: "🛡️" },
        { name: "React.js", level: 82, icon: "⚛️" },
        { name: "Vue.js", level: 90, icon: "🎯" }
      ]
    },
    {
      name: "Backend Tools",
      icon: "🛠️",
      skills: [
        { name: "Python", level: 75, icon: "🐍" },
        { name: "Java", level: 70, icon: "☕" },
        { name: "SQLite", level: 80, icon: "🗄️" }
      ]
    },
    {
      name: "Framework Mastery",
      icon: "🎮",
      skills: [
        { name: "Bootstrap", level: 85, icon: "🎨" },
        { name: "Responsive Design", level: 90, icon: "📱" },
        { name: "UI/UX Design", level: 80, icon: "🎭" }
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Skill Tree</h2>
          <p className="section-subtitle">Unlock the power of this coding warrior's abilities</p>
        </div>
        
        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skill-category">
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h3 className="category-name">{category.name}</h3>
              </div>
              
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-icon">{skill.icon}</span>
                      <span className="skill-name">{skill.name}</span>
                    </div>
                    
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ width: `${skill.level}%` }}>
                        <div className="skill-glow"></div>
                      </div>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="skills-summary">
          <div className="summary-card">
            <h3 className="summary-title">🎯 Specialization</h3>
            <p className="summary-text">
              Frontend development with Vue.js and React.js expertise. 
              Building reliable, high-performing applications with smooth user experiences.
            </p>
          </div>
          
          <div className="summary-card">
            <h3 className="summary-title">⚡ Core Strength</h3>
            <p className="summary-text">
              Attention to detail and passion for creating practical, 
              efficient solutions that solve real-world problems.
            </p>
          </div>
          
          <div className="summary-card">
            <h3 className="summary-title">🚀 Growth Path</h3>
            <p className="summary-text">
              Continuously expanding skills in modern web technologies 
              and AI integration for enhanced user experiences.
            </p>
          </div>
        </div>
        
        <div className="skills-cta">
          <h3 className="cta-title">Ready to Level Up Together?</h3>
          <p className="cta-text">Join forces with this skilled warrior to create epic digital experiences!</p>
          <button className="btn btn-primary" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
            <span className="btn-icon">⚔️</span>
            Start Collaboration
          </button>
        </div>
      </div>
    </section>
  );
}

export default Skills;
