# Geom.point3()

## Description
Creating a point in 3D space.

## Syntax
```javascript
Geom.point3(x: number, y: number, z: number) : Point3
Geom.point3(p: QPointF, z: number) : Point3
```

## Parameters
- `x` (number, required): x-coordinate of the point.
- `y` (number, required): y-coordinate of the point.
- `z` (number, required): z-coordinate of the point.
- `p` (QPointF, required): A point with coordinates [x,y].

## Returned Value
`Point3`: an object of type Point3.

## Example
```javascript linenums="1"
let p1 = Geom.point3()
console.info(p1) // output:
let p2 = Geom.point3(10, 10, 10)
console.info(p2) // output:
let pt = Qt.point(10, 10)
let p3 = Geom.point3(pt, 10)
console.info(p2) // output:
```

!!! info "See Also"

    [Geom.vector()](./vector3.md)