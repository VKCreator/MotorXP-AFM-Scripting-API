# Geom.cone()

## Description
3D primitive (solid): cone, defined by the lower radius `r1`, upper radius `r2` and height `h`, constructed relative to point [0,0,0].
It is possible to build a sector of a cone using the parameter `angle`.

## Syntax
```javascript
Geom.cone(r1: number, r2: number, h: number) : Shape
Geom.cone(r1: number, r2: number, h: number, angle: number) : Shape
```

## Parameters
- `r1` (number, mandatory): Lower radius of the cone.
- `r2` (number, mandatory): Upper radius of the cone.
- `h` (number, mandatory): Height of the cone.
- `angle` (number, mandatory): Angle of the sector cone in degrees, the body is centered relative to axis OX.

## Returned Value
`Shape`: object type `Shape`, Cone.

## Example
```javascript linenums="1"
let s1 = Geom.cone(100, 50, 100)
console.info(s1) // output:
let s2 = Geom.cone(100, 50, 100, 30)
console.info(s2) // output:
```

!!! info "See also"

    []()