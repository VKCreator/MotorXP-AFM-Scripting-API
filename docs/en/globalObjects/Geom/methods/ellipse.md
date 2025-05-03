# Geom.ellipse()

## Description
A 2D ellipse or sector of an ellipse is constructed in the XOY plane, with angles specified in degrees, and the center of the figure at point [0,0,0].

## Syntax
```javascript
Geom.ellipse(radius1: number, radius2: number) : Shape
Geom.ellipse(radius1: number, radius2: number, angle1: number, angle2: number) : Shape
```

## Parameters
- `radius1` (number, mandatory): The radius 1 of the ellipse.
- `radius2` (number, mandatory): The radius 2 of the ellipse.
- `angle1` (number, mandatory): The starting angle of the sector ellipse in degrees within the range [0...360].
- `angle2` (number, mandatory): The ending angle of the sector ellipse in degrees within the range [0...360].

## Return value
`Shape`: An object of type `Shape`, an ellipse or a sector of an ellipse.

## Example
```javascript linenums="1"
let s1 = Geom.ellipse(100, 200)
console.info(s1) // output:
let s2 = Geom.ellipse(100, 200, 0, 90)
console.info(s2) // output:
```

!!! info "See also"

    []()