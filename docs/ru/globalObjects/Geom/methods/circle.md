# Geom.circle()

## Описание
2D круг или сектор круга, строится в плоскости XOY, углы задаются в градусах, центр фигуры в точке [0,0,0].

## Синтаксис
```javascript
Geom.circle(radius: Number) -> Shape
Geom.circle(radius: Number, angle: Number) -> Shape
Geom.circle(radius: Number, angle1: Number, angle2: Number) -> Shape
```

## Аргументы

| Аргумент   | Тип      | Обязательный | Описание                                                    |
|------------|----------|--------------|-------------------------------------------------------------|
| `radius`   | Number   | :white_check_mark: Да          | Радиус круга.                                               |
| `angle`    | Number   | :white_check_mark: Да          | Угол сектора круга в градусах в диапазоне [0...360], тело центрируется относительно оси OX. |
| `angle1`   | Number   | :white_check_mark: Да          | Начальный угол сектора круга в градусах в диапазоне [0...360]. |
| `angle2`   | Number   | :white_check_mark: Да          | Конечный угол сектора круга в градусах в диапазоне [0...360]. |

## Возвращаемое значение

| Тип   | Описание                              |
|-------|---------------------------------------|
| Shape | Объект типа `Shape`, круг или сектор круга. |

## Пример
```javascript linenums="1"
let s1 = Geom.circle(100)
console.info(s1) // output:
let s2 = Geom.circle(100, 30)
console.info(s2) // output:
let s3 = Geom.circle(100, 0, 90)
console.info(s3) // output:
```

!!! info "См. также"

    []()

