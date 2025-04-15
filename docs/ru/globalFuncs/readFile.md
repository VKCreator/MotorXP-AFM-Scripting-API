# readFile()

## Описание
Чтение из файла.

## Синтаксис
```javascript
readFile(path : string) : string
``` 

## Аргументы
- **`path`** (string, обязательно): путь к файлу, может быть **абсолютным** или **относительным**, который указывает положение относительно **`<path_MotorXP-AFM>/bin/assets/scripts`**.

## Возвращаемое значение
**`string`**: содержимое файла.

## Пример
``` javascript linenums="1"
let content = readFile("c:/temp/sample.txt")
console.info(content)
``` 

!!! info "См. также"

    [writeFile()](writeFile.md)
