import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <nav className="navbar">
        <div className="logo">🎵 MoodTunes</div>
        <div className="nav-links">
          <Link to="/signup">SignUp</Link>
          <Link to="/signin">SignIn</Link>
          <Link to="/about">AboutDeveloper</Link>
        </div>
      </nav>

      <header className="hero">
        <h1>Welcome to <span className="highlight">MoodTunes</span></h1>
        
      </header>

      <section className="features">
        <p>MoodTunes is a smart music website that helps you find songs based on how you're feeling. 
          Just type a few words about your day, and it shows songs that match your mood. Whether you're happy, sad, or calm, it gives you the right music.
        <br/>
        <br/>
        Music has the ability to change how we feel, and MoodTunes is here to guide you to the right songs. It's simple,
         fun, and perfect for anyone who loves music and wants to listen to something that matches their mood.</p>
      </section>

    
      <footer className="footer">
        <p>© 2025 MoodTunes | Developed by <a href="https://www.linkedin.com/in/charan-basava-961599284" target="_blank" rel="noreferrer">Charan Basava</a></p>
      </footer>
    </div>
  );
};

export default HomePage;