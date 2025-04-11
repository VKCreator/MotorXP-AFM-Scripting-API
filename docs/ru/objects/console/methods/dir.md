# console.dir()

## Description
The `console.dir()` method displays an interactive list of the properties of a specified JavaScript object. It is particularly useful for inspecting the structure and contents of objects, as it formats the output in a collapsible tree-like structure that makes it easier to explore nested properties.

Unlike `console.log()`, which may display objects in a simplified or stringified format, `console.dir()` provides a detailed and interactive view of the object's properties.

## Syntax
``` javascript
console.dir(object);
``` 

## Example
``` javascript linenums="1"
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
console.dir(obj);
``` 
``` javascript title="Output"
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