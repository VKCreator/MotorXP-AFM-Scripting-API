# changeProperty()

## Описание
Изменить значение свойства. Это изменение можно отменить командой `Undo` в меню в графическом интерфейсе.

## Синтаксис
```javascript
changeProperty(propName: String, value: any) -> Boolean
```

## Аргументы
| Аргумент  | Тип                  | Обязательный | Описание                         |
|----------|----------------------|--------------|----------------------------------|
| `propName`  | `String` | :white_check_mark: Да           | Имя свойства. |
| `value`  | `any` | :white_check_mark: Да           | Значение свойства. |

## Возвращаемое значение
| Тип      | Описание                                                                 |
|----------|--------------------------------------------------------------------------|
| **`#!javascript Boolean`**  | `true`, если успешно. |

## Пример
```javascript linenums="1"
let result = motor.rotor.rotorItem(RotorItem::ID1).changeProperty('angularDisplacement', 30)
console.info(result) // output:
```

!!! info "См. также"

    []()

