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
            <h4 className="features-title">🎯 Core Features</h4>
            <ul className="features-list">
              {projectData.features.map((feature, index) => (
                <li key={index} className="feature-item">{feature}</li>
              ))}
            </ul>
          </div>

          <div className="project-features">
            <h4 className="features-title">📋 Task Management</h4>
            <ul className="features-list">
              {projectData.taskFeatures.map((feature, index) => (
                <li key={index} className="feature-item">{feature}</li>
              ))}
            </ul>
          </div>

          <div className="project-features">
            <h4 className="features-title">🎯 Lead Management</h4>
            <ul className="features-list">
              {projectData.leadFeatures.map((feature, index) => (
                <li key={index} className="feature-item">{feature}</li>
              ))}
            </ul>
          </div>

          <div className="project-tech">
            <h4 className="tech-title">⚡ Technologies Used</h4>
            <div className="tech-stack">
              {projectData.tech.map((tech, index) => (
                <span key={index} className="tech-item">{tech}</span>
              ))}
            </div>
          </div>

          <div className="project-rewards">
            <h4 className="rewards-title">🏆 Skills Developed</h4>
            <p className="rewards-text">{projectData.rewards}</p>
          </div>

          <div className="project-actions">
            <a href="https://manage.foyr.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <span className="btn-icon">🚀</span>
              View Live Project
            </a>
          </div>
        </div>

        <div className="cta-section">
          <h3 className="cta-title">Ready to Build Something Amazing?</h3>
          <p className="cta-text">I'm actively seeking new opportunities to contribute my frontend expertise to innovative projects. Let's discuss how we can work together!</p>
          <button className="btn btn-primary" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
            <span className="btn-icon">⚔️</span>
            Let's Connect
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
