# writeFile()

## Описание
Запись в файл.

## Синтаксис
```javascript
writeFile(path : String, content : String, append : Boolean = true) -> Boolean
``` 

## Аргументы
- **`path`** (String, обязательно): путь к файлу, может быть **абсолютным** или **относительным**, который указывает положение относительно **`<path_MotorXP-AFM>/bin/assets/scripts`**.
- **`content`** (String, обязательно): содержимое файла.
- **`append`** (boolean, опционально, по умолчанию = **`true`**): равно **`true`** – добавить в файл, иначе перед записью файл усекается.

## Возвращаемое значение
**`Boolean`**: равно **`true`** – успешная запись, иначе равно **`false`**, если при записи возникли ошибки. Ошибки выводятся в консоль.

## Пример
``` javascript linenums="1"
let sampleText = "Sample text"
let result = writeFile("c:/temp/sample.txt", sampleText)
console.info(result)
``` 

!!! info "См. также"

    [readFile()](readFile.md)
