# console.log()

## Description
The `console.log()` method outputs a message to the console. It can accept multiple arguments and display them in a single line.

## Syntax
``` javascript
console.log(message1, message2, ..., messageN);
``` 
## Return
`None`

## Example
``` javascript linenums="1"
// Single argument
console.log('log text');

// Multiple arguments
console.log('text1', 'text2');
console.log('text1', 'text2', .. , 'text10');

// Mixed types
console.log('text1', 123, true, { key: 'value' });
``` 

!!! info "See also"

    [console.info()](info.md)
	
	[console.warn()](error.md)
	
	[console.error()](error.md)
