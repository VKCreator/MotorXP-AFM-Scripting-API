# Ngon()

## Description
2D Regular Polygon built in the XY plane, with the center of the figure at (0,0,0).

## Syntax
```javascript
Geom.ngon(radius: number, n: number) : Shape
```

## Parameters
- `radius` (number, required): Radius of the polygon.
- `n` (number, required): Number of vertices of the polygon (allowed value: 3 and more).

## Returned Value
`Shape`: an object of type `Shape`, a regular polygon.

## Example
```javascript linenums="1"
let s = Geom.ngon(100, 6)
console.info(s)
```

!!! info "See Also"

    []()