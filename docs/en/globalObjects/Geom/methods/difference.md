# Geom.difference()

## Описание
Булева операция: Разность двух или более тел.

## Синтаксис
```javascript
Geom.difference(a: Shape, b: Shape,) : Shape
Geom.difference(shapes: array of Shape) : Shape
```

- `a` (Shape, обязательно): Тело 1.
- `b` (Shape, обязательно): Тело 2.
- `shapes` (Array of Shape, обязательно): Массив тел.

## Возвращаемое значение
`Shape`: объект типа `Shape`, объединение тел.

## Пример
```javascript linenums="1"
let box = Geom.box(100, 100, 100);
let cyl = Geom.cylinder(50, 150);
let s1 = Geom.difference(box, cyl) // box - cyl
console.info(s1) // output:
let s2 = Geom.difference(cyl, box) // cyl - box
console.info(s2) // output:
```

!!! info "См. также"

    [Geom.diff](./diff.md)

