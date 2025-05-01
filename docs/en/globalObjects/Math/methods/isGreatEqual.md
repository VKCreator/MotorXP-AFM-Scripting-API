# Math.isGreatEqual()

## Описание
Возвращает `true`, если значение arg1 больше или равно значению arg2 с учетом точности `eps`.

## Синтаксис
```javascript
isGreatEqual(arg1 : number, arg2 : number, eps : number = Math.EPSILON) : number
``` 

## Аргументы
- `arg1` (number, обязательно): первое значение.
- `arg2` (number, обязательно): второе значение.
- `eps` (number, опционально): значение точности, по умолчанию равно `Math.EPSILON`.

## Возвращаемое значение
- `bool`: результат сравнения.

## Пример
``` javascript linenums="1"
let ret = Math.isGreatEqual(1, 1.1)
``` 

!!! info "См. также"

    [Math.isEpsilon()](isEpsilon.md)

    [Math.isEqual()](isEqual.md)

    [Math.isGreatEqual()](isGreatEqual.md)
