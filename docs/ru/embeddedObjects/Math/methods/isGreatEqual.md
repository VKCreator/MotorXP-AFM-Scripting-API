# isGreatEqual

## Описание
Возвращает `true`, если значение arg1 больше или равно значению arg2 с учетом точности eps.

## Синтаксис
```javascript
isGreatEqual(arg1: number, arg2: number, eps: number = Math.Epsilon): number
``` 

## Аргументы
- `arg1` (number, обязательно): Значение 1.
- `arg2` (number, обязательно): Значение 2.
- `eps` (number, опционально): Значение точности, по умолчанию равно `Math.Epsilon`.

## Возвращаемое значение
- `bool`: Результат сравнения

## Пример
``` javascript linenums="1"
let ret = Math.isGreatEqual(1, 1.1)
``` 

!!! info "См. также"

    [Math.isEpsilon](isEpsilon.md)

    [Math.isEqual](isEqual.md)

    [Math.isGreatEqual](isGreatEqual.md)
