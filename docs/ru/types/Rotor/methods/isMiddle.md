# isMiddle()

## Описание
Истина, если в моторе элемент ротора средний.

## Синтаксис
```javascript
isLower(itemID: RotorItem.ID) : bool
```

## Аргументы
- `itemID` (RotorItem.ID, обязательно): Идентификатор элемента ротора.

## Возвращаемое значение
`bool`: Истина, если в моторе элемент ротора средний.

## Пример
```javascript linenums="1"
let rotor = motor.rotor
let result = rotor.isMiddle(RotorItem.ID1)
console.info(result)
```

!!! info "См. также"

    []()

