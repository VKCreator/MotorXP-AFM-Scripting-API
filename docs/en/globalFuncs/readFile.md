# readFile()

## Description
Reading from a file.

## Syntax
```javascript
function readFile(path: string): string
```

## Parameters
- **`path`** (string, required): the path to the file, can be **absolute** or **relative**, which specifies the location relative to **`<path_MotorXP-AFM>/bin/assets/scripts`**.

## Return Value
**`string`**: the contents of the file.

## Example
```javascript linenums="1"
let content = readFile("c:/temp/sample.txt")
console.info(content)
```

!!! info "See Also"

    [writeFile()](writeFile.md)