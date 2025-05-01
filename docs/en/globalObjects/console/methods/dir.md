# console.dir()

## Description
The `console.dir()` method displays the list of properties and methods of a specified JavaScript object. It is particularly useful for inspecting the structure and content of objects, as it formats the output in a list, making it easier to explore nested properties.

## Syntax
```javascript
console.dir(object : any)
```

## Parameters
- **`object`** (any, required):  

## Returned Value
`undefined`

## Example
```javascript linenums="1"
// Define an object
const obj = {
  name: 'MotorXP',
  version: 1.0,
  features: ['AFM Design', 'Electromagnetic Analysis', 'Optimization API'],
  details: {
    developer: 'MotorXP Team',
    license: 'Combo'
  }
};

// Inspect the object
console.dir(obj)
```
```javascript title="Output"
▶ Object
  name: "MotorXP"
  version: 1
  ▶ features: Array(3)
      0: "AFM Design"
      1: "Electromagnetic Analysis"
      2: "Optimization API"
  ▶ details: Object
      developer: "MotorXP Team"
      license: "Combo"
```