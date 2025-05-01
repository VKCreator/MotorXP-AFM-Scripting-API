# Geom.piece()

## Description
Creates a motor detail from a geometric shape and material.

## Syntax
```javascript
Geom.piece(shp: Shape, material: Material) : Piece
```

## Parameters
- `shp` (Shape, mandatory): The geometric shape of the detail.
- `material` (Material, mandatory): The material of the detail.

## Return value
`Piece`: An object of type `Piece`, a motor detail.

## Example
```javascript linenums="1"

let shp = Geom.cylinder(100, 100)
let material = Material.general();
let piece = Geom.piece(shp, material)
console.info(piece) // output:
```

!!! info "Also see"

    [Geom](../../Geom/_index.md)

    [Material](../../Material/_index.md)