# fromPolar()

## Описание
Перевод координат точки из полярных координат `(radius, angle)` в декартовые координаты `(x, y)`.

## Синтаксис
```javascript
fromPolar(radius : number, angle : number) : Point
``` 

## Аргументы
- `radius` (number, обязательно): радиус.
- `angle` (number, обязательно): угол в градусах.

## Возвращаемое значение
- `Point`: точка в декартовых координатах.

## Пример
``` javascript linenums="1"
let p = Math.fromPolar(100, 90)
console.info(p)
```
