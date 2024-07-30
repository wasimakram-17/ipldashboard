import React, { useState, useEffect } from 'react';

function App() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    // Fetch data from API
    fetch('https://api.example.com/teams')
      .then(response => response.json())
      .then(data => setTeams(data))
      .catch(error => console.error('Error fetching teams', error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>IPL Dashboard</h1>
      </header>
      <div className="teams-list">
        <h2>Teams</h2>
        <ul>
          {teams.map((team, index) => (
            <li key={index}>{team.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
