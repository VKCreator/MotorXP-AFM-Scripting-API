# Geom.angle()

## Описание
Получить угол точки.

## Синтаксис
```javascript
Geom.angle(x: Number, y: Number) -> Number
```

## Аргументы
- `x` (Number, обязательно): значение координаты X.
- `y` (Number, обязательно): значение координаты Y.

## Возвращаемое значение
`Number`: угол точки в градусах относительно центра координат [0,0] (ноль — на три часа, увеличение по часовой).

## Пример
```javascript linenums="1"
let result = Geom.angle(100, 100)
console.info(result) // output: 45
```

!!! info "См. также"

    [Geom.angleX()](angleX.md)
    [Geom.angleY()](angleY.md)
    [Geom.angleZ()](angleZ.md)

