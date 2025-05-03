# Geom.vector3()

## Описание
Создание вектора в 3D пространстве, задает направление и длину.

## Синтаксис
```javascript
Geom.vector3(x: number, y: number, z: number) : Vector3
Geom.vector3(p: Point3) : Vector3
Geom.vector3(p1: Point3, p2: Point3) : Vector3
```

## Аргументы
- `x` (number, обязательно): x координата точки.
- `y` (number, обязательно): y координата точки.
- `z` (number, обязательно): z координата точки.
- `p` (Point3, обязательно): Точка.
- `p1` (Point3, обязательно): Начальная точка.
- `p2` (Point3, обязательно): Конечная точка.

## Возвращаемое значение
`Vector`: объект тира `Vector3`.

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

