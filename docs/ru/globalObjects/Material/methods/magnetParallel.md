# Material.magnetParallel()

## Описание
Материал для магнита с параллельным намагничиванием.

## Синтаксис
```javascript
Material.magnetParallel(angle: number = 0, segmentRadiuses: array of number = [], savePoleBorder: bool = true) : MagnetParallelMaterial
``` 

## Аргументы
- **`angle`** (string, обязательно): Угол параллельного намагничивания
- **`segmentRadiuses`** (array of number, опционально): массив радиусов сегментов магнита
- **`savePoleBorder`** (bool, опционально): =true - сохраняем границу между магнитами двух соседних полюсов, если =false - магнит сливается с магнитом соседнего полюса.

## Возвращаемое значение
[`MagnetParallelMaterial`](./../../../types/materials/MagnetParallelMaterial/_index.md)

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
