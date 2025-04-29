# isUpper()

## Описание
Истина, если в моторе элемент ротора верхний.

## Синтаксис
```javascript
isLower(itemID: RotorItem.ID) : bool
```

## Аргументы
- `itemID` (RotorItem.ID, обязательно): Идентификатор элемента ротора.

## Возвращаемое значение
`bool`: Истина, если в моторе элемент ротора верхний.

## Пример
```javascript linenums="1"
let rotor = motor.rotor
let result = rotor.isUpper(RotorItem.ID1)
console.info(result)
```

!!! info "См. также"

    []()

