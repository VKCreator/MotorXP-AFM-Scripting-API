# Geom.piece()

## Описание
Создает деталь мотора из геометрической формы и материала.

## Синтаксис
```javascript
Geom.piece(shp: Shape, material: Material) -> Piece
```

## Аргументы

| Аргумент   | Тип      | Обязательный | Описание                     |
|------------|----------|--------------|------------------------------|
| `shp`      | Shape    | :white_check_mark: Да          | Геометрическая форма детали.  |
| `material` | Material | :white_check_mark: Да          | Материал детали.             |

## Возвращаемое значение

| Тип   | Описание                          |
|-------|-----------------------------------|
| Piece | Объект типа `Piece`, деталь мотора. |

## Пример
```javascript linenums="1"

let shp = Geom.cylinder(100, 100)
let material = Material.general();
let piece = Geom.piece(shp, material)
console.info(piece) // output:
```

!!! info "См. также"

    [Geom](./../../Geom/index.md)

    [Material](./../../Material/index.md)

