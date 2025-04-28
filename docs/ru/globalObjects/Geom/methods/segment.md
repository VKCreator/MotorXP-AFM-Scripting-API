# Geom.segment()

## Описание
Создание 3D отрезка, задается двумя точками.

## Синтаксис
```javascript
Geom.segment(argument: type) : Shape
```

## Аргументы
- `p1` (Point3, обязательно): Начальная точка отрезка.
- `p2` (Point3, обязательно): Конечная точка отрезка.

## Возвращаемое значение
`Shape`: объект типа `Shape`, отрезок.

## Пример
```javascript linenums="1"
let s = Geom.segment(Geom.point3(10,10,10), Geom.point3(20,20,20))
console.info(s) // output:
```

!!! info "См. также"

    []()

