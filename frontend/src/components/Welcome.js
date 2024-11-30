import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Welcome = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { name, role } = location.state || {};

  const handleLogout = () => {
    // Clear any stored token (if using localStorage/sessionStorage)
    localStorage.removeItem('token'); 
    // Redirect to login page
    navigate('/login');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome, {name || 'User'}!</h1>
      <p>Your role is: <strong>{role || 'Unknown'}</strong></p>
      <button 
        onClick={handleLogout} 
        style={{
          marginTop: '20px', 
          padding: '10px 20px', 
          backgroundColor: '#f44336', 
          color: '#fff', 
          border: 'none', 
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Welcome;
