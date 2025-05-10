# Material.custom()

## Описание
Пользовательский материал с заданным цветом.

## Синтаксис
```javascript
Material.custom(color: Qt.color = Qt.red) -> CustomMaterial
``` 

## Аргументы

## Аргументы

| Аргумент      | Тип             | Значение по умолчанию | Обязательный | Описание              |
|---------------|------------------|------------------------|--------------|------------------------|
| `color`       | [Qt.color]()     | `Qt.red`  | ❌ Нет        | Цвет материала.        |        |

## Возвращаемое значение

| Тип                              | Описание                                      |
|----------------------------------|-----------------------------------------------|
| [`CustomMaterial`](./../../../types/materials/CustomMaterial/index.md) | Объект типа `CustomMaterial`. |

## Пример
``` javascript linenums="1"
let m1 = Material.custom()
console.info(m1) // output: Custom, color #ff0000

let m2 = Material.custom(Qt.green)
console.info(m2) // output: Custom, color #00ff00
``` 

!!! info "См. также"

    [^^Material.empty()^^](empty.md)

    [^^Material.general()^^](general.md)

    [^^Material.iron()^^](iron.md)

    [^^Material.winding()^^](winding.md)

    [^^Material.endturn()^^](endturn.md)

    [^^Material.conductor()^^](conductor.md)

    [^^Material.magnetParallel()^^](magnetParallel.md)

    [^^Material.magnetRadial()^^](magnetRadial.md)
