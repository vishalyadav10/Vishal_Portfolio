import React from 'react';
import './SkillsPage.css'; // Import your CSS file for styling

function SkillsPage() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h1 className="skills-title">Skills</h1>
        <ul className="skills-list">
          <li className="skills-item">
            <p>Proficient in: Java, Spring Boot,ReactJs, HTML, CSS, Linux, Shell scripting, Ansible, and SQL.</p>
          </li>
          <li className="skills-item">
            <p>Strong understanding of: FIX protocol.</p>
          </li>
          <li className="skills-item">
            <p> Experience with: Order Management Systems (OMS) and their role in trade execution and management.</p>
          </li>
          <li className="skills-item">
            <p> Exposure in: Troubleshooting and incident management within time-sensitive trading environments.</p>
          </li>
          <li className="skills-item">
            <p>Familiarity with: Git for managing code changes and deployments.</p>
          </li>
          <li className="skills-item">
            <p> Strong documentation skills: Including technical documentation and support procedures.</p>
          </li>
          <li className="skills-item">
            <p>Collaborative team player: Adept at working with cross-functional teams to achieve common goals.</p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default SkillsPage;
