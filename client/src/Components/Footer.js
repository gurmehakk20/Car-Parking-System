import React from 'react';
import '../Styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-left">
        <h3>
          Park<span>Smart</span>
        </h3>
        <ul className="footer-links">
          <li><a href="/home">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/faq">FAQ</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
        <p className="footer-company-name">Company Name © 2024</p>
      </div>

      <div className="footer-center">
        <div className="contact-item">
          <i className="fa fa-map-marker"></i>
          <p><span>444 S. Cedros Ave</span> Solana Beach, California</p>
        </div>
        <div className="contact-item">
          <i className="fa fa-phone"></i>
          <p><a href="tel:+15555555555">+1 555-555-5555</a></p>
        </div>
        <div className="contact-item">
          <i className="fa fa-envelope"></i>
          <p><a href="mailto:support@company.com">support@company.com</a></p>
        </div>
      </div>

      <div className="footer-right">
        <p className="footer-about">
          <span>About the Company</span>
          Providing innovative solutions for our customers. Focused on quality, reliability, and efficiency.
        </p>
        <div className="footer-icons">
          <a href="https://facebook.com" aria-label="Facebook"><i className="fa fa-facebook"></i></a>
          <a href="https://twitter.com" aria-label="Twitter"><i className="fa fa-twitter"></i></a>
          <a href="https://linkedin.com" aria-label="LinkedIn"><i className="fa fa-linkedin"></i></a>
          <a href="https://github.com" aria-label="GitHub"><i className="fa fa-github"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
