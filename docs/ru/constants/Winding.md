# Winding

<!--startType-->
## Winding Type

| Константа          | Описание                 | Значение |
|--------------------|--------------------------|---------:|
| `Winding.Planar`   | Планарный тип обмотки    | `1`      |
| `Winding.Toroidal` | Тороидальный тип обмотки | `2`      |

<!--endType-->

### Пример
```javascript linenums="1"
let value = Winding.Planar;
console.info(value);
```

<!--startModel-->
## Winding Model

| Константа        | Описание | Значение |
|------------------|----------|---------:|
| `Winding.Lumped` | Lumped   | `1`      |
| `Winding.Full`   | Full     | `2`      |

<!--endModel-->

### Пример
```javascript linenums="1"
let value = Winding.Full;
console.info(value);
```

<!--startCircuit-->
## Winding Circuit

| Константа       | Описание                       | Значение |
|-----------------|--------------------------------|---------:|
| `Winding.Star ` | Схема соединения `Звезда`      | `1`      |
| `Winding.Delta` | Схема соединения `Треугольник` | `2`      |

<!--endCircuit-->

### Пример
```javascript linenums="1"
let value = Winding.Star;
console.info(value);
```

<!--startLayer-->
## Winding Layer

| Константа             | Описание       | Значение |
|-----------------------|----------------|---------:|
| `Winding.SingleLayer` | Одиночный слой | `1`      |
| `Winding.DoubleLayer` | Двойной слой   | `2`      |

<!--endLayer-->

### Пример
```javascript linenums="1"
let value = Winding.SingleLayer;
console.info(value);
```

<!--startLayerOrientation-->
## Winding LayerOrientation

| Константа            | Описание                | Значение |
|----------------------|-------------------------|---------:|
| `Winding.UpperLower` | Ориентация Верх/Низ     | `1`      |
| `Winding.LeftRight`  | Ориентация Слева/Справа | `2`      |

<!--endLayerOrientation-->

### Пример
```javascript linenums="1"
let value = Winding.UpperLower;
console.info(value);
```

## Winding WireSizeMethod
<!--startWireSizeMethod-->

| Константа              | Описание                 | Значение |
|------------------------|--------------------------|---------:|
| `Winding.AWG`          |                          | `1`      |
| `Winding.SWG`          |                          | `2`      |
| `Winding.FillFactor`   |                          | `3`      |
| `Winding.WireDiameter` |                          | `4`      |

<!--endWireSizeMethod-->

### Пример
```javascript linenums="1"
let value = Winding.AWG;
console.info(value);
```

!!! info "См. также"

    [Colors](Colors.md)	

    [Direction](Direction.md)

    [Magnetization](Magnetization.md)

    [PoleArrangement](PoleArrangement.md)
