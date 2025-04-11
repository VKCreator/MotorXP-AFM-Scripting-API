# Документация объектов

## Объект `Motor`

### Описание
Встроенный объект `Motor` представляет собой модель машины с различными параметрами.

### Свойства
- **`machineType`**: Тип машины. Возможные значения:
  - `Motor.SR` (0): stator - rotor
  - `Motor.SRS` (1): stator - rotor - stator
  - `Motor.SRSRS` (2): stator - rotor - stator - rotor - stator
  - `Motor.RSR` (3): rotor - stator - rotor
  - `Motor.RSRSR` (4): rotor - stator - rotor - stator - rotor

- **`objectName`**: (READONLY) Имя объекта.
- **`height`**: Высота машины.
- **`periodicity`**: Периодичность.
- **`periodicityAngleSpan`**: Угол, охватываемый периодичностью.
- **`boundaryConditionMode`**: Режим граничных условий.
- **`boundaryCondition`**: Граничные условия.
- **`simDomain`**: (READONLY) Возвращает объект `SimDomain`.
- **`simRadialOuterDomain`**: (READONLY)

### Методы
- **`stator()`**: Возвращает объект `Stator`.
- **`rotor()`**: Возвращает объект `Rotor`.
- **`winding()`**: Возвращает объект `Winding`.
- **`mesh()`**: Возвращает объект `Mesh`.

---

## Объект `Stator`

### Описание
Встроенный объект `Stator` представляет собой модель статора машины.

### Константы
- **`Stator.Yokeless`**: 0
- **`Stator.Yoke`**: 1

### Свойства
- **`objectName`**: (READONLY) Имя объекта.
- **`outerDiameter`**: Внешний диаметр.
- **`outerRadius`**: Внешний радиус.
- **`innerDiameter`**: Внутренний диаметр.
- **`innerRadius`**: Внутренний радиус.
- **`numberSlots`**: Количество пазов статора.
- **`slotAngleSpan`**: (READONLY) Угол, охватываемый пазом.
- **`typeMiddleItem`**: Тип среднего элемента (`Stator.Yokeless`, `Stator.Yoke`).
- **`ironMaterial`**: Материал железа.
- **`ironStacking`**: Направление укладки железа.
- **`windingMaterial`**: Материал обмотки.
- **`windingTemperature`**: Температура обмотки.
- **`script`**: Скрипт.
- **`nameScript`**: (READONLY) Имя скрипта.

### Методы
- **`countItem()`**: Возвращает количество элементов (1...3, зависит от `motor.machineType`).
- **`items()`**: Возвращает массив объектов `StatorItem`.
- **`item(itemID)`**: Возвращает объект `StatorItem` по ID.
- **`isLower(itemID)`**: Проверяет, является ли элемент нижним.
- **`isMiddle(itemID)`**: Проверяет, является ли элемент средним.
- **`isUpper(itemID)`**: Проверяет, является ли элемент верхним.
- **`itemAngularDisplacement(layoutIndex)`**: Возвращает угловое смещение элемента.
- **`setItemAngularDisplacement(layoutIndex, angle)`**: Устанавливает угловое смещение элемента.