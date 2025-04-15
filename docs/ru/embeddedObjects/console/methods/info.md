# console.info()

## Описание
Метод `console.info()` выводит информационное сообщение зеленым цветом в консоль, каждое сообщение помечается иконкой `info`. Он похож на console.log(), но предназначен для информационных целей. Он может принимать несколько аргументов и отображать их в одной строке.

## Синтаксис
``` javascript
console.info(message1 : any, message2 : any, ..., messageN : any)
```

## Возвращаемое значение
`undefined`

## Пример
``` javascript linenums="1"
// Single argument
console.info('info text')

// Multiple arguments
console.info('text1', 'text2')
console.info('text1', 'text2', .. , 'text10')

// Mixed types
console.info('text1', 123, true, { key: 'value' })
``` 

!!! info "See also"

    [console.info()](log.md)
	
	[console.warn()](warn.md)
	
	[console.error()](error.md)