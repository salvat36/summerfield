import React from "react";
import "./Home.css";

function Home() {
  return (
    <div id="homeContainer">
      <div id="topImageContainer"> Image
        <div id="topTextLeft"> Welcome to the stage</div>
        <div id="topTextRight">Who? Why? When?</div>
      </div>
      <div id="bottomContainer"> bottomContainer
        <div id="latestNews">latestNews</div>
        <div id="upcomingProductions">upcomingProductions</div>
      </div>
    </div>
  );
}

export default Home;
