# Geom.ellipse()

## Описание
2D эллипс или сектор эллипса, строится в плоскости XOY, углы задаются в градусах, центр фигуры в точке [0,0,0].

## Синтаксис
```javascript
Geom.ellipse(radius1: Number, radius2: Number) -> Shape
Geom.ellipse(radius1: Number, radius2: Number, angle1: Number, angle2: Number) -> Shape
```

## Аргументы

| Аргумент   | Тип    | Обязательный | Описание                                      |
|------------|--------|--------------|-----------------------------------------------|
| `radius1`  | Number | :white_check_mark: Да          | Первый радиус эллипса.                        |
| `radius2`  | Number | :white_check_mark: Да          | Второй радиус эллипса.                        |
| `angle1`   | Number | :white_check_mark: Да          | Начальный угол сектора эллипса в градусах в диапазоне [0...360]. |
| `angle2`   | Number | :white_check_mark: Да          | Конечный угол сектора эллипса в градусах в диапазоне [0...360]. |

## Возвращаемое значение

| Тип   | Описание                              |
|-------|---------------------------------------|
| `Shape` | Объект типа `Shape`, эллипс или сектор эллипса. |

## Пример
```javascript linenums="1"
let s1 = Geom.ellipse(100, 200)
console.info(s1) // output:
let s2 = Geom.ellipse(100, 200, 0, 90)
console.info(s2) // output:
```

!!! info "См. также"

    []()

