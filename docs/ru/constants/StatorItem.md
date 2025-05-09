# StatorItem

## StatorItem ID
<!--startID-->

| Константа          | Описание                   | Значение |
|-------------------|----------------------------|----------:|
| `StatorItem.ID1`         | Идентификатор нижней части статора  | `1`     |
| `StatorItem.ID2`        | Идентификатор средней части статора | `2`    |
| `StatorItem.ID3`        | Идентификатор верхней части статора | `3`    |

<!--endID-->

!!! warning "Внимание"

    Значения констант увеличиваются **от нижней части статора к верхней**, а не наоборот.

### Пример
```javascript linenums="1"
console.info(StatorItem.ID1) // output: 1

let BtmStatorHeight = stator.item(StatorItem.ID1).height;
console.info(BtmStatorHeight) // output: for example, 50
```

## StatorItem Layer
<!--startLayer-->

| Константа            | Описание           | Значение |
|---------------------|--------------------|----------:|
| `StatorItem.Lower`     | Нижний слой элемента статора | `1`     |
| `StatorItem.Upper`    | Верхний слой элемента статора | `2`    |

<!--endLayer-->

### Пример
```javascript linenums="1"
let value = StatorItem.Lower;
console.info(value);
```

!!! info "См. также"

    [Stator](../types/Stator/index.md)

    [StatorItem](../types/StatorItem/index.md)
