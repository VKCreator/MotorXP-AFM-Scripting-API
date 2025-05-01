# console.log()

## Description
The `console.log()` method outputs a message in gray color to the console, each message is marked with an icon of "bug". It can accept multiple arguments and display them on one line.

## Syntax
```javascript
console.log(message1 : any, message2 : any, ..., messageN : any)
```

## Parameters
- **`messageN`** (any, mandatory):  

## Return Value
`undefined`

## Example
```javascript
// One argument
console.log('log text')

// Multiple arguments
console.log('text1', 'text2')
console.log('text1', 'text2', .. , 'text10')

// Different types of arguments
console.log('text1', 123, true, { key: 'value''})
```

!!! info "See also"

    [console.info()](info.md)
	
	[console.warn()](warn.md)
	
	[console.error()](error.md)