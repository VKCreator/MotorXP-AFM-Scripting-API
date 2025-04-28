# Geom.unite()

## Описание
Булева операция: Объединить два или более тел.

## Синтаксис
```javascript
Geom.unite(a: Shape, b: Shape,) : Shape
Geom.unite(shapes: array of Shape) : Shape
```

## Аргументы
- `a` (Shape, обязательно): Тело 1.
- `b` (Shape, обязательно): Тело 2.
- `shapes` (Array of Shape, обязательно): Массив тел.

## Возвращаемое значение
`Shape`: объект типа `Shape`, Объединение тел.

## Пример
```javascript linenums="1"
let box = Geom.box(100, 100, 100);
let cyl = Geom.cylinder(50, 150);
let result = Geom.unite(box, cyl) // box + cyl
console.info(result) // output:
```

!!! info "См. также"

    [Geom.intersect](./unite.md)

    [Geom.diff](./diff.md)

    [Geom.difference](./difference.md)

