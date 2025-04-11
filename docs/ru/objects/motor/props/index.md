# Motor Properties

## Properties of the `motor` Object

- `machineType`: Type of the machine.
- `height`: Height of the machine.
- `periodicity`: Periodicity.
- `periodicityAngleSpan`: Angular span of the periodicity.
- `boundaryConditionMode`: Mode of the boundary conditions.
- `boundaryCondition`: Boundary condition applied to the motor.
- `simDomain`: Simulation domain of the motor (READONLY, returns `SimDomain`).
- `simRadialOuterDomain`: Radial outer domain of the simulation (READONLY).
- `stator`: Returns the stator object associated with the motor.
- `rotor`: Returns the rotor object associated with the motor.
- `winding`: Returns the winding object associated with the motor.
- `mesh`: Returns the mesh object associated with the motor.