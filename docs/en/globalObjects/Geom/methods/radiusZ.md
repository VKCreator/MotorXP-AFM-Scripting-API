# Geom.radiusZ()

## Description
The radius of a point in the XOY plane, zero is at [0,0,0].

## Syntax
```javascript
Geom.radiusZ(point: Point3) : number
Geom.radiusZ(x: number, y: number, z: number,) : number
```

## Parameters
- `point` (Point3, mandatory): the point in 3D coordinates.
- `x` (x, mandatory): x coordinate of the point.
- `y` (y, mandatory): y coordinate of the point.
- `z` (z, mandatory): z coordinate of the point.

## Return Value
`number`: The radius of the point.

## Example
```javascript linenums="1"
let radius1 = Geom.radiusZ(Geom.point3(10,10,10))
console.info(radius1) // output:
let radius2 = Geom.radiusZ(10,10,10)
console.info(radius2) // output:

!!! info "Also see"

    []()

```