# Geom.box()

## Описание
3D примитив(объемный) : параллелипипед, задаётся с указанием трёх размеров `x`, `y`, `z` и строится относительно точки [0,0,0].

## Синтаксис
```javascript
Geom.box(x: number, y: number, z: number) : Shape
Geom.box(a: number) : Shape
```

## Аргументы
- `x` (number, обязательно): Размер параллелипипеда по оси X.
- `y` (number, обязательно): Размер параллелипипеда по оси Y.
- `z` (number, обязательно): Размер параллелипипеда по оси Z.
- `a` (number, обязательно): Размер куба.

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

