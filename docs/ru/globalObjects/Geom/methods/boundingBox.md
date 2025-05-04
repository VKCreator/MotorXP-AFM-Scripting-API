# Geom.boundingBox()

## Описание
Возвращает ограничивающую коробку тела.

## Синтаксис
```javascript
Geom.boundingBox(shp: Shape) -> BoundingBox
```

## Аргументы

| Аргумент | Тип   | Обязательный | Описание           |
|---------|-------|--------------|--------------------|
| `shp`   | Shape | :white_check_mark: Да          | Тело.              |

## Возвращаемое значение

| Тип         | Описание                          |
|-------------|-----------------------------------|
| `BoundingBox` | Ограничивающая коробка тела. |

## Пример
```javascript linenums="1"
let result = Geom.boundingBox(value)
console.info(result)
```

!!! info "См. также"

    [Shape](./../../../types/Shape/index.md)

    [BoundingBox](./../../../types/BoundingBox/index.md)

