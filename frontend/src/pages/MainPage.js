import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './MainPage.css';

const MainPage = () => {
  const [moodText, setMoodText] = useState('');
  const [moodResult, setMoodResult] = useState('');
  const [allSongs, setAllSongs] = useState([]);
  const [visibleCount, setVisibleCount] = useState(7);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setVisibleCount(7);
    try {
    const response = await axios.post('http://localhost:8000/api/get-songs/', {
  text: moodText,
});

      const data = response.data;
      setMoodResult(data.mood || 'No result');
      setAllSongs(data.songs || []);
    } catch (error) {
      console.error('Error analyzing mood:', error);
      setMoodResult('Error');
      setAllSongs([]);
    }
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 7);
  };

  return (
    <div className="main-page">
      <nav className="navbar">
        <div className="logo">🎵 MoodTunes</div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </div>
      </nav>

      <div className="main-content">
        <h2>How is your day?</h2>
        <form onSubmit={handleSubmit} className="mood-form">
          <input
            type="text"
            value={moodText}
            onChange={(e) => setMoodText(e.target.value)}
            placeholder="Type your mood..."
          />
          <button type="submit">Analyze Mood</button>
        </form>

        {moodResult === "neutral" ? (
  <h3 className="mood-result">No strong mood detected. Showing calm music 🎶</h3>
) : (
  moodResult && <h3 className="mood-result">Detected Mood: {moodResult}</h3>
)}

        <div className="song-list">
          {allSongs.slice(0, visibleCount).map((song, idx) => (
            <div key={idx} className="song-card">
              <iframe
                src={`https://open.spotify.com/embed/track/${song.id}?utm_source=generator&theme=0`}
                width="100%"
                height="80"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                title={song.name}
              ></iframe>
            </div>
          ))}
        </div>

        {visibleCount < allSongs.length && (
          <button className="more-btn" onClick={handleLoadMore}>
            More Songs
          </button>
        )}
      </div>
    </div>
  );
};

export default MainPage;