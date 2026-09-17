import React from 'react';
import { useParams, Link } from 'react-router-dom';
import QubitLesson from '../features/lessons/what-is-a-qubit/QubitLesson';

const LessonDetail = () => {
  const { lessonId } = useParams();

  const sectionStyle = {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '8px',
    marginBottom: '2rem',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
  };

  const placeholderLabel = {
    display: 'inline-block',
    backgroundColor: '#f1f5f9',
    color: '#64748b',
    padding: '0.25rem 0.5rem',
    borderRadius: '4px',
    fontSize: '0.8rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    textTransform: 'uppercase',
    letterSpacing: '0.05em'
  };

  if (lessonId === 'what-is-a-qubit') {
    return <QubitLesson />;
  }

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
      <Link to="/learn" style={{ display: 'inline-block', marginBottom: '2rem', color: '#3b82f6', textDecoration: 'none' }}>
        &larr; Back to Curriculum
      </Link>
      
      <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: '#0f172a' }}>
        Lesson: {lessonId.replace(/-/g, ' ')}
      </h1>

      <div style={sectionStyle}>
        <span style={placeholderLabel}>Concept Explanation Placeholder</span>
        <h2 style={{ marginTop: 0 }}>Theory &amp; Intuition</h2>
        <p style={{ color: '#475569', lineHeight: '1.6' }}>
          This section will contain the interactive educational content explaining the theoretical concepts. It will feature diagrams, analogies, and mathematical foundations appropriate for the lesson difficulty.
        </p>
      </div>

      <div style={sectionStyle}>
        <span style={placeholderLabel}>Interactive Visualization Placeholder</span>
        <h2 style={{ marginTop: 0 }}>Visualizing the Qubit</h2>
        <div style={{ height: '200px', backgroundColor: '#f8fafc', border: '1px dashed #cbd5e1', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8' }}>
          Bloch Sphere / State Vector Visualization Area
        </div>
      </div>

      <div style={sectionStyle}>
        <span style={placeholderLabel}>Example Circuit Placeholder</span>
        <h2 style={{ marginTop: 0 }}>Quantum Circuit</h2>
        <div style={{ height: '150px', backgroundColor: '#f8fafc', border: '1px dashed #cbd5e1', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8' }}>
          Circuit Composer / Editor Area
        </div>
      </div>

      <div style={sectionStyle}>
        <span style={placeholderLabel}>Simulation Result Placeholder</span>
        <h2 style={{ marginTop: 0 }}>Experiment Results</h2>
        <div style={{ height: '150px', backgroundColor: '#f8fafc', border: '1px dashed #cbd5e1', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8' }}>
          Measurement Histogram &amp; Stats
        </div>
      </div>

      <div style={sectionStyle}>
        <span style={placeholderLabel}>Quiz &amp; Challenge Placeholder</span>
        <h2 style={{ marginTop: 0 }}>Check Your Understanding</h2>
        <p style={{ color: '#475569', lineHeight: '1.6' }}>
          Interactive questions and mini-challenges to ensure comprehension before moving on to the next lesson.
        </p>
      </div>

      <div style={{ ...sectionStyle, backgroundColor: '#fdf4ff', border: '1px solid #f0abfc' }}>
        <span style={{ ...placeholderLabel, backgroundColor: '#fae8ff', color: '#a21caf' }}>AI Tutor Placeholder</span>
        <h2 style={{ marginTop: 0, color: '#86198f' }}>Need Help?</h2>
        <p style={{ color: '#701a75' }}>
          Ask questions about this specific lesson, and the AI will guide you without just giving away the answers.
        </p>
      </div>
    </div>
  );
};

export default LessonDetail;
