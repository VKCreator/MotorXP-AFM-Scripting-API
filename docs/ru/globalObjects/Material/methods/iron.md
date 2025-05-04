# Material.iron()

## Описание
Материал для железа.

## Синтаксис
```javascript
Material.iron(fillCoefs: array of Number = [], dsomaloy: Number = 0) -> IronMaterial
``` 

## Аргументы
- **`fillCoefs`** (array of Number, опционально): Material filling coefficient
- **`dsomaloy`** (Number, опционально): Smallest cross section of component [m] for Somaloy material
    
## Возвращаемое значение
[`IronMaterial`](./../../../types/materials/IronMaterial/index.md)

## Пример
``` javascript linenums="1"
let m = Material.iron()
console.info(m) // output: Iron
``` 

!!! info "См. также"

    [^^Material.empty()^^](empty.md)

    [^^Material.general()^^](general.md)

    [^^Material.winding()^^](winding.md)

    [^^Material.endturn()^^](endturn.md)

    [^^Material.conductor()^^](conductor.md)

    [^^Material.magnetParallel()^^](magnetParallel.md)

    [^^Material.magnetRadial()^^](magnetRadial.md)
    
    [^^Material.custom()^^](custom.md)
