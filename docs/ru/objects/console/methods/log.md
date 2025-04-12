# console.log()

## Описание
Метод `console.log()` выводит сообщение серым цветом в консоль. Он может принимать несколько аргументов и отображать их в одной строке.

## Синтаксис
``` javascript
console.log(message1, message2, ..., messageN);
``` 
## Возвращаемое значение
`None`

## Пример
``` javascript linenums="1"
// Один аргумент
console.log('log text');

// Несколько аргументов
console.log('text1', 'text2');
console.log('text1', 'text2', .. , 'text10');

// Различные типы аргументов
console.log('text1', 123, true, { key: 'value' });
``` 

!!! info "См. также"

    [console.info()](info.md)
	
	[console.warn()](error.md)
	
	[console.error()](error.md)
