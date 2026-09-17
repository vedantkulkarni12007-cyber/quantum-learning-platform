import React from 'react';

const StateVisualizer = ({ stateName }) => {
  let prob0 = 100;
  let prob1 = 0;
  let title = '|0⟩';
  let desc = 'The qubit is definitely in state 0.';
  let visualStyle = { background: '#3b82f6' }; // blue for 0
  
  if (stateName === '|1⟩') {
    prob0 = 0;
    prob1 = 100;
    title = '|1⟩';
    desc = 'The qubit is definitely in state 1.';
    visualStyle = { background: '#ef4444' }; // red for 1
  } else if (stateName === '|+⟩') {
    prob0 = 50;
    prob1 = 50;
    title = '|+⟩';
    desc = 'The qubit is in an equal superposition of 0 and 1.';
    visualStyle = { background: 'linear-gradient(to right, #3b82f6 50%, #ef4444 50%)' };
  }

  return (
    <div style={{ padding: '1.5rem', backgroundColor: '#f8fafc', borderRadius: '8px', border: '1px solid #cbd5e1', textAlign: 'center' }}>
      <h3 style={{ margin: '0 0 1rem 0', color: '#1e293b' }}>State: {title}</h3>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2rem', marginBottom: '1.5rem' }}>
        <div style={{ width: '80px', height: '80px', borderRadius: '50%', ...visualStyle, border: '3px solid #cbd5e1', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}></div>
      </div>
      
      <p style={{ color: '#475569', marginBottom: '1rem', fontStyle: 'italic' }}>{desc}</p>
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontWeight: 'bold', color: '#3b82f6' }}>0</div>
          <div style={{ fontSize: '1.25rem', color: '#0f172a' }}>{prob0}%</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontWeight: 'bold', color: '#ef4444' }}>1</div>
          <div style={{ fontSize: '1.25rem', color: '#0f172a' }}>{prob1}%</div>
        </div>
      </div>
    </div>
  );
};

export default StateVisualizer;
