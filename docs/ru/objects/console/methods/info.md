# console.info()

## Описание
The `console.info()` method outputs an informational message to the console. It is similar to `console.log()`, but it is intended for informational purposes and may be styled differently in some environments (e.g., with an "info" icon or color).

## Синтаксис
``` javascript
console.info(message1, message2, ..., messageN);
```

## Return
`undefined`

## Пример
``` javascript linenums="1"
// Single argument
console.info('info text');

// Multiple arguments
console.info('text1', 'text2');
console.info('text1', 'text2', .. , 'text10');

// Mixed types
console.info('text1', 123, true, { key: 'value' });
``` 

!!! info "See also"

    [console.info()](log.md)
	
	[console.warn()](error.md)
	
	[console.error()](error.md)