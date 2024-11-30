import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password,
      });

      const { data } = response.data;
      // Redirect to Welcome page with user details
      navigate('/welcome', { state: { name: data.name, role: data.role } });
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong');
    }
  };

  const handleRedirectToRegister = () => {
    navigate('/register');
  };

  return (
    <div style={styles.loginContainer}>
      <form style={styles.loginForm} onSubmit={handleLogin}>
        <h2 style={styles.heading}>Login</h2>
        {error && <p style={styles.errorMessage}>{error}</p>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Login</button>
        <div style={styles.redirectContainer}>
          <p style={styles.redirectText}>Don't have an account?</p>
          <button
            type="button"
            onClick={handleRedirectToRegister}
            style={styles.redirectButton}
          >
            Register here
          </button>
        </div>
      </form>
    </div>
  );
};

const styles = {
  loginContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f4f4f9',
  },
  loginForm: {
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
  errorMessage: {
    color: 'red',
    marginBottom: '10px',
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

export default Login;
