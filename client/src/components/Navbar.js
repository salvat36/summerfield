import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <header id="header">
      <nav id="navbar">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Volunteer</a></li>
          <li><a href="#">Audition</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Donate</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar;