# Geom.point3()

## Описание
Создание точки в 3D пространстве.

## Синтаксис
```javascript
Geom.point3(x: Number, y: Number, z: Number) -> Point3
Geom.point3(p: QPointF, z: Number) -> Point3
```

## Аргументы
- `x` (Number, обязятельно): `x` координата точки.
- `y` (Number, обязятельно): `y` координата точки.
- `z` (Number, обязятельно): `z` координата точки.
- `p` (QPointF, обязятельно): Точка с координатами [x,y].

## Возвращаемое значение
`Point3`: объект типа Point3.

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

