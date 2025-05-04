# motor.machineType

## Описание
The `machineType` property defines the configuration type of the motor.

## Принимаемые значения
- [^^`Motor.SR`^^](../constants/SR.md) — Тип мотора: Статор-Ротор.
  Значение: `0`
- [^^`Motor.SRS`^^](../constants/SRS.md) — Тип мотора: Статор-Ротор-Статор.
  Значение: `1`
- [^^`Motor.SRSRS`^^](../constants/SRSRS.md) — Тип мотора: Статор-Ротор-Статор-Ротор-Статор.
  Значение: `2`
- [^^`Motor.RSR`^^](../constants/RSR.md) — Тип мотора: Ротор-Статор-Ротор.
  Значение: `3`
- [^^`Motor.RSRSR`^^](../constants/RSRSR.md) — Тип мотора: Ротор-Статор-Ротор-Статор-Ротор.
  Значение: `4`

## Тип значения свойства
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

    []()
