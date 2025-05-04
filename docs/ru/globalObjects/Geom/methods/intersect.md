# Geom.intersect()

## Описание
Булева операция: получить пересечение двух или более тел.

## Синтаксис
```javascript
Geom.intersect(a: Shape, b: Shape,) -> Shape
Geom.intersect(shapes: array of Shape) -> Shape
```

## Аргументы

| Аргумент  | Тип           | Обязательный | Описание                  |
|-----------|---------------|--------------|---------------------------|
| `a`       | Shape         | :white_check_mark: Да          | Тело 1.                   |
| `b`       | Shape         | :white_check_mark: Да          | Тело 2.                   |
| `shapes`  | Array of Shape| :white_check_mark: Да          | Массив тел для объединения. |

## Возвращаемое значение

| Тип   | Описание                          |
|-------|-----------------------------------|
| Shape | Объект типа `Shape`, объединение тел. |

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
