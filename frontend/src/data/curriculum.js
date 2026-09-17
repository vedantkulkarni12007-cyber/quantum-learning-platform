export const curriculumData = [
  {
    category: "Foundations",
    lessons: [
      { id: "classical-vs-quantum", title: "Classical vs Quantum Computing", description: "Understand the fundamental differences.", difficulty: "Beginner" },
      { id: "what-is-a-qubit", title: "What is a Qubit?", description: "Introduction to quantum bits.", difficulty: "Beginner" },
      { id: "superposition", title: "Superposition", description: "How a qubit can be in multiple states at once.", difficulty: "Beginner" },
      { id: "measurement", title: "Measurement", description: "What happens when you look at a quantum state.", difficulty: "Beginner" }
    ]
  },
  {
    category: "Quantum Gates",
    lessons: [
      { id: "x-gate", title: "X Gate", description: "The quantum NOT gate.", difficulty: "Beginner" },
      { id: "y-gate", title: "Y Gate", description: "Rotation around the Y-axis.", difficulty: "Beginner" },
      { id: "z-gate", title: "Z Gate", description: "Phase flip gate.", difficulty: "Beginner" },
      { id: "hadamard-gate", title: "Hadamard Gate", description: "Creating superposition.", difficulty: "Beginner" },
      { id: "cnot-gate", title: "Controlled-X / CNOT", description: "A conditional gate acting on two qubits.", difficulty: "Intermediate" }
    ]
  },
  {
    category: "Multi-Qubit Concepts",
    lessons: [
      { id: "multiple-qubits", title: "Multiple Qubits", description: "Working with systems of many qubits.", difficulty: "Intermediate" },
      { id: "entanglement", title: "Entanglement", description: "Spooky action at a distance.", difficulty: "Intermediate" },
      { id: "bell-states", title: "Bell States", description: "Maximally entangled quantum states.", difficulty: "Intermediate" }
    ]
  },
  {
    category: "Quantum Algorithms",
    lessons: [
      { id: "deutsch-jozsa", title: "Deutsch-Jozsa Algorithm", description: "Solving a specific problem exponentially faster.", difficulty: "Advanced" },
      { id: "grovers", title: "Grover's Algorithm", description: "Quantum database search.", difficulty: "Advanced" },
      { id: "teleportation", title: "Quantum Teleportation", description: "Transferring quantum information.", difficulty: "Advanced" }
    ]
  }
];
