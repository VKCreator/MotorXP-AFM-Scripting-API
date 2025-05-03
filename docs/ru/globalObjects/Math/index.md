#  Обзор объекта `Math`
Встроенный объект `Math` является расширением стандартного объекта <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math" target="_blank" rel="noopener noreferrer">`Math`</a> языка программирования `JavaScript` и предоставляет ряд полезных математических функций.

## Основные возможности `Math`
- Сравнение чисел с плавающей запятой с заданной точностью (`isEpsilon`, `isEqual`, `isLessEqual`, `isGreatEqual`).
- Преобразование полярных координат в декартовые координаты (`fromPolar`).
- Функции для работы с угловыми значениями (`rad`, `deg`, `normAngle`, `middleAngle`).
  
!!! tip "Совет"

    Используйте функции cравнения чисел с плавающей запятой вместо прямого сравнения `==`, чтобы избежать проблем с точностью.

{%
    include-markdown "./constants/index.md"
    heading-offset=1
%}


{%
    include-markdown "./methods/index.md"
    heading-offset=1
%}


