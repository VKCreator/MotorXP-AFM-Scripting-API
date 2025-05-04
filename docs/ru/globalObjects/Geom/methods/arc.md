# Geom.arc()

## Описание
2D дуга, строится в плоскости XOY, углы задаются в градусах, центр фигуры в точке [0,0,0].

## Синтаксис
```javascript
Geom.arc(radius: Number, angle: Number) -> Shape
Geom.arc(radius: Number, angle1: Number, angle2: Number) -> Shape
Geom.arc(p1: Point3, p2: Point3, p3: Point3) -> Shape
```

## Аргументы

| Аргумент   | Тип                  | Обязательный | Описание                                                |
|------------|----------------------|--------------|---------------------------------------------------------|
| `radius`   | `Number`               | :white_check_mark: Да          | Радиус дуги.                                            |
| `angle`    | `Number`               | :white_check_mark: Да          | Угол дуги в градусах в диапазоне [0...360], начальный угол равен 0. |
| `angle1`   | `Number`              | :white_check_mark: Да          | Начальный угол дуги в градусах в диапазоне [0...360].   |
| `angle2`   | `Number`               | :white_check_mark: Да          | Конечный угол дуги в градусах в диапазоне [0...360].    |
| `p1, p2, p3` | `Point3`              | :white_check_mark: Да          | Дуга, проходящая через три точки.                      |

## Возвращаемое значение

| Тип   | Описание                          |
|-------|-----------------------------------|
| `Shape` | Объект типа Shape, дуга.          |

## Пример
```javascript linenums="1"
let s1 = Geom.arc(100, 30)
console.info(s1) // output:
let s2 = Geom.arc(100, 30, 60)
console.info(s2) // output:
let s3 = Geom.arc(Geom.point3(0,0,0), Geom.point3(10,10,10), Geom.point3(20,20,20))
console.info(s3) // output:
```

!!! info "См. также"

    [Point3]()

    [Shape]()


