import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  // State to manage visibility of all projects and selected project
  const [showProjects, setShowProjects] = useState(false);
  const [selectedProject, setSelectedProject] = useState('all');

  // Function to toggle the project visibility
  const toggleProjects = () => {
    setShowProjects(!showProjects);
  };

  // Function to handle project selection
  const handleSelectProject = (event) => {
    setSelectedProject(event.target.value);
  };

  // Projects data
  const projects = [
    { title: 'Project 1', src: 'https://jaymiller2002.github.io/Tic-Tac-Toe/' },
    { title: 'Project 2', src: 'https://music-player-02.vercel.app/' },
    { title: 'Project 3', src: 'https://password-generator-sepia-zeta.vercel.app/' },
    { title: 'Project 4', src: 'https://doglist.vercel.app/' },
    { title: 'Project 5', src: 'https://to-do-list-mauve-gamma-70.vercel.app/' },
    { title: 'Project 6', src: 'https://jaysportfolio.vercel.app/' },
    { title: 'Project 7', src: 'https://image-gallery-slider-react.vercel.app/' },
    { title: 'Project 8', src: 'https://music-player-cyan-six.vercel.app/' },
  ];

  // Get either the selected project or all projects
  const renderProjects = () => {
    if (selectedProject === 'all') {
      return projects.map((project, index) => (
        <iframe key={index} title={project.title} src={project.src} />
      ));
    } else {
      const project = projects.find(p => p.title === selectedProject);
      return <iframe title={project.title} src={project.src} />;
    }
  };

  return (
    <section id="projects" className="app-section">
      <div className="section-content">
        <h1>Projects</h1>
        {/* Dropdown to select individual projects */}
        <select className="project-select" onChange={handleSelectProject} value={selectedProject}>
          <option value="all">View All Projects</option>
          {projects.map((project, index) => (
            <option key={index} value={project.title}>{project.title}</option>
          ))}
        </select>
        {/* Button to toggle project visibility */}
        <button className='projects-button' onClick={toggleProjects}>
          {showProjects ? 'Hide Projects' : 'View Selected Project(s)'}
        </button>

        {/* Conditionally render project cards based on state */}
        {showProjects && (
          <div className="project-cards">
            {renderProjects()}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
