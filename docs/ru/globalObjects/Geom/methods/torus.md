# Geom.torus()

## Описание
3D примитив(объемный) : тор, строится относительно точки [0,0,0].

## Синтаксис
```javascript
Geom.torus(r1: number) : Shape
Geom.torus(r1: number, r2: number) : Shape
Geom.torus(r1: number, r2: number, ua: number) : Shape
Geom.torus(r1: number, r2: number, va1: number, va2: number) : Shape
Geom.torus(r1: number, r2: number, va1: number, va2: number, ua: number) : Shape
```

## Аргументы
- `r1` (number, обязательно):
- `r2` (number, обязательно):
- `ua` (number, обязательно):
- `va1` (number, обязательно):
- `va2` (number, обязательно):

## Возвращаемое значение
`Shape`: объект типа `Shape`, тор.

## Пример
```javascript linenums="1"
let s = Geom.torus(100)
console.info(s) // output:
```

!!! info "См. также"

    []()

