# Geom.vector3()

## Description
Creation of a vector in 3D space, sets direction and length.

## Syntax
```javascript
Geom.vector3(x: number, y: number, z: number) : Vector3
Geom.vector3(p: Point3) : Vector3
Geom.vector3(p1: Point3, p2: Point3) : Vector3
```

## Parameters
- `x` (number, required): x coordinate of the point.
- `y` (number, required): y coordinate of the point.
- `z` (number, required): z coordinate of the point.
- `p` (Point3, required): Point.
- `p1` (Point3, required): Starting point.
- `p2` (Point3, required): Ending point.

## Returned value
`Vector`: object with properties of `Vector3`.

## Example
```javascript linenums="1"
let v1 = Geom.vector3(10,10,10)
console.info(v1) // output:
let v2 = Geom.vector3(Geom.point3(10,10,10))
console.info(v2) // output:
let v3 = Geom.vector3(Geom.point3(20,20,20), Geom.point3(10,10,10))
console.info(v3) // output:
```

!!! info "See also"

    []()