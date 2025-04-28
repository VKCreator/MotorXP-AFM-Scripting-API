# Geom.piece()

## Описание
Создает деталь мотора из геометрической формы и материала.

## Синтаксис
```javascript
Geom.piece(shp: Shape, material: Material) : Piece
```

## Аргументы
- `shp` (Shape, обязательно): Геометрическая форма детали.
- `material` (Material, обязательно): Материал детали.

## Возвращаемое значение
`Piece`: Объект типа `Piece`, деталь мотора.

## Пример
```javascript linenums="1"

let shp = Geom.cylinder(100, 100)
let material = Material.general();
let piece = Geom.piece(shp, material)
console.info(piece) // output:
```

!!! info "См. также"

    [Geom](./../../Geom/_index.md)

    [Material](./../../Material/_index.md)

