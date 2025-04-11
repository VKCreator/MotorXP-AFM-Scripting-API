# machineType

## Description

The `machineType` property defines the configuration type of the motor.

## Possible Values:
- `Motor.SR` (0): stator - rotor
- `Motor.SRS` (1): stator - rotor - stator
- `Motor.SRSRS` (2): stator - rotor - stator - rotor - stator
- `Motor.RSR` (3): rotor - stator - rotor
- `Motor.RSRSR` (4): rotor - stator - rotor - stator - rotor

## Syntax
``` javascript
motor.machineType = Motor.<TYPE>;
```
## Example
``` javascript linenums="1"
// Set the machine type to Stator-Rotor-Stator configuration
motor.machineType = Motor.SRS;

// Check the current machine type
console.log(motor.machineType); // Output: 1
```
