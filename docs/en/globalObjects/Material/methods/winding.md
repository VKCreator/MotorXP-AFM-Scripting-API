# Material.winding()

## Описание
Материал для обмотки.

## Синтаксис
```javascript
Material.winding(layer : Number = Winding.LayerAuto, turn : Number = 0, strand : Number = 0) -> WindingMaterial
``` 

## Аргументы
- **`layer`** (Number, опционально): Номер слоя, одно из значений `Winding.LayerAuto` | `Winding.LayerSingle` | `Winding.LayerDouble`.
- **`turn`** (Number, опционально): Номер витка.
- **`strand`** (Number, опционально): Номер провода в витке.

## Возвращаемое значение
[`WindingMaterial`](./../../../types/materials/WindingMaterial/index.md)

## Пример
``` javascript linenums="1"
let m1 = Material.winding()
console.info(m1) // output: Winding, layer None
let m2 = Material.winding(Winding.SingleLayer, 1, 1)
console.info(m2) // output: Winding, layer 1, turn 1, strand 1
``` 

!!! info "См. также"

    [^^Material.empty()^^](empty.md)

    [^^Material.general()^^](general.md)

    [^^Material.iron()^^](iron.md)

    [^^Material.endturn()^^](endturn.md)

    [^^Material.conductor()^^](conductor.md)

    [^^Material.magnetParallel()^^](magnetParallel.md)

    [^^Material.magnetRadial()^^](magnetRadial.md)
    
    [^^Material.custom()^^](custom.md)
