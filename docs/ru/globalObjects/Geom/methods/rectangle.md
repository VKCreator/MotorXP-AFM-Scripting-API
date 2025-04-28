# Geom.rectangle()

## Описание
2D Прямоугольник, строится в плоскости XOY, центр фигуры в точке [0,0,0].

## Синтаксис
```javascript
Geom.rectangle(a: number, b: number) : Shape
```

## Аргументы
- `a` (number, обязательно): Сторона прямоугольника по X.
- `b` (number, обязательно): Сторона прямоугольника по Y.

## Возвращаемое значение
`Shape`: объект типа `Shape`, Прямоугольник.

## Пример
```javascript linenums="1"
let s = Geom.rectangle(300, 200);
console.info(s) // output:
```

!!! info "См. также"

    []()
