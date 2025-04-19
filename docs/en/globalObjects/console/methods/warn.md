# console.warn()

## Описание
Метод `console.info()` выводит предупреждающее сообщение желтым цветом в консоль, каждое сообщение помечается иконкой `warn`. Данный метод используется для указания на потенциальные проблемы, которые не являются критичными, но должны быть устранены. Метод может принимать несколько аргументов и отображать их в одной строке.

## Синтаксис
``` javascript
console.warn(message1 : any, message2 : any, ..., messageN : any)
```
## Возвращаемое значение
`undefined`

## Пример
``` javascript linenums="1"
// Один аргумент
console.warn('warn text')

// Несколько аргументов
console.warn('text1', 'text2')
console.warn('text1', 'text2', .. , 'text10')

// Mixed types
console.warn('text1', 123, true, { key: 'value' })
``` 

!!! info "См. также"

	[console.log()](log.md)

    [console.info()](info.md)
    
	[console.error()](error.md)
