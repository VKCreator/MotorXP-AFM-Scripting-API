# Geom.cylinder()

## Описание
3D примитив(объемный) : цилиндр, задаётся с указанием радиуса `r` и высоты `h` и строится относительно точки [0,0,0].
Возможно построение сектора цилиндра с использованием параметра `angle`.

## Синтаксис
```javascript
Geom.cylinder(r: number, h: number) : Shape
Geom.cylinder(r: number, h: number, angle: number) : Shape
```

## Аргументы
- `r` (number, обязательно): Радиус цилиндра.
- `h` (number, обязательно): Высота цилиндра.
- `angle` (number, обязательно): Угол сектора цилиндра в градусах, тело центрируется относительно оси OX.

## Возвращаемое значение
`Shape`: объект типа `Shape`, цилиндр.

## Пример
```javascript linenums="1"
let s1 = Geom.cylinder(100, 200)
console.info(s1) // output:
let s2 = Geom.cylinder(100, 200, 30)
console.info(s2) // output:
```

!!! info "См. также"

    []()

