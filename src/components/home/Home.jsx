import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/home.css';

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-box">
        <h2 className="welcome-header">Welcome: To Do App</h2>
        {/* Add app details content here */}
        <div className="buttons-container">
          <Link to="/login" className="btn">Sign In</Link>
          <Link to="/signup" className="btn">Sign Up</Link>
        </div>
      </div>
    </div>
  );
}
