# Motor Properties

## Properties of the `motor` Object
- `machineType`: Type of the machine.
- `stator`: Returns the `Stator` object associated with the motor.
- `rotor`: Returns the `Rotor` object associated with the motor.
- `airgap`: Returns the `Airgap` object associated with the motor.
- `winding`: Returns the `Winding` object associated with the motor.
- `mesh`: Returns the `Mesh` object associated with the motor.
- `height`: Height of the machine  (READONLY).
- `periodicity`: Periodicity  (READONLY).
- `periodicityAngleSpan`: Angular span of the periodicity  (READONLY).
- `boundaryConditionMode`: Mode of the boundary conditions.
- `boundaryCondition`: Boundary condition applied to the motor.
- `simDomain`: Simulation domain of the motor (READONLY, returns `SimDomain`).
- `simRadialOuterDomain`: Radial outer domain of the simulation (READONLY).
