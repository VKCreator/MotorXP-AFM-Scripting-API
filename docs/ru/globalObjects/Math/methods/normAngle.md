# normAngle()

## Описание
Нормализирует значение угла, возвращает значение в интервале (0°, 360°) градусов.

## Синтаксис
```javascript
normAngle(a : number) : number
``` 

## Аргументы
- `a` (number, обязательно): значение угла в градусах.

## Возвращаемое значение
- `number`: значение угла в интервале (0°, 360°).

## Пример
``` javascript linenums="1"
let nAngle = Math.normAngle(3600)
console.info(nAngle)
``` 

!!! info "См. также"

    [Math.rad()](rad.md)

    [Math.deg()](deg.md)

    [Math.middleAngle()](middleAngle.md)
