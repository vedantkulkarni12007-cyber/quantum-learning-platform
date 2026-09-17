import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import SimulatorTest from './pages/SimulatorTest'
import './App.css'

function Home() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Quantum Learning Platform</h1>
      <p>Welcome to the platform.</p>
      <Link to="/simulator" style={{ color: 'blue', textDecoration: 'underline' }}>
        Go to Simulator Test
      </Link>
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/simulator" element={<SimulatorTest />} />
      </Routes>
    </Router>
  )
}

export default App
