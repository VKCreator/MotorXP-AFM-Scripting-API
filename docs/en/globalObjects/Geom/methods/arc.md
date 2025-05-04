# Geom.arc()

## Описание
2D дуга, строится в плоскости XOY, углы задаются в градусах, центр фигуры в точке [0,0,0].

## Синтаксис
```javascript
Geom.arc(radius: Number, angle: Number) -> Shape
Geom.arc(radius: Number, angle1: Number, angle2: Number) -> Shape
Geom.arc(p1: Point3, p2: Point3, p3: Point3) -> Shape
```

## Аргументы
- `radius` (Number, обязательно): Радиус дуги.
- `angle` (Number, обязательно): Угол дуги в градусах в диапазоне [0...360], начальный угол равен 0.
- `angle1` (Number, обязательно): Начальный угол дуги в градусах в диапазоне [0...360].
- `angle2` (Number, обязательно): Конечный угол дуги в градусах в диапазоне [0...360].
- `p1, p2, p3` (Point3, обязательно): Дуга проходящяя через три точки.

## Возвращаемое значение
`Shape`: объект типа Shape, дуга.

## Пример
```javascript linenums="1"
let s1 = Geom.arc(100, 30)
console.info(s1) // output:
let s2 = Geom.arc(100, 30, 60)
console.info(s2) // output:
let s3 = Geom.arc(Geom.point3(0,0,0), Geom.point3(10,10,10), Geom.point3(20,20,20))
console.info(s3) // output:
```

!!! info "См. также"

    []()

