# isEqual

## Описание
Возвращает `true`, если разница абсолютных значений arg1 и arg2 меньше или равно eps.

## Синтаксис
```javascript
isEqual(arg1: number, arg2: number, eps: number = Math.Epsilon): bool
``` 

## Аргументы
- `arg1` (number, обязательно): Значение 1.
- `arg2` (number, обязательно): Значение 2.
- `eps` (number, опционально): Значение точности, по умолчанию равно `Math.Epsilon`.

## Возвращаемое значение
- `bool`: Результат

## Пример
``` javascript linenums="1"
let ret = Math.isEqual(1/3, 1)
console.info(ret)
``` 

!!! info "См. также"

    [Math.isEqual](isEpsilon.md)

    [Math.isLessEqual](isLessEqual.md)

    [Math.isGreatEqual](isGreatEqual.md)
