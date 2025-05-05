# Material.iron()

## Описание
Материал для железа.

## Синтаксис
```javascript
Material.iron(fillCoefs: Array[Number] = [], dsomaloy: Number = 0) -> IronMaterial
``` 

## Аргументы

| Аргумент      | Тип                 | Значение по умолчанию | Обязательный | Описание                                                  |
|---------------|----------------------|------------------------|--------------|-----------------------------------------------------------|
| `fillCoefs`   | `Array[Number]`     | `[]`                      | ❌ Нет        | Коэффициент заполнения материала.                         |
| `dsomaloy`    | `Number`              | `0`                      | ❌ Нет        | Наименьшее поперечное сечение компонента [м] для материала Somaloy. |

## Возвращаемое значение

| Тип                                      | Описание                                  |
|------------------------------------------|-------------------------------------------|
| [`IronMaterial`](./../../../types/Materials/IronMaterial/index.md) | Объект типа `IronMaterial`. |

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
