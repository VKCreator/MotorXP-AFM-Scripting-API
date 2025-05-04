# Geom.distance()

## Описание
Расчитывает расстояние между двумя точками.

## Синтаксис
```javascript
Geom.distance(p1: Point3, p2: Point3) -> Number
```

## Аргументы

| Аргумент | Тип     | Обязательный | Описание        |
|---------|---------|--------------|-----------------|
| `p1`    | Point3  | :white_check_mark: Да          | Точка 1.        |
| `p2`    | Point3  | :white_check_mark: Да          | Точка 2.        |

## Возвращаемое значение

| Тип     | Описание                                  |
|---------|-------------------------------------------|
| Number  | Расстояние между двумя точками.           |
## Пример
```javascript linenums="1"
let p1 = Geom.point3(0, 0, 0)
let p2 = Geom.point3(100, 100, 100)
let dist = Geom.distance(p1, p2)
console.info(dist) // output:
```

!!! info "См. также"

    []()

