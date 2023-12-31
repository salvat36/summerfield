import React from 'react'
import { Link } from 'react-router-dom'
import '../../../App'
import '../styles/Navbar.css'


function Navbar() {
  return (
    <>
      <header id="header">
        <div>
          <Link to="/">
            <img src={process.env.PUBLIC_URL + "/media/summerfield-logo.png"} alt="summerfield logo" class="navLogo"></img>
          </Link>
        </div>
        <nav id="navbar">
          <ul id="navlink">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/volunteer">Volunteer</Link>
            </li>
            <li>
              <Link to="/audition">Audition</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/donate">Donate</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </nav>
      </header>
      <div id="headerSeparator"></div>  
    </>
  )
}

export default Navbar;