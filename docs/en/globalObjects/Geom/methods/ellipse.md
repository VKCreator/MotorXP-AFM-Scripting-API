# Geom.ellipse()

## Описание
2D эллипс или сектор эллипса, строится в плоскости XOY, углы задаются в градусах, центр фигуры в точке [0,0,0].

## Синтаксис
```javascript
Geom.ellipse(radius1: number, radius2: number) : Shape
Geom.ellipse(radius1: number, radius2: number, angle1: number, angle2: number) : Shape
```

## Аргументы
- `radius1` (number, обязательно): Радиус 1 эллипса.
- `radius2` (number, обязательно): Радиус 2 эллипса.
- `angle1` (number, обязательно): Начальный угол сектора эллипса в градусах в диапазоне [0...360].
- `angle2` (number, обязательно): Конечный угол сектора эллипса в градусах в диапазоне [0...360].

## Возвращаемое значение
`Shape`: объект типа `Shape`, эллипс или сектор эллипса.

## Пример
```javascript linenums="1"
let s1 = Geom.ellipse(100, 200)
console.info(s1) // output:
let s2 = Geom.ellipse(100, 200, 0, 90)
console.info(s2) // output:
```

!!! info "См. также"

    []()

