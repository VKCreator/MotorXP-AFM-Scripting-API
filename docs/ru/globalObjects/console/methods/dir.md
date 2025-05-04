# console.dir()

## Описание
Метод `console.dir()` отображает список свойств и методов указанного JavaScript-объекта. Он особенно полезен для проверки структуры и содержимого объектов, так как форматирует вывод в виде списка, что облегчает исследование вложенных свойств.

## Синтаксис
``` javascript
console.dir(object: any) -> undefined
``` 
## Аргументы
| Аргумент | Тип      | Обязательный | Описание                                                                 |
|----------|----------|--------------|--------------------------------------------------------------------------|
| **`object`**   | `any` | :white_check_mark: Да         | JavaScript-объект. |

## Возвращаемое значение
**`undefined`**

## Пример
``` javascript linenums="1"
// Определение объекта
const obj = {
  name: 'MotorXP',
  version: 1.0,
  features: ['AFM Design', 'Electromagnetic Analysis', 'Optimization API'],
  details: {
    developer: 'MotorXP Team',
    license: 'Combo'
  }
};

// Вывод методов и свойств объекта
console.dir(obj)
``` 
``` javascript title="Output"
▶ Object
  name: "MotorXP"
  version: 1
  ▶ features: Array(3)
      0: "AFM Design"
      1: "Electromagnetic Analysis"
      2: "Optimization API"
  ▶ details: Object
      developer: "MotorXP Team"
      license: "Combo"
``` 