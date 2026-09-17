import React from 'react';
import { Link } from 'react-router-dom';
import { curriculumData } from '../data/curriculum';

const Learn = () => {
  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
      <h1 style={{ color: '#1e293b', marginBottom: '2rem', fontSize: '2.5rem' }}>Quantum Computing Curriculum</h1>
      
      {curriculumData.map((module, idx) => (
        <div key={idx} style={{ marginBottom: '3rem' }}>
          <h2 style={{ color: '#334155', borderBottom: '2px solid #e2e8f0', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>
            {module.category}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {module.lessons.map(lesson => (
              <div key={lesson.id} style={{ 
                backgroundColor: 'white', 
                padding: '1.5rem', 
                borderRadius: '8px', 
                border: '1px solid #e2e8f0',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                  <h3 style={{ margin: 0, color: '#0f172a', fontSize: '1.25rem' }}>{lesson.title}</h3>
                  <span style={{ 
                    fontSize: '0.75rem', 
                    padding: '0.25rem 0.5rem', 
                    borderRadius: '999px',
                    backgroundColor: lesson.difficulty === 'Beginner' ? '#dcfce7' : lesson.difficulty === 'Intermediate' ? '#fef08a' : '#fecaca',
                    color: lesson.difficulty === 'Beginner' ? '#166534' : lesson.difficulty === 'Intermediate' ? '#854d0e' : '#991b1b'
                  }}>
                    {lesson.difficulty}
                  </span>
                </div>
                <p style={{ color: '#64748b', fontSize: '0.9rem', flex: 1 }}>{lesson.description}</p>
                <div style={{ marginTop: '1.5rem' }}>
                  <Link to={`/learn/${lesson.id}`} style={{
                    display: 'block',
                    textAlign: 'center',
                    padding: '0.5rem',
                    backgroundColor: '#f1f5f9',
                    color: '#3b82f6',
                    textDecoration: 'none',
                    borderRadius: '4px',
                    fontWeight: '500'
                  }}>
                    Start Lesson
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Learn;
