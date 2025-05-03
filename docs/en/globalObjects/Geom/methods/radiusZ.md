# Geom.radiusZ()

## Описание
Радиус точки в плоскости XOY, ноль - [0,0,0].

## Синтаксис
```javascript
Geom.radiusZ(point: Point3) : number
Geom.radiusZ(x: number, y: number, z: number,) : number
```

## Аргументы
- `point` (Point3, обязательно): точка в 3D координатах.
- `x` (x, обязательно): x координата точки.
- `y` (y, обязательно): y координата точки.
- `z` (z, обязательно): z координата точки.

## Возвращаемое значение
`number`: Радиус точки.

## Пример
```javascript linenums="1"
let radius1 = Geom.radiusZ(Geom.point3(10,10,10))
console.info(radius1) // output:
let radius2 = Geom.radiusZ(10,10,10)
console.info(radius2) // output:

!!! info "См. также"

    []()

