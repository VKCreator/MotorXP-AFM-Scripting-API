# Math.isEpsilon()

## Описание
Возвращает `true`, если абсолютное значение `arg` меньше или равно `eps`.

## Синтаксис
```javascript
isEpsilon(arg : number, eps : number = Math.Epsilon) : bool
``` 

## Аргументы
- `arg` (number, обязательно): значение.
- `eps` (number, опционально): значение точности, по умолчанию равно `Math.Epsilon`.

## Возвращаемое значение
- `bool`: результат.

## Пример
``` javascript linenums="1"
let b = Math.isEpsilon(0.0001)
``` 

!!! info "См. также"

    [Math.isEqual()](isEqual.md)

    [Math.isLessEqual()](isLessEqual.md)

    [Math.isGreatEqual()](isGreatEqual.md)
    