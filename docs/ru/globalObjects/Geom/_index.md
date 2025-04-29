# Обзор объекта `Geom`
Встроенный объект `Geom` реализует геометрическое ядро.

## Основные возможности `Geom`
Представляет функции для создания графичесуких примитивов и операции с ними.

## Методы объекта `Geom`
Ниже приведен список доступных методов, предоставляемых объектом `Geom`. Щелкните имя метода, чтобы увидеть его подробное описание и примеры.

### Создание геометрических примитивов
- [^^point3()^^](methods/point3.md): Создание точки
- [^^vector3()^^](methods/vector3.md): Создание вектора
- [^^boundingBox()^^](methods/boundingBox.md): Создание ограничивающей коробки.

### 2D примитивы (плоские)
- [^^arc()^^](methods/arc.md): Дуга.
- [^^circle()^^](methods/circle.md): Круг или сектор круга
- [^^ring()^^](methods/ring.md): Кольцо.
- [^^ellipse()^^](methods/ellipse.md): Эллипс или сектор эллипса.
- [^^square()^^](methods/square.md): Квадрат.
- [^^rectangle()^^](methods/rectangle.md): Прямоугольник
- [^^ngon()^^](methods/ngon.md): Правильный N-угольник.
- [^^infplane()^^](methods/infplane.md): Плоскость

- [^^segment()^^](methods/segment.md): Отрезок.
- [^^bspline()^^](methods/bspline.md): Плавная линия, проходящая через все заданные точки.
- [^^polysegment()^^](methods/polysegment.md): Ломанная линия
- [^^polygon()^^](methods/polygon.md): Многоугольник

### 3D примитивы (объемные)
- [^^box()^^](methods/box.md): Параллелипипед.
- [^^collar()^^](methods/collar.md): Втулка.
- [^^cone()^^](methods/cone.md): Конус
- [^^cylinder()^^](methods/cylinder.md): Цилиндр.
- [^^sphere()^^](methods/sphere.md): Сфера.
- [^^torus()^^](methods/torus.md): Тор.

### Булевы операции
- [^^unite()^^](methods/unite.md): Объединение двух или более тел.
- [^^intersect()^^](methods/intersect.md): Пересечение двух или более тел.
- [^^diff()^^](methods/diff.md): Разность двух или более тел.
- [^^difference()^^](methods/difference.md): Разность двух или более тел.

### Геометрические операции
- [^^angle()^^](methods/angle.md): Получить угол точки.
- [^^angleX()^^](methods/angleX.md): Получить угол точки относительно центра координат [0,0,0] в плоскости YOZ.
- [^^angleY()^^](methods/angleY.md): Получить угол точки относительно центра координат [0,0,0] в плоскости XOZ.
- [^^angleZ()^^](methods/angleZ.md): Получить угол точки относительно центра координат [0,0,0] в плоскости XOY.

- [^^radius()^^](methods/radius.md): Радиус точки в 2D пространстве.
- [^^radiusX()^^](methods/radiusX.md): Радиус точки в плоскости YOZ.
- [^^radiusY()^^](methods/radiusY.md): Радиус точки в плоскости XOZ.
- [^^radiusZ()^^](methods/radiusZ.md): Радиус точки в плоскости XOY.

- [^^angleBetweenVectors()^^](methods/angleBetweenVectors.md): Угол между векторами.
- [^^pointAtSegment()^^](methods/pointAtSegment.md): Возвращает точку в параметризованной позиции сегмента.
- [^^distance()^^](methods/distance.md): Расчитывает расстояние между двумя точками. 

- [^^section()^^](methods/section.md): Создать сечение. 
- [^^unify()^^](methods/unify.md): Упрощение геометрического представления объекта.
- [^^fillet()^^](methods/fillet.md): Операция скругления тела
- [^^chamfer()^^](methods/chamfer.md): Операция снятия фаски.

### Создание детали
- [^^piece()^^](methods/piece.md): Создание детали


