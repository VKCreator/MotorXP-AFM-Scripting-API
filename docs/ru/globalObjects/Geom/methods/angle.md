# angle()

## Описание
Получить угол точки.

## Синтаксис
```javascript
Geom.angle(x: number, y: number) : number
```

## Аргументы
- `argument` (type, обязательно): описание аргумента.

## Возвращаемое значение
`number`: угол точки в градусах относительно центра координат [0,0] (ноль - на три часа, увеличение по часовой).

## Пример
```javascript linenums="1"
let result = Geom.angle(100, 100)
console.info(result) // output: 45
```

!!! info "См. также"

    []()

