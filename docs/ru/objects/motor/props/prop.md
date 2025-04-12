# machineType

## Описание

The <b>`machineType`</b> property defines the configuration type of the motor.

## Принимаемые значения:
- `Motor.SR` (0): stator - rotor
- `Motor.SRS` (1): stator - rotor - stator
- `Motor.SRSRS` (2): stator - rotor - stator - rotor - stator
- `Motor.RSR` (3): rotor - stator - rotor
- `Motor.RSRSR` (4): rotor - stator - rotor - stator - rotor

## Тип значения свойства:
`Number`

## Доступ
`Чтение\Запись`

## Синтаксис
``` javascript
motor.machineType = Motor.<TYPE>;
motor.machineType;
```
## Пример
``` javascript linenums="1"
// Set the machine type to Stator-Rotor-Stator configuration
motor.machineType = Motor.SRS;

// Check the current machine type
console.log(motor.machineType); // Output: 1
```
!!! info "См. также"

    [](*.md)
	
	[](*.md)