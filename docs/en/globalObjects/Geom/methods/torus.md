# Geom.torus()

## Описание
3D примитив(объемный) -> тор, строится относительно точки [0,0,0].

## Синтаксис
```javascript
Geom.torus(r1: Number) -> Shape
Geom.torus(r1: Number, r2: Number) -> Shape
Geom.torus(r1: Number, r2: Number, ua: Number) -> Shape
Geom.torus(r1: Number, r2: Number, va1: Number, va2: Number) -> Shape
Geom.torus(r1: Number, r2: Number, va1: Number, va2: Number, ua: Number) -> Shape
```

## Аргументы
- `r1` (Number, обязательно):
- `r2` (Number, обязательно):
- `ua` (Number, обязательно):
- `va1` (Number, обязательно):
- `va2` (Number, обязательно):

## Возвращаемое значение
`Shape`: объект типа `Shape`, тор.

## Пример
```javascript linenums="1"
let s = Geom.torus(100)
console.info(s) // output:
```

!!! info "См. также"

    []()

