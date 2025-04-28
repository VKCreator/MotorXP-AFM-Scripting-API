# Geom.polysegment()

## Описание
Полисегмент - 3D ломанная линия. Задаётся массивом точек `points`.

## Синтаксис
```javascript
Geom.polysegment(points: array of Point3, closed: bool = false) : Shape
```

## Аргументы
- `points` (array of Point3, обязательно): Массив точек полилинии.
- `closed` (bool, опционально): Установка флага `closed` создает замкнутую полилинию, добавляет сегмент полилинии, идущий от точки конца к точке начала.

## Возвращаемое значение
`Shape`: объект типа `Shape`, полилиния.

## Пример
```javascript linenums="1"
let s = Geom.polysegment([Geom.point3(10,10,10), Geom.point3(20,20,20), Geom.point3(30,30,30)])
console.info(s) // output:
```

!!! info "См. также"

    []()

