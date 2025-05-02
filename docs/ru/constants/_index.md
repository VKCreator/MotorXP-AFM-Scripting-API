# Список констант

## [Direction](Direction.md)
| Константа         | Описание                      | Значение |
|------------------ |-------------------------------|----------|
| `Direction.CW`    | Направление по часовой стрелке | `-1`     |
| `Direction.CCW`   | Направление против часовой стрелки | `+1`    |

## [Coil](Coil.md)

### [Coil orientation](Coil.md#coil-orientation)
| Константа          | Описание                   | Значение |
|-------------------|----------------------------|----------|
| `Coil.CW`         | Намотка по часовой стрелке  | `-1`     |
| `Coil.CCW`        | Намотка против часовой стрелки | `+1`    |

### [Coil direction](Coil.md#coil-direction)
| Константа            | Описание           | Значение |
|---------------------|--------------------|----------|
| `Coil.Incoming`     | Incoming (входящий) | `+1`     |
| `Coil.Outcoming`    | Outcoming (исходящий) | `-1`    |

## [PoleArrangement](PoleArrangement.md)
| Константа                | Описание       | Значение |
|-------------------------|----------------|----------|
| `PoleArrangement.NN`    | NN             | `0`      |
| `PoleArrangement.NS`    | NS             | `1`      |
| `PoleArrangement.NSNS`  | NSNS           | `2`      |
| `PoleArrangement.NSSN`  | NSSN           | `3`      |
| `PoleArrangement.NNSS`  | NNSS           | `4`      |
| `PoleArrangement.NNNN`  | NNNN           | `5`      |

## [Magnetization](Magnetization.md)
| Константа               | Описание                    | Значение |
|------------------------|-----------------------------|----------|
| `Magnetization.From`   | Направление "от" объекта    | `1`      |
| `Magnetization.Toward` | Направление "к" объекту     | `2`      |
| `Magnetization.CW`     | По часовой стрелке          | `3`      |
| `Magnetization.CCW`    | Против часовой стрелки      | `4`      |
  
## [Именованные цвета](Colors.md)

{%
    include-markdown "./Colors.md"
    start="<!--start-->"
    end="<!--end-->"
%}