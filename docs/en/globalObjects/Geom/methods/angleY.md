# Geom.angleY()

## Description
Get the angle of a point relative to the origin [0,0,0] in the XOZ plane.

## Syntax
```javascript
Geom.angleY(point: Point3) : number
```

## Parameters
- `point` ([`Point3`](../../../types/Point3/_index.md), mandatory)

## Return value
`number`: The angle of a point relative to the origin [0,0,0] in the XOZ plane (zero - three o'clock, increasing by hour).

## Example
```javascript linenums="1"
let point = Geom.point3(100,100,100)
let angle = Geom.angleY(point)
console.info(result) // output:
```

!!! info "Also see"

    []()