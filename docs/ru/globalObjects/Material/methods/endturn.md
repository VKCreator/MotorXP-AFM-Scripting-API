# Material.endturn()

## Описание
Материал для лобовых частей обмоток (Endturns).

## Синтаксис
```javascript
Material.endturn() : EndturnMaterial
``` 

## Аргументы
    Отсутствуют
    
## Возвращаемое значение
[`EndturnMaterial`](./../../../types/materials/EndturnMaterial/index.md)

## Пример
``` javascript linenums="1"
let m = Material.endturn()
console.info(m) // output: EndTurn
``` 

!!! info "См. также"

    [^^Material.empty()^^](empty.md)

    [^^Material.general()^^](general.md)

    [^^Material.iron()^^](iron.md)

    [^^Material.winding()^^](winding.md)

    [^^Material.conductor()^^](conductor.md)

    [^^Material.magnetParallel()^^](magnetParallel.md)

    [^^Material.magnetRadial()^^](magnetRadial.md)
    
    [^^Material.custom()^^](custom.md)
