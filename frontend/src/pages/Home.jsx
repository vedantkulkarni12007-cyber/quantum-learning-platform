import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
      <header style={{ padding: '4rem 1rem', backgroundColor: '#e0e7ff', borderRadius: '12px', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '3rem', color: '#1e3a8a', marginBottom: '1rem' }}>
          Learn quantum computing by building and experimenting.
        </h1>
        <p style={{ fontSize: '1.25rem', color: '#4338ca', marginBottom: '2rem' }}>
          The interactive platform that takes you from classical bits to quantum algorithms.
        </p>
        <Link to="/learn" style={{
          display: 'inline-block',
          padding: '1rem 2rem',
          backgroundColor: '#4f46e5',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '8px',
          fontWeight: 'bold',
          fontSize: '1.1rem'
        }}>
          Start Learning
        </Link>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', textAlign: 'left' }}>
        <div style={{ padding: '2rem', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
          <h2 style={{ color: '#0f172a' }}>Interactive Curriculum</h2>
          <p style={{ color: '#475569' }}>
            Follow our structured learning paths from foundational concepts to advanced algorithms.
          </p>
          <Link to="/learn" style={{ color: '#4f46e5', fontWeight: 'bold' }}>View Curriculum &rarr;</Link>
        </div>

        <div style={{ padding: '2rem', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
          <h2 style={{ color: '#0f172a' }}>Quantum Lab</h2>
          <p style={{ color: '#475569' }}>
            Experiment with qubits, build custom circuits, and simulate them using Qiskit Aer.
          </p>
          <Link to="/lab" style={{ color: '#4f46e5', fontWeight: 'bold' }}>Enter Lab &rarr;</Link>
        </div>

        <div style={{ padding: '2rem', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
          <h2 style={{ color: '#0f172a' }}>Challenges</h2>
          <p style={{ color: '#475569' }}>
            Test your knowledge with hands-on coding and logic puzzles.
          </p>
          <Link to="/challenges" style={{ color: '#4f46e5', fontWeight: 'bold' }}>Practice Now &rarr;</Link>
        </div>
      </div>

      <div style={{ marginTop: '4rem', padding: '3rem', backgroundColor: '#fdf4ff', borderRadius: '12px', border: '1px dashed #d946ef' }}>
        <h2 style={{ color: '#86198f' }}>AI Tutor <span style={{ fontSize: '0.8rem', backgroundColor: '#f0abfc', color: 'white', padding: '0.2rem 0.5rem', borderRadius: '4px', verticalAlign: 'middle' }}>Coming Soon</span></h2>
        <p style={{ color: '#701a75', maxWidth: '600px', margin: '1rem auto 0' }}>
          Get unstuck instantly with our intelligent AI Tutor that understands your circuits and explains complex concepts in simple terms.
        </p>
      </div>
    </div>
  );
};

export default Home;
