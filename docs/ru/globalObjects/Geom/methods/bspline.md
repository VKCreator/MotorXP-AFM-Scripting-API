# Geom.bspline()

## Описание
`B-spline` — плавная 3D-линия, проходящая через все заданные точки. Задаётся массивом точек `points`.

## Синтаксис
```javascript
Geom.bspline(points: Array<Point3>, closed: Boolean = false) -> Shape
```

## Аргументы

| Аргумент  | Тип              | Обязательный | Описание                                      |
|-----------|------------------|--------------|-----------------------------------------------|
| `points`  | `#!javascript Array<Point3>`  | :white_check_mark: Да          | Массив точек для построения плавной кривой.   |
| `closed`  | `#!javascript Boolean`          | ❌ Нет         | Флаг, определяющий замкнутость прямой. |

## Возвращаемое значение

| Тип   | Описание                          |
|-------|-----------------------------------|
| `Shape` | B-spline.                       |

## Пример
```javascript linenums="1"
let s = Geom.bspline([Geom.point3(10,10,10), Geom.point3(20,20,20), Geom.point3(30,30,30)])
console.info(s) // output:
```

!!! info "См. также"

    []()

