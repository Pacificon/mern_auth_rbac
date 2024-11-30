import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Welcome = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { name, role } = location.state || {};  // Get the user details from state

  const handleLogout = () => {
    // Clear any stored token (if using localStorage/sessionStorage)
    localStorage.removeItem('token'); 
    // Redirect to login page
    navigate('/login');
  };

  const handleAdminPanelRedirect = () => {
    // Redirect to the Admin panel if the user is an Admin
    navigate('/admin');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome, {name || 'User'}!</h1>
      <p>Your role is: <strong>{role || 'Unknown'}</strong></p>
      
      {/* Conditionally render the Admin button if the user is an Admin */}
      {role === 'Admin' && (
        <div>
          <button
            onClick={handleAdminPanelRedirect}
            style={{
              marginTop: '20px',
              padding: '10px 20px',
              backgroundColor: '#4CAF50', // Green button for Admin
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              marginRight: '10px',
            }}
          >
            Go to Admin Panel
          </button>
        </div>
      )}

      {/* Logout button */}
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
