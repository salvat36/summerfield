import React from "react";
import "./Home.css";

function Home() {
  return (
    <div id="homeContainer">
      <div id="topImageContainer">
        {" "}
        Image Here
        <div id="topTextLeft">
          <h1 id="introText">Welcome To The Stage</h1>
        </div>
        <div id="topTextRight">
          <h2 class='www'>Who ?</h2>
          <span class='wwwspan'>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </span>
          <h2 class='www'>Why ?</h2>
          <span class='wwwspan'>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </span>
          <h2 class='www'>Where ?</h2>
          <span class='wwwspan'>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </span>
        </div>
      </div>
      <div id="bottomContainer">
        {" "}
        Containere
        <div id="bottomLeft">
          <div id="latestNews">
            <h2>Latest News:</h2>
          </div>
        </div>
        <div id="bottomRight">
          <div id="upcomingProductions">
            <h2>Upcoming Productions:</h2>

    The Producers     Friday 7/22/23

Catch me if you Can     Saturday 8/23/23

Some like it hot
Sunday 10/01/23

Something Rotten
Sunday 12/13/23
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
