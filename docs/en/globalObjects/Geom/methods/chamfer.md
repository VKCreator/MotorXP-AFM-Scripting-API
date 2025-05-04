# Geom.chamfer()

## Описание
Операция взятия фаски тела. В отличие от скругления применяется только к объёмным телам.
Фаска задаётся расстоянием `r`, взятым от ребра до линии фаски и массивом ближайших точек `refs`.

## Синтаксис
```javascript
Geom.chamfer(shp: Shape, r: Number) -> Shape
Geom.chamfer(shp: Shape, r: Number, refs: array of Point3) -> Shape
```

## Аргументы
- `shp` (Shape, обязательно): Тело для снятия фаски.
- `r` (Number, обязательно):  Расстояние, взятым от ребра до линии фаски.
- `refs` (Array of Point3, обязательно): масcивом ближайших точек `refs` к ребрам, требующих снятия фаски.

## Возвращаемое значение
`Shape`: объект типа `Shape`, результат операции снятия фаски.

## Пример
```javascript linenums="1"
let box = Geom.box(100, 100, 100)
let s = Geom.chamfer(box, 1);
console.info(result)
```

!!! info "См. также"

    [Geom.fillet](./fillet.md)

