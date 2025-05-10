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

| Аргумент | Тип     | Обязательный | Описание                             |
|----------|----------|---------------|--------------------------------------|
| `r1`     | `Number` | ✔️ Да         | Большой радиус тора                   |
| `r2`     | `Number` | ✔️ Да         | Малый радиус тора                    |
| `ua`     | `Number` | ✔️ Да         | Угол поворота по оси U               |
| `va1`    | `Number` | ✔️ Да         | Начальный угол по оси V              |
| `va2`    | `Number` | ✔️ Да         | Конечный угол по оси V               |

## Возвращаемое значение

| Тип   | Описание                         |
|--------|----------------------------------|
| `Shape`| Объект типа `Shape`, тор         |

## Пример
```javascript linenums="1"
let s = Geom.torus(100)
console.info(s) // output:
```

!!! info "См. также"

    []()

