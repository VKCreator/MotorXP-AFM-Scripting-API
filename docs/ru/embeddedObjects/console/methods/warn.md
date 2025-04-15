# console.warn()

## Описание
Метод `console.info()` выводит предупреждающее сообщение желтвм цветом в консоль, каждое сообщение помечается иконкой `warn`. Он используется для указания на потенциальные проблемы, которые не критичны, но должны быть устранены. Он может принимать несколько аргументов и отображать их в одной строке.

## Синтаксис
``` javascript
console.warn(message1 : any, message2 : any, ..., messageN : any)
```
## Возвращаемое значение
`undefined`

## Пример
``` javascript linenums="1"
// Single argument
console.warn('warn text')

// Multiple arguments
console.warn('text1', 'text2')
console.warn('text1', 'text2', .. , 'text10')

// Mixed types
console.warn('text1', 123, true, { key: 'value' })
``` 

!!! info "См. также"

	[console.log()](log.md)

    [console.info()](info.md)
    
	[console.error()](error.md)
