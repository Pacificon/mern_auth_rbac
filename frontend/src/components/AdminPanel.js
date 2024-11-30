import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const AdminPanel = () => {
  const { user } = useContext(AuthContext);

  if (!user || user.role !== 'Admin') return <h3>Access denied: Admins only.</h3>;

  return (
    <div>
      <h2>Admin Panel</h2>
      <p>Only accessible by Admins.</p>
    </div>
  );
};

export default AdminPanel;
