import React from 'react';

const TeamStandings = ({ standings }) => {
  return (
    <div className="team-standings">
      {standings.map(team => (
        <div key={team.id} className="team">
          <p>{team.rank}. {team.name}</p>
          <p>Wins: {team.wins}</p>
          <p>Losses: {team.losses}</p>
        </div>
      ))}
    </div>
  );
};

export default TeamStandings;
