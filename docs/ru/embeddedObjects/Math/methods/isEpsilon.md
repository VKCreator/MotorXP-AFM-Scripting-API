# isEpsilon

## Описание
Возвращает `true`, если абсолютное значение arg меньше или равно eps.

## Синтаксис
```javascript
isEpsilon(arg: number, eps: number = Math.Epsilon): bool
``` 

## Аргументы
- `arg` (number, обязательно): Значение.
- `eps` (number, опционально): Значение точности, по умолчанию равно `Math.Epsilon`.

## Возвращаемое значение
- `bool`: Результат

## Пример
``` javascript linenums="1"
let b = Math.isEpsilon(0.0001)
``` 

!!! info "См. также"

    [Math.isEqual](isEqual.md)

    [Math.isLessEqual](isLessEqual.md)

    [Math.isGreatEqual](isGreatEqual.md)
    