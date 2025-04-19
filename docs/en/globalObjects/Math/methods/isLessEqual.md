# isLessEqual()

## Описание
Возвращает `true`, если значение arg~1~ меньше или равно значению arg~2~ с учетом точности `eps`.

## Синтаксис
```javascript
isLessEqual(arg1 : number, arg2 : number, eps : number = Math.Epsilon) : number
``` 

## Аргументы
- `arg1` (number, обязательно): значение 1.
- `arg2` (number, обязательно): начение 2.
- `eps` (number, опционально): значение точности, по умолчанию равно `Math.Epsilon`.

## Возвращаемое значение
- `bool`: результат сравнения.

## Пример
``` javascript linenums="1"
let ret = Math.isLessEqual(1, 1.1)
``` 

!!! info "См. также"

    [Math.isEpsilon()](isEpsilon.md)

    [Math.isEqual()](isEqual.md)

    [Math.isLessEqual()](isLessEqual.md)

    [Math.isGreatEqual()](isGreatEqual.md)
