import React from 'react'
import './Footer.css';

function Footer() {
  return (
    <footer>
      <div id='mailingList'>
        <div id='mailIcon'><img src={process.env.PUBLIC_URL + "/mail-48.png"} alt="mail icon" /></div>
        <div>For updated News & Events <br/> Join our mailing list <a href="#">here</a></div>
      </div>

      <button id="toTopBtn">
        Back to Top
      </button>

      <div id="socialsAndCopyright">

        <ul id="socials">
          <li>
            <a href="../App.js">
              <img src="" alt="company logo" />
            </a>
          </li>

          <li>
            <a href="https://twitter.com/">
              <img src={process.env.PUBLIC_URL + "/twitter-48.svg"} alt="Twitter Icon" />
            </a>
          </li>

          <li>
            <a href="https://www.instagram.com/">
              <img src={process.env.PUBLIC_URL + "/instagram-48.svg"} alt="Instagram Icon" />
            </a>
          </li>

          <li>
            <a href="https://www.facebook.com/">
              <img src={process.env.PUBLIC_URL + "/facebook-48.svg"} alt="Facebook Icon" />
            </a>
          </li>
        </ul>

        <div id='copyright'>
            &copy; SummerField Stage Co.
        </div>
      </div>

    </footer>
  )
}

export default Footer