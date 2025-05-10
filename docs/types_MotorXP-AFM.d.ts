/**
 * Airgap — набор констант
 */
declare const Airgap: {
    /**
     * Пустой зазор (0)
     */
    Empty: 0;
    /**
     * Идентификатор зазора 1 (1)
     */
    ID1: 1;
    /**
     * Идентификатор зазора 2 (2)
     */
    ID2: 2;
    /**
     * Идентификатор зазора 3 (3)
     */
    ID3: 3;
    /**
     * Идентификатор зазора 4 (4)
     */
    ID4: 4;
};

/**
 * Coil — набор констант
 */
declare const Coil: {
    /**
     * Намотка по часовой стрелке (-1)
     */
    CW: -1;
    /**
     * Намотка против часовой стрелки (1)
     */
    CCW: 1;
    /**
     * Incoming (входящий) (1)
     */
    Incoming: 1;
    /**
     * Outcoming (исходящий) (-1)
     */
    Outcoming: -1;
};

/**
 * Qt — набор констант
 */
declare const Qt: {
    /**
     * Черный ("black")
     */
    black: "black";
    /**
     * Белый ("white")
     */
    white: "white";
    /**
     * Темно-серый ("darkGray")
     */
    darkGray: "darkGray";
    /**
     * Серый ("gray")
     */
    gray: "gray";
    /**
     * Светло-серый ("lightGray")
     */
    lightGray: "lightGray";
    /**
     * Красный ("red")
     */
    red: "red";
    /**
     * Зеленый ("green")
     */
    green: "green";
    /**
     * Синий ("blue")
     */
    blue: "blue";
    /**
     * Голубой ("cyan")
     */
    cyan: "cyan";
    /**
     * Пурпурный ("magenta")
     */
    magenta: "magenta";
    /**
     * Желтый ("yellow")
     */
    yellow: "yellow";
    /**
     * Темно-красный ("darkRed")
     */
    darkRed: "darkRed";
    /**
     * Темно-зеленый ("darkGreen")
     */
    darkGreen: "darkGreen";
    /**
     * Темно-синий ("darkBlue")
     */
    darkBlue: "darkBlue";
    /**
     * Темно-голубой ("darkCyan")
     */
    darkCyan: "darkCyan";
    /**
     * Темно-пурпурный ("darkMagenta")
     */
    darkMagenta: "darkMagenta";
    /**
     * Темно-желтый ("darkYellow")
     */
    darkYellow: "darkYellow";
};

/**
 * Direction — набор констант
 */
declare const Direction: {
    /**
     * Направление по часовой стрелке (-1)
     */
    CW: -1;
    /**
     * Направление против часовой стрелки (1)
     */
    CCW: 1;
};

/**
 * Magnetization — набор констант
 */
declare const Magnetization: {
    /**
     * Направление "от" объекта (1)
     */
    From: 1;
    /**
     * Направление "к" объекту (2)
     */
    Toward: 2;
    /**
     * По часовой стрелке (3)
     */
    CW: 3;
    /**
     * Против часовой стрелки (4)
     */
    CCW: 4;
};

/**
 * Math — набор констант
 */
interface Math {
    /**
     * Минимальное положительное число, такое что 1 + Math.EPSILON= 1 при работе с числами с плавающей точкой (1e-7)
     */
    EPSILON: 1e-7;
};

/**
 * Motor — набор констант
 */
declare const Motor: {
    /**
     * Тип мотора: Статор-Ротор (0)
     */
    SR: 0;
    /**
     * Тип мотора: Статор-Ротор-Статор (1)
     */
    SRS: 1;
    /**
     * Тип мотора: Статор-Ротор-Статор-Ротор-Статор (2)
     */
    SRSRS: 2;
    /**
     * Тип мотора: Ротор-Статор-Ротор (3)
     */
    RSR: 3;
    /**
     * Тип мотора: Ротор-Статор-Ротор-Статор-Ротор (4)
     */
    RSRSR: 4;
};

/**
 * PoleArrangement — набор констант
 */
declare const PoleArrangement: {
    /**
     * NN (0)
     */
    NN: 0;
    /**
     * NS (1)
     */
    NS: 1;
    /**
     * NSNS (2)
     */
    NSNS: 2;
    /**
     * NSSN (3)
     */
    NSSN: 3;
    /**
     * NNSS (4)
     */
    NNSS: 4;
    /**
     * NNNN (5)
     */
    NNNN: 5;
};

/**
 * Rotor — набор констант
 */
declare const Rotor: {
    /**
     * Средняя часть ротора с ярмом (1)
     */
    MiddleYoke: 1;
    /**
     * Средняя часть ротора без ярма (2)
     */
    MiddleYokeless: 2;
    /**
     * Средняя часть ротора с ярмом (устаревшее) (1)
     */
    Yoke: 1;
    /**
     * Средняя часть ротора без ярма (устаревшее) (2)
     */
    Yokeless: 2;
};

/**
 * RotorItem — набор констант
 */
declare const RotorItem: {
    /**
     * Идентификатор элемента ротора (1)
     */
    ID1: 1;
    /**
     * Идентификатор элемента ротора (2)
     */
    ID2: 2;
    /**
     * Идентификатор элемента ротора (3)
     */
    ID3: 3;
    /**
     * Нижний слой элемента ротора (1)
     */
    Lower: 1;
    /**
     * Верхний слой элемента ротора (2)
     */
    Upper: 2;
};

/**
 * Stator — набор констант
 */
declare const Stator: {
    /**
     * Средняя часть статора с ярмом (1)
     */
    MiddleYoke: 1;
    /**
     * Средняя часть статора без ярма (2)
     */
    MiddleYokeless: 2;
    /**
     * Средняя часть статора с ярмом (устаревшее) (1)
     */
    Yoke: 1;
    /**
     * Средняя часть статора без ярма (устаревшее) (2)
     */
    Yokeless: 2;
};

/**
 * StatorItem — набор констант
 */
declare const StatorItem: {
    /**
     * Идентификатор нижней части статора (1)
     */
    ID1: 1;
    /**
     * Идентификатор средней части статора (2)
     */
    ID2: 2;
    /**
     * Идентификатор верхней части статора (3)
     */
    ID3: 3;
    /**
     * Нижний слой элемента статора (1)
     */
    Lower: 1;
    /**
     * Верхний слой элемента статора (2)
     */
    Upper: 2;
};

/**
 * Winding — набор констант
 */
declare const Winding: {
    /**
     * Планарный тип обмотки (1)
     */
    Planar: 1;
    /**
     * Тороидальный тип обмотки (2)
     */
    Toroidal: 2;
    /**
     * Lumped (1)
     */
    Lumped: 1;
    /**
     * Full (2)
     */
    Full: 2;
    /**
     * Схема соединения Звезда (1)
     */
    Star: 1;
    /**
     * Схема соединения Треугольник (2)
     */
    Delta: 2;
    /**
     * Одиночный слой (1)
     */
    SingleLayer: 1;
    /**
     * Двойной слой (2)
     */
    DoubleLayer: 2;
    /**
     * Ориентация Верх/Низ (1)
     */
    UpperLower: 1;
    /**
     * Ориентация Лево/Право (2)
     */
    LeftRight: 2;
    /**
     * Номер американского калибра провода (1)
     */
    AWG: 1;
    /**
     * Номер британского калибра провода (2)
     */
    SWG: 2;
    /**
     * Коэффициент заполнения обмотки (3)
     */
    FillFactor: 3;
    /**
     * Диаметр провода обмотки (4)
     */
    WireDiameter: 4;
};

/**
 * Функция include() предназначена для включения содержимого одного файла скрипта в другой файл скрипта. Это позволяет использовать код из одного файла (например, библиотечные функции или классы) в другом файле без необходимости копировать этот код вручную.
 * @param {string} path - Путь к файлу скрипта, который нужно включить.
 * @returns {void} Функция ничего не возвращает.
 */
declare function include(path: string): void;

/**
 * Функция readFile() предназначена для чтения из файла.
 * @param {string} path - Путь к файлу скрипта. Может быть абсолютным или относительным (относительно <path_MotorXP-AFM>/bin/assets/scripts).
 * @returns {string} Cодержимое файла.
 */
declare function readFile(path: string): string;

/**
 * Функция require() предназначена для загрузки модуля. В отличие от include(), функция require() возвращает объект, который содержит экспортируемые данные из подключаемого файла.
 * @param {string} path - Путь к файлу скрипта, который нужно включить.
 * @returns {Object} Если файл не содержит явного экспорта, возвращается пустой объект ({}).
 */
declare function require(path: string): Object;

/**
 * Функция writeFile() предназначена для записи в файл.
 * @param {string} path - Путь к файлу. Может быть абсолютным или относительным (относительно <path_MotorXP-AFM>/bin/assets/scripts).
 * @param {string} content - Содержимое, которое будет записано в файл.
 * @param {boolean} [append=true] - Если true — данные добавляются в конец файла. Если false — файл очищается перед записью.
 * @returns {boolean} Равно true, если запись прошла успешно. В случае ошибки — возвращается false, а сообщение об ошибке выводится в консоль.
 */
