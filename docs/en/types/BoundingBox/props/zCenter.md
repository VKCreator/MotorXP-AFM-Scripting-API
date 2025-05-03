# zCenter

## Описание
Середина по оси Z.

## Тип значения свойства:
`Number`

## Доступ
`Только Чтение`

## Синтаксис
``` javascript
zCenter
```
## Пример
``` javascript linenums="1"
let cyl = Geom.cylinder(100, 50)
let bbox = cyl.boundBox()
let cz = bbox.zCenter
console.info(cz) // output:
```
!!! info "См. также"

- [xMin](./xMin.md)

- [xMax](./xMax.md)

- [xSize](./xSize.md)

- [xCenter](./xCenter.md)

- [yMin](./yMin.md)

- [yMax](./yMax.md)

- [ySize](./ySize.md)

- [yCenter](./yCenter.md)

- [zMin](./zMin.md)

- [zMax](./zMax.md)

- [zSize](./zSize.md)
