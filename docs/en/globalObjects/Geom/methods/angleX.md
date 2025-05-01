# Geom.angleX()

## Description
Get the angle of a point relative to the origin [0,0,0] in the YOZ plane.

## Syntax
```javascript
Geom.angleX(point: Point3) : number
```

## Parameters
- `point` ([`Point3`](../../../types/Point3/_index.md), required)

## Return Value
`number`: The angle of a point relative to the origin [0,0,0] in the YOZ plane (zero - three o'clock, increment by hour).

## Example
```javascript linenums="1"
let point = Geom.point3(100,100,100)
let angle = Geom.angleX(point)
console.info(result) // output:
```

!!! info "See Also"

    []()