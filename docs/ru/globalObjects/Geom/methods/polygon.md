# Geom.polygon()

## Описание
2D Многоугольник, строится в плоскости XOY, центр фигуры в точке [0,0,0].

## Синтаксис
```javascript
Geom.polygon(points: array of Point3) -> Shape
```

## Аргументы
- `points` (array of Point3, обязательно): Массив вершин многоугольника.

## Возвращаемое значение
`Shape`: объект типа `Shape`, Многоугольник.

## Пример
```javascript linenums="1"
let s = Geom.polygon([Geom.point3(0,0,0), Geom.point3(1,0,0), Geom.point3(1,1,0), Geom.point3(0,1,0), Geom.point3(0,0,0)]);
console.info(s);
```

!!! info "См. также"

    []()
