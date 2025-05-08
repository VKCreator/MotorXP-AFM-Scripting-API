# Material.magnetParallel()

## Описание
Материал для магнита с параллельным намагничиванием.

## Синтаксис
```javascript
Material.magnetParallel(angle: Number = 0, segmentRadiuses: Array<Number> = [], savePoleBorder: Boolean = true) -> MagnetParallelMaterial
``` 

## Аргументы

| Аргумент             | Тип                 | Значение по умолчанию | Обязательный | Описание                                                                 |
|----------------------|----------------------|------------------------|--------------|--------------------------------------------------------------------------|
| `angle`              | `#!javascript Number`               | `0`                      | ❌ Нет          | Угол параллельного намагничивания.                                       |
| `segmentRadiuses`    | `Array<Number>`     | `[]`                      | ❌ Нет        | Массив радиусов сегментов магнита.                                       |
| `savePoleBorder`     | `#!javascript Boolean`              | `true`                | ❌ Нет        | Если `true` — сохраняется граница между магнитами соседних полюсов.      |

## Возвращаемое значение

| Тип                                                  | Описание                                      |
|-------------------------------------------------------|-----------------------------------------------|
| [`MagnetParallelMaterial`](./../../../types/materials/MagnetParallelMaterial/index.md) | Объект типа `MagnetParallelMaterial`. |

## Пример
``` javascript linenums="1"
let m = Material.magnetParallel()
console.info(m) // output: Magnet, Parallel 0°, 1 segment(s)
``` 

!!! info "См. также"


    [^^Material.empty()^^](empty.md)

    [^^Material.general()^^](general.md)

    [^^Material.iron()^^](iron.md)

    [^^Material.winding()^^](winding.md)

    [^^Material.endturn()^^](endturn.md)

    [^^Material.conductor()^^](conductor.md)

    [^^Material.magnetRadial()^^](magnetRadial.md)
    
    [^^Material.custom()^^](custom.md)
