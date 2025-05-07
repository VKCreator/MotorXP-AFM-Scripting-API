# motor.machineType

## Описание
The `machineType` property defines the configuration type of the motor.

## Принимаемые значения
{%
    include-markdown "../constants/index.md"
    start="<!--start-->"
    end="<!--end-->"
%}

## Тип значения свойства
`#!javascript Number`

## Доступ
`Чтение\Запись`

## Синтаксис
``` javascript
motor.machineType
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

    []()
