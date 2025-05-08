# items

## Описание
Массив элементов статора, количество элементов статора зависит от значения свойства `motor.machineType`.

## Тип значения свойства
`#!javascript Array<StatorItem>`

## Доступ
`Только Чтение`

## Пример
```javascript linenums="1"
let result = motor.stator.items
console.info(result) // output: 09:33:29.723 | Stator | StatorItem(0x22591e173c0, "statorItem1"),StatorItem(0x22591e174c0, "statorItem2"),StatorItem(0x22591e168c0, "statorItem3")
```

!!! info "См. также"

    [motor.machineType](../../../globalObjects/motor/props/machineType.md)

    [motor.stator](../../../globalObjects/motor/props/stator.md)

    [Stator](../index.md)

    [StatorItem](../../StatorItem/index.md)

