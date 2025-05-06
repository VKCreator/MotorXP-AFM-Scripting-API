# id

## Описание
Идентификатор элемента ротора.

## Принимаемые значения:
Одно из констант:

 - RotorItem.ID1

 - RotorItem.ID2

 - RotorItem.ID3

## Тип значения свойства
`#!javascript Number`

## Доступ
`Только Чтение`

## Синтаксис
```javascript
id
```

## Пример
```javascript linenums="1"
let result = motor.rotor.item(RotorItem.ID1).id
console.info(result)
```

!!! info "См. также"

    [StatorItem.ID](./../constants/ID.md)

