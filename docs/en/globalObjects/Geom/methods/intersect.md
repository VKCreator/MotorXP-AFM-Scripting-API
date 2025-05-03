# Geom.intersect()

## Description
Boolean operation: get the intersection of two or more shapes.

## Syntax
```javascript
Geom.intersect(a: Shape, b: Shape,) : Shape
Geom.intersect(shapes: array of Shape) : Shape
```

- `a` (Shape, required): The first shape.
- `b` (Shape, required): The second shape.
- `shapes` (Array of Shape, required): An array of shapes.

## Returned value
`Shape`: an object of type `Shape`, the intersection of the shapes.

## Example
```javascript linenums="1"
let box = Geom.box(100, 100, 100);
let cyl = Geom.cylinder(50, 150);
let s1 = Geom.intersect(box, cyl) // box & cyl
console.info(s1) // output:
```

!!! info "See also"

    [Geom.unite](./unite.md)

    [Geom.diff](./diff.md)

    [Geom.difference](./difference.md)
```