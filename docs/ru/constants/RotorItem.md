# RotorItem

## RotorItem ID
<!--startID-->

| Константа          | Описание                   | Значение |
|-------------------|----------------------------|----------:|
| `RotorItem.ID1`         | Идентификатор элемента ротора  | `1`     |
| `RotorItem.ID2`        | Идентификатор элемента ротора | `2`    |
| `RotorItem.ID3`        | Идентификатор элемента ротора | `3`    |

<!--endID-->

!!! warning "Внимание"

    Значения констант увеличиваются **от нижней части ротора к верхней**, а не наоборот.

### Пример
```javascript linenums="1"
let value = RotorItem.ID1;
console.info(value);
```

## RotorItem Layer
<!--startLayer-->

| Константа            | Описание           | Значение |
|---------------------|--------------------|----------:|
| `RotorItem.Lower`     | Нижний слой элемента ротора | `1`     |
| `RotorItem.Upper`    | Верхний слой элемента ротора | `2`    |

<!--endLayer-->

### Пример
```javascript linenums="1"
let value = RotorItem.Lower;
console.info(value);
```

!!! info "См. также"

    [Colors](Colors.md)	

    [Direction](Direction.md)

    [Magnetization](Magnetization.md)

    [PoleArrangement](PoleArrangement.md)
