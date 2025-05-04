# Math.isEqual()

## Описание
Возвращает `true`, если разница абсолютных значений arg~1~ и arg~2~ меньше или равно `eps`.

## Синтаксис
```javascript
isEqual(arg1 : Number, arg2 : Number, eps : Number = Math.EPSILON) -> Boolean
``` 

## Аргументы
- `arg1` (Number, обязательно): первое значение.
- `arg2` (Number, обязательно): второе значение.
- `eps` (Number, опционально): значение точности, по умолчанию равно `Math.EPSILON`.

## Возвращаемое значение
`Boolean`: результат.

## Пример
``` javascript linenums="1"
let ret = Math.isEqual(1/3, 1)
console.info(ret)
``` 

!!! info "См. также"

    [Math.isEqual()](isEpsilon.md)

    [Math.isLessEqual()](isLessEqual.md)

    [Math.isGreatEqual()](isGreatEqual.md)
