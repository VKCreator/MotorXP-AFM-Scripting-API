# normAngle

## Описание
Нормализирует значение угла, возвращает значение в интервале [0, 360] градусов.

## Синтаксис
```javascript
normAngle(a: number): number
``` 

## Аргументы
- `a` (number, обязательно): Значение угла в градусах.

## Возвращаемое значение
- `number`: Значение угла в интервале [0, 360] градусов

## Пример
``` javascript linenums="1"
let na = Math.normAngle(3600)
console.info(na)
``` 

!!! info "См. также"

    [rad](rad.md)

    [deg](deg.md)

    [middleAngle](middleAngle.md)
