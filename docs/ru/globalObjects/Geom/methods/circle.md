# Geom.circle()

## Описание
2D круг или сектор круга, строится в плоскости XOY, углы задаются в градусах, центр фигуры в точке [0,0,0].

## Синтаксис
```javascript
Geom.circle(radius: number) : Shape
Geom.circle(radius: number, angle: number) : Shape
Geom.circle(radius: number, angle1: number, angle2: number) : Shape
```

## Аргументы
- `radius` (number, обязательно): Радиус круга.
- `angle` (number, обязательно): угол сектора круга в градусах в диапазоне [0...360], тело центрируется относительно оси OX.
- `angle1` (number, обязательно): Начальный угол сектора круга в градусах в диапазоне [0...360].
- `angle2` (number, обязательно): Конечный угол сектора круга в градусах в диапазоне [0...360].

## Возвращаемое значение
`Shape`: объект типа `Shape`, круг или сектор круга.

## Пример
```javascript linenums="1"
let s1 = Geom.circle(100)
console.info(s1) // output:
let s2 = Geom.circle(100, 30)
console.info(s2) // output:
let s3 = Geom.circle(100, 0, 90)
console.info(s3) // output:
```

!!! info "См. также"

    []()

