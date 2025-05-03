# Fillet()

## Description
The fillet operation rounds the body. If the body is volumetric - the modifications are applied to edges. If flat - vertices.
The rounding is defined by a radius `r` and an array of nearby points `refs` to the modified edges/vertices.

## Syntax
```javascript
Geom.fillet(shp: Shape, r: number) : Shape
Geom.filit(shp: Shape, r: number, refs: array of Point3) : Shape
```

## Arguments
- `shp` (Shape, mandatory): The body to round.
- `r` (number, mandatory): The radius of rounding.
- `refs` (Array of Point3, mandatory): An array of nearby points `refs` to the edges/vertices that need rounding.

## Return Value
`Shape`: The resulting shape object after the operation.

## Example
```javascript linenums="1"
let box = Geom.box(100, 100, 100)
let s = Geom.fillet(box, 1);
console.info(s) // output:
```

!!! info "See Also"

    [Geom.chamfer](./chamfer.md)