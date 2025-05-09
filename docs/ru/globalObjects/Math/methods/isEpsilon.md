# Math.isEpsilon()

## Описание
Возвращает `true`, если абсолютное значение `arg` меньше или равно `eps`.

## Синтаксис
```javascript
isEpsilon(arg: Number, eps: Number = Math.EPSILON) -> Boolean
``` 

## Аргументы
| Аргумент | Тип    | Значение по умолчанию | Обязательный | Описание                      |
|---------|--------|-----------------------|--------------|-------------------------------|
| `arg`   | `#!javascript Number` | —                     | :white_check_mark: Да         | Числовое значение, которое обрабатывается. |
| `eps`   | `#!javascript Number` | `Math.EPSILON`        | ❌ Нет        | Погрешность сравнения чисел с плавающей точкой. |

## Возвращаемое значение
| Тип    | Описание                      |
|--------|-------------------------------|
| **`#!javascript Boolean`** | Результат выполнения операции. |

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

    <!-- [Math.EPSILON](../constants/Epsilon.md) -->
