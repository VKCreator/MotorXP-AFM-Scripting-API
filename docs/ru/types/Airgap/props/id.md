# id

## Описание типа
Идентификатор воздушного зазора (`Airgap.ID`).

## Тип значения свойства
`#!javascript Number`

## Возможные значения
{%
    include-markdown "../../../constants/Airgap.md"
    start="<!--start-->"
    end="<!--end-->"
%}

## Доступ
`Только Чтение`

## Пример
```javascript linenums="1"
let airgap = motor.airgap
let result = airgap.id
console.info(result) // output: 1
```

!!! info "См. также"

    [thickness](./thickness.md)

    [numberLayers](./numberLayers.md)

    [posTop](./posTop.md)

    [posMiddle](./posMiddle.md)

