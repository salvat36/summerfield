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

      <div id="socialsAndCopyright">

        <ul id="socials">
          <li>
            <a href="../App.js">
              <img src="" alt="company logo" />
            </a>
          </li>

          <li>
            <a href="https://twitter.com/">
              <img src="../../public/twitter-icon-96.svg" alt="Twitter Icon" />
            </a>
          </li>

          <li>
            <a href="https://www.instagram.com/">
              <img src="../../public/instagram-icon-96.svg" alt="Instagram Icon" />
            </a>
          </li>

          <li>
            <a href="https://www.facebook.com/">
              <img src={process.env.PUBLIC_URL + "/facebook-icon-96.svg"} alt="Facebook Icon" />
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