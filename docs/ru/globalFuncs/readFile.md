# readFile()

## Описание
Чтение из файла.

## Синтаксис
```javascript
readFile(path: string) : string
``` 

## Аргументы
| Аргумент | Тип      | Обязательный | Описание                                                                 |
|----------|----------|--------------|--------------------------------------------------------------------------|
| `path`   | `string` | ✅ Да         | Путь к файлу скрипта. Может быть абсолютным или относительным (относительно `<path_MotorXP-AFM>/bin/assets/scripts`). |

## Возвращаемое значение
**`string`**: содержимое файла.

## Пример
``` javascript linenums="1"
let content = readFile("c:/temp/sample.txt")
console.info(content)
``` 

!!! info "См. также"

    [writeFile()](writeFile.md)
