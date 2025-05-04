# Geom.distance()

## Описание
Расчитывает расстояние между двумя точками.

## Синтаксис
```javascript
Geom.distance(p1: Point3, p2: Point3) -> Number
```

## Аргументы
- `p1` (Point3, обязательно): Точка 1.
- `p2` (Point3, обязательно): Точка 2.

## Возвращаемое значение
`Number`: расстояние между двумя точками.

## Пример
```javascript linenums="1"
let p1 = Geom.point3(0, 0, 0)
let p2 = Geom.point3(100, 100, 100)
let dist = Geom.distance(p1, p2)
console.info(dist) // output:
```

!!! info "См. также"

    []()

