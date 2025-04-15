# middleAngle

## Описание
Расчет среднего угла между углами a1 и a2 с учетом направления (CW - по часовой стрелке, CCW - против часовой стрелки).

## Синтаксис
```javascript
middleAngle(a1: number, a2: number, dir = [Direction.CW | Direction.CCW]): number
``` 

## Аргументы
- `a1` (number, обязательно): Первый угол.
- `a2` (number, обязательно): Второй угол.
- `dir` (number, обязательно): Направление обхода, одно из констант [Direction.CW | Direction.CCW].

## Возвращаемое значение
- `number`: Средний угол

## Пример
``` javascript linenums="1"
let ma = Math.middleAngle(0, 180, Direction.CW)
console.info(ma)
``` 

!!! info "См. также"

    [Math.rad](rad.md)

    [Math.deg](deg.md)

    [normAngle](normAngle.md)
