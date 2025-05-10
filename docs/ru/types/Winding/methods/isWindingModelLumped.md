# isWindingModelLumped()

## Описание
Истина, если задана модель `Lumped`.

## Синтаксис
```javascript
isWindingModelLumped() -> Boolean
```

## Возвращаемое значение
| Тип             | Описание                                      |
|------------------|-----------------------------------------------|
| `#!javascript Boolean`        | Истина, если задана модель `Lumped`.           |

## Пример
```javascript linenums="1"
let result = motor.winding.isWindingModelLumped()
console.info(result)
```

!!! info "См. также"


- [`isPlanar()`](./isPlanar.md)

- [`isToroidal()`](./isToroidal.md)

- [`isSingleLayer()`](./isSingleLayer.md)

- [`isDoubleLayer()`](./isDoubleLayer.md)

- [`isOrientationUpperLower()`](./isOrientationUpperLower.md)

- [`isOrientationLeftRight()`](./isOrientationLeftRight.md)

- [`isWindingModelFull()`](./isWindingModelFull.md)

