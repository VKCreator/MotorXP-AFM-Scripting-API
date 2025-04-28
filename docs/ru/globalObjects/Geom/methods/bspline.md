# Geom.bspline()

## Описание
B-spline - 3D плавная линия, проходящая через все заданные точки. Задаётся массивом точек `points`.

## Синтаксис
```javascript
Geom.bspline(points: array of Point3, closed: bool = false) : Shape
```

## Аргументы
- `points` (array of Point3, обязательно): Массив точек плавной кривой.
- `closed` (bool, опционально): Установка флага `closed` создает замкнутую плавную кривую.

## Возвращаемое значение
`Shape`: объект типа `Shape`, B-spline.

## Пример
```javascript linenums="1"
let s = Geom.bspline([Geom.point3(10,10,10), Geom.point3(20,20,20), Geom.point3(30,30,30)])
console.info(s) // output:
```

!!! info "См. также"

    []()

