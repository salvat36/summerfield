import React from 'react'
import './Footer.css';

function Footer() {
  return (
    <footer>
      <div id='mailingList'>
        <div id='mailIcon'><img src="" alt="mail icon" /></div>
        <div>For updated News & Events <br/> Join our mailing list <a href="#">here</a></div>
      </div>

      <button id="toTopBtn">
        Back to Top
      </button>

      <ul id="socials">
        <li><a href="../App.js"><img src="" alt="company logo" /></a></li>
        <li><a href="#"><img src="" alt="Twitter Icon" /></a></li>
        <li><a href="#"><img src="" alt="Instagram Icon" /></a></li>
        <li><a href="#"><img src="" alt="Facebook Icon" /></a></li>
      </ul>
    </footer>
  )
}

export default Footer