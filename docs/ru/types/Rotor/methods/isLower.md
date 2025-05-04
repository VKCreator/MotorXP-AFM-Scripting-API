# isLower()

## Описание
Истина, если в моторе элемент ротора нижний.

## Синтаксис
```javascript
isLower(itemID: RotorItem.ID) -> Boolean
```

## Аргументы
- `itemID` (RotorItem.ID, обязательно): Идентификатор элемента ротора.

## Возвращаемое значение
`Boolean`: Истина, если в моторе элемент ротора нижний.

## Пример
```javascript linenums="1"
let rotor = motor.rotor
let result = rotor.isLower(RotorItem.ID1)
console.info(result)
```

!!! info "См. также"

    []()

