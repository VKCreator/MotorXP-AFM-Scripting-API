# Cylinder()

## Description
3D primitive (solid): cylinder, defined by radius `r` and height `h` and constructed relative to point [0,0,0].
It is possible to build a sector of the cylinder using the parameter `angle`.

## Syntax
```javascript
Geom.cylinder(r: number, h: number) : Shape
Geom.cylinder(r: number, h: number, angle: number) : Shape
```

## Parameters
- `r` (number, required): Cylinder radius.
- `h` (number, required): Cylinder height.
- `angle` (number, required): Sector angle of the cylinder in degrees, the body is centered relative to axis OX.

## Return value
`Shape`: object type `Shape`, cylinder.

## Example
```javascript linenums="1"
let s1 = Geom.cylinder(100, 200)
console.info(s1) // output:
let s2 = Geom.cylinder(100, 200, 30)
console.info(s2) // output:
```

!!! info "See Also"

    []()