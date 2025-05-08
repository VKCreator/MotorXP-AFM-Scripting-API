# changeProperty()

## Описание
Изменить значение свойства. Это изменение можно будет отменить командой `Undo` в меню в графическом интерфейсе.

## Синтаксис
```javascript
changeProperty(propName: String, value: AnyType) -> Boolean
```

## Аргументы
- `propName` (String, обязательно): Имя свойства.
- `value` (AnyType, обязательно): Значение свойства.

## Возвращаемое значение
`Boolean`: True, если успешно.

## Пример
```javascript linenums="1"
let result = motor.mesh.changeProperty('autoSizeBound', true)
console.info(result) // output:
```

!!! info "См. также"

    []()

