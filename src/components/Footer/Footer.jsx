import React from 'react';
import './Footer.css'; // Ensure to import the CSS file

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Vishal. All rights reserved.</p>
        <div className="social-links">
          <a href="https://github.com/vishalyadav10" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/vishal-yadav-701663b4/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="yadavvishal825@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

