import React from 'react';
import './projects.css'; 
import { Player } from '@lottiefiles/react-lottie-player';
import Libraryanimation from '../../assets/Library_animation.json';
import EmployeeAnimation from '../../assets/Employee_animation.json'


function ProjectsPage() {
  return (
    <section id="project" className="projects-section">
      <h1>Explore My Projects!</h1>
      <h2>Github links to my projects</h2>
      <div className="projects-container">
        <div className="project-item">
          <h3>Library App</h3>
          <Player
          autoplay
          loop
          src={Libraryanimation}
      style={{ height: '300px', width: '300px' }}
          />
          <a href="https://github.com/vishalyadav10/LibraryApp" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </div>
        <div className="project-item">
          <h3>Employee Management </h3>
          <Player
          autoplay
          loop
          src={EmployeeAnimation}
      style={{ height: '300px', width: '300px' }}
          />
          <a href="https://github.com/vishalyadav10/EmployeeManagement" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default ProjectsPage;
