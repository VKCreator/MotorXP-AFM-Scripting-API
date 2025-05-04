# Geom.boundingBox()

## Описание
Возвращает ограничивающую коробку тела.

## Синтаксис
```javascript
Geom.boundingBox(shp: Shape) -> BoundingBox
```

## Аргументы
- `shp` (Shape, обязательно): Тело.

## Возвращаемое значение
`BoundingBox`: Объект типа `BoundingBox`, ограничивающая коробка тела.

## Пример
```javascript linenums="1"
let result = Geom.boundingBox(value)
console.info(result)
```

!!! info "См. также"

    [Shape](./../../../types/Shape/index.md)

