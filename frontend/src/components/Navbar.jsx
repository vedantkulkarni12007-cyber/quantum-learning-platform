import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#1a1a2e',
    color: 'white',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  };

  const linkStyle = {
    color: '#e2e8f0',
    textDecoration: 'none',
    marginLeft: '1.5rem',
    fontWeight: '500'
  };

  return (
    <nav style={navStyle}>
      <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
          QuantumLearn
        </Link>
      </div>
      <div>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/learn" style={linkStyle}>Learn</Link>
        <Link to="/lab" style={linkStyle}>Quantum Lab</Link>
        <Link to="/challenges" style={linkStyle}>Challenges</Link>
        <Link to="/simulator" style={linkStyle}>Simulator</Link>
        <Link to="/dashboard" style={linkStyle}>Dashboard</Link>
      </div>
    </nav>
  );
};

export default Navbar;
