# Math.middleAngle()

## Описание
Расчет среднего угла между углами a~1~ и a~~2~ с учетом направления (`CW` — по часовой стрелке, `CCW` — против часовой стрелки).

## Синтаксис
```javascript
middleAngle(a1 : number, a2 : number, dir = [Direction.CW | Direction.CCW]) : number
``` 

## Аргументы
- `a1` (number, обязательно): первый угол.
- `a2` (number, обязательно): второй угол.
- `dir` (number, обязательно): направление обхода, одно из констант `Direction.CW` | `Direction.CCW`.

## Возвращаемое значение
`number`: средний угол.

## Пример
``` javascript linenums="1"
let mAngle = Math.middleAngle(0, 180, Direction.CW)
console.info(mAngle)
``` 

!!! info "См. также"

    [Math.rad()](rad.md)

    [Math.deg()](deg.md)

    [Math.normAngle()](normAngle.md)
