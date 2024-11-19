import React from 'react';
import '../Styles/Navbar.css';

const Navbar = () => {
  return (
    <div className="nav" id="navbar">
      <h1 className="logo">Park<span>Smart</span></h1>
      <ul className="nav-links">
        <li className="nav-item">
          <a href="#home" className="nav-link">Home</a>
        </li>
        <li className="nav-item">
          <a href="#about" className="nav-link">About</a>
        </li>
        <li className="nav-item">
          <a href="#content" className="nav-link">Content</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