declare function writeFile(path: string, content: string, append?: boolean): boolean;

/**
 * Глобальный объект console
 */
declare const console: {
    /**
     * Метод console.clear() очищает вывод консоли, удаляя все ранее зарегистрированные сообщения. Это полезно для сброса консоли и обеспечения чистого рабочего пространства при отладке или записи новой информации.
     * @returns void
     */
    clear(): void;

    /**
     * Метод console.dir() отображает список свойств и методов указанного JavaScript-объекта. Он особенно полезен для проверки структуры и содержимого объектов, так как форматирует вывод в виде списка, что облегчает исследование вложенных свойств.
     * @param obj {any} - JavaScript-объект.
     * @returns void
     */
    dir(obj: any): void;

    /**
     * Метод console.error() выводит сообщение об ошибке красным цветом в консоль, каждое сообщение помечается иконкой error. Он используется для указания на критические проблемы, которые требуют немедленного внимания. Он может принимать несколько аргументов и отображать их в одной строке.
     * @param message1 {any} - Текст сообщения.
     * @param message2 {any} - Текст сообщения.
     * @param messageN {any} - Текст сообщения.
     * @returns void
     */
    error(message1: any, message2: any, messageN: any): void;

    /**
     * Метод console.info() выводит информационное сообщение зеленым цветом в консоль, каждое сообщение помечается иконкой info. Он похож на console.log(), но предназначен для информационных целей. Он может принимать несколько аргументов и отображать их в одной строке.
     * @param message1 {any} - Текст сообщения.
     * @param message2 {any} - Текст сообщения.
     * @param messageN {any} - Текст сообщения.
     * @returns void
     */
    info(message1: any, message2: any, messageN: any): void;

    /**
     * Метод console.log() выводит сообщение серым цветом в консоль, каждое сообщение помечается иконкой bug. Он может принимать несколько аргументов и отображать их в одной строке.
     * @param message1 {any} - Текст сообщения.
     * @param message2 {any} - Текст сообщения.
     * @param messageN {any} - Текст сообщения.
     * @returns void
     */
    log(message1: any, message2: any, messageN: any): void;

    /**
     * Метод console.info() выводит предупреждающее сообщение желтым цветом в консоль, каждое сообщение помечается иконкой warn. Данный метод используется для указания на потенциальные проблемы, которые не являются критичными, но должны быть устранены. Метод может принимать несколько аргументов и отображать их в одной строке.
     * @param message1 {any} - Текст сообщения.
     * @param message2 {any} - Текст сообщения.
     * @param messageN {any} - Текст сообщения.
     * @returns void
     */
    warn(message1: any, message2: any, messageN: any): void;

};

/**
 * Глобальный объект Geom
 */
