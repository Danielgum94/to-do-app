import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/login.css';

export default function Login({ users }) {
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Check if the user exists in the users array
      const userExists = users.some(
        (user) =>
          user.username.toLowerCase() === usernameOrEmail.toLowerCase() ||
          user.email.toLowerCase() === usernameOrEmail.toLowerCase()
      );

      if (!userExists) {
        throw new Error('Invalid username or email');
      }

      // Optionally, you can perform additional actions upon successful login, such as storing the user data in local storage and navigating to the dashboard page.
      localStorage.setItem('usernameOrEmail', usernameOrEmail);
      navigate('/dashboard');
    } catch (error) {
      setError(error.message);
      console.error('Error logging in:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Log In</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="usernameOrEmail">Username/Email:</label>
            <input
              type="text"
              id="usernameOrEmail"
              placeholder="Enter your username or email"
              value={usernameOrEmail}
              onChange={(e) => setUsernameOrEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {error && <p className="error">{error}</p>}
          </div>
          <button type="submit" disabled={loading} className="btn1">
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
}
