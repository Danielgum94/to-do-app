import React, { useState } from 'react';
import axios from 'axios';
import '../CSS/signup.css';
import { useNavigate } from 'react-router-dom';

export default function Signup(props) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
  
    try {
      // Perform validation checks here before adding the user
      if (!username || !email || !password) {
        alert('Please fill in all fields')
        setError('Please fill in all fields');
        return;
      }
  
      // Check if the user already exists
      const userAlreadyExists = props.userExists(username, email);
      if (userAlreadyExists) {
        alert('User already exists')
        setError('User already exists');
        return;
      }
  
      // Add the user to the array using the props function
      props.addUser(username, email, password);
  
      // Optionally, you can perform additional actions upon successful signup, such as redirecting to the dashboard page using the useNavigate hook.
      navigate('/dashboard');
    } catch (error) {
      setError('Failed to create user. Please try again later.');
      console.error('Error signing up:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="signup-box">
        <h2>Create your acount</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" disabled={loading} className="btn1 btn-primary">
            {loading ? 'Signing up...' : 'Sign Up'}
          </button>
        </form>
      </div>
    </div>
  );
}
