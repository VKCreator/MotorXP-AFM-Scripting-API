# Math.isLessEqual()

## Описание
Возвращает `true`, если значение `arg₁` меньше или равно значению `arg₂` с учетом точности `eps`.

## Синтаксис
```javascript
Math.isLessEqual(arg1: Number, arg2: Number, eps: Number = Math.EPSILON) -> Boolean
``` 

## Аргументы
| Аргумент | Тип    | Значение по умолчанию | Обязательный | Описание                      |
|---------|--------|-----------------------|--------------|-------------------------------|
| `arg1`  | `#!javascript Number` | —                     | :white_check_mark: Да         | Первое числовое значение.     |
| `arg2`  | `#!javascript Number` | —                     | :white_check_mark: Да         | Второе числовое значение.     |
| `eps`   | `#!javascript Number` | `Math.EPSILON`        | ❌ Нет        | Погрешность сравнения чисел с плавающей точкой. |

## Возвращаемое значение
| Тип    | Описание                      |
|--------|-------------------------------|
| **`#!javascript Boolean`** | Результат выполнения операции. |

## Пример
``` javascript linenums="1"
let ret = Math.isLessEqual(1, 1.1)
``` 

!!! info "См. также"

    [Math.isEpsilon()](isEpsilon.md)

    [Math.isEqual()](isEqual.md)

    [Math.isLessEqual()](isLessEqual.md)

    [Math.isGreatEqual()](isGreatEqual.md)