declare const Geom: {
    /**
     * Получить угол точки.
     * @param x {number} - Значение координаты X
     * @param y {number} - Значение координаты Y
     * @returns number
     */
    angle(x: number, y: number): number;

    /**
     * Угол между векторами.
     * @param v1 {Vector3} - Вектор 1.
     * @param v2 {Vector3} - Вектор 2.
     * @returns number
     */
    angleBetweenVectors(v1: Vector3, v2: Vector3): number;

    /**
     * Получить угол точки относительно центра координат [0,0,0] в плоскости YOZ.
     * @param point {Point3} - Точка в трёхмерном пространстве.
     * @returns number
     */
    angleX(point: Point3): number;

    /**
     * Получить угол точки относительно центра координат [0,0,0] в плоскости XOZ.
     * @param point {Point3} - Точка в трёхмерном пространстве.
     * @returns number
     */
    angleY(point: Point3): number;

    /**
     * Получить угол точки относительно центра координат [0,0,0] в плоскости XOY.
     * @param argument {Point3} - Точка в трёхмерном пространстве
     * @returns number
     */
    angleZ(argument: Point3): number;

    /**
     * 2D дуга, строится в плоскости XOY, углы задаются в градусах, центр фигуры в точке [0,0,0].
     * @param radius {number} - Радиус дуги.
     * @param angle {number} - Угол дуги в градусах в диапазоне [0...360], начальный угол равен 0.
     * @param angle1 {number} - Начальный угол дуги в градусах в диапазоне [0...360].
     * @param angle2 {number} - Конечный угол дуги в градусах в диапазоне [0...360].
     * @param p1, p2, p3 {Point3} - Дуга, проходящая через три точки.
     * @returns Shape
     */
    arc(radius: number, angle: number, angle1: number, angle2: number, p1, p2, p3: Point3): Shape;

    /**
     * Возвращает ограничивающую коробку тела.
     * @param shp {Shape} - Тело.
     * @returns BoundingBox
     */
    boundingBox(shp: Shape): BoundingBox;

    /**
     * 3D примитив (объемный): параллелипипед, задаётся с указанием трёх размеров x, y, z и строится относительно точки [0,0,0].
     * @param x {number} - Размер параллелепипеда по оси X.
     * @param y {number} - Размер параллелепипеда по оси Y.
     * @param z {number} - Размер параллелепипеда по оси Z.
     * @param a {number} - Размер куба.
     * @returns Shape
     */
    box(x: number, y: number, z: number, a: number): Shape;

    /**
     * B-spline — плавная 3D-линия, проходящая через все заданные точки. Задаётся массивом точек points.
     * @param points {Array<Point3>} - Массив точек для построения плавной кривой.
     * @param closed {boolean} - Флаг, определяющий замкнутость прямой.
     * @returns Shape
     */
    bspline(points: Array<Point3>, closed?: boolean): Shape;

    /**
     * Операция взятия фаски тела. В отличие от скругления применяется только к объёмным телам.
Фаска задаётся расстоянием r, взятым от ребра до линии фаски и массивом ближайших точек refs.
     * @param shp {Shape} - Тело для снятия фаски.
     * @param r {number} - Расстояние, взятое от ребра до линии фаски.
     * @param refs {Array<Point3>} - Массив ближайших точек refs к ребрам, подлежащим фаске.
     * @returns Shape
     */
    chamfer(shp: Shape, r: number, refs: Array<Point3>): Shape;

    /**
     * 2D круг или сектор круга, строится в плоскости XOY, углы задаются в градусах, центр фигуры в точке [0,0,0].
     * @param radius {number} - Радиус круга.
     * @param angle {number} - Угол сектора круга в градусах в диапазоне [0...360], тело центрируется относительно оси OX.
     * @param angle1 {number} - Начальный угол сектора круга в градусах в диапазоне [0...360].
     * @param angle2 {number} - Конечный угол сектора круга в градусах в диапазоне [0...360].
     * @returns Shape
     */
    circle(radius: number, angle: number, angle1: number, angle2: number): Shape;

    /**
     * 3D примитив(объемный) -> втулка (цилиндр с осевым отверстием), задаётся с указанием внешненго радиуса r1, внутреннего радиуса r2 и высоты h и строится относительно точки [0,0,0]. Возможно построение сектора втулки с использованием параметра angle.
     * @param r1 {number} - Внешний радиус втулки.
     * @param r2 {number} - Внутренний радиус втулки.
     * @param h {number} - Высота втулки.
     * @param angle {number} - Угол сектора втулки в градусах, тело центрируется относительно оси OX.
     * @returns Shape
     */
    collar(r1: number, r2: number, h: number, angle: number): Shape;

    /**
     * 3D примитив(объемный) -> конус, задаётся с указанием нижнего радиуса r1, верхнего радиуса r2 и высоты h и строится относительно точки [0,0,0].
Возможно построение сектора конуса с использованием параметра angle.
     * @param r1 {number} - Нижний радиус конуса.
     * @param r2 {number} - Верхний радиус конуса.
     * @param h {number} - Высота конуса.
     * @param angle {number} - Угол сектора конуса в градусах, тело центрируется относительно оси OX.
     * @returns Shape
     */
    cone(r1: number, r2: number, h: number, angle: number): Shape;

    /**
     * 3D примитив(объемный) -> цилиндр, задаётся с указанием радиуса r и высоты h и строится относительно точки [0,0,0].
Возможно построение сектора цилиндра с использованием параметра angle.
     * @param r {number} - Радиус цилиндра.
     * @param h {number} - Высота цилиндра.
     * @param angle {number} - Угол сектора цилиндра в градусах, тело центрируется относительно оси OX.
     * @returns Shape
     */
    cylinder(r: number, h: number, angle: number): Shape;

    /**
     * Булева операция: Разность двух или более тел.
     * @param a {Shape} - Тело 1.
     * @param b {Shape} - Тело 2.
     * @param shapes {Array<Point3>} - Массив тел для разности.
     * @returns Shape
     */
    diff(a: Shape, b: Shape, shapes: Array<Point3>): Shape;

    /**
     * Булева операция: Разность двух или более тел.
     * @param a {Shape} - Тело 1.
     * @param b {Shape} - Тело 2.
     * @param shapes {Array<Point3>} - Массив тел для разности.
     * @returns Shape
     */
    difference(a: Shape, b: Shape, shapes: Array<Point3>): Shape;

    /**
     * Расчитывает расстояние между двумя точками.
     * @param p1 {Point3} - Точка 1.
     * @param p2 {Point3} - Точка 2.
     * @returns number
     */
    distance(p1: Point3, p2: Point3): number;

    /**
     * 2D эллипс или сектор эллипса, строится в плоскости XOY, углы задаются в градусах, центр фигуры в точке [0,0,0].
     * @param radius1 {number} - Первый радиус эллипса.
     * @param radius2 {number} - Второй радиус эллипса.
     * @param angle1 {number} - Начальный угол сектора эллипса в градусах в диапазоне [0...360].
     * @param angle2 {number} - Конечный угол сектора эллипса в градусах в диапазоне [0...360].
     * @returns Shape
     */
    ellipse(radius1: number, radius2: number, angle1: number, angle2: number): Shape;

    /**
     * Операция скругления тела. Если тело объёмное - модификации подвергаются ребра. Если плоское - вершины.
Скругления задаются радиусом r и масcивом ближайших точек refs к модифицируемым ребрам/вершинам.
     * @param shp {Shape} - Тело для скругления.
     * @param r {number} - Радиус скругления.
     * @param refs {Array<Point3>} - Массив ближайших точек refs к ребрам или вершинам, подлежащим скруглению.
     * @returns Shape
     */
    fillet(shp: Shape, r: number, refs: Array<Point3>): Shape;

    /**
     * Создается плоскость.
     * @param pos {Point3} - Позиция плоскости (точка, принадлежащая плоскости).
     * @param dir {Vector3} - Направление, вектор, перпендикулярный плоскости.
     * @returns Shape
     */
    infplane(pos: Point3, dir: Vector3): Shape;

    /**
     * Булева операция: получить пересечение двух или более тел.
     * @param a {Shape} - Тело 1.
     * @param b {Shape} - Тело 2.
     * @param shapes {Array<Point3>} - Массив тел для пересечения.
     * @returns Shape
     */
    intersect(a: Shape, b: Shape, shapes: Array<Point3>): Shape;

    /**
     * 2D Правильный N-угольник, строится в плоскости XOY, центр фигуры в точке [0,0,0].
     * @param radius {number} - Радиус N-угольника (расстояние от центра до вершин).
     * @param n {number} - Количество углов N-угольника (допустимое значение: 3 и более).
     * @returns Shape
     */
    ngon(radius: number, n: number): Shape;

    /**
     * Создает деталь мотора из геометрической формы и материала.
     * @param shp {Shape} - Геометрическая форма детали.
     * @param material {Material} - Материал детали.
     * @returns Piece
     */
    piece(shp: Shape, material: Material): Piece;

    /**
     * Создание точки в 3D пространстве.
     * @param x {number} - x координата точки.
     * @param y {number} - y координата точки.
     * @param z {number} - z координата точки.
     * @param p {QPointF} - Точка с координатами [x,y].
     * @returns Point3
     */
    point3(x: number, y: number, z: number, p: QPointF): Point3;

    /**
     * Возвращает точку в параметризованной позиции сегмента, указанной t. Метод возвращает начальную точку сегмента, если t = 0, и ее конечную точку, если t = 1.
     * @param p1 {Point3} - Первая точка сегмента.
     * @param p2 {Point3} - Вторая точка сегмента.
     * @param t {number} - Параметризованная позиция сегмента (обычно от 0 до 1).
     * @returns Point3
     */
    pointAtSegment(p1: Point3, p2: Point3, t: number): Point3;

    /**
     * 2D Многоугольник, строится в плоскости XOY, центр фигуры в точке [0,0,0].
     * @param points {Array<Point3>} - Массив вершин многоугольника.
     * @returns Shape
     */
    polygon(points: Array<Point3>): Shape;

    /**
     * Полисегмент - 3D-ломаная линия. Задаётся массивом точек points.
     * @param points {Array<Point3>} - Массив вершин полилинии.
     * @param closed {boolean} [default: false] - Если true, полилиния замыкается от конца к началу.
     * @returns Shape
     */
    polysegment(points: Array<Point3>, closed?: boolean): Shape;

    /**
     * Радиус точки в 2D-пространстве.
     * @param x {number} - x-координата точки
     * @param y {number} - y-координата точки
     * @returns number
     */
    radius(x: number, y: number): number;

    /**
     * Радиус точки в плоскости YOZ.
     * @param point {Point3} - Точка в трёхмерном пространстве.
     * @param x {number} - x-координата точки
     * @param y {number} - y-координата точки
     * @param z {number} - z-координата точки
     * @returns number
     */
    radiusX(point: Point3, x: number, y: number, z: number): number;

    /**
     * Радиус точки в плоскости XOZ, ноль - [0,0,0].
     * @param point {Point3} - Точка в трёхмерном пространстве.
     * @param x {number} - x-координата точки
     * @param y {number} - y-координата точки
     * @param z {number} - z-координата точки
     * @returns number
     */
    radiusY(point: Point3, x: number, y: number, z: number): number;

    /**
     * Радиус точки в плоскости XOY, ноль - [0,0,0].
     * @param point {Point3} - Точка в трёхмерном пространстве.
     * @param x {number} - x-координата точки
     * @param y {number} - y-координата точки
     * @param z {number} - z-координата точки
     * @returns number
     */
    radiusZ(point: Point3, x: number, y: number, z: number): number;

    /**
     * 2D Прямоугольник, строится в плоскости XOY, центр фигуры в точке [0,0,0].
     * @param a {number} - Сторона прямоугольника по X
     * @param b {number} - Сторона прямоугольника по Y
     * @returns Shape
     */
    rectangle(a: number, b: number): Shape;

    /**
     * 2D кольцо или сектор кольца, строится в плоскости XOY, углы задаются в градусах, центр фигуры в точке [0,0,0].
     * @param radius1 {number} - Наружный радиус кольца
     * @param radius2 {number} - Внутренний радиус кольца
     * @param angle {number} - Угол сектора кольца, от 0 до 360°. Тело центрируется относительно оси OX.
     * @param angle1 {number} - Начальный угол сектора кольца (в градусах)
     * @param angle2 {number} - Конечный угол сектора кольца (в градусах)
     * @returns Shape
     */
    ring(radius1: number, radius2: number, angle: number, angle1: number, angle2: number): Shape;

    /**
     * Создание сечения.
     * @param a {Shape} - Первое тело для вычисления сечения
     * @param b {Shape} - Второе тело для вычисления сечения
     * @returns Shape
     */
    section(a: Shape, b: Shape): Shape;

    /**
     * Создание 3D отрезка, задается двумя точками.
     * @param p1 {Point3} - Начальная точка отрезка
     * @param p2 {Point3} - Конечная точка отрезка
     * @returns Shape
     */
    segment(p1: Point3, p2: Point3): Shape;

    /**
     * 3D примитив(объемный) -> сфера, строится относительно точки [0,0,0].
     * @param r {number} - Радиус сферы
     * @param an1 {number} - Первый угол поворота (в градусах)
     * @param an2 {number} - Второй угол поворота (в градусах)
     * @param an3 {number} - Третий угол поворота (в градусах)
     * @returns Shape
     */
    sphere(r: number, an1: number, an2: number, an3: number): Shape;

    /**
     * 2D Квадрат, строится в плоскости XOY, центр фигуры в точке [0,0,0].
     * @param a {number} - Сторона квадрата
     * @returns Shape
     */
    square(a?: number): Shape;

    /**
     * 3D примитив(объемный) -> тор, строится относительно точки [0,0,0].
     * @param r1 {number} - Большой радиус тора
     * @param r2 {number} - Малый радиус тора
     * @param ua {number} - Угол поворота по оси U
     * @param va1 {number} - Начальный угол по оси V
     * @param va2 {number} - Конечный угол по оси V
     * @returns Shape
     */
    torus(r1?: number, r2?: number, ua?: number, va1?: number, va2?: number): Shape;

    /**
     * Упрощает геометрическое представление объекта, путём удаления лишних рёбер и объединения граней.
     * @param shp {Shape} - Тело для операции упрощения
     * @returns Shape
     */
    unify(shp: Shape): Shape;

    /**
     * Булева операция: Объединить два или более тел.
     * @param a {Shape} - Первое тело для объединения
     * @param b {Shape} - Второе тело для объединения
     * @param shapes {Array<Point3>} - Массив тел для объединения
     * @returns Shape
     */
    unite(a: Shape, b: Shape, shapes: Array<Point3>): Shape;

    /**
     * Создание вектора в 3D-пространстве, задает направление и длину.
     * @param x {number} - x-координата точки
     * @param y {number} - y-координата точки
     * @param z {number} - z-координата точки
     * @param p {Point3} - Точка, задающая начало вектора
     * @param p1 {Point3} - Начальная точка вектора
     * @param p2 {Point3} - Конечная точка вектора
     * @returns Vector3
     */
    vector3(x: number, y: number, z: number, p: Point3, p1: Point3, p2: Point3): Vector3;

};

