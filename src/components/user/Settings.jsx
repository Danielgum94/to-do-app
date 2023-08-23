import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import ThemeContext from './ThemeContext';
import '../CSS/settings.css';

export default function Settings({ changePassword, currentUser }) {
  const { toggleTheme } = useContext(ThemeContext);
  const [isPasswordChangeOpen, setIsPasswordChangeOpen] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handlePasswordChangeClick = () => {
    setIsPasswordChangeOpen(!isPasswordChangeOpen);
  };

  const handleThemeChange = () => {
    toggleTheme();
  };

  const handleCurrentPasswordChange = (event) => {
    setCurrentPassword(event.target.value);
  };

  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handlePasswordChange = () => {
    if (currentPassword && newPassword && confirmPassword) {
      if (currentPassword === currentUser.password) {
        if (newPassword === confirmPassword) {
          changePassword(currentUser.username, currentPassword, newPassword); // Pass the username, currentPassword, and newPassword as separate parameters
          setCurrentPassword('');
          setNewPassword('');
          setConfirmPassword('');
          setIsPasswordChangeOpen(false);
        } else {
          alert("New password and confirmation don't match");
        }
      } else {
        alert('Incorrect current password');
      }
    } else {
      alert('Please fill in all the fields');
    }
  };
  

  return (
    <div className="settings-container">
      {!isPasswordChangeOpen ? (
        <>
          <h1 className="settings-title">Settings</h1>
          <div className="theme-selection">
            <label htmlFor="theme">Select Theme:</label>
            <button onClick={handleThemeChange} className="theme-toggle btn btn-light">
              Toggle Theme
            </button>
          </div>
          <div className="theme-selection">
            <label htmlFor="theme" className="theme-label">
              Select Theme:
            </label>
            <button onClick={handlePasswordChangeClick} className="theme-toggle btn btn-light">
              Change Password
            </button>
          </div>
          <br />
          <Link to="/dashboard" className="dashboard-link btn btn-secondary">
            Dashboard
          </Link>
        </>
      ) : (
        <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="password-change-window">
          <h4 className="mb-3">Change Password</h4>
          <form>
            <div className="form-group">
              <label htmlFor="currentPassword">Current Password:</label>
              <input
                type="password"
                id="currentPassword"
                value={currentPassword}
                onChange={handleCurrentPasswordChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="newPassword">New Password:</label>
              <input
                type="password"
                id="newPassword"
                value={newPassword}
                onChange={handleNewPasswordChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm New Password:</label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                className="form-control"
              />
            </div>
            <button onClick={handlePasswordChange} className="btn btn-primary">Save Password</button>
          </form>
        </div>
      </div>
      )}
    </div>
  );
}
