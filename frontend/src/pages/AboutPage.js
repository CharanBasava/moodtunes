import React from 'react';
import { Link } from 'react-router-dom';
import './AboutPage.css';
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope, FaUser } from 'react-icons/fa';

const AboutPage = () => {
  return (
    <div className="about-page">
      <nav className="navbar">
        <div className="logo">🎵 MoodTunes</div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          
        </div>
      </nav>

      <h1 className="about-title">About the Developer</h1>

      <div className="info-box">
        <p><FaUser /> <strong>Name:</strong> Basava Charan</p>
        <p><FaEnvelope /> <strong>Email:</strong> basavacharan85900@gmail.com</p>
        <p>
          <FaLinkedin /> <strong>LinkedIn:</strong>{' '}
          <a href="https://www.linkedin.com/in/charan-basava-961599284" target="_blank" rel="noopener noreferrer">
            View Profile
          </a>
        </p>
        <p>
          <FaGithub /> <strong>GitHub:</strong>{' '}
          <a href="https://github.com/CharanBasava" target="_blank" rel="noopener noreferrer">
            github.com/CharanBasava
          </a>
        </p>
        <p>
          <FaInstagram /> <strong>Instagram:</strong>{' '}
          <a href="https://www.instagram.com/itzcharanbasava?igsh=dXBhanhhajJnZ3Iw" target="_blank" rel="noopener noreferrer">
            @itzcharanbasava
          </a>
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
