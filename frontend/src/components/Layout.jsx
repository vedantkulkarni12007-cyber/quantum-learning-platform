import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>
      <Navbar />
      <main style={{ flex: 1, padding: '2rem', backgroundColor: '#f8fafc' }}>
        <Outlet />
      </main>
      <footer style={{ padding: '1rem', textAlign: 'center', backgroundColor: '#f1f5f9', color: '#64748b' }}>
        &copy; 2026 Quantum Learning Platform
      </footer>
    </div>
  );
};

export default Layout;
