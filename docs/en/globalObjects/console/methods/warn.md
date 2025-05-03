# `console.warn()`

## Description
The `console.warn()` method outputs a warning message in yellow color to the console, each message is tagged with an icon "warn". This method is used to indicate potential problems that are not critical but should be fixed. The method can accept multiple arguments and display them in one line.

## Syntax
```javascript
console.warn(message1 : any, message2 : any, ..., messageN : any)
```
## Returned Value
`undefined`

## Example
```javascript
// One argument
console.warn('warn text')

// Multiple arguments
console.warn('text1', 'text2')
console.warn('text1', 'text2', .. , 'text10')

// Mixed types
console.warn('text1', 123, true, { key: 'value''})
```
!!! info "Also see"

	[console.log()](log.md)

    [console.info()](info.md)
    
	[console.error()](error.md)