# writeFile()

## Описание
Функция **`writeFile()`** предназначена для записи в файл.

## Синтаксис
```javascript
writeFile(path: String, content: String, append: Boolean = true) -> Boolean
``` 

## Аргументы
| Аргумент  | Тип      | Значение по умолчанию | Обязательный | Описание                                                                 |
|-----------|----------|-----------------------|--------------|--------------------------------------------------------------------------|
| `path`    | `#!javascript String` | —                     | :white_check_mark: Да         | Путь к файлу. Может быть абсолютным или относительным (относительно `<path_MotorXP-AFM>/bin/assets/scripts`). |
| `content` | `#!javascript String` | —                     | :white_check_mark: Да         | Содержимое, которое будет записано в файл.                               |
| `append`  | `#!javascript Boolean`| `true`                | ❌ Нет        | Если `true` — данные добавляются в конец файла. Если `false` — файл очищается перед записью. |

## Возвращаемое значение
| Тип      | Описание                                                                 |
|----------|--------------------------------------------------------------------------|
| **`#!javascript Boolean`**  | Равно `true`, если запись прошла успешно. В случае ошибки — возвращается `false`, а сообщение об ошибке выводится в консоль. |

## Пример
``` javascript linenums="1"
let sampleText = "Sample text"
let result = writeFile("c:/temp/sample.txt", sampleText)
console.info(result)
``` 

!!! info "См. также"

    [readFile()](readFile.md)
