# Geom.ring()

## Описание
2D кольцо или сектор кольца, строится в плоскости XOY, углы задаются в градусах, центр фигуры в точке [0,0,0].

## Синтаксис
```javascript
Geom.ring(radius1: Number, radius2: Number) -> Shape
Geom.ring(radius1: Number, radius2: Number, angle: Number) -> Shape
Geom.ring(radius1: Number, radius2: Number, angle1: Number, angle2: Number) -> Shape
```

## Аргументы

| Аргумент   | Тип                  | Значение по умолчанию | Обязательный        | Описание                                      |
|------------|-----------------------|----------------------|---------------------|-----------------------------------------------|
| `radius1`  | `#!javascript Number` | —                    | :white_check_mark: Да | Наружный радиус кольца                        |
| `radius2`  | `#!javascript Number` | —                    | :white_check_mark: Да | Внутренний радиус кольца                      |
| `angle`    | `#!javascript Number` | —                    | :white_check_mark: Да | Угол сектора кольца, от 0 до 360°. Тело центрируется относительно оси OX. |
| `angle1`   | `#!javascript Number` | —                    | :white_check_mark: Да | Начальный угол сектора кольца (в градусах)     |
| `angle2`   | `#!javascript Number` | —                    | :white_check_mark: Да | Конечный угол сектора кольца (в градусах)       |

## Возвращаемое значение

| Тип      | Описание                                 |
|----------|------------------------------------------|
| `Shape`  | Объект типа `Shape`, представляющий кольцо или его сектор. |

## Пример
```javascript linenums="1"
let s1 = Geom.ring(100, 50)
console.info(s1) // output:
let s2 = Geom.ring(100, 50, 30)
console.info(s2) // output:
let s3 = Geom.circle(100, 50, 0, 90)
console.info(s3) // output:
```

!!! info "См. также"

    []()

