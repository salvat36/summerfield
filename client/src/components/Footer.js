import React from 'react'
import './Footer.css';

function Footer() {

  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer>
      <div id='mailingList'>
        <div><img src={process.env.PUBLIC_URL + "/mail-48.png"} alt="mail icon" id='mailIcon'/></div>
        <div>For updated News & Events <br/> Join our mailing list <a href="#">here</a></div>
      </div>

      <button id="toTopBtn" onClick={goTop}>
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
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <img src={process.env.PUBLIC_URL + "/twitter-48.svg"} alt="Twitter Icon" id="twitterIcon"/>
            </a>
          </li>

          <li>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
              <img src={process.env.PUBLIC_URL + "/instagram-48.svg"} alt="Instagram Icon" id="instagramIcon"/>
            </a>
          </li>

          <li>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <img src={process.env.PUBLIC_URL + "/facebook-48.svg"} alt="Facebook Icon" id="facebookIcon"/>
            </a>
          </li>
        </ul>

        <div id='copyright'>
            &copy;{(new Date().getFullYear())} SummerField Stage Co.
        </div>
      </div>

    </footer>
  )
}

export default Footer