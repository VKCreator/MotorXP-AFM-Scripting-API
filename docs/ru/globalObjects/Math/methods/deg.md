# Math.deg()

## Описание
Перевод радиан в градусы.

## Синтаксис
```javascript
deg(radians: Number) -> Number
``` 

## Аргументы
| Аргумент | Тип    | Обязательный | Описание                     |
|----------|--------|--------------|------------------------------|
| `radians`      | `#!javascript Number` | :white_check_mark: Да           | Значение угла в радианах.        |

## Возвращаемое значение
| Тип      | Описание                                                                 |
|----------|--------------------------------------------------------------------------|
| **`#!javascript Number`** | Значение угла в градусах. |

## Пример
``` javascript linenums="1"
let degrees = Math.deg(3.14157)
console.info("3.14157=", degrees, "°")
``` 

!!! info "См. также"

    [Math.rad()](rad.md)

    [Math.normAngle()](normAngle.md)

    [Math.middleAngle()](middleAngle.md)

