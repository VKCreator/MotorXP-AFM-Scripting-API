# Geom.unify()

## Description
Simplifies the geometric representation of an object by removing unnecessary edges and merging faces.

## Syntax
```javascript
Geom.unify(shp: Shape) : Shape
```

## Parameters
- `shp` (Shape, required): The body on which to perform the simplification operation.

## Return Value
`Shape`: a shape of type `Shape`, resulting from the simplification operation.

## Example
```javascript linenums="1"
let box = Geom.box(100, 100, 100)
let s = Geom.unify(box)
console.info(s) // output: 
```

!!! info "Also see"

    [Geom.unite](./unite.md)

    [Geom.intersect](./intersect.md)

    [Geom.diff](./diff.md)

    [Geom.difference](./difference.md)