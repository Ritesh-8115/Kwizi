
import React from 'react';

import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2>Kwizi</h2>
          <p>Test your knowledge, level up your mind.</p>
        </div>
        <div className="footer-links">
          <div>
            <h3>Navigate</h3>
            <a href="/">Home</a>
            <a href="/">Quizzes</a>
            <a href="/about">About Us</a>
            <a href="/contact">Contact</a>
          </div>
          <div>
            <h3>Legal</h3>
            <a href="/privacyPolicy">Privacy Policy</a>
            <a href="/termsOfService">Terms of Service</a>
          </div>
          <div>
            <h3>Connect</h3>
            <a href="https://twitter.com/Kwizi" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-square-x-twitter"></i> Twitter</a>
            <a href="https://facebook.com/Kwizi" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-facebook"></i> Facebook</a>
            <a href="https://instagram.com/Kwizi" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-square-instagram"></i> Instagram</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Kwizi. All rights reserved.</p>
        <p><a href="/">Back to top</a></p>
      </div>
    </footer>
  );
}

export default Footer;
