import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [copiedItem, setCopiedItem] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleCopy = async (text, itemName) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedItem(itemName);
      
      // Reset copied state after 2 seconds
      setTimeout(() => {
        setCopiedItem(null);
      }, 1000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const Tooltip = ({ show, message, children, hoverMessage, isHovered }) => {
    if (!show && !isHovered) return children;
    
    return (
      <div className="tooltip-container">
        {children}
        <div className="tooltip">
          {show ? message : hoverMessage}
        </div>
      </div>
    );
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-content">
        <div className="contact-info">
          <h2 className="section-title">Contact Mission Control</h2>
          <p className="section-subtitle contact-subtitle">Ready to start an epic collaboration? Get in touch!</p>
          
          <div className="contact-description section-subtitle">
            <p>
              I'm always excited to connect with fellow developers, potential collaborators, and anyone interested in creating amazing digital experiences. Whether you have a project in mind, want to discuss technology, or just want to say hello, feel free to reach out!
            </p>
          </div>
          
          <div className="contact-details">
            <div className="contact-item">
              <div className="contact-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div className="contact-text">
                <strong>Email:</strong> 
                <span className="contact-value">rajeshyenganolla@gmail.com</span>
              </div>
              <Tooltip 
                show={copiedItem === 'email'} 
                message="Copied!"
                hoverMessage="Copy Email"
                isHovered={hoveredItem === 'email'}
              >
                <button 
                  className="copy-btn"
                  onClick={() => handleCopy('rajeshyenganolla@gmail.com', 'email')}
                  onMouseEnter={() => setHoveredItem('email')}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  {copiedItem === 'email' ? (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20,6 9,17 4,12"></polyline>
                    </svg>
                  ) : (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                  )}
                </button>
              </Tooltip>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <div className="contact-text">
                <strong>Phone:</strong> 
                <span className="contact-value">+91 9052357676</span>
              </div>
              <Tooltip 
                show={copiedItem === 'phone'} 
                message="Copied!"
                hoverMessage="Copy Phone"
                isHovered={hoveredItem === 'phone'}
              >
                <button 
                  className="copy-btn"
                  onClick={() => handleCopy('+91 9052357676', 'phone')}
                  onMouseEnter={() => setHoveredItem('phone')}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  {copiedItem === 'phone' ? (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20,6 9,17 4,12"></polyline>
                    </svg>
                  ) : (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                  )}
                </button>
              </Tooltip>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <div className="contact-text">
                <strong>Alternative:</strong> 
                <span className="contact-value">+91 9392118587</span>
              </div>
              <Tooltip 
                show={copiedItem === 'alternative'} 
                message="Copied!"
                hoverMessage="Copy Phone"
                isHovered={hoveredItem === 'alternative'}
              >
                <button 
                  className="copy-btn"
                  onClick={() => handleCopy('+91 9392118587', 'alternative')}
                  onMouseEnter={() => setHoveredItem('alternative')}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  {copiedItem === 'alternative' ? (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20,6 9,17 4,12"></polyline>
                    </svg>
                  ) : (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                  )}
                </button>
              </Tooltip>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </div>
              <div className="contact-text">
                <strong>LinkedIn:</strong> 
                <a 
                  href="https://linkedin.com/in/rajeshyenganolla" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  linkedin.com/in/rajeshyenganolla
                </a>
              </div>
              <Tooltip 
                show={false} 
                message="" 
                hoverMessage="Open LinkedIn"
                isHovered={hoveredItem === 'linkedin'}
              >
                <button 
                  className="link-btn"
                  onClick={() => window.open('https://linkedin.com/in/rajeshyenganolla', '_blank')}
                  onMouseEnter={() => setHoveredItem('linkedin')}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H7M17 7V17"/>
                  </svg>
                </button>
              </Tooltip>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-1.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                </svg>
              </div>
              <div className="contact-text">
                <strong>GitHub:</strong> 
                <a 
                  href="https://github.com/Yenganollarajesh" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  github.com/Yenganollarajesh
                </a>
              </div>
              <Tooltip 
                show={false} 
                message="" 
                hoverMessage="Open GitHub"
                isHovered={hoveredItem === 'github'}
              >
                <button 
                  className="link-btn"
                  onClick={() => window.open('https://github.com/Yenganollarajesh', '_blank')}
                  onMouseEnter={() => setHoveredItem('github')}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H7M17 7V17"/>
                  </svg>
                </button>
              </Tooltip>
            </div>
          </div>
          
          <div className="contact-cta">
            <h3 className="cta-title">Ready to Start a Mission?</h3>
            <p className="cta-text">
              I'm actively seeking new opportunities to contribute my frontend expertise to innovative projects. Whether you have a project in mind or want to discuss potential collaboration, I'm always excited to hear from fellow developers and potential employers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
