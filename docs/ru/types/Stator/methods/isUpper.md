# isUpper()

## Описание типа
Истина, если в моторе элемент статора верхний.

## Синтаксис
```javascript
isLower(itemID: StatorItem.ID) -> Boolean
```

## Аргументы
- `itemID` (StatorItem.ID, обязательно): Идентификатор элемента статора.

## Возвращаемое значение
`#!javascript Boolean`: Истина, если в моторе элемент статора верхний.

## Пример
```javascript linenums="1"
let stator = motor.stator
let result = stator.isUpper(StatorItem.ID1)
console.info(result)
```

!!! info "См. также"

    []()

