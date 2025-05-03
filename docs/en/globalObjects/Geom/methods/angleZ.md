# Geom.angleZ()

## Description
Get the angle of a point relative to the center of coordinates [0,0,0] in the XY plane.

## Syntax
```javascript
Geom.angleX(point: Point3) : number
```

## Parameters
- `point` ([`Point3`](../../../types/Point3/_index.md), required): The point.

## Return value
`number`: the angle of the point relative to the center of coordinates [0,0,0] in the XY plane (zero - three o'clock, increasing by hour).

## Example
```javascript linenums="1"
let point = Geom.point3(100,100,100)
let angle = Geom.angleZ(point)
console.info(result) // output:
```

!!! info "See also"

    []()