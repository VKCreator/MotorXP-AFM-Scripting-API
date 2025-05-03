# Geom.radiusX()

## Description
Radius of a point in the YOZ plane.

## Syntax
```javascript
Geom.radiusX(point: Point3) : number
Geom.radiusX(x: number, y: number, z: number,) : number
```

## Parameters
- `point` (Point3, mandatory): 3D coordinates point.
- `x` (x, mandatory): x coordinate of the point.
- `y` (y, mandatory): y coordinate of the point.
- `z` (z, mandatory): z coordinate of the point.

## Return value
`number`: The radius of the point relative to the origin [0, 0, 0].

## Example
```javascript linenums="1"
let radius1 = Geom.radiusX(Geom.point3(10,10,10))
console.info(radius1) // output:
let radius2 = Geom.radiusX(10,10,10)
console.info(radius2) // output:
```

!!! info "See Also"

    []()