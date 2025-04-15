# writeFile()

## Описание
Запись в файл.

## Синтаксис
```javascript
writeFile(path : string, content : string, append : bool = true) : bool
``` 

## Аргументы
- **`path`** (string, обязательно): путь к файлу, может быть **абсолютным** или **относительным**, который указывает положение относительно **`<path_MotorXP-AFM>/bin/assets/scripts`**.
- **`content`** (string, обязательно): содержимое файла.
- **`append`** (boolean, опционально, по умолчанию = **`true`**): равно **`true`** – добавить в файл, иначе перед записью файл усекается.

## Возвращаемое значение
**`bool`**: равно **`true`** – успешная запись, иначе равно **`false`**, если при записи возникли ошибки. Ошибки выводятся в консоль.

## Пример
``` javascript linenums="1"
let sampleText = "Sample text"
let result = writeFile("c:/temp/sample.txt", sampleText)
console.info(result)
``` 

!!! info "См. также"

    [readFile()](readFile.md)
