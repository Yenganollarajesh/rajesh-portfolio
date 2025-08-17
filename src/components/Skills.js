import React from 'react';
import './Skills.css';

function Skills() {
  const skillCategories = [
    {
      name: "Frontend Arsenal",
      icon: "sword",
      skills: [
        { name: "HTML", level: 90, icon: "globe" },
        { name: "CSS", level: 85, icon: "palette" },
        { name: "JavaScript", level: 88, icon: "shield" },
        { name: "React.js", level: 82, icon: "atom" },
        { name: "Vue.js", level: 90, icon: "target" },
        { name: "Nuxt.js", level: 88, icon: "rocket" },
        { name: "Pinia", level: 85, icon: "package" }
      ]
    },
    {
      name: "Backend Tools",
      icon: "wrench",
      skills: [
        { name: "Python", level: 75, icon: "code" },
        { name: "Java", level: 70, icon: "coffee" },
        { name: "SQLite", level: 80, icon: "database" }
      ]
    },
    {
      name: "Framework Mastery",
      icon: "gamepad",
      skills: [
        { name: "Bootstrap", level: 85, icon: "palette" },
        { name: "Responsive Design", level: 90, icon: "smartphone" },
        { name: "Vuetify", level: 70, icon: "palette" }
        // { name: "UI/UX Design", level: 80, icon: "theater" }
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-content">
        <div className="section-header">
          <h2 className="section-title">Skill Tree</h2>
          <p className="section-subtitle">Unlock the power of this coding warrior's abilities</p>
        </div>
        
        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skill-category">
              <div className="category-header">
                <span className="category-icon">
                  {category.icon === 'sword' && (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                      <path d="M9 17l-5 5"/>
                    </svg>
                  )}
                  {category.icon === 'wrench' && (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                      <path d="M9 17l-5 5"/>
                    </svg>
                  )}
                  {category.icon === 'gamepad' && (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="6" width="20" height="12" rx="2" ry="2"/>
                      <line x1="6" y1="12" x2="6" y2="12.01"/>
                      <line x1="10" y1="12" x2="10" y2="12.01"/>
                      <line x1="14" y1="12" x2="14" y2="12.01"/>
                      <line x1="18" y1="12" x2="18" y2="12.01"/>
                      <line x1="6" y1="16" x2="6" y2="16.01"/>
                      <line x1="10" y1="16" x2="10" y2="16.01"/>
                      <line x1="14" y1="16" x2="14" y2="16.01"/>
                      <line x1="18" y1="16" x2="18" y2="16.01"/>
                    </svg>
                  )}
                </span>
                <h3 className="category-name">{category.name}</h3>
              </div>
              
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-icon">
                        {skill.icon === 'globe' && (
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10"/>
                            <line x1="2" y1="12" x2="22" y2="12"/>
                            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                          </svg>
                        )}
                        {skill.icon === 'palette' && (
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="13.5" cy="6.5" r=".5"/>
                            <circle cx="17.5" cy="10.5" r=".5"/>
                            <circle cx="8.5" cy="7.5" r=".5"/>
                            <circle cx="6.5" cy="12.5" r=".5"/>
                            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>
                          </svg>
                        )}
                        {skill.icon === 'shield' && (
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                          </svg>
                        )}
                        {skill.icon === 'atom' && (
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="1"/>
                            <path d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5z"/>
                            <path d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5z"/>
                          </svg>
                        )}
                        {skill.icon === 'target' && (
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10"/>
                            <circle cx="12" cy="12" r="6"/>
                            <circle cx="12" cy="12" r="2"/>
                          </svg>
                        )}
                        {skill.icon === 'rocket' && (
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2 2 0 0 0-2.91-.09z"/>
                            <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
                            <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
                            <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
                          </svg>
                        )}
                        {skill.icon === 'package' && (
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="16.5" y1="9.4" x2="7.55" y2="4.24"/>
                            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                            <polyline points="3.27,6.96 12,12.01 20.73,6.96"/>
                          </svg>
                        )}
                        {skill.icon === 'code' && (
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="16,18 22,12 16,6"/>
                            <polyline points="8,6 2,12 8,18"/>
                          </svg>
                        )}
                        {skill.icon === 'coffee' && (
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M18 8h1a4 4 0 0 1 0 8h-1"/>
                            <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/>
                            <line x1="6" y1="1" x2="6" y2="4"/>
                            <line x1="10" y1="1" x2="10" y2="4"/>
                            <line x1="14" y1="1" x2="14" y2="4"/>
                          </svg>
                        )}
                        {skill.icon === 'database' && (
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <ellipse cx="12" cy="5" rx="9" ry="3"/>
                            <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
                            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
                          </svg>
                        )}
                        {skill.icon === 'smartphone' && (
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
                            <line x1="12" y1="18" x2="12.01" y2="18"/>
                          </svg>
                        )}
                      </span>
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
            <h3 className="summary-title">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ display: 'inline', marginRight: '0.5rem' }}>
                <circle cx="12" cy="12" r="10"/>
                <circle cx="12" cy="12" r="6"/>
                <circle cx="12" cy="12" r="2"/>
              </svg>
              Specialization
            </h3>
            <p className="summary-text">
              Frontend development with Vue.js and React.js expertise. 
              Building reliable, high-performing applications with smooth user experiences.
            </p>
          </div>
          
          <div className="summary-card">
            <h3 className="summary-title">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ display: 'inline', marginRight: '0.5rem' }}>
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
              </svg>
              Core Strength
            </h3>
            <p className="summary-text">
              Attention to detail and passion for creating practical, 
              efficient solutions that solve real-world problems.
            </p>
          </div>
          
          <div className="summary-card">
            <h3 className="summary-title">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ display: 'inline', marginRight: '0.5rem' }}>
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2 2 0 0 0-2.91-.09z"/>
                <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
                <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
                <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
              </svg>
              Growth Path
            </h3>
            <p className="summary-text">
              Continuously expanding skills in modern web technologies 
              and AI integration for enhanced user experiences.
            </p>
          </div>
        </div>
        
        <div className="skills-cta">
          <h3 className="cta-title">Ready to Level Up Together?</h3>
          <p className="cta-text">I'm actively seeking new opportunities to contribute my frontend expertise to innovative projects. Let's discuss how we can work together!</p>
          <button className="btn btn-primary" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
                            <span className="btn-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                    <path d="M9 17l-5 5"/>
                  </svg>
                </span>
            Let's Connect
          </button>
        </div>
      </div>
    </section>
  );
}

export default Skills;
