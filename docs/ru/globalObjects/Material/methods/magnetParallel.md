# magnetParallel()

## Описание
Материал для магнита с параллельным намагничиванием.

## Синтаксис
```javascript
Material.magnetParallel(angle: number = 0, segmentRadiuses: array of number = [], savePoleBorder: bool = true) : MagnetParallelMaterial
``` 

## Возвращаемое значение
[`MagnetParallelMaterial`](./../../../types/materials/MagnetParallelMaterial/_index.md)

## Пример
``` javascript linenums="1"
let m = Material.magnetParallel()
console.info(m) // output: Magnet, Parallel 0°, 1 segment(s)
``` 

!!! info "См. также"

    [Material.magnetRadial()](magnetRadial.md)
