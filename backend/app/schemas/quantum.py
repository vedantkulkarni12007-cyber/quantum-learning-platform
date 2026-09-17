from pydantic import BaseModel, Field
from typing import List, Dict, Union, Optional, Any

class QuantumOperation(BaseModel):
    gate: str = Field(..., description="The gate to apply, e.g., 'H', 'X', 'Y', 'Z', 'CX', 'M'")
    target: int = Field(..., description="Target qubit index")
    control: Optional[int] = Field(None, description="Control qubit index, required for 2-qubit gates like 'CX'")

class CircuitDefinition(BaseModel):
    num_qubits: int = Field(..., ge=1, description="Number of qubits in the circuit")
    operations: List[QuantumOperation] = Field(..., description="List of operations to apply")
    shots: int = Field(1024, ge=1, description="Number of shots for the simulation")

class SimulationResult(BaseModel):
    num_qubits: int
    operations: List[Dict[str, Any]]
    measurement_counts: Dict[str, int]
    metadata: Dict[str, Any]
