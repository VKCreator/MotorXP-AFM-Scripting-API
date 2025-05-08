# isOrientationLeftRight()

## Описание
Истина, если для двойного слоя задана ориентация обмотки Верх/Низ.

## Синтаксис
```javascript
isOrientationLeftRight() -> Boolean
```

## Возвращаемое значение
| Тип   | Описание                          |
|-------|-----------------------------------|
| `#!javascript Boolean` | Истина, если для двойного слоя задана ориентация обмотки Верх/Низ.          |

## Пример
```javascript linenums="1"
let result = motor.winding.isOrientationLeftRight()
console.info(result)
```

!!! info "См. также"

    - [`isPlanar()`](./isPlanar.md)
    
    - [`isToroidal()`](./isToroidal.md)
    
    - [`isSingleLayer()`](./isSingleLayer.md)
    
    - [`isDoubleLayer()`](./isDoubleLayer.md)
    
    - [`isOrientationUpperLower()`](./isOrientationUpperLower.md)
    
    - [`isWindingModelLumped()`](./isWindingModelLumped.md)
    
    - [`isWindingModelFull()`](./isWindingModelFull.md)
    
