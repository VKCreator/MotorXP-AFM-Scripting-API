# writeFile()

## Описание
Запись в файл

## Возвращаемое значение
bool : равно true - успешная запись, иначе равно false, при записи возникли ошибки, которые выводятся в консоль

## Синтаксис
```javascript
writeFile(path : string, content : string, append : bool = true) : bool;
``` 
## Параметры
- `path` (строка, обязательно): Путь к файлу, может быть абсолютным или относительным, который указывает положение относительно <path_MotorXP-AFM>/bin/assets/scripts>.
- `content` Содержимое файлаю
- `append` Равно true - добавить в файл, иначе перед записью файл усекается.

## Пример
``` javascript linenums="1"
let sampleText = "Sample text"
let result = writeFile("c:/temp/sample.txt", sampleText)
console.info(result)
``` 

!!! info "См. также"

    [readFile()](readFile.md)
