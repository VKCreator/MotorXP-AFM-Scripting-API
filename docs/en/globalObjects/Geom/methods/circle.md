# Geom.circle()

## Description
A 2D circle or sector of the circle is constructed in the XOY plane, angles are set in degrees, and the center figure point is at [0,0,0].

## Syntax
```javascript
Geom.circle(radius: number) : Shape
Geom.circle(radius: number, angle: number) : Shape
Geom.circle(radius: number, angle1: number, angle2: number) : Shape
```

## Parameters
- `radius` (number, mandatory): The radius of the circle.
- `angle` (number, mandatory): The sector angle of the circle in degrees within the range [0...360], the body is centered relative to the OX axis.
- `angle1` (number, mandatory): The starting angle of the sector in degrees within the range [0...360].
- `angle2` (number, mandatory): The ending angle of the sector in degrees within the range [0...360].

## Returned Value
`Shape`: an object of type `Shape`, a circle or sector of the circle.

## Example
```javascript linenums="1"
let s1 = Geom.circle(100)
console.info(s1) // output:
let s2 = Geom.circle(100, 30)
console.info(s2) // output:
let s3 = Geom.circle(100, 0, 90)
console.info(s3) // output:
```

!!! info "See Also"

    []()