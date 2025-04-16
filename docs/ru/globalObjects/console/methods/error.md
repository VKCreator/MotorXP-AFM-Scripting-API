# console.error()

## Описание
Метод `console.error()` выводит сообщение об ошибке красным цветом в консоль, каждое сообщение помечается иконкой `error`. Он используется для указания на критические проблемы, которые требуют немедленного внимания. Он может принимать несколько аргументов и отображать их в одной строке.

## Синтаксис
```javascript
console.error(message1 : any, message2 : any, ..., messageN : any)
``` 
## Возвращаемое значение
`undefined`

## Пример
``` javascript linenums="1"
// Один аргумент
console.error('critical text')

// Несколько аргументов
console.error('text1', 'text2')
console.error('text1', 'text2', .. , 'text10')

// Различные типы аргументов
console.error('text1', 123, true, { key: 'value' })
``` 

!!! info "См. также"

	[console.log()](log.md)

    [console.info()](info.md)
    
	[console.warn()](warn.md)
