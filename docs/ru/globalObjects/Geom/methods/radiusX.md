# Geom.radiusX()

## Описание
Радиус точки в плоскости YOZ.

## Синтаксис
```javascript
Geom.radiusX(point: Point3) -> Number
Geom.radiusX(x: Number, y: Number, z: Number) -> Number
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
let radius1 = Geom.radiusX(Geom.point3(10,10,10))
console.info(radius1) // output:
let radius2 = Geom.radiusX(10,10,10)
console.info(radius2) // output:
```

!!! info "См. также"

    []()

