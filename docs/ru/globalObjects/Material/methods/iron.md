# Material.iron()

## Описание
Материал для железа.

## Синтаксис
```javascript
Material.iron(fillCoefs: array of number = [], dsomaloy: number = 0) : IronMaterial
``` 

## Аргументы
- **`fillCoefs`** (array of number, опционально): Material filling coefficient
- **`dsomaloy`** (number, опционально): Smallest cross section of component [m] for Somaloy material
    
## Возвращаемое значение
[`IronMaterial`](./../../../types/Materials/IronMaterial/_index.md)

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
