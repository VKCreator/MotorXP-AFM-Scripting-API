# Geom.radiusZ()

## Описание
Радиус точки в плоскости XOY, ноль - [0,0,0].

## Синтаксис
```javascript
Geom.radiusZ(point: Point3) -> Number
Geom.radiusZ(x: Number, y: Number, z: Number) -> Number
```

## Аргументы

| Аргумент | Тип             | Значение по умолчанию | Обязательный        | Описание                         |
|----------|------------------|-----------------------|---------------------|----------------------------------|
| `point`  | `Point3`         | —                     | :white_check_mark: Да | Точка в трёхмерном пространстве.   |
| `x`      | `#!javascript Number` | —                 | :white_check_mark: Да | x-координата точки               |
| `y`      | `#!javascript Number` | —                 | :white_check_mark: Да | y-координата точки               |
| `z`      | `#!javascript Number` | —                 | :white_check_mark: Да | z-координата точки               |

!!! info "Примечание"
    Можно передать либо объект типа `Point3`, либо отдельные `x`, `y`, `z`.

## Возвращаемое значение

| Тип             | Описание                                               |
|------------------|--------------------------------------------------------|
| `#!javascript Number` | Радиус точки относительно точки `[0,0,0]`.          |

## Пример
```javascript linenums="1"
let radius1 = Geom.radiusZ(Geom.point3(10,10,10))
console.info(radius1) // output:
let radius2 = Geom.radiusZ(10,10,10)
console.info(radius2) // output:

!!! info "См. также"

    []()

