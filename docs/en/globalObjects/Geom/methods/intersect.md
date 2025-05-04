# Geom.intersect()

## Описание
Булева операция: получить пересечение двух или более тел.

## Синтаксис
```javascript
Geom.intersect(a: Shape, b: Shape,) -> Shape
Geom.intersect(shapes: array of Shape) -> Shape
```

- `a` (Shape, обязательно): Тело 1.
- `b` (Shape, обязательно): Тело 2.
- `shapes` (Array of Shape, обязательно): Массив тел.

## Возвращаемое значение
`Shape`: объект типа `Shape`, Объединение тел.

## Пример
```javascript linenums="1"
let box = Geom.box(100, 100, 100);
let cyl = Geom.cylinder(50, 150);
let s1 = Geom.intersect(box, cyl) // box & cyl
console.info(s1) // output:
```

!!! info "См. также"

    [Geom.unite](./unite.md)

    [Geom.diff](./diff.md)

    [Geom.difference](./difference.md)
