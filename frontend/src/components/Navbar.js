import React from 'react';
import collegelogo from '../assets/LOGO.jpg';

import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
    <div className="logo"><img src={collegelogo} alt="College Logo"/>  
        <div className="college-text">
          <h2>BP Mandal College of Engineering, Madhepura</h2>
          <p>
            ( Dept. of Science, Technology and Technical Education,
            Govt. of Bihar )
          </p>
        </div> 
    </div>

        <ul className="link">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#academics">Academics</a></li>
            <li><a href="#departments">Departments</a></li>
            <li><a href="#about">facilities & Services</a></li>
            <li><a href="#programs">Training & Placement</a></li>
            <li><a href="#cources">Gallery</a></li>
            <li><a href="#events">Login</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
  );
}

export default Navbar;