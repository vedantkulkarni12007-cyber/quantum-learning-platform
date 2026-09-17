import React from 'react';

const Lab = () => {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', padding: '4rem 2rem' }}>
      <h1 style={{ fontSize: '3rem', color: '#0f172a', marginBottom: '1rem' }}>Quantum Lab</h1>
      <p style={{ fontSize: '1.25rem', color: '#64748b', marginBottom: '2rem' }}>
        A free-play sandbox to build and test your own quantum circuits.
      </p>
      <div style={{ padding: '3rem', backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0' }}>
        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🧪</div>
        <h2 style={{ color: '#334155' }}>Under Construction</h2>
        <p style={{ color: '#475569', maxWidth: '500px', margin: '0 auto' }}>
          We are currently building the full drag-and-drop circuit builder. Check out the <a href="/simulator" style={{ color: '#3b82f6' }}>Simulator Test</a> page to see our backend engine in action!
        </p>
      </div>
    </div>
  );
};

export default Lab;
