import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleLogout = () => {
      // Clear the authentication token from local storage
      localStorage.removeItem('token');
      console.log('Logout successful!');
      // Redirect the user to the login page
      navigate('/');
    };

    handleLogout();
  }, [navigate]);

  return (
    <div>
      <h2>Logging Out...</h2>
    </div>
  );
}
