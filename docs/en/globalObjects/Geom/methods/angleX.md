# Geom.angleX()

## Описание
Получить угол точки относительно центра координат [0,0,0] в плоскости YOZ.

## Синтаксис
```javascript
Geom.angleX(point: Point3) -> Number
```

## Аргументы
- `argument` ([`Point3`](../../../types/Point3/index.md), обязательно)

## Возвращаемое значение
`Number`: угол точки относительно центра координат [0,0,0] в плоскости YOZ(ноль - на три часа, увеличение по часовой).

## Пример
```javascript linenums="1"
let point = Geom.point3(100,100,100)
let angle = Geom.angleX(point)
console.info(result) // output:
```

!!! info "См. также"

    []()

