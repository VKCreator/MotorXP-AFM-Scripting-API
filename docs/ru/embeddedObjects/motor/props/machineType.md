# machineType

## Описание
The `machineType` property defines the configuration type of the motor.

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
motor.machineType = Motor.<TYPE>
```
## Пример
``` javascript linenums="1"
// Set the machine type to Stator-Rotor-Stator configuration
motor.machineType = Motor.SRS;

let type = motor.machineType

// Check the current machine type
console.log(motor.type) // Output: 1
```
!!! info "См. также"

    [](*.md)
	
	[](*.md)