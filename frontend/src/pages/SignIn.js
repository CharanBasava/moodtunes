// src/pages/SignIn.js
import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { Link, useNavigate } from 'react-router-dom';
import './SignIn.css';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/main');
    } catch (error) {
      setErrorMsg('⚠️ User not found or incorrect password');
    }
  };

  return (
    <div className="signin-page">
      {/* ✅ Reusable Navbar */}
      <nav className="navbar">
        <div className="logo">🎵 MoodTunes</div>
        <div className="nav-links">
         
        </div>
      </nav>

      <div className="signin-container">
        <h2>Sign In</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
          {errorMsg && <p className="error-message">{errorMsg}</p>}
        </form>
      </div>
    </div>
  );
};

export default SignIn;