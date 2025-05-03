# Geom.infplane()

## Description
Creates a plane.

## Syntax
```javascript
Geom.infplane(pos: Point3 = Geom.point(0,0,0), dir: Vector3 = Geom.vector3(0,0,1)) : Shape
```

## Parameters
- `pos` (Point3, required): Position of the plane.
- `dir` (Vector3, required): Direction vector perpendicular to the plane.

## Return value
`Shape`: object type `Shape`, Plane.

## Example
```javascript linenums="1"
let s = Geom.infplane(Geom.point(0,0,0), Geom.vector3(0,0,1));
console.info(s);
```

!!! info "See Also"

    []()