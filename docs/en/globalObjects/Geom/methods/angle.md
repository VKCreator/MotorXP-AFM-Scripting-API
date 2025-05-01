# `Geom.angle()`

## Description
Get the angle of a point.

## Syntax
```javascript
Geom.angle(x: number, y: number) : number
```

## Parameters
- `x` (type, required): description of x parameter.
- `y` (type, required): description of y parameter.

## Returns
`number`: the angle of the point in degrees relative to the origin [0,0] (zero is at three o'clock, increase by hour).

## Example
```javascript
let result = Geom.angle(100, 100)
console.info(result) // output: 45
```

!!! info "Also see"

    []()