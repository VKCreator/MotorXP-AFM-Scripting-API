# isLower()

## Описание типа
Истина, если в моторе элемент ротора нижний.

## Синтаксис
```javascript
isLower(itemID: RotorItem.ID) -> Boolean
```

## Аргументы
| Аргумент        | Тип            | Значение по умолчанию | Обязательный | Описание                          |
|-----------------|------------------|------------------------|--------------|-----------------------------------|
| `argument`        | `any`   | —                      | :white_check_mark: Да         | Описание.    |

## Возвращаемое значение
`#!javascript Boolean`: Истина, если в моторе элемент ротора нижний.

## Пример
```javascript linenums="1"
let rotor = motor.rotor
let result = rotor.isLower(RotorItem.ID1)
console.info(result)
```

!!! info "См. также"

    []()

