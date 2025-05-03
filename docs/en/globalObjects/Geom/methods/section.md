# Geom.section()

## Description
Creates a section.

## Syntax
```javascript
Geom.section(a: Shape, b: Shape) : Shape
```

## Parameters
- `a` (Shape, mandatory): Body 1.
- `b` (Shape, mandatory): Body 2.

## Return value
`Shape`: An object of type `Shape`, a section.

## Example
```javascript linenums="1"
let a = Geom.box(100, 100, 100)
let b = Geom.inflate(Geom.point3(50,50,50), Geom.vector(100, 100, 100))
let result = Geom.section(a, b)
console.info(result) // output:
```

!!! info "See Also"

    []()