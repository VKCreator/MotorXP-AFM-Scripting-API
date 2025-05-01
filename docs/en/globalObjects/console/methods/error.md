# console.error()

## Description
The `console.error()` method outputs an error message in red color to the console, each message is marked with an error icon. It's used for pointing out critical issues that require immediate attention. It can take several arguments and display them in one line.

## Syntax
```javascript
console.error(message1 : any, message2 : any, ..., messageN : any)
```

## Parameters
- **`messageN`** (any, mandatory):  

## Returned Value
`undefined`

## Example
```javascript linenums="1"
// One argument
console.error('critical text')

// Multiple arguments
console.error('text1', 'text2')
console.error('text1', 'text2', .. , 'text10')

// Different types of arguments
console.error('text1', 123, true, { key: 'value' })
```

!!! info "See Also"

	[console.log()](log.md)

    [console.info()](info.md)
    
	[console.warn()](warn.md)