# Geom.ring()

## Описание
2D кольцо или сектор кольца, строится в плоскости XOY, углы задаются в градусах, центр фигуры в точке [0,0,0].

## Синтаксис
```javascript
Geom.ring(radius1: number, radius2: number) : Shape
Geom.ring(radius1: number, radius2: number, angle: number) : Shape
Geom.ring(radius1: number, radius2: number, angle1: number, angle2: number) : Shape
```

## Аргументы
- `radius1` (number, обязательно): Наружний радиус кольца.
- `radius2` (number, обязательно): Внутренний радиус кольца.
- `angle` (number, обязательно): угол сектора кольца в градусах в диапазоне [0...360], тело центрируется относительно оси OX.
- `angle1` (number, обязательно): Начальный угол сектора кольца в градусах в диапазоне [0...360].
- `angle2` (number, обязательно): Конечный угол сектора кольца в градусах в диапазоне [0...360].

## Возвращаемое значение
`Shape`: объект типа `Shape`, кольцо или сектор кольца.

## Пример
```javascript linenums="1"
let s1 = Geom.ring(100, 50)
console.info(s1) // output:
let s2 = Geom.ring(100, 50, 30)
console.info(s2) // output:
let s3 = Geom.circle(100, 50, 0, 90)
console.info(s3) // output:
```

!!! info "См. также"

    []()

