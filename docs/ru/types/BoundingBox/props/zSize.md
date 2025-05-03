# zSize

## Описание
Размер по оси Z.

## Тип значения свойства:
`Number`

## Доступ
`Только Чтение`

## Синтаксис
``` javascript
zSize
```
## Пример
``` javascript linenums="1"
let cyl = Geom.cylinder(100, 50)
let bbox = cyl.boundBox()
let sz = bbox.zSize
console.info(sz) // output:
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

- [zCenter](./zCenter.md)
