# Geom.ring()

## Description
A 2D ring or sector of a ring is created in the XOY plane with angles defined in degrees, centered at the point [0,0,0].

## Syntax
```javascript
Geom.ring(radius1: number, radius2: number) : Shape
Geom.ring(radius1: number, radius2: number, angle: number) : Shape
Geom.ring(radius1: number, radius2: number, angle1: number, angle2: number) : Shape
```

## Arguments
- `radius1` (number, required): The outer radius of the ring.
- `radius2` (number, required): The inner radius of the ring.
- `angle` (number, required): The sector angle of the ring in degrees within the range [0...360], with the center aligned relative to the OX axis.
- `angle1` (number, required): The starting angle of the sector of the ring in degrees within the range [0...360].
- `angle2` (number, required): The ending angle of the sector of the ring in degrees within the range [0...360].

## Returned Value
`Shape`: an object of type `Shape`, a ring or sector of a ring.

## Examples
```javascript linenums="1"
let s1 = Geom.ring(100, 50)
console.info(s1) // output:
let s2 = Geom.ring(100, 50, 30)
console.info(s2) // output:
let s3 = Geom.circle(100, 50, 0, 90)
console.info(s3) // output:
```

!!! info "See Also"

    []()