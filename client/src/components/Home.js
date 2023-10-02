import React from "react";
import "./Home.css";

function Home() {
  return (
    <div id="homeContainer">
      <div id="topImageContainer">
        <div id="topTextLeft">
          <h1 id="introText"> Welcome To The Stage </h1>
        </div>
        <div id="topTextRight">
          <h2>Why?</h2>
          <span>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis </span>
          <h2>When?</h2>
          <span>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis </span>
          <h2>Who?</h2>
          <span>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis </span>
        </div>
      </div>
      <div id="bottomContainer">
        <div id="bottomLeft">
          <div id="latestNews">
            <h2>Latest News:</h2>
            <p>Upcoming Auditions for XYZ Production \n 
              Roles Available - 15</p>
              <img id="newsImage" src="LatestNewsTestImg.jpg" alt="ADD MEANINGFUL ALT WITH DATA HERE"></img>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</p>
          </div>
        </div>
        <div id="bottomRight">
          <div id="upcomingProductions">
            <h2>Upcoming Productions:</h2>
            <h3>THE TITLE VARIABLE HERE </h3>
            <p>DATE VARIABLE HERE </p>
            <h3>THE TITLE VARIABLE HERE </h3>
            <p>DATE VARIABLE HERE </p>
            <h3>THE TITLE VARIABLE HERE </h3>
            <p>DATE VARIABLE HERE </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
