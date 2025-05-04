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

## Общая структура объекта `Math`
``` mermaid
    graph LR
        Parent[JS-Math] --> A[Math]
        
        A[Math] --> B[Сравнение чисел]
        A --> C[Преобразование координат]
        A --> D[Работа с углами]
 

        B --> B1["isEpsilon()"]
        B --> B2["isEqual()"]
        B --> B3["isLessEqual()"]
        B --> B4["isGreatEqual()"]

        C --> C1["fromPolar()"]

        D --> D1["rad()"]
        D --> D2["deg()"]
        D --> D3["normAngle()"]
        D --> D4["middleAngle()"]

        %% === Стили === %%
        classDef math fill:#f0f8ff,stroke:#3366cc,stroke-width:2px;
        classDef compare fill:#fff5e6,stroke:#cc6600,stroke-width:2px;
        classDef coords fill:#e6ffe6,stroke:#009933,stroke-width:2px;
        classDef angles fill:#ffe6e6,stroke:#cc0052,stroke-width:2px;
        %%classDef func fill:#ffffff,stroke:#aaaaaa,stroke-width:1px;

        %%=== Применяем стили к узлам === %%
        class Parent,A math
        class B compare
        class C coords
        class D angles
        %%class B1,B2,B3,B4,C1,D1,D2,D3,D4 func
```
