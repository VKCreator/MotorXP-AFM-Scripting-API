# Geom.radiusY()

## Description
Radius of a point in the XOZ plane, zero at [0,0,0].

## Syntax
```javascript
Geom.radiusY(point: Point3) : number
Geom.radiusY(x: number, y: number, z: number,) : number
```

## Parameters
- `point` (Point3, mandatory): a point in 3D coordinates.
- `x` (x, mandatory): x coordinate of the point.
- `y` (y, mandatory): y coordinate of the point.
- `z` (z, mandatory): z coordinate of the point.

## Return value
`number`: Radius of the point.

## Example
```javascript linenums="1"
let radius1 = Geom.radiusY(Geom.point3(10,10,10))
console.info(radius1) // output:
let radius2 = Geom.radiusY(10,10,10)
console.info(radius2) // output:

!!! info "See also"

    []()
```