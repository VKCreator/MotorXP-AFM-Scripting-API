# sphere()

## Description
3D primitive (volume): sphere, constructed relative to point [0,0,0].

## Syntax
```javascript
Geom.sphere(r: number) : Shape
Geom.sphere(r: number, an1: number) : Shape
Geom.sphere(r: number, an1: number, an2: number) : Shape
Geom.sphere(r: number, an1: number, an2: number, an3: number) : Shape
```

## Parameters
- `r` (number, mandatory): radius of the sphere.
- `an1` (number, mandatory):
- `an2` (number, mandatory):
- `an3` (number, mandatory):

## Returned value
`Shape`: object type `Shape`, Sphere.

## Example
```javascript linenums="1"
let s = Geom.sphere(100)
console.info(s) // output:
```

!!! info "Also see"

    []()