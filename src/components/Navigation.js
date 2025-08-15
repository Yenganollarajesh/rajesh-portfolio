import React, { useState, useEffect } from 'react';
import './Navigation.css';

function Navigation({ activeSection, scrollToSection }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Main Menu', icon: '🏠' },
    { id: 'about', label: 'Character', icon: '👤' },
    { id: 'projects', label: 'Missions', icon: '🎯' },
    { id: 'skills', label: 'Skills', icon: '⚔️' },
    { id: 'contact', label: 'Contact', icon: '📧' }
  ];

  return (
    <nav className={`navigation ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo" onClick={() => scrollToSection('home')}>
          <span className="logo-text">[RAJESH]</span>
          <span className="logo-subtitle">DEV.exe</span>
        </div>
        
        <ul className="nav-menu">
          {navItems.map((item) => (
            <li key={item.id} className="nav-item">
              <button
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => scrollToSection(item.id)}
              >
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-label">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
        
        <div className="nav-cta">
          <button 
            className="btn btn-outline"
            onClick={() => scrollToSection('contact')}
          >
            <span className="btn-icon">🚀</span>
            Start Mission
          </button>
        </div>
      </div>
      
      <div className="nav-status-bar">
        <div className="status-item">
          <span className="status-label">SCORE:</span>
          <span className="status-value">999,999</span>
        </div>
        <div className="status-item">
          <span className="status-label">LEVEL:</span>
          <span className="status-value">99</span>
        </div>
        <div className="status-item">
          <span className="status-label">TIME:</span>
          <span className="status-value">∞</span>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
