import React, { useState, useEffect } from 'react';
import './Navigation.css';

function Navigation({ activeSection, scrollToSection, className }) {
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
    <nav className={`navigation ${isScrolled ? 'scrolled' : ''} ${className || ''}`}>
      <div className={`nav-container ${className || ''}`}>
        <div className="nav-logo" onClick={() => scrollToSection('home')}>
          <span className="logo-text">[RAJESH]</span>
        </div>
        <div>
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

          <div className="nav-menu-mobile">
            <button className="mobile-menu-btn">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75Zm0 6.75a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Zm0 6.75a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
