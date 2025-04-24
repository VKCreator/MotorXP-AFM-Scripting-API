# console.info()

## Описание
Метод `console.info()` выводит информационное сообщение зеленым цветом в консоль, каждое сообщение помечается иконкой `info`. Он похож на `console.log()`, но предназначен для информационных целей. Он может принимать несколько аргументов и отображать их в одной строке.

## Синтаксис
``` javascript
console.info(message1 : any, message2 : any, ..., messageN : any)
```

## Аргументы
- **`messageN`** (any, обязательно):  

## Возвращаемое значение
`undefined`

## Пример
``` javascript linenums="1"
// Один аргумент
console.info('info text')

// Несколько аргументов
console.info('text1', 'text2')
console.info('text1', 'text2', .. , 'text10')

// Различные типы аргументов
console.info('text1', 123, true, { key: 'value' })
``` 

!!! info "See also"

    [console.info()](log.md)
	
	[console.warn()](warn.md)
	
	[console.error()](error.md)