# isToroidal()

## Описание
Истина, если тип обмотки тороидальный.

## Синтаксис
```javascript
isToroidal() -> Boolean
```

## Возвращаемое значение

| Тип             | Описание                                      |
|------------------|-----------------------------------------------|
| `#!javascript Boolean`        | Истина, если тип обмотки тороидальный.           |

## Пример
```javascript linenums="1"
let result = motor.winding.isToroidal()
console.info(result)
```

!!! info "См. также"


- [`isPlanar()`](./isPlanar.md)

- [`isSingleLayer()`](./isSingleLayer.md)

- [`isDoubleLayer()`](./isDoubleLayer.md)

- [`isOrientationUpperLower()`](./isOrientationUpperLower.md)

- [`isOrientationLeftRight()`](./isOrientationLeftRight.md)

- [`isWindingModelLumped()`](./isWindingModelLumped.md)

- [`isWindingModelFull()`](./isWindingModelFull.md)

