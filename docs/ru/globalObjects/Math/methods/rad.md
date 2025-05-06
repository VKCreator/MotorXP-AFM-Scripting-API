# Math.rad()

## Описание
Перевод градусов в радианы.

## Синтаксис
```javascript
rad(degrees: Number) -> Number
``` 

## Аргументы

| Аргумент    | Тип      | Обязательный | Описание                     |
|-------------|----------|--------------|------------------------------|
| `degrees`   | `#!javascript Number` | :white_check_mark: Да         | Значение угла в градусах.    |

## Возвращаемое значение

| Тип      | Описание                                      |
|----------|-----------------------------------------------|
| **`#!javascript Number`** | Значение угла в радианах.  |

## Пример
``` javascript linenums="1"
let radians = Math.rad(180)
console.info("180°=", radians)
``` 

!!! info "См. также"

    [Math.deg()](deg.md)

    [Math.normAngle()](normAngle.md)
    
    [Math.middleAngle()](middleAngle.md)

