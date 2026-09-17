import React, { useState } from 'react';

const Quiz = ({ questions }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const q = questions[currentIdx];

  const handleSelect = (idx) => {
    if (showExplanation) return;
    setSelectedOption(idx);
    setShowExplanation(true);
  };

  const nextQuestion = () => {
    setSelectedOption(null);
    setShowExplanation(false);
    setCurrentIdx((prev) => prev + 1);
  };

  if (currentIdx >= questions.length) {
    return (
      <div style={{ padding: '2rem', backgroundColor: '#ecfdf5', borderRadius: '8px', border: '1px solid #6ee7b7', textAlign: 'center' }}>
        <h3 style={{ color: '#065f46', margin: 0 }}>Quiz Complete!</h3>
        <p style={{ color: '#047857', marginTop: '0.5rem' }}>Great job testing your knowledge.</p>
        <button 
          onClick={() => { setCurrentIdx(0); setSelectedOption(null); setShowExplanation(false); }}
          style={{ marginTop: '1rem', padding: '0.5rem 1rem', backgroundColor: '#10b981', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          Retake Quiz
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: '1.5rem', backgroundColor: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
        <h3 style={{ margin: 0, color: '#0f172a' }}>Question {currentIdx + 1} of {questions.length}</h3>
      </div>
      
      <p style={{ fontSize: '1.1rem', color: '#1e293b', marginBottom: '1.5rem' }}>{q.question}</p>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {q.options.map((opt, idx) => {
          let bgColor = 'white';
          let borderColor = '#cbd5e1';
          if (showExplanation) {
            if (idx === q.correctIdx) {
              bgColor = '#dcfce7'; // green
              borderColor = '#22c55e';
            } else if (idx === selectedOption) {
              bgColor = '#fee2e2'; // red
              borderColor = '#ef4444';
            }
          }

          return (
            <button 
              key={idx}
              onClick={() => handleSelect(idx)}
              style={{
                textAlign: 'left',
                padding: '1rem',
                backgroundColor: bgColor,
                border: `1px solid ${borderColor}`,
                borderRadius: '6px',
                cursor: showExplanation ? 'default' : 'pointer',
                fontSize: '1rem',
                color: '#334155'
              }}
              disabled={showExplanation}
            >
              {opt}
            </button>
          );
        })}
      </div>

      {showExplanation && (
        <div style={{ marginTop: '1.5rem', padding: '1rem', backgroundColor: '#e0f2fe', borderRadius: '6px', border: '1px solid #7dd3fc' }}>
          <p style={{ margin: 0, color: '#0369a1' }}>
            <strong>{selectedOption === q.correctIdx ? 'Correct! ' : 'Not quite. '}</strong>
            {q.explanation}
          </p>
          <button 
            onClick={nextQuestion}
            style={{ marginTop: '1rem', padding: '0.5rem 1rem', backgroundColor: '#0ea5e9', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
          >
            Next Question
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
