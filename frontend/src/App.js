import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// ✅ IMPORT all 5 pages
import HomePage from './pages/HomePage';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import AboutPage from './pages/AboutPage';
import MainPage from './pages/MainPage'; // create later
function App() {
  return (
    <Router>
      <Routes>
        {/* Page 1: Homepage */}
        <Route path="/" element={<HomePage />} />

        {/* Page 2: Signup */}
        <Route path="/signup" element={<SignUp />} />

        {/* Page 3: Signin */}
        <Route path="/signin" element={<SignIn />} />

        {/* Page 4: About Developer */}
        <Route path="/about" element={<AboutPage />} />

        {/* Page 5: Mood Music Page */}
        <Route path="/main" element={<MainPage />} />
      </Routes>
    </Router>
  );
}
export default App;