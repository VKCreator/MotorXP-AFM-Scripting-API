# Math.isEqual()

## Описание
Возвращает `true`, если разница абсолютных значений `arg₁` и `arg₂` меньше или равно `eps`.

## Синтаксис
```javascript
isEqual(arg1: Number, arg2: Number, eps: Number = Math.EPSILON) -> Boolean
``` 

## Аргументы
| Аргумент | Тип    | Значение по умолчанию | Обязательный | Описание                      |
|---------|--------|-----------------------|--------------|-------------------------------|
| `arg1`  | `Number` | —                     | ✅ Да         | Первое числовое значение.     |
| `arg2`  | `Number` | —                     | ✅ Да         | Второе числовое значение.     |
| `eps`   | `Number` | `Math.EPSILON`        | ❌ Нет        | Погрешность сравнения чисел с плавающей точкой. |

## Возвращаемое значение
| Тип    | Описание                      |
|--------|-------------------------------|
| **`Boolean`** | Результат выполнения операции. |

## Пример
``` javascript linenums="1"
let ret = Math.isEqual(1/3, 1)
console.info(ret)
``` 

!!! info "См. также"

    [Math.isEqual()](isEpsilon.md)

    [Math.isLessEqual()](isLessEqual.md)

    [Math.isGreatEqual()](isGreatEqual.md)
