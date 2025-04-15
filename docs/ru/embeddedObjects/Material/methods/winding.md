# winding()

## Описание
Материал для обмотки

## Синтаксис
```javascript
winding(layer : number = Winding.LayerAuto, turn : number = 0, strand : number = 0) : MaterialWinding
``` 

## Аргументы
- `layer` (number, опционально): Номер слоя, одно из значений `Winding.LayerAuto` | `Winding.LayerSingle` | `Winding.LayerDouble`.
- `turn` (number, опционально): Номер витка.
- `strand` (number, опционально): Номер провода в витке.

## Возвращаемое значение
[`MaterialWinding`]()

## Пример
``` javascript linenums="1"
let m1 = Material.winding()
let m2 = Material.winding(Winding.LayerSingle, 1, 1)

``` 

!!! info "См. также"

    [](*.md)
	
	[](*.md)