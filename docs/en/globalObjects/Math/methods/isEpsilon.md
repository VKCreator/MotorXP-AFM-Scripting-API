# Math.isEpsilon()

## Описание
Возвращает `true`, если абсолютное значение `arg` меньше или равно `eps`.

## Синтаксис
```javascript
isEpsilon(arg : number, eps : number = Math.EPSILON) : bool
``` 

## Аргументы
- `arg` (number, обязательно): значение.
- `eps` (number, опционально): значение точности, по умолчанию равно `Math.EPSILON`.

## Возвращаемое значение
- `bool`: результат.

## Пример
``` javascript linenums="1"
let b1 = Math.isEpsilon(0.0001)
console.info(b1) // output: false
let b2 = Math.isEpsilon(1e-8, Math.EPSILON)
console.info(b2) // output: true
``` 

!!! info "См. также"

    [Math.isEqual()](isEqual.md)

    [Math.isLessEqual()](isLessEqual.md)

    [Math.isGreatEqual()](isGreatEqual.md)
    