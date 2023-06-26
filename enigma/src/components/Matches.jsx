import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Matches = () => {
  const [matchData, setMatchData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('/api/MatchStats');
      setMatchData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Matches</h2>
      <ul>
        {matchData.map(match => (
          <li key={match.id}>
            {match.Home} - {match.MatchID}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Matches;
