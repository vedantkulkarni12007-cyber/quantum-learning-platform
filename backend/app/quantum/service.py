from qiskit import QuantumCircuit
from qiskit_aer import AerSimulator
from app.schemas.quantum import CircuitDefinition, QuantumOperation

class QuantumService:
    def __init__(self):
        self.simulator = AerSimulator()

    def simulate_circuit(self, circuit_def: CircuitDefinition) -> dict:
        # Create circuit with q qubits and q classical bits
        qc = QuantumCircuit(circuit_def.num_qubits, circuit_def.num_qubits)

        # Apply operations
        for op in circuit_def.operations:
            gate = op.gate.upper()
            if gate == 'H':
                qc.h(op.target)
            elif gate == 'X':
                qc.x(op.target)
            elif gate == 'Y':
                qc.y(op.target)
            elif gate == 'Z':
                qc.z(op.target)
            elif gate == 'CX':
                if op.control is not None:
                    qc.cx(op.control, op.target)
                else:
                    raise ValueError("CX gate requires a control qubit")
            elif gate == 'M':
                # Measurement
                qc.measure(op.target, op.target)
            else:
                raise ValueError(f"Unsupported gate: {gate}")

        # If no measurements were added explicitly, measure all qubits
        if not any(op.gate.upper() == 'M' for op in circuit_def.operations):
            for i in range(circuit_def.num_qubits):
                qc.measure(i, i)

        # Run simulation
        job = self.simulator.run(qc, shots=circuit_def.shots)
        result = job.result()
        counts = result.get_counts(qc)
        
        # qiskit results can have keys like '0', '1', '00', etc.
        # Ensure we return a dictionary of strings to ints
        clean_counts = {str(k): int(v) for k, v in counts.items()}

        # Format output
        operations_dict = [op.model_dump() for op in circuit_def.operations]
        
        return {
            "num_qubits": circuit_def.num_qubits,
            "operations": operations_dict,
            "measurement_counts": clean_counts,
            "metadata": {
                "simulator": "AerSimulator",
                "shots": circuit_def.shots,
                "success": result.success
            }
        }

quantum_service = QuantumService()
