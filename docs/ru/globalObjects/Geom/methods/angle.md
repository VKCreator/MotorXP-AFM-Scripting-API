# Geom.angle()

## Описание
Получить угол точки.

## Синтаксис
```javascript
Geom.angle(x: Number, y: Number) -> Number
```

## Аргументы
| Аргумент | Тип    | Обязательный | Описание                     |
|----------|--------|--------------|------------------------------|
| `x`      | `#!javascript Number` | :white_check_mark: Да           | Значение координаты X        |
| `y`      | `#!javascript Number` | :white_check_mark: Да           | Значение координаты Y        |

## Возвращаемое значение
| Тип      | Описание                                                                 |
|----------|--------------------------------------------------------------------------|
| `#!javascript Number` | Угол точки в градусах относительно центра координат `[0,0]`. Ноль соответствует направлению на три часа, увеличение угла — по часовой стрелке. |

## Пример
```javascript linenums="1"
let result = Geom.angle(100, 100)
console.info(result) // output: 45
```

!!! info "См. также"

    [Geom.angleX()](angleX.md)

    [Geom.angleY()](angleY.md)
    
    [Geom.angleZ()](angleZ.md)

