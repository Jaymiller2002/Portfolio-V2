import React, { useState } from 'react';
import './App.css';
import Home from './Home';
import About from './About';
import Features from './Features';
import Projects from './Projects';
import Contact from './Contact';

const App = () => {
  const [currentSection, setCurrentSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // New state for burger menu

  const handleSectionChange = (section) => {
    setCurrentSection(section);
    setIsMobileMenuOpen(false); // Close mobile menu after clicking a section
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1></h1>
        {/* Burger Menu Icon */}
        <div className="burger-icon" onClick={toggleMobileMenu}>
          <i className="fa fa-bars"></i>
        </div>

        <nav className={`app-nav ${isMobileMenuOpen ? 'open' : ''}`}>
          <ul>
            <li><button className="nav-button" onClick={() => handleSectionChange('home')}>Home</button></li>
            <li><button className="nav-button" onClick={() => handleSectionChange('about')}>About</button></li>
            <li><button className="nav-button" onClick={() => handleSectionChange('features')}>Features</button></li>
            <li><button className="nav-button" onClick={() => handleSectionChange('projects')}>Projects</button></li>
            <li><button className="nav-button" onClick={() => handleSectionChange('contact')}>Contact</button></li>
          </ul>
        </nav>
      </header>

      {currentSection === 'home' && <Home />}
      {currentSection === 'about' && <About />}
      {currentSection === 'features' && <Features />}
      {currentSection === 'projects' && <Projects />}
      {currentSection === 'contact' && <Contact />}

      <footer className="app-footer">
        <div className="social-links">
          <a href="https://github.com/Jaymiller2002"><i className='fa-brands fa-github'></i></a>
          <a href="https://discord.com/"><i className='fa-brands fa-discord'></i></a>
          <a href="https://www.linkedin.com/feed/"><i className='fa-brands fa-linkedin-in'></i></a>
        </div>
        <p>&copy; 2024 My Portfolio</p>
      </footer>
    </div>
  );
}

export default App;

