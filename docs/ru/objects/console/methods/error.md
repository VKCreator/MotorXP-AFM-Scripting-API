# console.error()

## Описание
The `console.error()` method outputs an error message to the console. It is used to indicate critical issues that need immediate attention. Error messages are often styled differently in the console (e.g., with a red background or an error icon).

## Синтаксис
```javascript
console.error(message1 : any, message2 : any, ..., messageN : any);
``` 
## Возвращаемое значение
`None`

## Пример
``` javascript linenums="1"
// Single argument
console.error('critical text');

// Multiple arguments
console.error('text1', 'text2');
console.error('text1', 'text2', .. , 'text10');

// Mixed types
console.error('text1', 123, true, { key: 'value' });
``` 