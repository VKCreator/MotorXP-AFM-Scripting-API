# Geom.infplane()

## Описание
Создается плоскость.

## Синтаксис
```javascript
Geom.infplane(pos: Point3 = Geom.point(0,0,0), dir: Vector3 = Geom.vector3(0,0,1)) -> Shape
```

## Аргументы
- `pos` (Point3, обязательно): Позиция плоскости.
- `dir` (Vector3, обязательно): Наравление, вектор перпендикулярный плоскости.

## Возвращаемое значение
`Shape`: объект типа `Shape`, Плоскость.

## Пример
```javascript linenums="1"
let s = Geom.infplane(Geom.point(0,0,0), Geom.vector3(0,0,1));
console.info(s);
```

!!! info "См. также"

    []()
