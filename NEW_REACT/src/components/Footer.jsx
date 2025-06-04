import React from 'react';

const Footer = () => (
  <footer>
    <div className="container">
      <div className="social-links">
        <a href="https://github.com/sDash151" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a 
          href="https://www.linkedin.com/in/sourav-dash-a12436336" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="mailto:souravdilu78090@gmail.com" target="_blank" rel="noopener noreferrer">
          <i className="fas fa-envelope"></i>
        </a>
        <a href="tel:+916371791893" target="_blank" rel="noopener noreferrer">
          <i className="fas fa-phone"></i>
        </a>
      </div>
      <p className="copyright">© 2024 Sourav Dash Adhikari. All Rights Reserved.</p>
    </div>
  </footer>
);

export default Footer;