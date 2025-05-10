# isPlanar()

## Описание типа
Истина, если тип обмотки планарный.

## Синтаксис
```javascript
isPlanar() -> Boolean
```

## Возвращаемое значение

| Тип             | Описание                                      |
|------------------|-----------------------------------------------|
| `#!javascript Boolean`        | Истина, если тип обмотки планарный.          |

## Пример
```javascript linenums="1"
let result = motor.winding.isPlanar()
console.info(result)
```

!!! info "См. также"

    - [`isToroidal()`](./isToroidal.md)
    
    - [`isSingleLayer()`](./isSingleLayer.md)
    
    - [`isDoubleLayer()`](./isDoubleLayer.md)
    
    - [`isOrientationUpperLower()`](./isOrientationUpperLower.md)
    
    - [`isOrientationLeftRight()`](./isOrientationLeftRight.md)
    
    - [`isWindingModelLumped()`](./isWindingModelLumped.md)
    
    - [`isWindingModelFull()`](./isWindingModelFull.md)
    
