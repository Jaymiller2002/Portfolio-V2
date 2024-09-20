import React from 'react';
import './About.css';
import Resume from './assets/Jays_Resume.pdf';

const About = () => {
  return (
    <section id="about" className="app-section">
      <div className="section-content">
        <h1>About Me</h1>
        <div className="about-card">
          <div className="about-info">
            <h1>Jay Miller</h1>
            <p>I am a full stack developer with experience in front-end and back-end development. My expertise includes working with modern JavaScript frameworks like React for crafting dynamic user interfaces, as well as utilizing Django and Django REST Framework for building robust back-end services and RESTful APIs.</p>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>SQL</li>
              <li>Django</li>
              {/* Add more skills */}
            </ul>
            <div className="about-info">
              <h1>View My Resume!</h1>
              <button className='about-button'>
              <a href={Resume} download="Jays_Resume.pdf" style={{ textDecoration: 'none', color: 'inherit' }}>
                Download Resume
              </a>
              </button>
            </div>
          </div>
        </div>
        <button className='about-button' onClick={() => window.location.href = "tel:8594758431"}>Hire Me!</button>
      </div>
    </section>
  );
};

export default About;

