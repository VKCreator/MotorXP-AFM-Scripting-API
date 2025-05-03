# Geom.arc()

## Description
2D arc, constructed in the XOY plane, angles are specified in degrees, the center of the figure is at point [0,0,0].

## Syntax
```javascript
Geom.arc(radius: number, angle: number) : Shape
Geom.arc(radius: number, angle1: number, angle2: number) : Shape
Geom.arc(p1: Point3, p2: Point3, p3: Point3) : Shape
```

## Arguments
- `radius` (number, mandatory): Radius of the arc.
- `angle` (number, mandatory): Angle of the arc in degrees within the range [0...360], starting angle is 0.
- `angle1` (number, mandatory): Starting angle of the arc in degrees within the range [0...360].
- `angle2` (number, mandatory): Ending angle of the arc in degrees within the range [0...360].
- `p1, p2, p3` (Point3, mandatory): Arc passing through three points.

## Return value
`Shape`: shape object of type Shape, an arc.

## Example
```javascript linenums="1"
let s1 = Geom.arc(100, 30)
console.info(s1) // output:
let s2 = Geom.arc(100, 30, 60)
console.info(s2) // output:
let s3 = Geom.arc(Geom.point3(0,0,0), Geom.point3(10,10,10), Geom.point3(20,20,20))
console.info(s3) // output:
```

!!! info "See Also"

    []()