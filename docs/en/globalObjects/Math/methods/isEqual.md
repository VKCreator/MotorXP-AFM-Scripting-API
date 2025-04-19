# isEqual()

## Описание
Возвращает `true`, если разница абсолютных значений arg~1~ и arg~2~ меньше или равно `eps`.

## Синтаксис
```javascript
isEqual(arg1 : number, arg2 : number, eps : number = Math.Epsilon) : bool
``` 

## Аргументы
- `arg1` (number, обязательно): первое значение.
- `arg2` (number, обязательно): второе значение.
- `eps` (number, опционально): значение точности, по умолчанию равно `Math.Epsilon`.

## Возвращаемое значение
- `bool`: результат.

## Пример
``` javascript linenums="1"
let ret = Math.isEqual(1/3, 1)
console.info(ret)
``` 

!!! info "См. также"

    [Math.isEqual()](isEpsilon.md)

    [Math.isLessEqual()](isLessEqual.md)

    [Math.isGreatEqual()](isGreatEqual.md)
