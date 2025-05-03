#  Обзор объекта `Math`
Встроенный объект `Math` является расширением стандартного объекта JavaScript <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math" target="_blank" rel="noopener noreferrer">`Math`</a> и предоставляет ряд полезных математических функций.

## Основные возможности `Math`
- Сравнение чисел с плавающей запятой с заданной точностью (`isEpsilon`, `isEqual`, `isLessEqual`, `isGreatEqual`).
- Преобразование полярных координат в декартовые координаты (`fromPolar`).
- Функции для работы с угловыми значениями (`rad`, `deg`, `normAngle`, `middleAngle`).

## Константы `Math`
- [^^Math.EPSILON^^](constants/EPSILON.md): Минимальное положительное число, такое что 1 + `Math.EPSILON`= 1 при работе с числами с плавающей точкой.

## Методы `Math`
{%
    include-markdown "./methods/_index.md"
    start="<!--start-->"
    end="<!--end-->"
%}


