# Geom.pointAtSegment()

## Описание
Возвращает точку в параметризованной позиции сегмента, указанной t. Метод возвращает начальную точку сегмента, если t = 0, и ее конечную точку, если t = 1.

## Синтаксис
```javascript
Geom.pointAtSegment(p1: Point3, p2: Point3, t : Number) -> Point3
```

## Аргументы
- `p1` (Point3, обязательно): Первая точка сегмента.
- `p2` (Point3, обязательно): Вторая точка сегмента.
- `t` (Number, обязательно): Параметризованная позиция сегмента.

## Возвращаемое значение
`Point3`: Возвращает точку `Point3`

## Пример
```javascript linenums="1"
let p1 = Geom.point3(0, 0, 0)
let p2 = Geom.point3(100, 100, 100)
let p3 = Geom.pointAtSegment(p1, p2, 0.5)
console.info(p3) // output:
```

!!! info "См. также"

    []()

