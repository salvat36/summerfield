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
          <h2 class="www">Why?</h2>
          <span>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis{" "}
          </span>
          <h2 class="www">When?</h2>
          <span>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis{" "}
          </span>
          <h2 class="www">Who?</h2>
          <span>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis{" "}
          </span>
        </div>
      </div>
      <div id="bottomContainer">
        <div id="bottomLeft">
          <div id="latestNews">
            <h2>Latest News:</h2>
            <div id="headerSeparator"></div>
            <p>Upcoming Auditions for XYZ Production \n Roles Available - 15</p>
            <img
              id="newsImage"
              src="LatestNewsTestImg.jpg"
              alt="ADD MEANINGFUL ALT WITH DATA HERE"
            ></img>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis
            </p>
          </div>
        </div>
        <div id="bottomRight">
          <h2>Upcoming Productions:</h2>
          <div id="headerSeparator"></div>
          <div id="upcomingProductions">
            <div class="production">
              <div class="productionDetails">
                <h3>THE TITLE VARIABLE HERE </h3>
                <p>DATE VARIABLE HERE </p>
              </div>
              <button class="ticketBtn">Buy Tickets</button>
            </div>
            <div class="production">
              <div class="productionDetails">
                <h3>THE TITLE VARIABLE HERE </h3>
                <p>DATE VARIABLE HERE </p>
              </div>
              <button class="ticketBtn">Buy Tickets</button>
            </div>
            <div class="production">
              <div class="productionDetails">
                <h3>THE TITLE VARIABLE HERE </h3>
                <p>DATE VARIABLE HERE </p>
              </div>
              <button class="ticketBtn">Buy Tickets</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
