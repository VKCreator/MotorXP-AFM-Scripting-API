# require()

## Description
The `require()` function is used to load a module. Unlike the `include()` function, which only includes the content of the file, the `require()` function returns an object containing exported data from the loaded file.

## Syntax
```javascript
require(path: string): object
```

## Parameters
- **`path`** (string, required):
    - The path to the script file that needs to be included:
        1. Can be **absolute** (the full path to the file on disk).  
            Example: `"C:/scripts/library.js"`.  
        2. Can be **relative** (the path relative to the current executable file).  
            Examples:
                - `"./helpers/utils.js"` — file is located in the same directory or subdirectory.  
                    ```
                - `"../config/settings.js"` — file is located in the parent directory.

!!! note "File extension support"

    The `.js` file extension can be omitted when specifying the path. For example, `require("utils")` automatically finds the `utils.js` file.


## Returned value
**`object`**. If the file does not contain explicit exports, an empty object (`{}`) is returned.

## Example
```javascript linenums="1"
let path = "./helpers"
let helpers = require(path)

let library = require("C:/scripts/library")
```