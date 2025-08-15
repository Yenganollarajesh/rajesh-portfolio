import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Contact Mission Control</h2>
          <p className="section-subtitle">Ready to start an epic collaboration? Send a transmission!</p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3 className="contact-subtitle">🎮 Mission Briefing</h3>
            <p className="contact-description">
              Ready to level up your digital presence? Whether you need a frontend warrior 
              for your next project or want to discuss exciting opportunities, I'm here to help!
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <div className="contact-text">
                  <h4>Email</h4>
                  <p>rajesh@example.com</p>
                </div>
              </div>
              
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <div className="contact-text">
                  <h4>Location</h4>
                  <p>Available for remote collaboration worldwide</p>
                </div>
              </div>
              
              <div className="contact-item">
                <span className="contact-icon">⚡</span>
                <div className="contact-text">
                  <h4>Response Time</h4>
                  <p>Within 24 hours</p>
                </div>
              </div>
            </div>
            
            <div className="contact-cta">
              <h4 className="cta-title">🚀 Ready to Launch?</h4>
              <p className="cta-text">
                Let's create something amazing together! Whether it's a new project, 
                collaboration opportunity, or just a friendly chat about coding.
              </p>
            </div>
          </div>
          
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  <span className="label-icon">👤</span>
                  Commander Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Enter your name"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  <span className="label-icon">📧</span>
                  Transmission Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Enter your email"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject" className="form-label">
                  <span className="label-icon">🎯</span>
                  Mission Type
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="What's your mission?"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  <span className="label-icon">💬</span>
                  Mission Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                  placeholder="Describe your mission requirements..."
                  rows="5"
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary submit-btn">
                <span className="btn-icon">🚀</span>
                Launch Mission
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
