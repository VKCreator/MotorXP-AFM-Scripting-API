# torus()

## Description
3D primitive (solid): a torus, constructed relative to the point [0,0,0].

## Syntax
```javascript
Geom.torus(r1: number) : Shape
Geom.torus(r1: number, r2: number) : Shape
Geom.torus(r1: number, r2: number, ua: number) : Shape
Geom.torus(r1: number, r2: number, va1: number, va2: number) : Shape
Geom.torus(r1: number, r2: number, va1: number, va2: number, ua: number) : Shape
```

## Arguments
- `r1` (number, required):
- `r2` (number, required):
- `ua` (number, required):
- `va1` (number, required):
- `va2` (number, required):

## Returned Value
`Shape`: an object of type `Shape`, a torus.

## Example
```javascript linenums="1"
let s = Geom.torus(100)
console.info(s) // output:
```

!!! info "See Also"

    []()