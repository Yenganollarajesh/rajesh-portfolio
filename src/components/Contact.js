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
      }, 2000);
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
          <p className="contact-subtitle">Ready to start an epic collaboration? Get in touch!</p>
          
          <div className="contact-description">
            <p>
              I'm always excited to connect with fellow developers, potential collaborators, and anyone interested in creating amazing digital experiences. Whether you have a project in mind, want to discuss technology, or just want to say hello, feel free to reach out!
            </p>
          </div>
          
          <div className="contact-details">
            <div className="contact-item">
              <div className="contact-icon">📧</div>
              <div className="contact-text">
                <strong>Email:</strong> 
                <span className="contact-value">rajeshyenganolla@gmail.com</span>
              </div>
              <Tooltip 
                show={copiedItem === 'email'} 
                message="Email copied!" 
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
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20,6 9,17 4,12"></polyline>
                    </svg>
                  ) : (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                  )}
                </button>
              </Tooltip>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">📱</div>
              <div className="contact-text">
                <strong>Phone:</strong> 
                <span className="contact-value">+91 9052357676</span>
              </div>
              <Tooltip 
                show={copiedItem === 'phone'} 
                message="Phone number copied!" 
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
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20,6 9,17 4,12"></polyline>
                    </svg>
                  ) : (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                  )}
                </button>
              </Tooltip>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">📱</div>
              <div className="contact-text">
                <strong>Alternative:</strong> 
                <span className="contact-value">+91 9392118587</span>
              </div>
              <Tooltip 
                show={copiedItem === 'alternative'} 
                message="Alternative phone copied!" 
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
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20,6 9,17 4,12"></polyline>
                    </svg>
                  ) : (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                  )}
                </button>
              </Tooltip>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">🔗</div>
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
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">🐙</div>
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
            </div>
          </div>
          
          <div className="contact-cta">
            <h3 className="cta-title">Ready to Start a Mission?</h3>
            <p className="cta-text">
              Let's collaborate on something amazing! Whether you have a project in mind or just want to connect, I'm always excited to hear from fellow developers and potential collaborators.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
