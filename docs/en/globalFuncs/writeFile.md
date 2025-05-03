# write_file()

## Description
Write to a file.

## Syntax
```javascript
write_file(path : string, content : string, append : bool = true) : bool
```

## Parameters
- **`path`** (string, mandatory): path to the file, may be either an absolute or relative path that indicates position relative to `<path_MotorXP-AFM>/bin/assets/scripts`.
- **`content`** (string, mandatory): file content.
- **`append`** (boolean, optional, default = `true`): is equal to `true` – append to the file; otherwise, truncate the file before writing.

## Return value
`bool`: true if successful write operation, and false otherwise, if there are errors during writing. Errors output to console.

## Example
```javascript linenums="1"
let sampleText = "Sample text";
let result = write_file("c:/temp/sample.txt", sampleText);
console.info(result);
```

!!! info "Also see"

    [read_file()](readFile.md)