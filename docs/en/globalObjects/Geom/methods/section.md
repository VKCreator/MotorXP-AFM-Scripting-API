# Geom.section()

## Описание
Создание сечения.

## Синтаксис
```javascript
Geom.section(a: Shape, b: Shape) -> Shape
```

## Аргументы
- `a` (Shape, обязательно): Тело 1.
- `b` (Shape, обязательно): Тело 2.

## Возвращаемое значение
`Shape`: Объект типа `Shape`, сечение.

## Пример
```javascript linenums="1"
let a = Geom.box(100, 100, 100)
let b = Geom.inflate(Geom.point3(50,50,50), Geom.vector(100, 100, 100))
let result = Geom.section(a, b)
console.info(result) // output:
```

!!! info "См. также"

    []()

