import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  if (!user) return <h3>Please log in to access the dashboard.</h3>;

  return (
    <div>
      <h2>Welcome, {user.name}</h2>
      <p>Your role: {user.role}</p>
    </div>
  );
};

export default Dashboard;
