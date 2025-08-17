import React, { useState, useEffect } from 'react';
import './Portfolio.css';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Navigation from './components/Navigation';

function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      const container = document.querySelector('.portfolio-main');
      
      if (container) {
        const scrollPosition = container.scrollTop + 100;

        for (let i = sections.length - 1; i >= 0; i--) {
          const section = document.getElementById(sections[i]);
          if (section && section.offsetTop <= scrollPosition) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    const container = document.querySelector('.portfolio-main');
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    const container = document.querySelector('.portfolio-main');
    
    if (element && container) {
      // Calculate the scroll position relative to the container
      const containerRect = container.getBoundingClientRect();
      const elementRect = element.getBoundingClientRect();
      const scrollTop = container.scrollTop + elementRect.top - containerRect.top;
      
      // Smooth scroll to the section
      container.scrollTo({
        top: scrollTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="portfolio">
      <Navigation activeSection={activeSection} scrollToSection={scrollToSection}  className='portfolio-nav-container'/>
      
      <main className='portfolio-main'>
        <section id="home">
          <Hero />
        </section>
        
        <section id="about">
          <About />
        </section>
        
        <section id="projects">
          <Projects />
        </section>
        
        <section id="skills">
          <Skills />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default Portfolio;
