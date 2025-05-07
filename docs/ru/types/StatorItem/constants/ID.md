# StatorItem.ID

## Описание
Идентификатор элемента статора.

## Значение
| Константа          | Описание                   | Значение |
|-------------------|----------------------------|----------:|
| `StatorItem.ID1`         | Идентификатор нижней части статора  | `1`     |
| `StatorItem.ID2`        | Идентификатор средней части статора | `2`    |
| `StatorItem.ID3`        | Идентификатор верхней части статора | `3`    |

!!! warning "Внимание"

    Значения констант увеличиваются **от нижней части статора к верхней**, а не наоборот.

## Пример
```javascript linenums="1"
console.info(StatorItem.ID1) // output: 1

let BtmStatorHeight = stator.item(StatorItem.ID1).height;
console.info(BtmStatorHeight) // output: for example, 50
```

!!! info "См. также"

    [Stator](../../Stator/index.md)

    [StatorItem](../index.md)

    [StatorItem.Layer](./Layer.md)


