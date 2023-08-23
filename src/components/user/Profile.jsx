import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/profile.css'

export default function Profile(props) {
  const navigate = useNavigate();
  const { currentUser, handleUpdate } = props;

  const [editing, setEditing] = useState(false);
  const [updatedUserData, setUpdatedUserData] = useState({});

  const handleEdit = () => {
    setEditing(true);
    setUpdatedUserData({ ...currentUser });
  };

  const handleInputChange = (e) => {
    setUpdatedUserData({
      ...updatedUserData,
      [e.target.name]: e.target.value,
    });
  };

  const saveChanges = () => {
    handleUpdate(updatedUserData);
    setEditing(false);
    navigate('/dashboard');
  };

  const returnToDash = () => {
    navigate('/dashboard')
  }

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Profile</h2>
      {editing ? (
        <div className='profile-box'> 
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username:
            </label>
            <input
              type="text"
              name="username"
              value={updatedUserData.username}
              onChange={handleInputChange}
              className="form-control"
              id="username"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              type="email"
              name="email"
              value={updatedUserData.email}
              onChange={handleInputChange}
              className="form-control"
              id="email"
            />
          </div>
          {/* Add more input fields for other user data */}
          <button onClick={saveChanges} className="btn btn-primary me-2">Save</button>
          <button onClick={() => setEditing(false)} className="btn btn-secondary">Cancel</button>
        </div>
      ) : (
        <div>
          <p>Username: {currentUser.username}</p>
          <p>Email: {currentUser.email}</p>
          {/* Display other user data here */}
          <button onClick={handleEdit} className="btn btn-primary">Edit</button>
          <button onClick={returnToDash} className="btn btn-secondary">
            Dashboard
          </button>
        </div>
      )}
    </div>
  );
}
