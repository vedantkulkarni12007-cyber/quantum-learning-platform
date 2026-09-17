import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import StateVisualizer from '../components/StateVisualizer';
import Quiz from '../components/Quiz';
import SimulationRunner from '../components/SimulationRunner';

const QubitLesson = () => {
  const [selectedState, setSelectedState] = useState('|0⟩');
  const [superpositionState, setSuperpositionState] = useState('|0⟩');
  const [simResult, setSimResult] = useState(null);
  const [challengeResult, setChallengeResult] = useState(null);
  const [lessonComplete, setLessonComplete] = useState(false);

  const sectionStyle = {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '12px',
    marginBottom: '2rem',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
    border: '1px solid #f1f5f9'
  };

  const h2Style = { marginTop: 0, color: '#0f172a', fontSize: '1.5rem', marginBottom: '1rem' };
  const pStyle = { color: '#475569', lineHeight: '1.7', fontSize: '1.1rem', marginBottom: '1.5rem' };

  const quizQuestions = [
    {
      question: "What is the classical equivalent of a qubit?",
      options: ["A transistor", "A byte", "A classical bit (0 or 1)", "A logic gate"],
      correctIdx: 2,
      explanation: "A qubit is the quantum analog to a classical bit. While a classical bit can only be 0 or 1, a qubit can be in a superposition of both."
    },
    {
      question: "What does the Hadamard (H) gate do to a qubit initially in the |0⟩ state?",
      options: ["Changes it to |1⟩", "Puts it into an equal superposition |+⟩", "Measures the qubit", "Destroys the qubit"],
      correctIdx: 1,
      explanation: "The H gate creates an equal superposition, often written as |+⟩, where there is a 50% probability of measuring 0 and a 50% probability of measuring 1."
    },
    {
      question: "Why might 1024 measurements of a superposition state not produce exactly 512 zeros and 512 ones?",
      options: ["Because the computer is broken", "Because quantum measurement is fundamentally probabilistic", "Because we need more qubits", "Because the H gate is imperfect"],
      correctIdx: 1,
      explanation: "Quantum measurement is probabilistic, much like flipping a fair coin 1024 times. You expect around 512 heads, but will rarely get exactly that number."
    }
  ];

  const handleSimComplete = (data) => {
    setSimResult(data);
  };

  const handleChallengeComplete = (data) => {
    setChallengeResult(data);
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <Link to="/learn" style={{ display: 'inline-block', marginBottom: '2rem', color: '#3b82f6', textDecoration: 'none', fontWeight: '500' }}>
        &larr; Back to Curriculum
      </Link>
      
      <h1 style={{ fontSize: '3rem', marginBottom: '2rem', color: '#0f172a' }}>What is a Qubit?</h1>

      <section style={sectionStyle}>
        <h2 style={h2Style}>1. Classical Bits vs Qubits</h2>
        <p style={pStyle}>
          In classical computing, all information is processed using <strong>bits</strong>. A bit can only be in one of two states: <code>0</code> or <code>1</code>.
        </p>
        <p style={pStyle}>
          In quantum computing, the basic unit of information is the <strong>qubit</strong> (quantum bit). We represent the basic states of a qubit using a special notation called Dirac notation: <code>|0⟩</code> and <code>|1⟩</code>.
        </p>
        <p style={pStyle}>
          While a qubit can be in the state <code>|0⟩</code> or <code>|1⟩</code>, its true power comes from its ability to exist in a <strong>superposition</strong>—a complex combination of both states at the same time.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={h2Style}>2. Interactive Qubit State</h2>
        <p style={pStyle}>
          Use the buttons below to switch the state of the qubit. Notice how the probabilities of measuring 0 or 1 change.
        </p>
        
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '2rem' }}>
          {['|0⟩', '|1⟩', '|+⟩'].map(state => (
            <button
              key={state}
              onClick={() => setSelectedState(state)}
              style={{
                padding: '0.75rem 1.5rem',
                backgroundColor: selectedState === state ? '#3b82f6' : '#e2e8f0',
                color: selectedState === state ? 'white' : '#334155',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontWeight: 'bold',
                fontSize: '1.1rem'
              }}
            >
              Set to {state}
            </button>
          ))}
        </div>
        
        <StateVisualizer stateName={selectedState} />
      </section>

      <section style={sectionStyle}>
        <h2 style={h2Style}>3. Creating Superposition</h2>
        <p style={pStyle}>
          To create a superposition, we use quantum gates. The <strong>Hadamard (H) gate</strong> is one of the most important gates. When applied to a qubit in the <code>|0⟩</code> state, it puts the qubit into an equal superposition, known as the <code>|+⟩</code> state.
        </p>
        
        <div style={{ backgroundColor: '#f8fafc', padding: '1.5rem', borderRadius: '8px', border: '1px solid #cbd5e1', textAlign: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2rem', marginBottom: '1.5rem' }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>|0⟩</div>
            <div style={{ fontSize: '2rem', color: '#94a3b8' }}>&rarr;</div>
            <button 
              onClick={() => setSuperpositionState(superpositionState === '|0⟩' ? '|+⟩' : '|0⟩')}
              style={{ padding: '1rem', backgroundColor: '#8b5cf6', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '1.25rem', fontWeight: 'bold' }}
            >
              H Gate
            </button>
            <div style={{ fontSize: '2rem', color: '#94a3b8' }}>&rarr;</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: superpositionState === '|+⟩' ? '#8b5cf6' : '#1e293b' }}>
              {superpositionState}
            </div>
          </div>
          <p style={{ margin: 0, fontStyle: 'italic', color: '#64748b' }}>
            {superpositionState === '|0⟩' 
              ? "The qubit is in the |0⟩ state. Click the H gate to apply it." 
              : "The qubit is now in the |+⟩ superposition state! It has a 50% chance of being measured as 0, and 50% as 1."}
          </p>
        </div>
      </section>

      <section style={sectionStyle}>
        <h2 style={h2Style}>4. Real Quantum Simulation</h2>
        <p style={pStyle}>
          Let's test this on a real quantum simulator. We will send a circuit with 1 qubit, apply an H gate, and measure it 1024 times. The backend <strong>Qiskit Aer</strong> simulator will run the circuit and return the actual measurement counts.
        </p>
        
        <SimulationRunner 
          circuitDef={{
            num_qubits: 1,
            operations: [{ gate: 'H', target: 0 }],
            shots: 1024
          }}
          onSimulationComplete={handleSimComplete}
        />

        {simResult && (
          <div style={{ marginTop: '2rem', padding: '1.5rem', backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '8px' }}>
            <h3 style={{ marginTop: 0, color: '#166534' }}>Explanation of your results:</h3>
            <p style={{ color: '#15803d', lineHeight: '1.6' }}>
              The Hadamard gate successfully placed the qubit into an equal superposition. When measured 1024 times, the simulator found the qubit in state <code>0</code> exactly <strong>{simResult.measurement_counts['0']}</strong> times ({(simResult.measurement_counts['0']/1024 * 100).toFixed(1)}%), and in state <code>1</code> exactly <strong>{simResult.measurement_counts['1']}</strong> times ({(simResult.measurement_counts['1']/1024 * 100).toFixed(1)}%).
            </p>
            <p style={{ color: '#15803d', lineHeight: '1.6', marginBottom: 0 }}>
              Notice that the numbers aren't exactly 512 and 512. This is because quantum measurement is fundamentally probabilistic, just like flipping a real coin 1024 times!
            </p>
          </div>
        )}
      </section>

      <section style={sectionStyle}>
        <h2 style={h2Style}>5. Knowledge Check</h2>
        <Quiz questions={quizQuestions} />
      </section>

      <section style={sectionStyle}>
        <h2 style={h2Style}>6. Mini Challenge</h2>
        <p style={pStyle}>
          Your task: Create a circuit that results in an approximately 50/50 measurement distribution. 
          Use the available gate to modify the default <code>|0⟩</code> state.
        </p>
        
        <SimulationRunner 
          buttonText="Run Challenge Circuit (H Gate)"
          circuitDef={{
            num_qubits: 1,
            operations: [{ gate: 'H', target: 0 }],
            shots: 1024
          }}
          onSimulationComplete={handleChallengeComplete}
        />

        {challengeResult && (
          <div style={{ marginTop: '1.5rem', padding: '1rem', backgroundColor: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '8px' }}>
            <h3 style={{ marginTop: 0, color: '#1e40af' }}>Challenge Result</h3>
            {challengeResult.measurement_counts['0'] > 400 && challengeResult.measurement_counts['1'] > 400 ? (
              <p style={{ color: '#1d4ed8', margin: 0 }}>✅ <strong>Success!</strong> Your circuit achieved a near 50/50 split using the H gate.</p>
            ) : (
              <p style={{ color: '#1d4ed8', margin: 0 }}>❌ Keep trying! The distribution isn't 50/50.</p>
            )}
          </div>
        )}
      </section>

      <div style={{ textAlign: 'center', padding: '2rem 0' }}>
        {lessonComplete ? (
          <div>
            <div style={{ fontSize: '1.5rem', color: '#166534', fontWeight: 'bold', marginBottom: '1rem' }}>🎉 Lesson Complete!</div>
            <Link to="/learn/superposition" style={{ padding: '1rem 2rem', backgroundColor: '#4f46e5', color: 'white', textDecoration: 'none', borderRadius: '8px', fontWeight: 'bold', fontSize: '1.1rem' }}>
              Next Lesson: Superposition &rarr;
            </Link>
          </div>
        ) : (
          <button 
            onClick={() => setLessonComplete(true)}
            style={{ padding: '1rem 2rem', backgroundColor: '#10b981', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', fontSize: '1.1rem', boxShadow: '0 4px 6px rgba(16,185,129,0.3)' }}
          >
            Mark Lesson Complete
          </button>
        )}
      </div>

    </div>
  );
};

export default QubitLesson;
