# Geom.box()

## Description
3D primitive (volume): box, defined by three dimensions `x`, `y`, `z` and built relative to the point [0,0,0].

## Syntax
```javascript
Geom.box(x: number, y: number, z: number) : Shape
Geom.box(a: number) : Shape
```

## Parameters
- `x` (number, mandatory): The size of the box along axis X.
- `y` (number, mandatory): The size of the box along axis Y.
- `z` (number, mandatory): The size of the box along axis Z.
- `a` (number, mandatory): The size of a cube.

## Return Value
`Shape`: an object of type Shape, Box.

## Example
```javascript linenums="1"
let s1 = Geom.box(10, 20, 30)
console.info(s1) // output:
let s2 = Geom.box(10)
console.info(s2) // output:
```

!!! info "See also"

    []()