# Geom.box()

## Описание
3D примитив(объемный) -> параллелипипед, задаётся с указанием трёх размеров `x`, `y`, `z` и строится относительно точки [0,0,0].

## Синтаксис
```javascript
Geom.box(x: Number, y: Number, z: Number) -> Shape
Geom.box(a: Number) -> Shape
```

## Аргументы
- `x` (Number, обязательно): Размер параллелипипеда по оси X.
- `y` (Number, обязательно): Размер параллелипипеда по оси Y.
- `z` (Number, обязательно): Размер параллелипипеда по оси Z.
- `a` (Number, обязательно): Размер куба.

## Возвращаемое значение
`Shape`: объект типа Shape, Параллелипипед.

## Пример
```javascript linenums="1"
let s1 = Geom.box(10, 20, 30)
console.info(s1) // output:
let s2 = Geom.box(10)
console.info(s2) // output:
```

!!! info "См. также"

    []()

