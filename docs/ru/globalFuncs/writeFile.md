# writeFile()

## Описание
Запись в файл.

## Синтаксис
```javascript
writeFile(path : string, content : string, append : bool = true) : bool
``` 
## Аргументы
- `path` (строка, обязательно): Путь к файлу, может быть абсолютным или относительным, который указывает положение относительно `<path_MotorXP-AFM>/bin/assets/scripts`.
- `content` (строка, обязательно): Содержимое файла.
- `append` (строка, опционально): Равно `true` – добавить в файл, иначе перед записью файл усекается.

## Возвращаемое значение
`bool`: Равно `true` – успешная запись, иначе равно `false`, при записи возникли ошибки, которые выводятся в консоль.

## Пример
``` javascript linenums="1"
let sampleText = "Sample text"
let result = writeFile("c:/temp/sample.txt", sampleText)
console.info(result)
``` 

!!! info "См. также"

    [readFile()](readFile.md)
