# Geom.distance()

## Description
Calculates the distance between two points.

## Syntax
```javascript
Geom.distance(p1: Point3, p2: Point3) : number
```

## Arguments
- `p1` (Point3, mandatory): The first point.
- `p2` (Point3, mandatory): The second point.

## Return value
`number`: the distance between two points.

## Example
```javascript linenums="1"
let p1 = Geom.point3(0, 0, 0)
let p2 = Geom.point3(100, 100, 100)
let dist = Geom.distance(p1, p2)
console.info(dist) // output:
```

!!! info "See also"

    []()