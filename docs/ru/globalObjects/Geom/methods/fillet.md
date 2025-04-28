# Geom.fillet()

## Описание
Операция скругления тела. Если тело объёмное - модификации подвергаются ребра. Если плоское - вершины.
Скругления задаются радиусом `r` и масcивом ближайших точек `refs` к модифицируемым ребрам/вершинам.

## Синтаксис
```javascript
Geom.fillet(shp: Shape, r: number) : Shape
Geom.fillet(shp: Shape, r: number, refs: array of Point3) : Shape
```

## Аргументы
- `shp` (Shape, обязательно): Тело для скругления.
- `r` (number, обязательно): Радиус скругления.
- `refs` (Array of Point3, обязательно): масcивом ближайших точек `refs` к ребрам/вершинам, требующих скругления.

## Возвращаемое значение
`Shape`: объект типа `Shape`, результат операции скругления.

## Пример
```javascript linenums="1"
let box = Geom.box(100, 100, 100)
let s = Geom.fillet(box, 1);
console.info(s) // output:
```

!!! info "См. также"

    [Geom.chamfer](./chamfer.md)

