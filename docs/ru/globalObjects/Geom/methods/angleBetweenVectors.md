# Geom.angleBetweenVectors()

## Описание
Угол между векторами.

## Синтаксис
```javascript
Geom.angleBetweenVectors(v1: Vector3, v2: Vector3) ->  Number
```

## Аргументы

| Аргумент | Тип      | Обязательный | Описание        |
|---------|----------|--------------|-----------------|
| `v1`    | [`Vector3`]()  | :white_check_mark: Да          | Вектор 1.        |
| `v2`    | [`Vector3`]()  | :white_check_mark: Да          | Вектор 2.        |

## Возвращаемое значение

| Тип     | Описание                                  |
|---------|-------------------------------------------|
| `Number`  | Угол между векторами в градусах.           |

## Пример
```javascript linenums="1"
let v1 = Geom.vector3(10,10,10)
let v2 = Geom.vector3(30,30,30)
let angle = Geom.angleBetweenVectors(v1, v2)

console.info(angle) // output:
```

!!! info "См. также"

    []()

