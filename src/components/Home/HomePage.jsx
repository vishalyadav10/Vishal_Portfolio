import React from 'react';
import './Homepage.css'; // Import your CSS file for styling
import resume from '../../assets/Vishal_Cv_v1.pdf';
import { Player } from '@lottiefiles/react-lottie-player';
import animationData from '../../assets/Animation - 1725474782865.json';
function HomePage() {
  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <h1>🌟 Welcome to my Portfolio</h1>
        <p className="greeting">Hi! I'm Vishal 👋🏼</p>
        <h2>Developer | React | Spring Boot</h2>
        <p className="description">
          I'm a dedicated developer passionate about crafting exceptional software solutions. 
          With a focus on React and Spring Boot, I thrive on turning ideas into functional and 
          user-friendly applications.
        </p>
        <a href={resume} className="resume-link" download>
          Resume
        </a>
      </div>
      <div>
      <Player
      autoplay
      loop
      src={animationData}
      style={{ height: '300px', width: '300px' }}
    />
      </div>
    </section>
  );
}

export default HomePage;
