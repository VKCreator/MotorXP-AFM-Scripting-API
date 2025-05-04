# Material.magnetParallel()

## Описание
Материал для магнита с параллельным намагничиванием.

## Синтаксис
```javascript
Material.magnetParallel(angle: Number = 0, segmentRadiuses: array of Number = [], savePoleBorder: Boolean = true) -> MagnetParallelMaterial
``` 

## Аргументы
- **`angle`** (String, обязательно): Угол параллельного намагничивания
- **`segmentRadiuses`** (array of Number, опционально): массив радиусов сегментов магнита
- **`savePoleBorder`** (Boolean, опционально): =true - сохраняем границу между магнитами двух соседних полюсов, если =false - магнит сливается с магнитом соседнего полюса.

## Возвращаемое значение
[`MagnetParallelMaterial`](./../../../types/materials/MagnetParallelMaterial/index.md)

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
