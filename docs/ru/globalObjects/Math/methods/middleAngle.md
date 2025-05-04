# Math.middleAngle()

## Описание
Расчет среднего угла между углами a~1~ и a~2~ с учетом направления (`CW` — по часовой стрелке, `CCW` — против часовой стрелки).

## Синтаксис
```javascript
middleAngle(a1: Number, a2: Number, dir: Number = [Direction.CW | Direction.CCW]) ->  Number
``` 

## Аргументы
| Аргумент | Тип    | Обязательный | Описание |
|---------|--------|--------------|----------|
| `a1`    | `Number` | :white_check_mark: Да         | Первый угол (в градусах). |
| `a2`    | `Number` | :white_check_mark: Да         | Второй угол (в градусах). |
| `dir`   | `Number` | :white_check_mark: Да         | Направление обхода. Возможные значения: `Direction.CW` (по часовой стрелке), `Direction.CCW` (против часовой стрелки). |

## Возвращаемое значение

| Тип      | Описание                                      |
|----------|-----------------------------------------------|
| **`Number`** | Среднее значение угла (в градусах). |

## Пример
``` javascript linenums="1"
let mAngle = Math.middleAngle(0, 180, Direction.CW)
console.info(mAngle)
``` 

!!! info "См. также"

    [Math.rad()](rad.md)

    [Math.deg()](deg.md)

    [Math.normAngle()](normAngle.md)