/**
 * Глобальный объект Material
 */
declare const Material: {
    /**
     * Материал для проводника.
     * @returns undefined
     */
    conductor(): void;

    /**
     * Пользовательский материал с заданным цветом.
     * @param color {Qt.color} [default: Qt.red] - Цвет материала.
     * @returns CustomMaterial
     */
    custom(color?: Qt.color): CustomMaterial;

    /**
     * Пустой материал.
     * @returns undefined
     */
    empty(): void;

    /**
     * Материал для лобовых частей обмоток (Endturns).
     * @returns undefined
     */
    endturn(): void;

    /**
     * Материал для воздушной среды.
     * @returns undefined
     */
    general(): void;

    /**
     * Материал для железа.
     * @param fillCoefs {Array<Number>} [default: []] - Коэффициент заполнения материала.
     * @param dsomaloy {number} [default: 0] - Наименьшее поперечное сечение компонента [м] для материала Somaloy.
     * @returns IronMaterial
     */
    iron(fillCoefs?: Array<Number>, dsomaloy?: number): IronMaterial;

    /**
     * Материал для магнита с параллельным намагничиванием.
     * @param angle {number} [default: 0] - Угол параллельного намагничивания.
     * @param segmentRadiuses {Array<Number>} [default: []] - Массив радиусов сегментов магнита.
     * @param savePoleBorder {boolean} [default: true] - Если true — сохраняется граница между магнитами соседних полюсов.
     * @returns MagnetParallelMaterial
     */
    magnetParallel(angle?: number, segmentRadiuses?: Array<Number>, savePoleBorder?: boolean): MagnetParallelMaterial;

    /**
     * Материал для магнита с радиальным намагничиванием.
     * @param direction {number} [default: Magnetization.From] - Направление магнетизации.
     * @param center {QPointF} [default: Qt.point(0, 0)] - Центр магнетизации.
     * @param segmentRadiuses {Array<Number>} [default: []] - Массив радиусов сегментов магнита.
     * @returns MagnetRadialMaterial
     */
    magnetRadial(direction?: number, center?: QPointF, segmentRadiuses?: Array<Number>): MagnetRadialMaterial;

    /**
     * Материал для обмотки.
     * @param layer {number} [default: Winding.LayerAuto] - Номер слоя. Может быть: Winding.LayerAuto, Winding.LayerSingle, Winding.LayerDouble.
     * @param turn {number} [default: 0] - Номер витка.
     * @param strand {number} [default: 0] - Номер провода в витке.
     * @returns WindingMaterial
     */
    winding(layer?: number, turn?: number, strand?: number): WindingMaterial;

};

/**
 * Глобальный объект Math
 */
interface Math {
    /**
     * Перевод радиан в градусы.
     * @param radians {number} - Значение угла в радианах.
     * @returns number
     */
    deg(radians: number): number;

    /**
     * Перевод координат точки из полярных координат (radius, angle) в декартовые координаты (x, y).
     * @param radius {number} - Радиус.
     * @param angle {number} - Угол в градусах.
     * @returns Point
     */
    fromPolar(radius: number, angle: number): Point;

    /**
     * Возвращает true, если абсолютное значение arg меньше или равно eps.
     * @param arg {number} - Числовое значение, которое обрабатывается.
     * @param eps {number} [default: Math.EPSILON] - Погрешность сравнения чисел с плавающей точкой.
     * @returns boolean
     */
    isEpsilon(arg: number, eps?: number): boolean;

    /**
     * Возвращает true, если разница абсолютных значений arg₁ и arg₂ меньше или равно eps.
     * @param arg1 {number} - Первое числовое значение.
     * @param arg2 {number} - Второе числовое значение.
     * @param eps {number} [default: Math.EPSILON] - Погрешность сравнения чисел с плавающей точкой.
     * @returns boolean
     */
    isEqual(arg1: number, arg2: number, eps?: number): boolean;

    /**
     * Возвращает true, если значение arg₁ больше или равно значению arg₂ с учетом точности eps.
     * @param arg1 {number} - Первое числовое значение.
     * @param arg2 {number} - Второе числовое значение.
     * @param eps {number} [default: Math.EPSILON] - Погрешность сравнения чисел с плавающей точкой.
     * @returns boolean
     */
    isGreatEqual(arg1: number, arg2: number, eps?: number): boolean;

    /**
     * Возвращает true, если значение arg₁ меньше или равно значению arg₂ с учетом точности eps.
     * @param arg1 {number} - Первое числовое значение.
     * @param arg2 {number} - Второе числовое значение.
     * @param eps {number} [default: Math.EPSILON] - Погрешность сравнения чисел с плавающей точкой.
     * @returns boolean
     */
    isLessEqual(arg1: number, arg2: number, eps?: number): boolean;

    /**
     * Расчет среднего угла между углами a~1~ и a~2~ с учетом направления (CW — по часовой стрелке, CCW — против часовой стрелки).
     * @param a1 {number} - Первый угол (в градусах).
     * @param a2 {number} - Второй угол (в градусах).
     * @param dir {number} - Направление обхода. Возможные значения: Direction.CW (по часовой стрелке), Direction.CCW (против часовой стрелки).
     * @returns number
     */
    middleAngle(a1: number, a2: number, dir: number): number;

    /**
     * Нормализирует значение угла, возвращает значение в интервале (0°, 360°) градусов.
     * @param a {number} - Значение угла в градусах.
     * @returns number
     */
    normAngle(a: number): number;

    /**
     * Перевод градусов в радианы.
     * @param degrees {number} - Значение угла в градусах.
     * @returns number
     */
    rad(degrees: number): number;

};

/**
 * Глобальный объект motor
 */
declare const motor: {
    /**
     * Изменить значение свойства. Это изменение можно отменить командой Undo в меню в графическом интерфейсе.
     * @param propName {string} - Имя свойства.
     * @param value {any} - Значение свойства.
     * @returns boolean
     */
    changeProperty(propName: string, value: any): boolean;

    /**
     * Истина, если тип машины RSR.
     * @returns boolean
     */
    isMachineRSR(): boolean;

    /**
     * Истина, если тип машины RSRSR.
     * @returns boolean
     */
    isMachineRSRSR(): boolean;

    /**
     * Истина, если тип машины SR.
     * @returns boolean
     */
    isMachineSR(): boolean;

    /**
     * Истина, если тип машины SRS.
     * @returns boolean
     */
    isMachineSRS(): boolean;

    /**
     * Истина, если тип машины SRSRS.
     * @returns boolean
     */
    isMachineSRSRS(): boolean;

    /**
    * Возвращает объект типа Airgap.
    * @type {Airgap}
    * @access Только Чтение
    */
    readonly airgap: Airgap;
    /**
    * The machineType property defines the configuration type of the motor.
    * @type {number}
    * @access Чтение\Запись
    */
     machineType: number;
    /**
    * Возвращает объект типа Mesh.
    * @type {Mesh}
    * @access Только Чтение
    */
    readonly mesh: Mesh;
    /**
    * Возвращает объект типа Rotor.
    * @type {Rotor}
    * @access Только Чтение
    */
    readonly rotor: Rotor;
    /**
    * Возвращает объект типа Stator.
    * @type {Stator}
    * @access Только Чтение
    */
    readonly stator: Stator;
    /**
    * Возвращает объект типа Winding.
    * @type {Winding}
    * @access Только Чтение
    */
    readonly winding: Winding;
};

/**
 * Глобальный объект QtWidgets
 */
