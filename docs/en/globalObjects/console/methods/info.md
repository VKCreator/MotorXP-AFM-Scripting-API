# console.info()

## Description
The `console.info()` method outputs an informational message in green color to the console, each message is marked with an "info" icon. It is similar to `console.log()`, but intended for informative purposes. It can take multiple arguments and displays them in a single line.

## Syntax
```javascript
console.info(message1 : any, message2 : any, ..., messageN : any)
```

## Parameters
- **`messageN`** (any, mandatory):

## Returned Value
`undefined`

## Example

```javascript
// One argument
console.info('info text')

// Multiple arguments
console.info('text1', 'text2')
console.info('text1', 'text2', .. , 'text10')

// Different types of arguments
console.info('text1', 123, true, { key: 'value''})
```

!!! info "See also"

    [console.info()](log.md)
	
	[console.warn()](warn.md)
	
	[console.error()](error.md)