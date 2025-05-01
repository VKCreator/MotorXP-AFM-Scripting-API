# Geom.polygon()

## Description
A 2D Polygon constructed in the XOY plane, with its center at the point [0,0,0].

## Syntax
```javascript
Geom.polygon(points: array of Point3) : Shape
```

## Parameters
- `points` (array of Point3, mandatory): An array of vertices for the polygon.

## Return Value
`Shape`: an object of type `Shape`, representing a Polygon.

## Example
```javascript
linenums="1"
let s = Geom.polygon([
  Geom.point3(0,0,0),
  Geom.point3(1,0,0),
  Geom.point3(1,1,0),
  Geom.point3(0,1,0),
  Geom.point3(0,0,0)
]);
console.info(s);
```

!!! info "See Also"

    []()