declare const QtWidgets: {
    /**
     * Описание метода.
     * @param argument {any} - Описание.
     * @returns void
     */
    createExclamationIcon(argument: any): void;

    /**
     * Описание метода.
     * @param argument {any} - Описание.
     * @returns void
     */
    createNumberEdit(argument: any): void;

    /**
     * Описание метода.
     * @param argument {any} - Описание.
     * @returns void
     */
    createNumberPoleSpinBox(argument: any): void;

    /**
     * Описание метода.
     * @param argument {any} - Описание.
     * @returns void
     */
    createNumberSlotSpinBox(argument: any): void;

    /**
     * Описание метода.
     * @param argument {any} - Описание.
     * @returns void
     */
    createPoleArrangementComboBox(argument: any): void;

    /**
     * Описание метода.
     * @param argument {any} - Описание.
     * @returns void
     */
    createQCheckBox(argument: any): void;

    /**
     * Описание метода.
     * @param argument {any} - Описание.
     * @returns void
     */
    createQComboBox(argument: any): void;

    /**
     * Описание метода.
     * @param argument {any} - Описание.
     * @returns void
     */
    createQDoubleSpinBox(argument: any): void;

    /**
     * Описание метода.
     * @param argument {any} - Описание.
     * @returns void
     */
    createQFormLayout(argument: any): void;

    /**
     * Описание метода.
     * @param argument {any} - Описание.
     * @returns void
     */
    createQGridLayout(argument: any): void;

    /**
     * Описание метода.
     * @param argument {any} - Описание.
     * @returns void
     */
    createQGroupBox(argument: any): void;

    /**
     * Описание метода.
     * @param argument {any} - Описание.
     * @returns void
     */
    createQLabel(argument: any): void;

    /**
     * Описание метода.
     * @param argument {any} - Описание.
     * @returns void
     */
    createQLineEdit(argument: any): void;

    /**
     * Описание метода.
     * @param argument {any} - Описание.
     * @returns void
     */
    createQPushButton(argument: any): void;

    /**
     * Описание метода.
     * @param argument {any} - Описание.
     * @returns void
     */
    createQSpinBox(argument: any): void;

    /**
     * Описание метода.
     * @param argument {any} - Описание.
     * @returns void
     */
    createQWidget(argument: any): void;

    /**
     * Описание метода.
     * @param argument {any} - Описание.
     * @returns void
     */
    createRotorTypeComboBox(argument: any): void;

    /**
     * Описание метода.
     * @param argument {any} - Описание.
     * @returns void
     */
    createStatorTypeComboBox(argument: any): void;

    /**
     * Описание метода.
     * @param argument {any} - Описание.
     * @returns void
     */
    createWarningIcon(argument: any): void;

    /**
     * Описание метода.
     * @param argument {any} - Описание.
     * @returns void
     */
    createWindingConnectionComboBox(argument: any): void;

    /**
     * Описание метода.
     * @param argument {any} - Описание.
     * @returns void
     */
    createWindingLayersComboBox(argument: any): void;

    /**
     * Описание метода.
     * @param argument {any} - Описание.
     * @returns void
     */
    createWindingLayersOrientationComboBox(argument: any): void;

    /**
     * Описание метода.
     * @param argument {any} - Описание.
     * @returns void
     */
    createWindingTypeComboBox(argument: any): void;

};

/**
 * Тип Airgap
 */
interface Airgap {
    /**
      * Изменить Значение свойства. Это изменение можно отменить командой Undo в меню в графическом интерфейсе.
       * @param propName {string} - Имя свойства.
     * @param value {any} - Значение свойства.
     * @returns {boolean}
     */
    changeProperty(propName: string, value: any): boolean;

    /**
    * Идентификатор воздушного зазора (Airgap.ID).
    * @type {number}
    * @access Только Чтение
    */
    readonly id: number;
    /**
    * Количество слоев воздушного зазора для расчета сетки.
    * @type {number}
    * @access Чтение\Запись
    */
     numberLayers: number;
    /**
    * Позиция нижней стороны воздушного зазора.
    * @type {number}
    * @access Только Чтение
    */
    readonly posBottom: number;
    /**
    * Позиция центра воздушного зазора.
    * @type {number}
    * @access Только Чтение
    */
    readonly posMiddle: number;
    /**
    * Позиция верхней стороны воздушного зазора.
    * @type {number}
    * @access Только Чтение
    */
    readonly posTop: number;
    /**
    * Толщина воздушного зазора.
    * @type {number}
    * @access Чтение\Запись
    */
     thickness: number;
};

/**
 * Тип BoundingBox
 */
interface BoundingBox {
    /**
      * ...
       * @returns {Shape}
     */
    shape(): Shape;

    /**
    * Середина по оси X.
    * @type {number}
    * @access Только Чтение
    */
    readonly xCenter: number;
    /**
    * Максимальное значение по оси X.
    * @type {number}
    * @access Только Чтение
    */
    readonly xMax: number;
    /**
    * Минимальное значение по оси X.
    * @type {number}
    * @access Только Чтение
    */
    readonly xMin: number;
    /**
    * Размер по оси X.
    * @type {number}
    * @access Только Чтение
    */
    readonly xSize: number;
    /**
    * Середина по оси Y.
    * @type {number}
    * @access Только Чтение
    */
    readonly yCenter: number;
    /**
    * Максимальное значение по оси Y.
    * @type {number}
    * @access Только Чтение
    */
    readonly yMax: number;
    /**
    * Минимальное значение по оси Y.
    * @type {number}
    * @access Только Чтение
    */
    readonly yMin: number;
    /**
    * Размер по оси Y.
    * @type {number}
    * @access Только Чтение
    */
    readonly ySize: number;
    /**
    * Середина по оси Z.
    * @type {number}
    * @access Только Чтение
    */
    readonly zCenter: number;
    /**
    * Максимальное значение по оси Z.
    * @type {number}
    * @access Только Чтение
    */
    readonly zMax: number;
    /**
    * Минимальное значение по оси Z.
    * @type {number}
    * @access Только Чтение
    */
    readonly zMin: number;
    /**
    * Размер по оси Z.
    * @type {number}
    * @access Только Чтение
    */
    readonly zSize: number;
};

/**
 * Тип ConductorMaterial
 */
interface ConductorMaterial {
};

/**
 * Тип CustomMaterial
 */
interface CustomMaterial {
    /**
    * Цвет материала.
    * @type {QColor}
    * @access Чтение\Запись
    */
     color: QColor;
};

/**
 * Тип EmptyMaterial
 */
interface EmptyMaterial {
};

/**
 * Тип EndturnMaterial
 */
interface EndturnMaterial {
};

/**
 * Тип GeneralMaterial
 */
interface GeneralMaterial {
};

/**
 * Тип IronMaterial
 */
interface IronMaterial {
    /**
    * The dsomaloy property...
    * @type {number}
    * @access Чтение\Запись
    */
     dsomaloy: number;
    /**
    * The fillCoefs property...
    * @type {number}
    * @access Чтение\Запись
    */
     fillCoefs: number;
};

/**
 * Тип MagnetParallelMaterial
 */
interface MagnetParallelMaterial {
    /**
    * The angle property...
    * @type {number}
    * @access Чтение\Запись
    */
     angle: number;
    /**
    * The savePoleBorder property...
    * @type {number}
    * @access Чтение\Запись
    */
     savePoleBorder: number;
    /**
    * The segmentRadiuses property...
    * @type {number}
    * @access Чтение\Запись
    */
     segmentRadiuses: number;
};

/**
 * Тип MagnetRadialMaterial
 */
interface MagnetRadialMaterial {
    /**
    * The center property...
    * @type {number}
    * @access Чтение\Запись
    */
     center: number;
    /**
    * The direction property...
    * @type {number}
    * @access Чтение\Запись
    */
     direction: number;
};

/**
 * Тип WindingMaterial
 */
interface WindingMaterial {
    /**
      * Описание типа метода.
       * @param argument {any} - Описание.
     * @returns {void}
     */
    isWindingModelFull(argument: any): void;

    /**
      * Описание типа метода.
       * @param argument {any} - Описание.
     * @returns {void}
     */
    isWindingModelLumped(argument: any): void;

    /**
    * The layer property...
    * @type {number}
    * @access Чтение\Запись
    */
     layer: number;
    /**
    * The strand property...
    * @type {number}
    * @access Чтение\Запись
    */
     strand: number;
    /**
    * The turn property...
    * @type {number}
    * @access Чтение\Запись
    */
     turn: number;
    /**
    * The windingModel property...
    * @type {number}
    * @access Чтение\Запись
    */
     windingModel: number;
};

/**
 * Тип Mesh
 */
interface Mesh {
    /**
      * Изменить Значение свойства. Это изменение можно отменить командой Undo в меню в графическом интерфейсе.
       * @param propName {string} - Имя свойства.
     * @param value {any} - Значение свойства.
     * @returns {boolean}
     */
    changeProperty(propName: string, value: any): boolean;

    /**
    * The airgapQuality property...
    * @type {number}
    * @access Чтение\Запись
    */
     airgapQuality: number;
    /**
    * The autoSizeBound property...
    * @type {boolean}
    * @access Чтение\Запись
    */
     autoSizeBound: boolean;
    /**
    * The boundCylinderAxialExtension property...
    * @type {number}
    * @access Чтение\Запись
    */
     boundCylinderAxialExtension: number;
    /**
    * The boundCylinderRadius property...
    * @type {number}
    * @access Чтение\Запись
    */
     boundCylinderRadius: number;
    /**
    * The horizontalSymmetry property...
    * @type {boolean}
    * @access Чтение\Запись
    */
     horizontalSymmetry: boolean;
    /**
    * The numberSlices property...
    * @type {number}
    * @access Чтение\Запись
    */
     numberSlices: number;
    /**
    * The sizeBound property...
    * @type {number}
    * @access Чтение\Запись
    */
     sizeBound: number;
};

