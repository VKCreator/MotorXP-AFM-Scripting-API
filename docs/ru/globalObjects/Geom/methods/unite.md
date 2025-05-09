# Geom.unite()

## Описание
Булева операция: Объединить два или более тел.

## Синтаксис
```javascript
Geom.unite(a: Shape, b: Shape,) -> Shape
Geom.unite(shapes: Array) -> Shape
```

## Аргументы

| Аргумент | Тип                  | Значение по умолчанию | Обязательный        | Описание                          |
|----------|-----------------------|----------------------|---------------------|-----------------------------------|
| `a`      | `#!javascript Shape`  | —                    | :white_check_mark: Да | Первое тело для объединения       |
| `b`      | `#!javascript Shape`  | —                    | :white_check_mark: Да | Второе тело для объединения       |
| `shapes` | `Array`      | —                    | :white_check_mark: Да | Массив тел для объединения       |

## Возвращаемое значение

| Тип                  | Описание                                      |
|----------------------|-----------------------------------------------|
| `#!javascript Shape` | Объект типа `Shape`, результат объединения     |

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

