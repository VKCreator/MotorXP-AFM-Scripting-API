# PolySegment()

## Description
A 3D broken line. Set by an array of points `points`.

## Syntax
```javascript
Geom.polysegment(points: array of Point3, closed: bool = false) : Shape
```

## Arguments
- `points` (array of Point3, mandatory): An array of points of the polyline.
- `closed` (bool, optional): The flag `closed` creates a closed polyline, adds the segment of the polyline going from the end point to the start point.

## Return Value
`Shape`: an object of type `Shape`, a polyline.

## Example
```javascript linenums="1"
let s = Geom.polysegment([Geom.point3(10,10,10), Geom.point3(20,20,20), Geom.point3(30,30,30)])
console.info(s) // output:
```

!!! info "See Also"

    []()