/**
 * Тип Piece
 */
interface Piece {
    /**
      * Сохранить деталь в файле.
       * @returns {void}
     */
    toFileStep(): void;

};

/**
 * Тип Point3
 */
interface Point3 {
    /**
      * Описание типа метода.
       * @param argument {any} - Описание аргумента.
     * @returns {void}
     */
    distance(argument?: any): void;

    /**
      * Описание типа метода.
       * @param argument {any} - Описание.
     * @returns {void}
     */
    mirrorO(argument: any): void;

    /**
      * Описание типа метода.
       * @param argument {any} - Описание.
     * @returns {void}
     */
    mirrorX(argument: any): void;

    /**
      * Описание типа метода.
       * @param argument {any} - Описание.
     * @returns {void}
     */
    mirrorXY(argument: any): void;

    /**
      * Описание типа метода.
       * @param argument {any} - Описание.
     * @returns {void}
     */
    mirrorXZ(argument: any): void;

    /**
      * Описание типа метода.
       * @param argument {any} - Описание.
     * @returns {void}
     */
    mirrorY(argument: any): void;

    /**
      * Описание типа метода.
       * @param argument {any} - Описание.
     * @returns {void}
     */
    mirrorYZ(argument: any): void;

    /**
      * Описание типа метода.
       * @param argument {any} - Описание.
     * @returns {void}
     */
    mirrorZ(argument: any): void;

    /**
      * Описание типа метода.
       * @param argument {any} - Описание.
     * @returns {void}
     */
    move(argument: any): void;

    /**
      * Описание типа метода.
       * @param argument {any} - Описание.
     * @returns {void}
     */
    moveX(argument: any): void;

    /**
      * Описание типа метода.
       * @param argument {any} - Описание.
     * @returns {void}
     */
    moveY(argument: any): void;

    /**
      * Описание типа метода.
       * @param argument {any} - Описание.
     * @returns {void}
     */
    moveZ(argument: any): void;

    /**
      * Описание типа метода.
       * @param argument {any} - Описание.
     * @returns {void}
     */
    rotate(argument: any): void;

    /**
      * Описание типа метода.
       * @param argument {any} - Описание.
     * @returns {void}
     */
    rotateX(argument: any): void;

    /**
      * Описание типа метода.
       * @param argument {any} - Описание.
     * @returns {void}
     */
    rotateY(argument: any): void;

    /**
      * Описание типа метода.
       * @param argument {any} - Описание.
     * @returns {void}
     */
    rotateZ(argument: any): void;

    /**
      * Описание типа метода.
       * @param argument {any} - Описание.
     * @returns {void}
     */
    scale(argument: any): void;

    /**
      * Описание типа метода.
       * @param argument {any} - Описание.
     * @returns {void}
     */
    scaleX(argument: any): void;

    /**
      * Описание типа метода.
       * @param argument {any} - Описание.
     * @returns {void}
     */
    scaleXY(argument: any): void;

    /**
      * Описание типа метода.
       * @param argument {any} - Описание.
     * @returns {void}
     */
    scaleXYZ(argument: any): void;

    /**
      * Описание типа метода.
       * @param argument {any} - Описание.
     * @returns {void}
     */
    scaleXZ(argument: any): void;

    /**
      * Описание типа метода.
       * @param argument {any} - Описание.
     * @returns {void}
     */
    scaleY(argument: any): void;

    /**
      * Описание типа метода.
       * @param argument {any} - Описание.
     * @returns {void}
     */
    scaleYZ(argument: any): void;

    /**
      * Описание типа метода.
       * @param argument {any} - Описание.
     * @returns {void}
     */
    scaleZ(argument: any): void;

    /**
      * Описание типа метода.
       * @param argument {any} - Описание.
     * @returns {void}
     */
    translate(argument: any): void;

    /**
      * Описание типа метода.
       * @param argument {any} - Описание.
     * @returns {void}
     */
    translateX(argument: any): void;

    /**
      * Описание типа метода.
       * @param argument {any} - Описание.
     * @returns {void}
     */
    translateY(argument: any): void;

    /**
      * Описание типа метода.
       * @param argument {any} - Описание.
     * @returns {void}
     */
    translateY(argument: any): void;

    /**
    * The x property...
    * @type {number}
    * @access Чтение\Запись
    */
     x: number;
    /**
    * The y property...
    * @type {number}
    * @access Чтение\Запись
    */
     y: number;
    /**
    * The z property...
    * @type {number}
    * @access Чтение\Запись
    */
     z: number;
};

/**
 * Тип Rotor
 */
interface Rotor {
    /**
      * Изменить Значение свойства. Это изменение можно отменить командой Undo в меню в графическом интерфейсе.
       * @param propName {string} - Имя свойства.
     * @param value {any} - Значение свойства.
     * @returns {boolean}
     */
    changeProperty(propName: string, value: any): boolean;

    /**
      * Истина, если в моторе элемент ротора нижний.
       * @param argument {any} - Описание.
     * @returns {undefined}
     */
    isLower(argument: any): void;

    /**
      * Истина, если в моторе элемент ротора средний.
       * @returns {undefined}
     */
    isMiddle(): void;

    /**
      * Истина, если в моторе средний элемент ротора с ярмом.
       * @returns {undefined}
     */
    isTypeMiddleYoke(): void;

    /**
      * Истина, если в моторе средний элемент ротора без ярма.
       * @returns {undefined}
     */
    isTypeMiddleYokeless(): void;

    /**
      * Истина, если в моторе элемент ротора верхний.
       * @returns {undefined}
     */
    isUpper(): void;

    /**
      * Описание типа метода.
       * @returns {undefined}
     */
    item(): void;

    /**
      * Угловое смещение элемента ротора в градусах.
       * @returns {undefined}
     */
    itemAngularDisplacement(): void;

    /**
      * Задать угловое смещение элемента статора в градусах.
       * @returns {undefined}
     */
    setItemAngularDisplacement(): void;

    /**
    * Материал проводника ротора.
    * @type {string}
    * @access Чтение\Запись
    */
     conductorMaterial: string;
    /**
    * Температура проводника ротора в градусах Цельсия.
    * @type {number}
    * @access Чтение\Запись
    */
     conductorTemperature: number;
    /**
    * Количество элементов ротора, зависит от motor.machineType.
    * @type {number}
    * @access Только Чтение
    */
    readonly countItems: number;
    /**
    * Внутрений диаметр
    * @type {number}
    * @access Чтение\Запись
    */
     innerDiameter: number;
    /**
    * Внутрений радиус
    * @type {number}
    * @access Чтение\Запись
    */
     innerRadius: number;
    /**
    * Материал стали ротора
    * @type {string}
    * @access Чтение\Запись
    */
     ironMaterial: string;
    /**
    * Коеффициент укладки железа ротора.
    * @type {number}
    * @access Чтение\Запись
    */
     ironStacking: number;
    /**
    * Массив элементов ротора, количество элементов зависит от motor.machineType.
    * @type {Array<StatorItem>}
    * @access Только Чтение
    */
    readonly items: Array<StatorItem>;
    /**
    * Материал магнита ротора.
    * @type {string}
    * @access Чтение\Запись
    */
     magnetMaterial: string;
    /**
    * Температура магнита ротора в градусах Цельсия.
    * @type {number}
    * @access Чтение\Запись
    */
     magnetTemperature: number;
    /**
    * Имя скрипта
    * @type {string}
    * @access Тоько Чтение
    */
     nameScript: string;
    /**
    * Количество пар полюсов.
    * @type {number}
    * @access Чтение\Запись
    */
     numberPolePairs: number;
    /**
    * Внешний диаметр.
    * @type {number}
    * @access Чтение\Запись
    */
     outerDiameter: number;
    /**
    * Внешний радиус.
    * @type {number}
    * @access Чтение\Запись
    */
     outerRadius: number;
    /**
    * Угловой размер одного полюса ротора в градусах.
    * @type {number}
    * @access Тоько Чтение
    */
     poleAngleSpan: number;
    /**
    * Расположение полюсов
    * @type {number}
    * @access Чтение\Запись
    */
     poleArrangement: number;
    /**
    * Имя файла скрипта
    * @type {string}
    * @access Тоько Чтение
    */
     script: string;
    /**
    * Тип средней части ротора.
    * @type {number}
    * @access Чтение\Запись
    */
     typeMiddleItem: number;
};

/**
 * Тип RotorItem
 */
interface RotorItem {
    /**
      * Изменить Значение свойства. Это изменение можно отменить командой Undo в меню в графическом интерфейсе.
       * @param propName {string} - Имя свойства.
     * @param value {any} - Значение свойства.
     * @returns {boolean}
     */
    changeProperty(propName: string, value: any): boolean;

    /**
      * Описание типа метода.
       * @param argument {any} - Описание.
     * @returns {void}
     */
    isLower(argument: any): void;

