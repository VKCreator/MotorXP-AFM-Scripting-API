# Обзор объекта Math
Встроенный объект `Math` дополняет стандартный объект <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math" target="_blank" rel="noopener noreferrer">`Math`</a> и предоставляет ряд полезных математических функций.

## Основные возможности
- Сравнение чисел с плавающей запятой с заданной точностью (`isEpsilon`, `isEqual`, `isLessEqual`, `isGreatEqual`).
- Преобразование полярных координат в декартовые координаты (`fromPolar`).
- Функции для работы с угловыми значениями (`rad`, `deg`, `normAngle`, `middleAngle`).

## Методы объекта Math
Ниже приведен список доступных методов, предоставляемых объектом `Math`. Щелкните имя метода, чтобы увидеть его подробное описание и примеры.

- [^^Math.deg()^^](methods/deg.md): Перевод радиан в градусы.
- [^^Math.rad()^^](methods/rad.md): Перевод градусов в радианы.
- [^^Math.fromPolar()^^](methods/fromPolar.md): Перевод координат точки из полярных координат `(radius, angle)` в декартовые координаты `(x, y)`.
- [^^Math.normAngle()^^](methods/normAngle.md): Нормализирует значение угла, возвращает значение в интервале (0°, 360°).
- [^^Math.middleAngle()^^](methods/middleAngle.md): Расчет среднего угла между углами a~1~ и a~2~ с учетом направления.
- [^^Math.isEpsilon()^^](methods/isEpsilon.md): Возвращает `true`, если абсолютное значение `arg` меньше или равно `eps`.
- [^^Math.isEqual()^^](methods/isEqual.md): Возвращает `true`, если разница абсолютных значений arg~1~ и arg~2~ меньше или равно `eps`.
- [^^Math.isLessEqual()^^](methods/isLessEqual.md): Возвращает `true`, если значение arg~1~ меньше или равно значению arg~2~ с учетом точности `eps`.
- [^^Math.isGreatEqual()^^](methods/isGreatEqual.md): Возвращает `true`, если значение arg~1~ больше или равно значению arg~2~ с учетом точности `eps`.

