# Geom.boundingBox()

## Description
Returns the bounding box of an object.

## Syntax
```javascript
Geom.boundingBox(shp: Shape) : BoundingBox
```

## Parameters
- `shp` (Shape, required): The body.

## Return Value
`BoundingBox`: An object of type `BoundingBox`, representing the bounding box of the body.

## Example
```javascript linenums="1"
let result = Geom.boundingBox(value)
console.info(result)
```

!!! info "See Also"

    [Shape](./../../../types/Shape/_index.md)