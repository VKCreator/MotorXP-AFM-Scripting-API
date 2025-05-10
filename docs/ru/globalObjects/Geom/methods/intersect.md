# Geom.intersect()

## Описание
Булева операция: получить пересечение двух или более тел.

## Синтаксис
```javascript
Geom.intersect(a: Shape, b: Shape) -> Shape
Geom.intersect(shapes: Array<Point3>) -> Shape
```

## Аргументы

| Аргумент  | Тип           | Обязательный | Описание                  |
|-----------|---------------|--------------|---------------------------|
| `a`       | `Shape`         | :white_check_mark: Да          | Тело 1.                   |
| `b`       | `Shape`         | :white_check_mark: Да          | Тело 2.                   |
| `shapes`  | `Array<Point3>` | :white_check_mark: Да          | Массив тел для пересечения. |

## Возвращаемое значение

| Тип   | Описание                          |
|-------|-----------------------------------|
| `Shape` | Объект типа `Shape`, результат пересечения тел. |

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
