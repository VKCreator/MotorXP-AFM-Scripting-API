# Geom.sphere()

## Описание
3D примитив(объемный) -> сфера, строится относительно точки [0,0,0].

## Синтаксис
```javascript
Geom.sphere(r: Number) -> Shape
Geom.sphere(r: Number, an1: Number) -> Shape
Geom.sphere(r: Number, an1: Number, an2: Number) -> Shape
Geom.sphere(r: Number, an1: Number, an2: Number, an3: Number) -> Shape
```

## Аргументы

| Аргумент | Тип                  | Значение по умолчанию | Обязательный        | Описание                                      |
|----------|-----------------------|----------------------|---------------------|-----------------------------------------------|
| `r`      | `#!javascript Number` | —                    | :white_check_mark: Да | Радиус сферы                                  |
| `an1`    | `#!javascript Number` | —                    | :white_check_mark: Да | Первый угол поворота (в градусах)              |
| `an2`    | `#!javascript Number` | —                    | :white_check_mark: Да | Второй угол поворота (в градусах)              |
| `an3`    | `#!javascript Number` | —                    | :white_check_mark: Да | Третий угол поворота (в градусах)               |

## Возвращаемое значение

| Тип             | Описание                             |
|------------------|--------------------------------------|
| `Shape`          | Объект типа `Shape`, представляющий сферу. |

## Пример
```javascript linenums="1"
let s = Geom.sphere(100)
console.info(s) // output:
```

!!! info "См. также"

    []()

