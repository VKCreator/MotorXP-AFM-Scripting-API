# Math.isGreatEqual()

## Описание
Возвращает `true`, если значение `arg₁` больше или равно значению `arg₂` с учетом точности `eps`.

## Синтаксис
```javascript
isGreatEqual(arg1: Number, arg2: Number, eps: Number = Math.EPSILON) -> Boolean
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
let ret = Math.isGreatEqual(5.0000001, 5.0, 1e-6) 
console.info(ret) // output: true
``` 

!!! info "См. также"

    [Math.isEpsilon()](isEpsilon.md)

    [Math.isEqual()](isEqual.md)

    [Math.isGreatEqual()](isGreatEqual.md)
