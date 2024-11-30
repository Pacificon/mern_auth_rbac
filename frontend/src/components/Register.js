import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';

const Register = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '', role: 'User' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/auth/register', form);
      alert('Registration successful!');
      // Redirect to the Welcome page after successful registration
      navigate('/welcome', { state: { name: form.name, role: form.role } });
    } catch (error) {
      alert(error.response?.data?.message || 'Registration failed');
    }
  };

  const handleRedirectToLogin = () => {
    navigate('/login'); // Redirect to login page
  };

  return (
    <div style={styles.registerContainer}>
      <form style={styles.registerForm} onSubmit={handleSubmit}>
        <h2 style={styles.heading}>Register</h2>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
          style={styles.input}
        />
        <select
          name="role"
          onChange={handleChange}
          style={styles.input}
        >
          <option value="User">User</option>
          <option value="Admin">Admin</option>
        </select>
        <button type="submit" style={styles.button}>Register</button>
        <div style={styles.redirectContainer}>
          <p style={styles.redirectText}>Already have an account?</p>
          <button
            type="button"
            onClick={handleRedirectToLogin}
            style={styles.redirectButton}
          >
            Login here
          </button>
        </div>
      </form>
    </div>
  );
};

const styles = {
  registerContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f4f4f9',
  },
  registerForm: {
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '400px',
    textAlign: 'center',
  },
  heading: {
    marginBottom: '20px',
    fontSize: '24px',
    color: '#333',
  },
  input: {
    width: '100%',
    padding: '12px',
    margin: '10px 0',
    borderRadius: '4px',
    border: '1px solid #ddd',
    fontSize: '16px',
  },
  button: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    marginBottom: '15px',
  },
  redirectContainer: {
    marginTop: '15px',
  },
  redirectText: {
    fontSize: '14px',
    color: '#666',
  },
  redirectButton: {
    backgroundColor: 'transparent',
    color: '#007bff',
    border: 'none',
    cursor: 'pointer',
    textDecoration: 'underline',
    fontSize: '16px',
  },
};

export default Register;
