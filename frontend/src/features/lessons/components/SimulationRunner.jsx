import React, { useState } from 'react';
import { simulateCircuit } from '../../../services/quantumApi';

const SimulationRunner = ({ circuitDef, buttonText = "Run Simulation", onSimulationComplete }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);

  const runSim = async () => {
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const data = await simulateCircuit(circuitDef);
      setResult(data);
      if (onSimulationComplete) {
        onSimulationComplete(data);
      }
    } catch (err) {
      setError(err.toString());
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '1.5rem', backgroundColor: '#f8fafc', borderRadius: '8px', border: '1px solid #cbd5e1' }}>
      <div style={{ textAlign: 'center', marginBottom: result ? '1.5rem' : '0' }}>
        <button 
          onClick={runSim}
          disabled={loading}
          style={{
            padding: '0.75rem 1.5rem',
            fontSize: '1rem',
            backgroundColor: '#8b5cf6',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: loading ? 'not-allowed' : 'pointer',
            fontWeight: 'bold',
            boxShadow: '0 2px 4px rgba(139,92,246,0.3)'
          }}
        >
          {loading ? 'Running on Qiskit Aer...' : buttonText}
        </button>
      </div>

      {error && (
        <div style={{ marginTop: '1rem', padding: '1rem', backgroundColor: '#fee2e2', color: '#b91c1c', borderRadius: '4px' }}>
          Error: {error}
        </div>
      )}

      {result && (
        <div>
          <h4 style={{ margin: '0 0 1rem 0', color: '#1e293b', textAlign: 'center' }}>Simulation Results ({result.metadata.shots} shots)</h4>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
            {Object.keys(result.measurement_counts).sort().map(key => {
              const count = result.measurement_counts[key];
              const percentage = ((count / result.metadata.shots) * 100).toFixed(1);
              const barColor = key === '0' ? '#3b82f6' : '#ef4444';
              
              return (
                <div key={key} style={{ textAlign: 'center', width: '100px' }}>
                  <div style={{ fontWeight: 'bold', fontSize: '1.25rem', color: barColor }}>{key}</div>
                  <div style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{percentage}%</div>
                  <div style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '0.5rem' }}>({count} counts)</div>
                  
                  <div style={{ height: '100px', backgroundColor: '#e2e8f0', borderRadius: '4px', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ 
                      position: 'absolute', 
                      bottom: 0, 
                      left: 0, 
                      right: 0, 
                      height: `${percentage}%`, 
                      backgroundColor: barColor,
                      transition: 'height 0.5s ease'
                    }}></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default SimulationRunner;
