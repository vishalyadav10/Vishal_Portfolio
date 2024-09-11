import React from 'react';
import './ContactPage.css'; // Import the CSS file for styling

function ContactPage() {
  return (
    <section id="contact" className="contact-section">
      <h1>Contact</h1>      
      <div className="contact-info">
        <p><strong>Phone:</strong> 7206563675</p>
        <p><strong>Email:</strong> <a href="mailto:yadavvishal825@gmail.com">yadavvishal825@gmail.com</a></p>
        <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/vishal-yadav-701663b4/" target="_blank" rel="noopener noreferrer">Click to visit profile</a></p>
        <p><strong>GitHub:</strong> <a href="https://github.com/vishalyadav10" target="_blank" rel="noopener noreferrer">vishalyadav10</a></p>
      </div>
    </section>
  );
}

export default ContactPage;
