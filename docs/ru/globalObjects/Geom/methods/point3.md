# Geom.point3()

## Описание
Создание точки в 3D пространстве.

## Синтаксис
```javascript
Geom.point3(x: Number, y: Number, z: Number) -> Point3
Geom.point3(p: QPointF, z: Number) -> Point3
```

## Аргументы
| Аргумент      | Тип                  | Значение по умолчанию | Обязательный        | Описание               |
|---------------|----------------------|-----------------------|---------------------|------------------------|
| `x`           | `#!javascript Number`| —                     | :white_check_mark: Да | `x` координата точки.  |
| `y`           | `#!javascript Number`| —                     | :white_check_mark: Да | `y` координата точки.  |
| `z`           | `#!javascript Number`| —                     | :white_check_mark: Да | `z` координата точки.  |
| `p`           | `QPointF`            | —                     | :white_check_mark: Да | Точка с координатами [x,y]. |

## Возвращаемое значение

| Тип          | Описание                                                                 |
|--------------|--------------------------------------------------------------------------|
| `#!javascript Point3` | Объект типа `Point3`, представляющий точку в трёхмерном пространстве. |

## Пример
```javascript linenums="1"
let p1 = Geom.point3()
console.info(p1) // output:
let p2 = Geom.point3(10, 10, 10)
console.info(p2) // output:
let pt = Qt.point(10, 10)
let p3 = Geom.point3(pt, 10)
console.info(p2) // output:
```

!!! info "См. также"

    [Geom.vector()](./vector3.md)

