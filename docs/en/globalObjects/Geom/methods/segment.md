# Geom.segment()

## Description
Create a 3D line segment defined by two points.

## Syntax
```javascript
Geom.segment(argument: type) : Shape
```

## Parameters
- `p1` (Point3, required): Starting point of the line segment.
- `p2` (Point3, required): Ending point of the line segment.

## Return value
`Shape`: object of type `Shape`, a line segment.

## Example
```javascript linenums="1"
let s = Geom.segment(Geom.point3(10,10,10), Geom.point3(20,20,20))
console.info(s) // output:
```

!!! info "See also"

    []()