# Material.magnetRadial()

## Описание
Материал для магнита с радиальным намагничиванием.

## Синтаксис
```javascript
Material.magnetRadial(direction: Number = Magnetization.From, center: Point = Qt.point(0, 0), segmentRadiuses: Array[Number] = []) -> MagnetRadialMaterial
``` 

## Аргументы

| Аргумент          | Тип               | Значение по умолчанию | Обязательный | Описание                                  |
|-------------------|--------------------|------------------------|--------------|-------------------------------------------|
| `direction`       | `#!javascript Number`             | `Magnetization.From`                      | ❌ Нет         | Направление магнетизации.                 |
| `center`          | `QPointF`            | `Qt.point(0, 0)`                      | ❌ Нет        | Центр магнетизации.                       |
| `segmentRadiuses` | `Array[Number]`   | `[]`                      | ❌ Нет        | Массив радиусов сегментов магнита.        |

## Возвращаемое значение

| Тип                                                | Описание                                      |
|----------------------------------------------------|-----------------------------------------------|
| [`MagnetRadialMaterial`](./../../../types/materials/MagnetRadialMaterial/index.md) | Объект типа `MagnetRadialMaterial`. |

## Пример
``` javascript linenums="1"
let m = Material.magnetRadial();
console.info(m) // output: Magnet, Radial From center (0, 0), 1 segment(s)
``` 

!!! info "См. также"

    [Magnetization](./../../../constants/Magnetization.md)


    [^^Material.empty()^^](empty.md)

    [^^Material.general()^^](general.md)

    [^^Material.iron()^^](iron.md)

    [^^Material.winding()^^](winding.md)

    [^^Material.endturn()^^](endturn.md)

    [^^Material.conductor()^^](conductor.md)

    [^^Material.magnetParallel()^^](magnetParallel.md)

    [^^Material.custom()^^](custom.md)
