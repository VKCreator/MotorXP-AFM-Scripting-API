# setItemAngularDisplacement()

## Описание
Задать угловое смещение элемента статора в градусах.

## Синтаксис
```javascript
setItemAngularDisplacement(itemID: StatorItem.ID, angle: Number)
```

## Аргументы
- `itemID` (StatorItem.ID, обязательно): Идентификатор элемента статора.
- `angle` (Number, обязательно): Угловое смещение элемента статора.

## Возвращаемое значение
`undefine`

## Пример
```javascript linenums="1"
let stator = motor.stator
stator.setItemAngularDisplacement(StatorItem.ID1, 30)
```

!!! info "См. также"

    []()

