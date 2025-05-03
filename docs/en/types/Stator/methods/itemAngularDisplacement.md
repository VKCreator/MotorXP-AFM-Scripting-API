# itemAngularDisplacement()

## Описание
Угловое смещение элемента статора в градусах.

## Синтаксис
```javascript
itemAngularDisplacement(itemID: StatorItem.ID) : number
```

## Аргументы
- `itemID` (StatorItem.ID, обязательно): Идентификатор элемента статора.

## Возвращаемое значение
`number`: Угловое смещение элемента статора в градусах.

## Пример
```javascript linenums="1"
let stator = motor.stator
let result = stator.itemAngularDisplacement(StatorItem.ID1)
console.info(result)
```

!!! info "См. также"

    []()

