import React from 'react';
import './Projects.css';

const Projects = () => {
  const projectData = {
    title: "Project Management Platform (Foyr)",
    description: "A comprehensive project management solution designed to streamline team collaboration, task tracking, and client engagement with advanced project management capabilities.",
    features: [
      "Project Creation & Management",
      "Task & Subtask Management",
      "Activity Tracking & Timeline",
      "File Attachments & Storage",
      "Kanban & List Views",
      "Lead Management System",
      "Meeting Scheduling & Calendar",
      "Role-Based Access Control (Owner & Child Users)"
    ],
    taskFeatures: [
      "Task Types: Task, Issue, Milestone",
      "Task States: Todo, In Progress, Done",
      "Priority Levels: High, Medium, Low",
      "Due Dates & Assignees",
      "Subtasks & Dependencies"
    ],
    leadFeatures: [
      "Lead Stages: New Lead, Qualified, Hot Lead, Contracted",
      "Follow-up Tracking",
      "Deal Estimation",
      "Last Interaction Logging",
      "Meeting Scheduling"
    ],
    difficulty: "Advanced",
    rewards: "Frontend Development, Vue.js Ecosystem, State Management, Responsive Design, User Interface Design",
    tech: ["Nuxt.js", "Vue 3", "JavaScript", "HTML", "CSS", "Pinia"]
  };

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Mission Log</h2>
          <p className="section-subtitle">Epic projects that showcase my development prowess</p>
        </div>

        <div className="project-card">
          <div className="project-header">
            <h3 className="project-title">{projectData.title}</h3>
            <div className="project-meta">
              <span className="difficulty-badge difficulty-{projectData.difficulty.toLowerCase()}">
                {projectData.difficulty}
              </span>
              <span className="project-type">Full Stack Application</span>
            </div>
          </div>

          <p className="project-description">{projectData.description}</p>

          <div className="project-features">
                <h4 className="features-title">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ display: 'inline', marginRight: '0.5rem' }}>
                    <circle cx="12" cy="12" r="10"/>
                    <circle cx="12" cy="12" r="6"/>
                    <circle cx="12" cy="12" r="2"/>
                  </svg>
                  Core Features
                </h4>
            <ul className="features-list">
              {projectData.features.map((feature, index) => (
                <li key={index} className="feature-item">{feature}</li>
              ))}
            </ul>
          </div>

          <div className="project-features">
            <h4 className="features-title">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ display: 'inline', marginRight: '0.5rem' }}>
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14,2 14,8 20,8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10,9 9,9 8,9"/>
              </svg>
              Task Management
            </h4>
            <ul className="features-list">
              {projectData.taskFeatures.map((feature, index) => (
                <li key={index} className="feature-item">{feature}</li>
              ))}
            </ul>
          </div>

          <div className="project-features">
                            <h4 className="features-title">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ display: 'inline', marginRight: '0.5rem' }}>
                    <circle cx="12" cy="12" r="10"/>
                    <circle cx="12" cy="12" r="6"/>
                    <circle cx="12" cy="12" r="2"/>
                  </svg>
                  Lead Management
                </h4>
            <ul className="features-list">
              {projectData.leadFeatures.map((feature, index) => (
                <li key={index} className="feature-item">{feature}</li>
              ))}
            </ul>
          </div>

          <div className="project-tech">
            <h4 className="tech-title">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ display: 'inline', marginRight: '0.5rem' }}>
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
              </svg>
              Technologies Used
            </h4>
            <div className="tech-stack">
              {projectData.tech.map((tech, index) => (
                <span key={index} className="tech-item">{tech}</span>
              ))}
            </div>
          </div>

          <div className="project-rewards">
            <h4 className="rewards-title">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ display: 'inline', marginRight: '0.5rem' }}>
                <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
                <path d="M6 2v3"/>
                <path d="M6 15H4.5a2.5 2.5 0 0 0 0 5H6"/>
                <path d="M6 22v-3"/>
                <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
                <path d="M18 2v3"/>
                <path d="M18 15h1.5a2.5 2.5 0 0 1 0 5H18"/>
                <path d="M18 22v-3"/>
                <path d="M12 2v20"/>
              </svg>
              Skills Developed
            </h4>
            <p className="rewards-text">{projectData.rewards}</p>
          </div>

          <div className="project-actions">
            <a href="https://manage.foyr.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                              <span className="btn-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2 2 0 0 0-2.91-.09z"/>
                    <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
                    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
                    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
                  </svg>
                </span>
              View Live Project
            </a>
          </div>
        </div>

        <div className="cta-section">
          <h3 className="cta-title">Ready to Build Something Amazing?</h3>
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
};

export default Projects;
