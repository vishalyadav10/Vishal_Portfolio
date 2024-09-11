import React from 'react';
import './Header.css'; // Ensure to import the CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <a href="#home" className="brand">Home</a>
        <ul className="nav-links">
          <li>
          <FontAwesomeIcon icon={faCircleInfo} size="1x" />
            <a href="#about">About Me</a>
          </li>
          <li>
          <FontAwesomeIcon icon={faLaptopCode} size="1x" />
            <a href="#skills">Skills</a></li>
          <li>
          <FontAwesomeIcon icon={faBook} size="1x" />
            <a href="#project">Projects</a></li>
          <li>
          <FontAwesomeIcon icon={faEnvelope} size="1x" />
            <a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
