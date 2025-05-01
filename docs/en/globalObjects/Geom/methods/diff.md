# Geom.diff()

## Description
Boolean operation: Difference of two or more solids.

## Syntax
```javascript
Geom.diff(a: Shape, b: Shape,) : Shape
Geom.diff(shapes: array of Shape) : Shape
```

- `a` (Shape, mandatory): Solid 1.
- `b` (Shape, mandatory): Solid 2.
- `shapes` (Array of Shape, mandatory): Array of solids.

## Returned value
`Shape`: object type `Shape`, Merging of solids.

## Example
```javascript linenums="1"
let box = Geom.box(100, 100, 100);
let cyl = Geom.cylinder(50, 150);
let s1 = Geom.diff(box, cyl) // box - cyl
console.info(s1) // output:
let s2 = Geom.diff(cyl, box) // cyl - box
console.info(s2) // output:
```

!!! info "See also"

    [Geom.unite](./unite.md)

    [Geom.intersect](./intersect.md)

    [Geom.difference](./difference.md)