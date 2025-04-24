# Material.magnetRadial()

## Описание
Материал для магнита с радиальным намагничиванием.

## Синтаксис
```javascript
Material.magnetRadial(direction: Magnetization.From, center: point = Qt.point(0, 0), segmentRadiuses: array of numbers = []) : MagnetRadialMaterial
``` 

## Аргументы
- **`angle`** (string, обязательно): Угол параллельного намагничивания
- **`segmentRadiuses`** (array of number, опционально):
- **`savePoleBorder`** (bool, опционально):

## Возвращаемое значение
[`MagnetRadialMaterial`](./../../../types/materials/MagnetRadialMaterial/_index.md)

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
