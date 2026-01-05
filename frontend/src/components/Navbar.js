import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
         <ul className="link">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/academics">Academics</Link></li>
        <li><Link to="/departments">Departments</Link></li>
        <li><Link to="/facilities">Facilities & Services</Link></li>
        <li><Link to="/placement">Training & Placement</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/login">Login Panel</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;