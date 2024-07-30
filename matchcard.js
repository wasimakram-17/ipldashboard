import React from 'react';

const MatchCard = ({ match }) => {
  return (
    <div className="match-card">
      <h3>{match.team1} vs {match.team2}</h3>
      <p>{match.date}</p>
      <p>{match.venue}</p>
    </div>
  );
};

export default MatchCard;
