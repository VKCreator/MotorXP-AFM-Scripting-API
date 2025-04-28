# Geom.angleZ()

## Описание
Получить угол точки относительно центра координат [0,0,0] в плоскости XOY.

## Синтаксис
```javascript
Geom.angleX(point: Point3) : number
```

## Аргументы
- `argument` ([`Point3`](../../../types/Point3/_index.md), обязательно): Точка.

## Возвращаемое значение
`number`: угол точки относительно центра координат [0,0,0] в плоскости XOY (ноль - на три часа, увеличение по часовой).

## Пример
```javascript linenums="1"
let point = Geom.point3(100,100,100)
let angle = Geom.angleZ(point)
console.info(result) // output:
```

!!! info "См. также"

    []()