    /**
      * Описание типа метода.
       * @param argument {any} - Описание.
     * @returns {void}
     */
    isMiddle(argument: any): void;

    /**
      * Описание типа метода.
       * @param argument {any} - Описание.
     * @returns {void}
     */
    isUpper(argument: any): void;

    /**
    * The angularDisplacement property...
    * @type {number}
    * @access Чтение\Запись
    */
     angularDisplacement: number;
    /**
    * Высота элемента.
    * @type {number}
    * @access Чтение\Запись
    */
     height: number;
    /**
    * Идентификатор элемента ротора.
    * @type {number}
    * @access Только Чтение
    */
    readonly id: number;
};

/**
 * Тип Shape
 */
interface Shape {
    /**
      * Описание типа метода.
       * @param argument {any} - Описание.
     * @returns {void}
     */
    boundBox(argument: any): void;

    /**
      * Описание типа метода.
       * @param argument {any} - Описание.
     * @returns {void}
     */
    center(argument: any): void;

    /**
      * Описание типа метода.
       * @param argument {any} - Описание.
     * @returns {void}
     */
    diff(argument: any): void;

    /**
      * Описание типа метода.
       * @param argument {any} - Описание.
     * @returns {void}
     */
    difference(argument: any): void;

    /**
      * Описание типа метода.
       * @param argument {any} - Описание.
     * @returns {void}
     */
    extrude(argument: any): void;

    /**
      * Описание типа метода.
       * @param argument {any} - Описание.
     * @returns {void}
     */
    extrudeX(argument: any): void;

    /**
      * Описание типа метода.
       * @param argument {any} - Описание.
     * @returns {void}
     */
    extrudeY(argument: any): void;

    /**
      * Описание типа метода.
       * @param argument {any} - Описание.
     * @returns {void}
     */
    extrudeZ(argument: any): void;

    /**
      * Описание типа метода.
       * @param argument {any} - Описание.
     * @returns {void}
     */
    intersect(argument: any): void;

    /**
      * Описание типа метода.
       * @param argument {any} - Описание.
     * @returns {void}
     */
    isEmpty(argument: any): void;

    /**
      * Описание типа метода.
       * @param argument {any} - Описание.
     * @returns {void}
     */
    mirrorO(argument: any): void;

    /**
      * Описание типа метода.
       * @param argument {any} - Описание.
     * @returns {void}
     */
    mirrorX(argument: any): void;

    /**
      * Описание типа метода.
       * @param argument {any} - Описание.
     * @returns {void}
     */
    mirrorXY(argument: any): void;

    /**
      * Описание типа метода.
       * @param argument {any} - Описание.
     * @returns {void}
     */
    mirrorXZ(argument: any): void;

    /**
      * Описание типа метода.
       * @param argument {any} - Описание.
     * @returns {void}
     */
    mirrorY(argument: any): void;

    /**
      * Описание типа метода.
       * @param argument {any} - Описание.
     * @returns {void}
     */
    mirrorYZ(argument: any): void;

    /**
      * Описание типа метода.
       * @param argument {any} - Описание.
     * @returns {void}
     */
    mirrorZ(argument: any): void;

    /**
      * Описание типа метода.
       * @param argument {any} - Описание.
     * @returns {void}
     */
    move(argument: any): void;

    /**
      * Описание типа метода.
       * @param argument {any} - Описание.
     * @returns {void}
     */
    moveX(argument: any): void;

    /**
      * Описание типа метода.
       * @param argument {any} - Описание.
     * @returns {void}
     */
    moveY(argument: any): void;

    /**
      * Описание типа метода.
       * @param argument {any} - Описание.
     * @returns {void}
     */
    moveZ(argument: any): void;

    /**
      * Описание типа метода.
       * @param argument {any} - Описание.
     * @returns {void}
     */
    rotate(argument: any): void;

    /**
      * Описание типа метода.
       * @param argument {any} - Описание.
     * @returns {void}
     */
    rotateX(argument: any): void;

    /**
      * Описание типа метода.
       * @param argument {any} - Описание.
     * @returns {void}
     */
    rotateY(argument: any): void;

    /**
      * Описание типа метода.
       * @param argument {any} - Описание.
     * @returns {void}
     */
    rotateZ(argument: any): void;

    /**
      * Описание типа метода.
       * @param argument {any} - Описание.
     * @returns {void}
     */
    scale(argument: any): void;

    /**
      * Описание типа метода.
       * @param argument {any} - Описание.
     * @returns {void}
     */
    scaleX(argument: any): void;

    /**
      * Описание типа метода.
       * @param argument {any} - Описание.
     * @returns {void}
     */
    scaleXY(argument: any): void;

    /**
      * Описание типа метода.
       * @param argument {any} - Описание.
     * @returns {void}
     */
    scaleXYZ(argument: any): void;

    /**
      * Описание типа метода.
       * @param argument {any} - Описание.
     * @returns {void}
     */
    scaleXZ(argument: any): void;

    /**
      * Описание типа метода.
       * @param argument {any} - Описание.
     * @returns {void}
     */
    scaleY(argument: any): void;

    /**
      * Описание типа метода.
       * @param argument {any} - Описание.
     * @returns {void}
     */
    scaleYZ(argument: any): void;

    /**
      * Описание типа метода.
       * @param argument {any} - Описание.
     * @returns {void}
     */
    scaleZ(argument: any): void;

    /**
      * Описание типа метода.
       * @param argument {any} - Описание.
     * @returns {void}
     */
    toFileStep(argument: any): void;

    /**
      * Описание типа метода.
       * @param argument {any} - Описание.
     * @returns {void}
     */
    translate(argument: any): void;

    /**
      * Описание типа метода.
       * @param argument {any} - Описание.
     * @returns {void}
     */
    translateX(argument: any): void;

    /**
      * Описание типа метода.
       * @param argument {any} - Описание.
     * @returns {void}
     */
    translateY(argument: any): void;

    /**
      * Описание типа метода.
       * @param argument {any} - Описание.
     * @returns {void}
     */
    translateZ(argument: any): void;

    /**
      * Описание типа метода.
       * @param argument {any} - Описание.
     * @returns {void}
     */
    unify(argument: any): void;

    /**
      * Описание типа метода.
       * @param argument {any} - Описание.
     * @returns {void}
     */
    unite(argument: any): void;

};

/**
 * Тип Stator
 */
interface Stator {
    /**
      * Изменить Значение свойства. Это изменение можно отменить командой Undo в меню в графическом интерфейсе.
       * @param propName {string} - Имя свойства.
     * @param value {any} - Значение свойства.
     * @returns {boolean}
     */
    changeProperty(propName: string, value: any): boolean;

    /**
      * Истина, если в моторе элемент статора нижний.
       * @returns {undefined}
     */
    isLower(): void;

    /**
      * Истина, если в моторе элемент статора средний.
       * @returns {undefined}
     */
    isMiddle(): void;

    /**
      * Истина, если в моторе средний элемент статора с ярмом.
       * @returns {undefined}
     */
    isTypeMiddleYoke(): void;

    /**
      * Истина, если в моторе средний элемент статора без ярма.
       * @returns {undefined}
     */
    isTypeMiddleYokeless(): void;

    /**
      * Истина, если в моторе элемент статора верхний.
       * @returns {undefined}
     */
    isUpper(): void;

    /**
      * Описание типа метода.
       * @returns {undefined}
     */
    item(): void;

    /**
      * Угловое смещение элемента статора в градусах.
       * @returns {undefined}
     */
    itemAngularDisplacement(): void;

    /**
      * Задать угловое смещение элемента статора в градусах.
       * @returns {undefined}
     */
    setItemAngularDisplacement(): void;

    /**
    * Материал проводника статора.
    * @type {string}
    * @access Чтение\Запись
    */
     conductorMaterial: string;
    /**
    * Температура проводника статора в градусах Цельсия.
    * @type {number}
    * @access Чтение\Запись
    */
     conductorTemperature: number;
    /**
    * Количество элементов статора, зависит от motor.machineType.
    * @type {number}
    * @access Только Чтение
    */
    readonly countItems: number;
    /**
    * Внутрений диаметр
    * @type {number}
    * @access Чтение\Запись
    */
     innerDiameter: number;
    /**
    * Внутрений радиус.
    * @type {number}
    * @access Чтение\Запись
    */
     innerRadius: number;
    /**
    * Материал стали статора
    * @type {string}
    * @access Чтение\Запись
    */
     ironMaterial: string;
    /**
    * Коеффициент укладки железа статора.
    * @type {number}
    * @access Чтение\Запись
    */
     ironStacking: number;
    /**
    * Массив элементов статора, количество элементов статора зависит от значения Свойства типа motor.machineType.
    * @type {Array<StatorItem>}
    * @access Только Чтение
    */
    readonly items: Array<StatorItem>;
    /**
    * Имя скрипта
    * @type {string}
    * @access Тоько Чтение
    */
     nameScript: string;
    /**
    * Количество пазов.
    * @type {number}
    * @access Чтение\Запись
    */
     numberSlots: number;
    /**
    * Внешний диаметр.
    * @type {number}
    * @access Чтение\Запись
    */
     outerDiameter: number;
    /**
    * Внешний радиус
    * @type {number}
    * @access Чтение\Запись
    */
     outerRadius: number;
    /**
    * Имя файла скрипта
    * @type {string}
    * @access Тоько Чтение
    */
     script: string;
    /**
    * Угловой размер одного паза статора в градусах.
    * @type {number}
    * @access Тоько Чтение
    */
     slotAngleSpan: number;
    /**
    * Тип средней части статора.
    * @type {number}
    * @access Чтение\Запись
    */
     typeMiddleItem: number;
    /**
    * Материал обмотки статора.
    * @type {string}
    * @access Чтение\Запись
    */
     windingMaterial: string;
    /**
    * Температура обмотки статора в градусах Цельсия.
    * @type {number}
    * @access Чтение\Запись
    */
     windingTemperature: number;
};

