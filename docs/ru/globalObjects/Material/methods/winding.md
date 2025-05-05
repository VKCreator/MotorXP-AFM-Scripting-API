# Material.winding()

## Описание
Материал для обмотки.

## Синтаксис
```javascript
Material.winding(layer: Number = Winding.LayerAuto, turn: Number = 0, strand: Number = 0) -> WindingMaterial
``` 

## Аргументы

| Аргумент   | Тип    | Значение по умолчанию | Обязательный | Описание                                                                 |
|-----------|--------|------------------------|--------------|--------------------------------------------------------------------------|
| `layer`   | `Number` | `Winding.LayerAuto`                      | ❌ Нет        | Номер слоя. Может быть: `Winding.LayerAuto`, `Winding.LayerSingle`, `Winding.LayerDouble`. |
| `turn`    | `Number` | `0`                      | ❌ Нет        | Номер витка.                                                            |
| `strand`  | `Number` | `0`                      | ❌ Нет        | Номер провода в витке.                                                  |

## Возвращаемое значение

| Тип                                      | Описание                                  |
|------------------------------------------|-------------------------------------------|
| [`WindingMaterial`](./../../../types/Materials/WindingMaterial/index.md) | Объект типа `WindingMaterial`. |

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

    [^^Winding^^](../../../types/Winding/index.md)
