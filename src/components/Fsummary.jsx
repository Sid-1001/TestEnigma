import React from "react";
import image1 from "../assets/Atalanta.png";
import image2 from "../assets/Cagliari.png";
import "../styles/Fsummary.scss";

function Fsummary() {
  return (
    <div>
      <div className="container">
        <div className="image-wrapper">
          <img src={"https://resources.premierleague.com/premierleague/badges/t1.png"} alt="Image 1" className="image" />
        </div>
        <div className="score-text">4 - 1</div>
        <div className="image-wrapper">
          <img src={"https://resources.premierleague.com/premierleague/badges/t8.png"} alt="Image 2" className="image" />
        </div>
      </div>
      <div className="text-wrapper">
        <p className="date-text">7:00 pm Thursday 25th May</p>
        <p className="attendance-text">Attendance: 73,561</p>
      </div>
      <h2 className="summary-heading">AI Generative Post Match Summary</h2>
      <div className="display-area">
        <p class="word-by-word">The Blues’ final away game of the season and second match in a row in Manchester ended in defeat when two goals conceded before half-time were followed by two more late in the game, before Joao Felix netted a fine consolation.

As against Man City on Sunday, we went behind early in the game when Casemiro headed in a free-kick and although the lead was extended, we had the chances to have at least been level at the interval.

Fielding what at 23 years and 238 days was the youngest Chelsea team in the Premier League era, the Blues could have taken the lead ourselves but one of those youthful players, Mykhailo Mudryk, shot wide having been fed by another, Lewis Hall, who was selected for the third game in a row.</p>
      </div>
      {/* <div>
        <img
          src="https://resources.premierleague.com/premierleague/badges/rb/t3.svg"
          alt="Sample Image"
        ></img>
      </div> */}
    </div>
  );
}

export default Fsummary;
