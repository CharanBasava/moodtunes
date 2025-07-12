// src/pages/Signup.js
import React, { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { useNavigate, Link } from 'react-router-dom';
import './SignUp.css';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const auth = getAuth();
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setMessage('');
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setMessage('✅ Successfully registered!');
      setTimeout(() => navigate('/signin'), 2000);
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        setMessage('⚠️ User already exists');
      } else {
        setMessage(`❌ Error: ${error.message}`);
      }
    }
  };

  return (
    <div className="signup-page">
      <nav className="navbar">
        <div className="logo">🎵 MoodTunes</div>
        <div className="nav-links">
          {/* You can add nav links here if needed */}
        </div>
      </nav>

      <div className="signup-container">
        <h2>Sign Up</h2>
        <form className="signup-form" onSubmit={handleSignup}>
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Register</button>
        </form>
        
        {message && <div className="message-box">{message}</div>}

        {/* ✅ Link to SignIn page */}
        <p className="form-switch">
          Already have an account? <Link to="/signin">Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;