/**
 * Тип StatorItem
 */
interface StatorItem {
    /**
      * Изменить Значение свойства. Это изменение можно отменить командой Undo в меню в графическом интерфейсе.
       * @param propName {string} - Имя свойства.
     * @param value {any} - Значение свойства.
     * @returns {boolean}
     */
    changeProperty(propName: string, value: any): boolean;

    /**
      * Истина, если в моторе элемент статора нижний.
       * @returns {undefined}
     */
    isLower(): void;

    /**
      * Истина, если в моторе элемент статора средний.
       * @returns {undefined}
     */
    isMiddle(): void;

    /**
      * Истина, если в моторе элемент статора верхний.
       * @returns {undefined}
     */
    isUpper(): void;

    /**
    * Описание типа метода.
    * @type {number}
    * @access Чтение\Запись
    */
     angularDisplacement: number;
    /**
    * Высота элемента.
    * @type {number}
    * @access Чтение\Запись
    */
     height: number;
    /**
    * Идентификатор элемента статора
    * @type {number}
    * @access Только Чтение
    */
    readonly id: number;
};

/**
 * Тип Vector3
 */
interface Vector3 {
    /**
      * Описание типа метода.
       * @param argument {any} - Описание.
     * @returns {void}
     */
    angle(argument: any): void;

    /**
      * Описание типа метода.
       * @param argument {any} - Описание.
     * @returns {void}
     */
    isZero(argument: any): void;

    /**
      * Описание типа метода.
       * @param argument {any} - Описание.
     * @returns {void}
     */
    lenght(argument: any): void;

    /**
      * Описание типа метода.
       * @param argument {any} - Описание.
     * @returns {void}
     */
    lenght2(argument: any): void;

    /**
    * The x property...
    * @type {number}
    * @access Чтение\Запись
    */
     x: number;
    /**
    * The y property...
    * @type {number}
    * @access Чтение\Запись
    */
     y: number;
    /**
    * The z property...
    * @type {number}
    * @access Чтение\Запись
    */
     z: number;
};

/**
 * Тип ExclamationIcon
 */
interface ExclamationIcon {
};

/**
 * Тип NumberEdit
 */
interface NumberEdit {
};

/**
 * Тип NumberSlotSpinBox
 */
interface NumberSlotSpinBox {
};

/**
 * Тип PoleArrangementComboBox
 */
interface PoleArrangementComboBox {
};

/**
 * Тип QCheckBox
 */
interface QCheckBox {
};

/**
 * Тип QComboBox
 */
interface QComboBox {
};

/**
 * Тип QDoubleSpinBox
 */
interface QDoubleSpinBox {
};

/**
 * Тип QFormLayout
 */
interface QFormLayout {
};

/**
 * Тип QGridLayout
 */
interface QGridLayout {
};

/**
 * Тип QGroupBox
 */
interface QGroupBox {
};

/**
 * Тип QLabel
 */
interface QLabel {
};

/**
 * Тип QLineEdit
 */
interface QLineEdit {
};

/**
 * Тип QPushButton
 */
interface QPushButton {
};

/**
 * Тип QSpinBox
 */
interface QSpinBox {
};

/**
 * Тип QWidget
 */
interface QWidget {
};

/**
 * Тип RotorConnectionComboBox
 */
interface RotorConnectionComboBox {
};

/**
 * Тип StatorConnectionComboBox
 */
interface StatorConnectionComboBox {
};

/**
 * Тип StatorTypeComboBox
 */
interface StatorTypeComboBox {
};

/**
 * Тип WarningIcon
 */
interface WarningIcon {
};

/**
 * Тип WindingLayersComboBox
 */
interface WindingLayersComboBox {
};

/**
 * Тип WindingLayersOrientationComboBox
 */
interface WindingLayersOrientationComboBox {
};

/**
 * Тип WindingTypeComboBox
 */
interface WindingTypeComboBox {
};

/**
 * Тип Winding
 */
interface Winding {
    /**
      * Изменить Значение свойства. Это изменение будет отменить командой Undo в меню в графическом интерфейсе.
       * @param propName {string} - Имя свойства.
     * @param value {any} - Значение свойства.
     * @returns {boolean}
     */
    changeProperty(propName: string, value: any): boolean;

    /**
      * Истина, если задан двойной слой.
       * @returns {boolean}
     */
    isDoubleLayer(): boolean;

    /**
      * Истина, если для двойного слоя задана ориентация обмотки Лево/Право.
       * @returns {boolean}
     */
    isOrientationLeftRight(): boolean;

    /**
      * Истина, если для двойного слоя задана ориентация обмотки Верх/Низ.
       * @returns {boolean}
     */
    isOrientationUpperLower(): boolean;

    /**
      * Истина, если тип обмотки планарный.
       * @returns {boolean}
     */
    isPlanar(): boolean;

    /**
      * Истина, если задан одинарный слой.
       * @returns {boolean}
     */
    isSingleLayer(): boolean;

    /**
      * Истина, если тип обмотки тороидальный.
       * @returns {boolean}
     */
    isToroidal(): boolean;

    /**
      * Истина, если задана модель Full.
       * @returns {boolean}
     */
    isWindingModelFull(): boolean;

    /**
      * Истина, если задана модель Lumped.
       * @returns {boolean}
     */
    isWindingModelLumped(): boolean;

    /**
    * The autoCalcCoilSpan property...
    * @type {boolean}
    * @access Чтение\Запись
    */
     autoCalcCoilSpan: boolean;
    /**
    * The autoCalcEndInductance property...
    * @type {boolean}
    * @access Чтение\Запись
    */
     autoCalcEndInductance: boolean;
    /**
    * The autoCalcOverhandEndturns property...
    * @type {boolean}
    * @access Чтение\Запись
    */
     autoCalcOverhandEndturns: boolean;
    /**
    * The autoCalcPhaseResistance property...
    * @type {boolean}
    * @access Чтение\Запись
    */
     autoCalcPhaseResistance: boolean;
    /**
    * The circuit property...
    * @type {number}
    * @access Чтение\Запись
    */
     circuit: number;
    /**
    * The сonnection property...
    * @type {string}
    * @access Чтение\Запись
    */
     сonnection: string;
    /**
    * The heightInnerEndturn property...
    * @type {number}
    * @access Чтение\Запись
    */
     heightInnerEndturn: number;
    /**
    * The heightOuterEndturn property...
    * @type {number}
    * @access Чтение\Запись
    */
     heightOuterEndturn: number;
    /**
    * The layersOrientation property...
    * @type {number}
    * @access Чтение\Запись
    */
     layersOrientation: number;
    /**
    * The numberLayers property...
    * @type {number}
    * @access Чтение\Запись
    */
     numberLayers: number;
    /**
    * The numberStrands property...
    * @type {number}
    * @access Чтение\Запись
    */
     numberStrands: number;
    /**
    * The numberTurns property...
    * @type {number}
    * @access Чтение\Запись
    */
     numberTurns: number;
    /**
    * The parallelPaths property...
    * @type {number}
    * @access Чтение\Запись
    */
     parallelPaths: number;
    /**
    * The radialOverhandOuterEndturn property...
    * @type {number}
    * @access Чтение\Запись
    */
     radialOverhandOuterEndturn: number;
    /**
    * The radialOverhandInnerEndturn property...
    * @type {number}
    * @access Чтение\Запись
    */
     radialOverhandInnerEndturn: number;
    /**
    * The type property...
    * @type {number}
    * @access Чтение\Запись
    */
     type: number;
    /**
    * The windingModel property...
    * @type {number}
    * @access Чтение\Запись
    */
     windingModel: number;
    /**
    * The wireSizeMethod property...
    * @type {number}
    * @access Чтение\Запись
    */
     wireSizeMethod: number;
};

