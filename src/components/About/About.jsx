import React, { useState } from 'react';
import './About.css'; // Import your CSS file for styling
import profilePhoto from '../../assets/Vishal_pfp_2.png';

function AboutPage() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <section id="about" className="about-section">
      <h1>About Me!</h1>
      <div className="about-content">
        <img src={profilePhoto} alt="Profile Photo" className="profile-photo" />
        <div className="about-text">
          <div className="dropdown-section">
            <h2 onClick={() => toggleSection('whoAmI')}>Who am I?</h2>
            {openSection === 'whoAmI' && (
              <p>
                Hi! I am Vishal Yadav, a skilled Java developer with experience in Spring Boot, ReactJS, MySQL, Linux, and Shell scripting.
                I have worked as a System Engineer at Tata Consultancy Services, providing production support and developing automation scripts.
              </p>
            )}
          </div>

          <div className="dropdown-section">
            <h2 onClick={() => toggleSection('whatIDo')}>What do I do?</h2>
            {openSection === 'whatIDo' && (
              <p>
                I develop scalable applications using Java, Spring Boot, ReactJS, and MySQL, focusing on backend development, automation, and secure user management. I provided production support for capital market application, troubleshoot issues, and optimize performance.
              </p>
            )}
          </div>

          <div className="dropdown-section">
            <h2 onClick={() => toggleSection('education')}>What is my educational background?</h2>
            {openSection === 'education' && (
              <p>
                I have a degree in Computer Science and Technology from GJU, Hisar. My education has provided me with a solid
                foundation in software development and problem-solving skills.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
