# itemAngularDisplacement()

## Описание
Угловое смещение элемента ротора в градусах.

## Синтаксис
```javascript
itemAngularDisplacement(itemID: RotorItem.ID) -> Number
```

## Аргументы
- `itemID` (RotorItem.ID, обязательно): Идентификатор элемента ротора.

## Возвращаемое значение
`Number`: Угловое смещение элемента ротора в градусах.

## Пример
```javascript linenums="1"
let rotor = motor.rotor
let result = rotor.itemAngularDisplacement(RotorItem.ID1)
console.info(result)
```

!!! info "См. также"

    []()

