# Geom.vector3()

## Описание
Создание вектора в 3D-пространстве, задает направление и длину.

## Синтаксис
```javascript
Geom.vector3(x: Number, y: Number, z: Number) -> Vector3
Geom.vector3(p: Point3) -> Vector3
Geom.vector3(p1: Point3, p2: Point3) -> Vector3
```

## Аргументы

| Аргумент | Тип                  | Значение по умолчанию | Обязательный        | Описание                          |
|----------|-----------------------|----------------------|---------------------|-----------------------------------|
| `x`      | `#!javascript Number` | —                    | :white_check_mark: Да | x-координата точки               |
| `y`      | `#!javascript Number` | —                    | :white_check_mark: Да | y-координата точки               |
| `z`      | `#!javascript Number` | —                    | :white_check_mark: Да | z-координата точки               |
| `p`      | `Point3`             | —                    | :white_check_mark: Да | Точка, задающая начало вектора   |
| `p1`     | `Point3`             | —                    | :white_check_mark: Да | Начальная точка вектора          |
| `p2`     | `Point3`             | —                    | :white_check_mark: Да | Конечная точка вектора           |


!!! info "См. также"

    Вектор может быть создан либо из координат `[x,y,z]`, либо из одной точки `p`, либо из двух точек `p1` и `p2`.

## Возвращаемое значение

| Тип                  | Описание                                      |
|----------------------|-----------------------------------------------|
| `Vector3`            | Объект типа `Vector3`, трёхмерный вектор.     |


## Пример
```javascript linenums="1"
let v1 = Geom.vector3(10,10,10)
console.info(v1) // output:
let v2 = Geom.vector3(Geom.point3(10,10,10))
console.info(v2) // output:
let v3 = Geom.vector3(Geom.point3(20,20,20), Geom.point3(10,10,10))
console.info(v3) // output:
```

!!! info "См. также"

    []()

