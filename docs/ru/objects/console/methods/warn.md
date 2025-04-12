# console.warn()

## Описание
The `console.warn()` method outputs a warning message to the console. It is used to indicate potential issues that are not critical but should be addressed. Warning messages are often styled differently in the console (e.g., with a yellow background or an alert icon).

## Синтаксис
``` javascript
console.warn(message1 : any, message2 : any, ..., messageN : any);
```
## Возвращаемое значение
`None`

## Пример
``` javascript linenums="1"
// Single argument
console.warn('warn text');

// Multiple arguments
console.warn('text1', 'text2');
console.warn('text1', 'text2', .. , 'text10');

// Mixed types
console.warn('text1', 123, true, { key: 'value' });
``` 