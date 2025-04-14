# readFile()

## Описание
Чтение из файла

## Возвращаемое значение
string - содержимое файла

## Синтаксис
```javascript
readile(path : string ) : string;
``` 

## Параметры
- `path` (строка, обязательно): Путь к файлу, может быть абсолютным или относительным, который указывает положение относительно <path_MotorXP-AFM>/bin/assets/scripts>.

## Пример
``` javascript linenums="1"
let result = readFile("c:/temp/sample.txt")
console.info(result);
``` 

!!! info "См. также"

    [writeFile()](writeFile.md)
