import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import axios from 'axios';
import car1 from "../assets/carousel1.jpg";
import car3 from "../assets/carousel3.jpg";
import team1 from "../assets/Atalanta.png";
import { useNavigate } from "react-router-dom";

const Home = ({ onMatchSelect }) => {
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [matchData, setMatchData] = useState([
    {HomeTeamLogo: "https://resources.premierleague.com/premierleague/badges/t1.png", homeTeam: "Manchester Utd", awayTeam: "Chelsea",AwayTeamLogo : "https://resources.premierleague.com/premierleague/badges/t8.png", homeScore: 4, awayScore: 1 },
    { HomeTeamLogo: "https://resources.premierleague.com/premierleague/badges/t43.png",homeTeam: "Manchester City", awayTeam: "Arsenal",AwayTeamLogo : "https://resources.premierleague.com/premierleague/badges/t3.png", homeScore: 4, awayScore: 1 },
    {HomeTeamLogo: "https://resources.premierleague.com/premierleague/badges/t6.png", homeTeam: "Tottenham", awayTeam: "Brentford",AwayTeamLogo : "https://resources.premierleague.com/premierleague/badges/t94.png", homeScore: 1, awayScore: 3 }
  ]);

  const fetchData = async () => {
    try {
      const response = await axios.get('/api/MatchStats', {
        params: {
          date: `${selectedYear}-${selectedMonth}-${selectedDate}`
        }
      });
      const modifiedData = response.data.map(match => ({
        homeTeam: match.Home,
        awayTeam: match.Away,
        matchID: match.MatchID,
        homeScore : match.HomeScore,
        awayScore: match.AwayScore,
        HomeTeamLogo : match.HomeTeamLogo,
        AwayTeamLogo :match.AwayTeamLogo
      }));
      setMatchData(modifiedData);
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   fetchData();
  // }, [selectedMonth, selectedYear, selectedDate]);


  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
  };

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchData();
  };

  const navigate = useNavigate();

  const handleMatchClick = (matchID) => {
    navigate("/Fsummary");
    // axios.post('/api/match-summary', { matchID })
    // .then((response) => {
    //   // Handle the response from the server if needed
    //   console.log(response);
    // })
    // .catch((error) => {
    //   // Handle any errors that occur during the request
    //   console.error(error);
    // });
  };

  return (
    <>
      <div className="home" id="home">
        <h1>
          Unlocking Sports Insights: Enigma, Your AI-Powered Sports Article
          Companion
        </h1>
        <div className="matches-bar">
          <form onSubmit={handleSearch}>
            <div className="dropdown">
              <select value={selectedMonth} onChange={handleMonthChange}>
                <option value="">Month</option>
                <option value="01">January</option>
                <option value="02">February</option>
                <option value="03">March</option>
                <option value="04">April</option>
                <option value="05">May</option>
                <option value="06">June</option>
                <option value="07">July</option>
                <option value="08">August</option>
                <option value="09">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
              </select>
              <select value={selectedYear} onChange={handleYearChange}>
                <option value="">Year</option>
                <option value="2012">2012</option>
                <option value="2013">2013</option>
                <option value="2014">2014</option>
                <option value="2015">2015</option>
                <option value="2016">2016</option>
                <option value="2017">2017</option>
                <option value="2018">2018</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
              </select>
              <select value={selectedDate} onChange={handleDateChange}>
                <option value="">Date</option>
                <option value="01">01</option>
                <option value="02">02</option>
                <option value="03">03</option>
                <option value="04">04</option>
                <option value="05">05</option>
                <option value="06">06</option>
                <option value="07">07</option>
                <option value="08">08</option>
                <option value="09">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
              </select>
              <button type="submit">Search</button>
            </div>
          </form>
        </div>
      </div>
      <div className="home2">
        {matchData.map(match => (
          <div
            className="match-stats-tile"
            key={match.matchID}
            onClick={() => handleMatchClick(match.matchID)}
            style={{ cursor: 'pointer' }}
          >
            <div class="match-stats-content">
            <div className="team-info">
            <img src={match.HomeTeamLogo} alt="" className="team-image" />
              <span className="team-name">{match.homeTeam}</span>
              <span className="team-vs">vs</span>
              <span className="team-name">{match.awayTeam}</span>
              <img src={match.AwayTeamLogo} alt="" className="team-image" />
            </div>
            <div className="match-status">{match.homeScore} - {match.awayScore}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="carousel-container">
        <Carousel showThumbs={false} infiniteLoop autoPlay>
          <div>
            <img src={car1} alt="carousel1" />
          </div>
          <div>
            <img src={car3} alt="carousel3" />
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default Home;