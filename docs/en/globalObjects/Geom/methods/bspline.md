# B-spline()

## Description
A 3D smooth line passing through all specified points. Sets the `points` array.

## Syntax
```javascript
Geom.bspline(points: array of Point3, closed: bool = false) : Shape
```

## Arguments
- `points` (array of Point3, required): An array of points for the smooth curve.
- `closed` (bool, optional): Sets the `closed` flag to create a closed smooth curve.

## Return Value
`Shape`: The object type `Shape`, B-spline.

## Example
```javascript linenums="1"
let s = Geom.bspline([Geom.point3(10,10,10), Geom.point3(20,20,20), Geom.point3(30,30,30)])
console.info(s) // output:
```

!!! info "See Also"

    []()