# Chamfer()

## Description
Operation to take a chamfer from a solid body. Unlike filletting, this operation is only applied to volumetric solids.

The chamfer is defined by the distance `r`, taken from the edge to the line of the chamfer, and an array of closest points `refs`.

## Syntax
```javascript
Geom.chamfer(shp: Shape, r: number) : Shape
Geom.chamfer(shp: Shape, r: number, refs: array of Point3) : Shape
```

## Parameters
- `shp` (Shape, required): Body to take the chamfer from.
- `r` (number, required): Distance taken from the edge to the line of the chamfer.
- `refs` (Array of Point3, required): Array of closest points `refs` to the edges, requiring a chamfer.

## Return Value
`Shape`: The result object type `Shape`, after taking the chamfer operation.

## Example
```javascript linenums="1"
let box = Geom.box(100, 100, 100)
let s = Geom.chamfer(box, 1);
console.info(result)
```

!!! info "See also"

    [Geom.fillet](./fillet.md)