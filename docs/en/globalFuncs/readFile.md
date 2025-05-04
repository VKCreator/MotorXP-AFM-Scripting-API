# readFile()

## Описание
Чтение из файла.

## Синтаксис
```javascript
readFile(path : String) -> String
``` 

## Аргументы
- **`path`** (String, обязательно): путь к файлу, может быть **абсолютным** или **относительным**, который указывает положение относительно **`<path_MotorXP-AFM>/bin/assets/scripts`**.

## Возвращаемое значение
**`String`**: содержимое файла.

## Пример
``` javascript linenums="1"
let content = readFile("c:/temp/sample.txt")
console.info(content)
``` 

!!! info "См. также"

    [writeFile()](writeFile.md)
