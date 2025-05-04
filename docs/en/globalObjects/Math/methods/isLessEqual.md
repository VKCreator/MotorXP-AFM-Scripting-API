# Math.isLessEqual()

## Описание
Возвращает `true`, если значение arg~1~ меньше или равно значению arg~2~ с учетом точности `eps`.

## Синтаксис
```javascript
isLessEqual(arg1 : Number, arg2 : Number, eps : Number = Math.EPSILON) -> Number
``` 

## Аргументы
- `arg1` (Number, обязательно): значение 1.
- `arg2` (Number, обязательно): начение 2.
- `eps` (Number, опционально): значение точности, по умолчанию равно `Math.EPSILON`.

## Возвращаемое значение
`Boolean`: результат сравнения.

## Пример
``` javascript linenums="1"
let ret = Math.isLessEqual(1, 1.1)
``` 

!!! info "См. также"

    [Math.isEpsilon()](isEpsilon.md)

    [Math.isEqual()](isEqual.md)

    [Math.isLessEqual()](isLessEqual.md)

    [Math.isGreatEqual()](isGreatEqual.md)
