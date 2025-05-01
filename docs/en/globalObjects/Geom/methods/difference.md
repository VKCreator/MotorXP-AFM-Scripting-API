# Geom.difference()

## Description
Boolean operation: Difference of two or more shapes.

## Syntax
```javascript
Geom.difference(a: Shape, b: Shape,) : Shape
Geom.difference(shapes: array of Shape) : Shape
```

- `a` (Shape, mandatory): The first shape.
- `b` (Shape, mandatory): The second shape.
- `shapes` (Array of Shape, mandatory): An array of shapes.

## Return value
`Shape`: A `Shape` object representing the union of shapes.

## Example
```javascript linenums="1"
let box = Geom.box(100, 100, 100);
let cyl = Geom.cylinder(50, 150);
let s1 = Geom.difference(box, cyl) // box - cyl
console.info(s1) // output:
let s2 = Geom.difference(cyl, box) // cyl - box
console.info(s2) // output:
```

!!! info "See Also"

    [Geom.diff](./diff.md)