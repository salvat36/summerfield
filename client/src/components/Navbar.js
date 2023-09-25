import React from 'react';
import '../App';
import './Navbar.css';

function Navbar() {
  return (
    <header id="header">
      <div class="logo">
        <a href="../App.js"><img src="../../public/logo.png" alt="company-logo"></img></a>
      </div>
      <nav id="navbar">
        <ul id="navlink">
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