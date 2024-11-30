import React from 'react';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
  const navigate = useNavigate();

  // Handle back button click
  const handleBackClick = () => {
    navigate(-1); // This will navigate to the previous page in the history stack (Welcome page in this case)
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Admin Panel</h1>
      <p>Welcome to the Admin Panel</p>

      {/* Back button */}
      <button
        onClick={handleBackClick}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Back
      </button>
    </div>
  );
};

export default Admin;
