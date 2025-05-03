# include()

## Description
The `include()` function is designed to include the content of one script file into another script file. This allows you to use code from one file (for example, library functions or classes) in another file without having to copy that code manually.

## Syntax
```javascript
include(path : string)
```

## Parameters
- **`path`** (string, mandatory):  
  The path to the script file to be included: 
    1. Can be an absolute path (the full path to a file on the disk).  
      For example, `"C:/scripts/library.js"`.
    2. Can be a relative path (a path relative to the current executable file).  
      Examples: 
          * `"./helpers/utils.js"` — a file located in the same directory or subdirectory.
          * `"../config/settings.js"` — a file located in the parent directory.

## Return Value
`undefined`

## Example
```javascript linenums="1"
// Include the file by its absolute path
include("C:/scripts/script.js")

// Include the script2.js file from the same directory
include("./script2.js")

// Include the script3.js file from the parent directory
include("../script3.js")
```

!!! info "See Also"

    [require()](require.md)