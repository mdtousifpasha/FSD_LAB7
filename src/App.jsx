import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Replace YOUR_API_KEY with a free key from cricapi.com
    fetch('https://api.cricapi.com/v1/currentMatches?apikey=5bc61cdf-e3c9-4050-8d78-59ddfc84f848')
      .then(res => res.json())
      .then(result => {
        if (result.data) {
          setData(result.data);
        } else {
          // Fallback data if API key is missing
          setData([
            { name: "Chennai Super Kings vs Mumbai Indians", status: "CSK won by 7 wickets" },
            { name: "Royal Challengers Bengaluru vs Kolkata Knight Riders", status: "Match starting soon" }
          ]);
        }
      })
      .catch(() => setData([]));
  }, []);

  return (
    <div className="container">
      <h1>Live Cricket Updates</h1>
      <div className="grid">
        {data.map((item, index) => (
          <div key={index} className="card">
            <h3>{item.name}</h3>
            <p>{item.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;