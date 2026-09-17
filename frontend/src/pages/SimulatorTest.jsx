import React, { useState } from 'react';
import { simulateCircuit } from '../services/quantumApi';

const SimulatorTest = () => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSimulate = async () => {
    setLoading(true);
    setError(null);
    setResult(null);

    const circuit = {
      num_qubits: 1,
      operations: [
        { gate: 'H', target: 0 }
      ],
      shots: 1024
    };

    try {
      const data = await simulateCircuit(circuit);
      setResult(data);
    } catch (err) {
      setError(err.toString());
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <h1>Quantum Simulator Test</h1>
      
      <div style={{ marginBottom: '20px', padding: '15px', border: '1px solid #ddd', borderRadius: '8px' }}>
        <h2>1-Qubit Circuit</h2>
        <p>This will apply a Hadamard (H) gate to Qubit 0 and measure it.</p>
        <button 
          onClick={handleSimulate} 
          disabled={loading}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: loading ? 'not-allowed' : 'pointer'
          }}
        >
          {loading ? 'Simulating...' : 'Simulate'}
        </button>
      </div>

      {error && (
        <div style={{ color: 'red', marginBottom: '20px', padding: '10px', backgroundColor: '#ffebee', borderRadius: '4px' }}>
          <strong>Error: </strong> {error}
        </div>
      )}

      {result && (
        <div style={{ padding: '15px', border: '1px solid #4caf50', borderRadius: '8px', backgroundColor: '#e8f5e9' }}>
          <h2>Simulation Result</h2>
          <div style={{ color: 'black' }}>
            <h3>Measurement Counts:</h3>
            <pre style={{ backgroundColor: '#fff', padding: '10px', borderRadius: '4px' }}>
              {JSON.stringify(result.measurement_counts, null, 2)}
            </pre>
          </div>
          <div style={{ color: 'black' }}>
            <h3>Metadata:</h3>
            <pre style={{ backgroundColor: '#fff', padding: '10px', borderRadius: '4px' }}>
              {JSON.stringify(result.metadata, null, 2)}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
};

export default SimulatorTest;
