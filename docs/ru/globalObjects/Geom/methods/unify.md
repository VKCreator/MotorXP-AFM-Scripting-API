# Geom.unify()

## Описание
Упрощает геометрическое представление объекта, путём удаления лишних рёбер и объединения граней.

## Синтаксис
```javascript
Geom.unify(shp: Shape) -> Shape
```

## Аргументы
- `shp` (Shape, обязательно): Тело для операции упрощения.

## Возвращаемое значение
`Shape`: объект типа `Shape`, результат операции упрощения.

## Пример
```javascript linenums="1"
let box = Geom.box(100, 100, 100)
let s = Geom.unify(box)
console.info(s) // output: 
```

!!! info "См. также"

    [Geom.unite](./unite.md)

    [Geom.intersect](./intersect.md)

    [Geom.diff](./diff.md)

    [Geom.difference](./difference.md)

