# Geom.unite()

## Description
Boolean operation: Union of two or more shapes.

## Syntax
```javascript
Geom.unite(a: Shape, b: Shape,) : Shape
Geom.unite(shapes: array of Shape) : Shape
```

## Parameters
- `a` (Shape, mandatory): The first shape.
- `b` (Shape, mandatory): The second shape.
- `shapes` (Array of Shape, mandatory): An array of shapes.

## Return value
`Shape`: object of type `Shape`, The union of the shapes.

## Example
```javascript linenums="1"
let box = Geom.box(100, 100, 100);
let cyl = Geom.cylinder(50, 150);
let result = Geom.unite(box, cyl) // box + cyl
console.info(result) // output:
```

!!! info "See also"

    [Geom.intersect](./unite.md)

    [Geom.diff](./diff.md)

    [Geom.difference](./difference.md)