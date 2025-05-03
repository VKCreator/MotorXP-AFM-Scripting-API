# Geom.collar()

## Description
3D primitive (solid): collar (a cylinder with a central hole), defined by the outer radius `r1`, inner radius `r2` and height `h` and is constructed relative to the point [0,0,0]. A sector of the collar can be built using the angle parameter.

## Syntax
```javascript
Geom.collar(r1: number, r2: number, h: number) : Shape
Geom.collar(r1: number, r2: number, h: number, angle: number) : Shape
```

## Parameters
- `r1` (number, mandatory): Outer radius of the collar.
- `r2` (number, mandatory): Inner radius of the collar.
- `h` (number, mandatory): Height of the collar.
- `angle` (number, mandatory): Angle of the sector in degrees, the body is centered around the axis OX.

## Returned Value
`Shape`: an object of type `Shape`, a collar.

## Example
```javascript linenums="1"
let s1 = Geom.collar(200, 50, 100)
console.info(s1) // output:
let s2 = Geom.collar(200, 50, 100, 30)
console.info(s2) // output:
```

!!! info "Also see"

    []()