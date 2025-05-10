# motor.changeProperty()

## Описание
Изменить значение свойства. Это изменение можно отменить командой `Undo` в меню в графическом интерфейсе.

## Синтаксис
```javascript
motor.changeProperty(propName: String, value: AnyType) -> Boolean
```

## Аргументы
| Аргумент      | Тип             | Значение по умолчанию | Обязательный | Описание              |
|---------------|------------------|------------------------|--------------|------------------------|
| `propName`       | `#!javascript String`    | - | :white_check_mark: Да        | Имя свойства.        |        |
| `value`       | `#!javascript any`    | - | :white_check_mark: Да        | Значение свойства.        |        |

## Возвращаемое значение
| Тип     | Описание                                                                 |
|---------|--------------------------------------------------------------------------|
| `#!javascript Boolean`  | `true`, если успешно. |


## Пример
```javascript linenums="1"
let result = motor.rotor.rotorItem(RotorItem::ID1).changeProperty('angularDisplacement', 30)
console.info(result) // output:
```

!!! info "См. также"

    []()

