# console.log()

## Описание
Метод `console.log()` выводит сообщение серым цветом в консоль, каждое сообщение помечается иконкой `bug`. Он может принимать несколько аргументов и отображать их в одной строке.

## Синтаксис
``` javascript
console.log(message1: any, message2: any, ..., messageN: any) -> undefined
``` 

## Аргументы
| Аргумент | Тип      | Обязательный | Описание                                                                 |
|----------|----------|--------------|--------------------------------------------------------------------------|
| **`message1`**   | `any` | :white_check_mark: Да         | Текст сообщения. |
| **`message2`**   | `any` | :white_check_mark: Да         | Текст сообщения. |
| ...  | `any` | :white_check_mark: Да         | Текст сообщения. |
| **`messageN`**   | `any` | :white_check_mark: Да         | Текст сообщения. |

## Возвращаемое значение
**`undefined`**

## Пример
``` javascript linenums="1"
// Один аргумент
console.log('log text')

// Несколько аргументов
console.log('text1', 'text2')
console.log('text1', 'text2', .. , 'text10')

// Различные типы аргументов
console.log('text1', 123, true, { key: 'value' })
``` 

!!! info "См. также"

    [console.info()](info.md)
	
	[console.warn()](warn.md)
	
	[console.error()](error.md)
