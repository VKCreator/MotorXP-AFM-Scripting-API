# id

## Описание типа
Идентификатор элемента статора

## Принимаемые значения:
Одно из констант:

 - `StatorItem.ID1`

 - `StatorItem.ID2`

 - `StatorItem.ID3`

## Тип значения свойства
`#!javascript Number`

## Доступ
`Только Чтение`

## Синтаксис
```javascript
id = value
```

## Пример
```javascript linenums="1"
let result = motor.stator.item(StatorItem.ID1).id
console.info(result)
```

!!! info "См. также"

    <!-- [StatorItem.ID](./../constants/ID.md) -->

