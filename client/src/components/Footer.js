import React from 'react'
import './Footer.css';

function Footer() {
  return (
    <footer>
      <div id='mailingList'>
        <div id='mailIcon'><img src="" alt="mail icon" /></div>
        <p>For updated News & Events <br/> Join our mailing list <a href="#">here</a></p>
      </div>

      <button id="toTopBtn">
        Back to Top
      </button>

      <ul id="socials">
        <li><a href="../App.js"><img src="" alt="company logo" /></a></li>
        <li><a href="#"></a></li>
        <li><a href="#"></a></li>
        <li><a href="#"></a></li>
      </ul>
    </footer>
  )
}

export default Footer