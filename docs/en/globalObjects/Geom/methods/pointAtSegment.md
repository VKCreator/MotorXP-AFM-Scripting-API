# pointAtSegment()

## Description
Returns a point at a parameterized position along the segment, specified by `t`. The function returns the initial point of the segment when `t = 0`, and its ending point when `t = 1`.

## Syntax
```javascript
Geom.pointAtSegment(p1: Point3, p2: Point3, t : number) : Point3
```

## Arguments
- `p1` (Point3, mandatory): The first point of the segment.
- `p2` (Point3, mandatory): The second point of the segment.
- `t` (number, mandatory): A parameterized position along the segment.

## Return value
`Point3`: Returns a point at the specified position on the segment.

## Example
```javascript linenums="1"
let p1 = Geom.point3(0, 0, 0)
let p2 = Geom.point3(100, 100, 100)
let p3 = Geom.pointAtSegment(p1, p2, 0.5)
console.info(p3) // output:
```