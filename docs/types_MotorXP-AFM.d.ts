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
}

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
 * Встроенный объект console
 */
interface console {
    /**
     * Метод console.clear() очищает вывод консоли, удаляя все ранее зарегистрированные сообщения. Это полезно для сброса консоли и обеспечения чистого рабочего пространства при отладке или записи новой информации.
     * @returns {void} Пустое значение.
     */
    clear(): void;

    /**
     * Метод console.dir() отображает список свойств и методов указанного JavaScript-объекта. Он особенно полезен для проверки структуры и содержимого объектов, так как форматирует вывод в виде списка, что облегчает исследование вложенных свойств.
     * @param {any} obj - JavaScript-объект.
     * @returns {void} Пустое значение.
     */
    dir(obj: any): void;

    /**
     * Метод console.error() выводит сообщение об ошибке красным цветом в консоль, каждое сообщение помечается иконкой error. Он используется для указания на критические проблемы, которые требуют немедленного внимания. Он может принимать несколько аргументов и отображать их в одной строке.
     * @param {any} message1 - Текст сообщения.
     * @param {any} message2 - Текст сообщения.
     * @param {any} messageN - Текст сообщения.
     * @returns {void} Пустое значение.
     */
    error(message1: any, message2: any, messageN: any): void;

    /**
     * Метод console.info() выводит информационное сообщение зеленым цветом в консоль, каждое сообщение помечается иконкой info. Он похож на console.log(), но предназначен для информационных целей. Он может принимать несколько аргументов и отображать их в одной строке.
     * @param {any} message1 - Текст сообщения.
     * @param {any} message2 - Текст сообщения.
     * @param {any} messageN - Текст сообщения.
     * @returns {void} Пустое значение.
     */
    info(message1: any, message2: any, messageN: any): void;

    /**
     * Метод console.log() выводит сообщение серым цветом в консоль, каждое сообщение помечается иконкой bug. Он может принимать несколько аргументов и отображать их в одной строке.
     * @param {any} message1 - Текст сообщения.
     * @param {any} message2 - Текст сообщения.
     * @param {any} messageN - Текст сообщения.
     * @returns {void} Пустое значение.
     */
    log(message1: any, message2: any, messageN: any): void;

    /**
     * Метод console.info() выводит предупреждающее сообщение желтым цветом в консоль, каждое сообщение помечается иконкой warn. Данный метод используется для указания на потенциальные проблемы, которые не являются критичными, но должны быть устранены. Метод может принимать несколько аргументов и отображать их в одной строке.
     * @param {any} message1 - Текст сообщения.
     * @param {any} message2 - Текст сообщения.
     * @param {any} messageN - Текст сообщения.
     * @returns {void} Пустое значение.
     */
    warn(message1: any, message2: any, messageN: any): void;

}

/**
 * Встроенный объект Geom
 */
declare const Geom: {
    /**
     * Получить угол точки.
     * @param {number} x - Значение координаты X
     * @param {number} y - Значение координаты Y
     * @returns {number} Угол точки в градусах относительно центра координат [0,0]. Ноль соответствует направлению на три часа, увеличение угла — по часовой стрелке.
     */
    angle(x: number, y: number): number;

    /**
     * Угол между векторами.
     * @param {Vector3} v1 - Вектор 1.
     * @param {Vector3} v2 - Вектор 2.
     * @returns {number} Угол между векторами в градусах.
     */
    angleBetweenVectors(v1: Vector3, v2: Vector3): number;

    /**
     * Получить угол точки относительно центра координат [0,0,0] в плоскости YOZ.
     * @param {Point3} point - Точка в трёхмерном пространстве.
     * @returns {number} Угол точки в градусах относительно центра координат [0,0,0] в плоскости YOZ. Ноль соответствует направлению "на три часа", увеличение угла — по часовой стрелке.
     */
    angleX(point: Point3): number;

    /**
     * Получить угол точки относительно центра координат [0,0,0] в плоскости XOZ.
     * @param {Point3} point - Точка в трёхмерном пространстве.
     * @returns {number} Угол точки в градусах относительно центра координат [0,0,0] в плоскости XOZ. Ноль соответствует направлению "на три часа", увеличение угла — по часовой стрелке.
     */
    angleY(point: Point3): number;

    /**
     * Получить угол точки относительно центра координат [0,0,0] в плоскости XOY.
     * @param {Point3} point - Точка в трёхмерном пространстве
     * @returns {number} Угол точки в градусах относительно центра координат [0,0,0] в плоскости XOY. Ноль соответствует направлению "на три часа", увеличение угла — по часовой стрелке.
     */
    angleZ(point: Point3): number;

    /**
     * 2D дуга, строится в плоскости XOY, углы задаются в градусах, центр фигуры в точке [0,0,0].
     * @param {number} radius - Радиус дуги.
     * @param {number} angle - Угол дуги в градусах в диапазоне (0°, 360°), начальный угол равен 0.
     * @returns {Shape} Объект типа Shape, дуга.
     */
    arc(radius: number, angle: number): Shape;

    /**
     * 2D дуга, строится в плоскости XOY, углы задаются в градусах, центр фигуры в точке [0,0,0].
     * @param {number} radius - Радиус дуги.
     * @param {number} angle1 - Начальный угол дуги в градусах в диапазоне (0°, 360°).
     * @param {number} angle2 - Конечный угол дуги в градусах в диапазоне (0°, 360°).
     * @returns {Shape} Объект типа Shape, дуга.
     */
    arc(radius: number, angle1: number, angle2: number): Shape;

    /**
     * 2D дуга, строится в плоскости XOY, углы задаются в градусах, центр фигуры в точке [0,0,0].
     * @param {Point3} p1 - Первая точка, через которую проходит дуга.
     * @param {Point3} p2 - Вторая точка, через которую проходит дуга.
     * @param {Point3} p3 - Третья точка, через которую проходит дуга.
     * @returns {Shape} Объект типа Shape, дуга.
     */
    arc(p1: Point3, p2: Point3, p3: Point3): Shape;

    /**
     * Возвращает ограничивающую коробку тела.
     * @param {Shape} shp - Тело.
     * @returns {BoundingBox} Ограничивающая коробка тела.
     */
    boundingBox(shp: Shape): BoundingBox;

    /**
     * 3D примитив (объемный): параллелипипед, задаётся с указанием трёх размеров x, y, z и строится относительно точки [0,0,0].
     * @param {number} x - Размер параллелепипеда по оси X.
     * @param {number} y - Размер параллелепипеда по оси Y.
     * @param {number} z - Размер параллелепипеда по оси Z.
     * @returns {Shape} Параллелепипед.
     */
    box(x: number, y: number, z: number): Shape;

    /**
     * 3D примитив (объемный): параллелипипед, задаётся с указанием трёх размеров x, y, z и строится относительно точки [0,0,0].
     * @param {number} a - Размер куба.
     * @returns {Shape} Параллелепипед.
     */
    box(a: number): Shape;

    /**
     * B-spline — плавная 3D-линия, проходящая через все заданные точки. Задаётся массивом точек points.
     * @param {Array<Point3>} points - Массив точек для построения плавной кривой.
     * @param {boolean} [closed=false] - closed [default=false] - Флаг, определяющий замкнутость прямой.
     * @returns {Shape} B-spline.
     */
    bspline(points: Array<Point3>, closed?: boolean): Shape;

    /**
     * Операция взятия фаски тела. В отличие от скругления применяется только к объёмным телам.
Фаска задаётся расстоянием r, взятым от ребра до линии фаски и массивом ближайших точек refs.
     * @param {Shape} shp - Тело для снятия фаски.
     * @param {number} r - Расстояние, взятое от ребра до линии фаски.
     * @returns {Shape} Результат операции снятия фаски.
     */
    chamfer(shp: Shape, r: number): Shape;

    /**
     * Операция взятия фаски тела. В отличие от скругления применяется только к объёмным телам.
Фаска задаётся расстоянием r, взятым от ребра до линии фаски и массивом ближайших точек refs.
     * @param {Shape} shp - Тело для снятия фаски.
     * @param {number} r - Расстояние, взятое от ребра до линии фаски.
     * @param {Array<Point3>} refs - Массив ближайших точек refs к ребрам, подлежащим фаске.
     * @returns {Shape} Результат операции снятия фаски.
     */
    chamfer(shp: Shape, r: number, refs: Array<Point3>): Shape;

    /**
     * 2D круг или сектор круга, строится в плоскости XOY, углы задаются в градусах, центр фигуры в точке [0,0,0].
     * @param {number} radius - Радиус круга.
     * @returns {Shape} Объект типа Shape, круг или сектор круга.
     */
    circle(radius: number): Shape;

    /**
     * 2D круг или сектор круга, строится в плоскости XOY, углы задаются в градусах, центр фигуры в точке [0,0,0].
     * @param {number} radius - Радиус круга.
     * @param {number} angle - Угол сектора круга в градусах в диапазоне (0°, 360°), тело центрируется относительно оси OX.
     * @returns {Shape} Объект типа Shape, круг или сектор круга.
     */
    circle(radius: number, angle: number): Shape;

    /**
     * 2D круг или сектор круга, строится в плоскости XOY, углы задаются в градусах, центр фигуры в точке [0,0,0].
     * @param {number} radius - Радиус круга.
     * @param {number} angle1 - Начальный угол сектора круга в градусах в диапазоне (0°, 360°).
     * @param {number} angle2 - Конечный угол сектора круга в градусах в диапазоне (0°, 360°).
     * @returns {Shape} Объект типа Shape, круг или сектор круга.
     */
    circle(radius: number, angle1: number, angle2: number): Shape;

    /**
     * 3D примитив(объемный) -> втулка (цилиндр с осевым отверстием), задаётся с указанием внешненго радиуса r1, внутреннего радиуса r2 и высоты h и строится относительно точки [0,0,0]. Возможно построение сектора втулки с использованием параметра angle.
     * @param {number} r1 - Внешний радиус втулки.
     * @param {number} r2 - Внутренний радиус втулки.
     * @param {number} h - Высота втулки.
     * @returns {Shape} Объект типа Shape, втулка.
     */
    collar(r1: number, r2: number, h: number): Shape;

    /**
     * 3D примитив(объемный) -> втулка (цилиндр с осевым отверстием), задаётся с указанием внешненго радиуса r1, внутреннего радиуса r2 и высоты h и строится относительно точки [0,0,0]. Возможно построение сектора втулки с использованием параметра angle.
     * @param {number} r1 - Внешний радиус втулки.
     * @param {number} r2 - Внутренний радиус втулки.
     * @param {number} h - Высота втулки.
     * @param {number} angle - Угол сектора втулки в градусах, тело центрируется относительно оси OX.
     * @returns {Shape} Объект типа Shape, втулка.
     */
    collar(r1: number, r2: number, h: number, angle: number): Shape;

    /**
     * 3D примитив(объемный) -> конус, задаётся с указанием нижнего радиуса r1, верхнего радиуса r2 и высоты h и строится относительно точки [0,0,0].
Возможно построение сектора конуса с использованием параметра angle.
     * @param {number} r1 - Нижний радиус конуса.
     * @param {number} r2 - Верхний радиус конуса.
     * @param {number} h - Высота конуса.
     * @returns {Shape} Объект типа Shape, конус.
     */
    cone(r1: number, r2: number, h: number): Shape;

    /**
     * 3D примитив(объемный) -> конус, задаётся с указанием нижнего радиуса r1, верхнего радиуса r2 и высоты h и строится относительно точки [0,0,0].
Возможно построение сектора конуса с использованием параметра angle.
     * @param {number} r1 - Нижний радиус конуса.
     * @param {number} r2 - Верхний радиус конуса.
     * @param {number} h - Высота конуса.
     * @param {number} angle - Угол сектора конуса в градусах, тело центрируется относительно оси OX.
     * @returns {Shape} Объект типа Shape, конус.
     */
    cone(r1: number, r2: number, h: number, angle: number): Shape;

    /**
     * 3D примитив(объемный) -> цилиндр, задаётся с указанием радиуса r и высоты h и строится относительно точки [0,0,0].
Возможно построение сектора цилиндра с использованием параметра angle.
     * @param {number} r - Радиус цилиндра.
     * @param {number} h - Высота цилиндра.
     * @returns {Shape} Объект типа Shape, цилиндр.
     */
    cylinder(r: number, h: number): Shape;

    /**
     * 3D примитив(объемный) -> цилиндр, задаётся с указанием радиуса r и высоты h и строится относительно точки [0,0,0].
Возможно построение сектора цилиндра с использованием параметра angle.
     * @param {number} r - Радиус цилиндра.
     * @param {number} h - Высота цилиндра.
     * @param {number} angle - Угол сектора цилиндра в градусах, тело центрируется относительно оси OX.
     * @returns {Shape} Объект типа Shape, цилиндр.
     */
    cylinder(r: number, h: number, angle: number): Shape;

    /**
     * Перевод радиан в градусы.
     * @param {number} radians - Значение угла в радианах.
     * @returns {number} Значение угла в градусах.
     */
    deg(radians: number): number;

    /**
     * Булева операция: Разность двух или более тел.
     * @param {Shape} a - Тело 1.
     * @param {Shape} b - Тело 2.
     * @returns {Shape} Объект типа Shape, результат разности тел.
     */
    diff(a: Shape, b: Shape): Shape;

    /**
     * Булева операция: Разность двух или более тел.
     * @param {Array<Point3>} shapes - Массив тел для разности.
     * @returns {Shape} Объект типа Shape, результат разности тел.
     */
    diff(shapes: Array<Point3>): Shape;

    /**
     * Булева операция: Разность двух или более тел.
     * @param {Shape} a - Тело 1.
     * @param {Shape} b - Тело 2.
     * @returns {Shape} Объект типа Shape, результат разности тел.
     */
    difference(a: Shape, b: Shape): Shape;

    /**
     * Булева операция: Разность двух или более тел.
     * @param {Array<Point3>} shapes - Массив тел для разности.
     * @returns {Shape} Объект типа Shape, результат разности тел.
     */
    difference(shapes: Array<Point3>): Shape;

    /**
     * Расчитывает расстояние между двумя точками.
     * @param {Point3} p1 - Точка 1.
     * @param {Point3} p2 - Точка 2.
     * @returns {number} Расстояние между двумя точками.
     */
    distance(p1: Point3, p2: Point3): number;

    /**
     * 2D эллипс или сектор эллипса, строится в плоскости XOY, углы задаются в градусах, центр фигуры в точке [0,0,0].
     * @param {number} radius1 - Первый радиус эллипса.
     * @param {number} radius2 - Второй радиус эллипса.
     * @returns {Shape} Объект типа Shape, эллипс или сектор эллипса.
     */
    ellipse(radius1: number, radius2: number): Shape;

    /**
     * 2D эллипс или сектор эллипса, строится в плоскости XOY, углы задаются в градусах, центр фигуры в точке [0,0,0].
     * @param {number} radius1 - Первый радиус эллипса.
     * @param {number} radius2 - Второй радиус эллипса.
     * @param {number} angle1 - Начальный угол сектора эллипса в градусах в диапазоне (0°, 360°).
     * @param {number} angle2 - Конечный угол сектора эллипса в градусах в диапазоне (0°, 360°).
     * @returns {Shape} Объект типа Shape, эллипс или сектор эллипса.
     */
    ellipse(radius1: number, radius2: number, angle1: number, angle2: number): Shape;

    /**
     * Операция скругления тела. Если тело объёмное - модификации подвергаются ребра. Если плоское - вершины.
Скругления задаются радиусом r и масcивом ближайших точек refs к модифицируемым ребрам/вершинам.
     * @param {Shape} shp - Тело для скругления.
     * @param {number} r - Радиус скругления.
     * @returns {Shape} Объект типа Shape, результат операции скругления.
     */
    fillet(shp: Shape, r: number): Shape;

    /**
     * Операция скругления тела. Если тело объёмное - модификации подвергаются ребра. Если плоское - вершины.
Скругления задаются радиусом r и масcивом ближайших точек refs к модифицируемым ребрам/вершинам.
     * @param {Shape} shp - Тело для скругления.
     * @param {number} r - Радиус скругления.
     * @param {Array<Point3>} refs - Массив ближайших точек refs к ребрам или вершинам, подлежащим скруглению.
     * @returns {Shape} Объект типа Shape, результат операции скругления.
     */
    fillet(shp: Shape, r: number, refs: Array<Point3>): Shape;

    /**
     * Перевод координат точки из полярных координат (radius, angle) в декартовые координаты (x, y).
     * @param {number} radius - Радиус.
     * @param {number} angle - Угол в градусах.
     * @returns {point} Точка в декартовых координатах.
     */
    fromPolar(radius: number, angle: number): point;

    /**
     * Создается плоскость.
     * @param {Point3} [pos=Geom.point(0,0,0)] - pos [default=Geom.point(0,0,0)] - Позиция плоскости (точка, принадлежащая плоскости).
     * @param {Vector3} [dir=Geom.vector3(0,0,1)] - dir [default=Geom.vector3(0,0,1)] - Направление, вектор, перпендикулярный плоскости.
     * @returns {Shape} Объект типа Shape, плоскость.
     */
    infplane(pos?: Point3, dir?: Vector3): Shape;

    /**
     * Булева операция: получить пересечение двух или более тел.
     * @param {Shape} a - Тело 1.
     * @param {Shape} b - Тело 2.
     * @returns {Shape} Объект типа Shape, результат пересечения тел.
     */
    intersect(a: Shape, b: Shape): Shape;

    /**
     * Булева операция: получить пересечение двух или более тел.
     * @param {Array<Point3>} shapes - Массив тел для пересечения.
     * @returns {Shape} Объект типа Shape, результат пересечения тел.
     */
    intersect(shapes: Array<Point3>): Shape;

    /**
     * Возвращает true, если абсолютное значение arg меньше или равно eps.
     * @param {number} arg - Числовое значение, которое обрабатывается.
     * @param {number} [eps=Geom.EPSILON] - eps [default=Geom.EPSILON] - Погрешность сравнения чисел с плавающей точкой.
     * @returns {boolean} Результат выполнения операции.
     */
    isEpsilon(arg: number, eps?: number): boolean;

    /**
     * Возвращает true, если разница абсолютных значений arg₁ и arg₂ меньше или равно eps.
     * @param {number} arg1 - Первое числовое значение.
     * @param {number} arg2 - Второе числовое значение.
     * @param {number} [eps=Geom.EPSILON] - eps [default=Geom.EPSILON] - Погрешность сравнения чисел с плавающей точкой.
     * @returns {boolean} Результат выполнения операции.
     */
    isEqual(arg1: number, arg2: number, eps?: number): boolean;

    /**
     * Возвращает true, если значение arg₁ больше или равно значению arg₂ с учетом точности eps.
     * @param {number} arg1 - Первое числовое значение.
     * @param {number} arg2 - Второе числовое значение.
     * @param {number} [eps=Geom.EPSILON] - eps [default=Geom.EPSILON] - Погрешность сравнения чисел с плавающей точкой.
     * @returns {boolean} Результат выполнения операции.
     */
    isGreatEqual(arg1: number, arg2: number, eps?: number): boolean;

    /**
     * Возвращает true, если значение arg₁ меньше или равно значению arg₂ с учетом точности eps.
     * @param {number} arg1 - Первое числовое значение.
     * @param {number} arg2 - Второе числовое значение.
     * @param {number} [eps=Geom.EPSILON] - eps [default=Geom.EPSILON] - Погрешность сравнения чисел с плавающей точкой.
     * @returns {boolean} Результат выполнения операции.
     */
    isLessEqual(arg1: number, arg2: number, eps?: number): boolean;

    /**
     * Расчет среднего угла между углами a₁ и a₂ с учетом направления (CW — по часовой стрелке, CCW — против часовой стрелки).
     * @param {number} a1 - Первый угол (в градусах).
     * @param {number} a2 - Второй угол (в градусах).
     * @param {number} [dir=[Direction.CW | Direction.CCW]] - dir [default=[Direction.CW | Direction.CCW]] - Направление обхода. Возможные значения: Direction.CW (по часовой стрелке), Direction.CCW (против часовой стрелки).
     * @returns {number} Среднее значение угла (в градусах).
     */
    middleAngle(a1: number, a2: number, dir?: number): number;

    /**
     * 2D Правильный N-угольник, строится в плоскости XOY, центр фигуры в точке [0,0,0].
     * @param {number} radius - Радиус N-угольника (расстояние от центра до вершин).
     * @param {number} n - Количество углов N-угольника (допустимое значение: 3 и более).
     * @returns {Shape} Объект типа Shape, правильный N-угольник.
     */
    ngon(radius: number, n: number): Shape;

    /**
     * Нормализирует значение угла, возвращает значение в интервале (0°, 360°) градусов.
     * @param {number} a - Значение угла в градусах.
     * @returns {number} Нормализованное значение угла в интервале (0°, 360°).
     */
    normAngle(a: number): number;

    /**
     * Создает деталь мотора из геометрической формы и материала.
     * @param {Shape} shp - Геометрическая форма детали.
     * @param {ConductorMaterial|CustomMaterial|EmptyMaterial|EndturnMaterial|GeneralMaterial|IronMaterial|MagnetParallelMaterial|MagnetRadialMaterial} material - Материал детали.
     * @returns {Piece} Объект типа Piece, деталь мотора.
     */
    piece(shp: Shape, material: ConductorMaterial|CustomMaterial|EmptyMaterial|EndturnMaterial|GeneralMaterial|IronMaterial|MagnetParallelMaterial|MagnetRadialMaterial): Piece;

    /**
     * Создание точки в 3D пространстве.
     * @param {number} x - x координата точки.
     * @param {number} y - y координата точки.
     * @param {number} z - z координата точки.
     * @returns {Point3} Объект типа Point3, представляющий точку в трёхмерном пространстве.
     */
    point3(x: number, y: number, z: number): Point3;

    /**
     * Создание точки в 3D пространстве.
     * @param {point} p - Точка с координатами [x,y].
     * @param {number} z - z координата точки.
     * @returns {Point3} Объект типа Point3, представляющий точку в трёхмерном пространстве.
     */
    point3(p: point, z: number): Point3;

    /**
     * Возвращает точку в параметризованной позиции сегмента, указанной t. Метод возвращает начальную точку сегмента, если t = 0, и ее конечную точку, если t = 1.
     * @param {Point3} p1 - Первая точка сегмента.
     * @param {Point3} p2 - Вторая точка сегмента.
     * @param {number} t - Параметризованная позиция сегмента (обычно от 0 до 1).
     * @returns {Point3} Возвращает точку типа Point3.
     */
    pointAtSegment(p1: Point3, p2: Point3, t: number): Point3;

    /**
     * 2D Многоугольник, строится в плоскости XOY, центр фигуры в точке [0,0,0].
     * @param {Array<Point3>} points - Массив вершин многоугольника.
     * @returns {Shape} Объект типа Shape, представляющий многоугольник.
     */
    polygon(points: Array<Point3>): Shape;

    /**
     * Полисегмент - 3D-ломаная линия. Задаётся массивом точек points.
     * @param {Array<Point3>} points - Массив вершин полилинии.
     * @param {boolean} [closed=false] - closed [default=false] - Если true, полилиния замыкается от конца к началу.
     * @returns {Shape} Объект типа Shape, представляющий полилинию.
     */
    polysegment(points: Array<Point3>, closed?: boolean): Shape;

    /**
     * Перевод градусов в радианы.
     * @param {number} degrees - Значение угла в градусах.
     * @returns {number} Значение угла в радианах.
     */
    rad(degrees: number): number;

    /**
     * Радиус точки в 2D-пространстве.
     * @param {number} x - x-координата точки
     * @param {number} y - y-координата точки
     * @returns {number} Радиус точки с координатами [x,y] относительно точки [0,0].
     */
    radius(x: number, y: number): number;

    /**
     * Радиус точки в плоскости YOZ.
     * @param {Point3} point - Точка в трёхмерном пространстве.
     * @returns {number} Радиус точки относительно точки [0,0,0].
     */
    radiusX(point: Point3): number;

    /**
     * Радиус точки в плоскости YOZ.
     * @param {number} x - x-координата точки
     * @param {number} y - y-координата точки
     * @param {number} z - z-координата точки
     * @returns {number} Радиус точки относительно точки [0,0,0].
     */
    radiusX(x: number, y: number, z: number): number;

    /**
     * Радиус точки в плоскости XOZ, ноль - [0,0,0].
     * @param {Point3} point - Точка в трёхмерном пространстве.
     * @returns {number} Радиус точки относительно точки [0,0,0].
     */
    radiusY(point: Point3): number;

    /**
     * Радиус точки в плоскости XOZ, ноль - [0,0,0].
     * @param {number} x - x-координата точки
     * @param {number} y - y-координата точки
     * @param {number} z - z-координата точки
     * @returns {number} Радиус точки относительно точки [0,0,0].
     */
    radiusY(x: number, y: number, z: number): number;

    /**
     * Радиус точки в плоскости XOY, ноль - [0,0,0].
     * @param {Point3} point - Точка в трёхмерном пространстве.
     * @returns {number} Радиус точки относительно точки [0,0,0].
     */
    radiusZ(point: Point3): number;

    /**
     * Радиус точки в плоскости XOY, ноль - [0,0,0].
     * @param {number} x - x-координата точки
     * @param {number} y - y-координата точки
     * @param {number} z - z-координата точки
     * @returns {number} Радиус точки относительно точки [0,0,0].
     */
    radiusZ(x: number, y: number, z: number): number;

    /**
     * 2D Прямоугольник, строится в плоскости XOY, центр фигуры в точке [0,0,0].
     * @param {number} a - Сторона прямоугольника по X
     * @param {number} b - Сторона прямоугольника по Y
     * @returns {Shape} Объект типа Shape, представляющий прямоугольник.
     */
    rectangle(a: number, b: number): Shape;

    /**
     * 2D кольцо или сектор кольца, строится в плоскости XOY, углы задаются в градусах, центр фигуры в точке [0,0,0].
     * @param {number} radius1 - Наружный радиус кольца
     * @param {number} radius2 - Внутренний радиус кольца
     * @returns {Shape} Объект типа Shape, представляющий кольцо или его сектор.
     */
    ring(radius1: number, radius2: number): Shape;

    /**
     * 2D кольцо или сектор кольца, строится в плоскости XOY, углы задаются в градусах, центр фигуры в точке [0,0,0].
     * @param {number} radius1 - Наружный радиус кольца
     * @param {number} radius2 - Внутренний радиус кольца
     * @param {number} angle - Угол сектора кольца, от 0 до 360°. Тело центрируется относительно оси OX.
     * @returns {Shape} Объект типа Shape, представляющий кольцо или его сектор.
     */
    ring(radius1: number, radius2: number, angle: number): Shape;

    /**
     * 2D кольцо или сектор кольца, строится в плоскости XOY, углы задаются в градусах, центр фигуры в точке [0,0,0].
     * @param {number} radius1 - Наружный радиус кольца
     * @param {number} radius2 - Внутренний радиус кольца
     * @param {number} angle1 - Начальный угол сектора кольца (в градусах)
     * @param {number} angle2 - Конечный угол сектора кольца (в градусах)
     * @returns {Shape} Объект типа Shape, представляющий кольцо или его сектор.
     */
    ring(radius1: number, radius2: number, angle1: number, angle2: number): Shape;

    /**
     * Создание сечения.
     * @param {Shape} a - Первое тело для вычисления сечения
     * @param {Shape} b - Второе тело для вычисления сечения
     * @returns {Shape} Объект типа Shape, представляющий результат сечения двух тел.
     */
    section(a: Shape, b: Shape): Shape;

    /**
     * Создание 3D-отрезка. 3D-отрезок задаётся двумя точками.
     * @param {Point3} p1 - Начальная точка отрезка
     * @param {Point3} p2 - Конечная точка отрезка
     * @returns {Shape} Объект типа Shape, представляющий отрезок.
     */
    segment(p1: Point3, p2: Point3): Shape;

    /**
     * 3D примитив(объемный) -> сфера, строится относительно точки [0,0,0].
     * @param {number} r - Радиус сферы
     * @returns {Shape} Объект типа Shape, представляющий сферу.
     */
    sphere(r: number): Shape;

    /**
     * 3D примитив(объемный) -> сфера, строится относительно точки [0,0,0].
     * @param {number} r - Радиус сферы
     * @param {number} an1 - Первый угол поворота (в градусах)
     * @returns {Shape} Объект типа Shape, представляющий сферу.
     */
    sphere(r: number, an1: number): Shape;

    /**
     * 3D примитив(объемный) -> сфера, строится относительно точки [0,0,0].
     * @param {number} r - Радиус сферы
     * @param {number} an1 - Первый угол поворота (в градусах)
     * @param {number} an2 - Второй угол поворота (в градусах)
     * @returns {Shape} Объект типа Shape, представляющий сферу.
     */
    sphere(r: number, an1: number, an2: number): Shape;

    /**
     * 3D примитив(объемный) -> сфера, строится относительно точки [0,0,0].
     * @param {number} r - Радиус сферы
     * @param {number} an1 - Первый угол поворота (в градусах)
     * @param {number} an2 - Второй угол поворота (в градусах)
     * @param {number} an3 - Третий угол поворота (в градусах)
     * @returns {Shape} Объект типа Shape, представляющий сферу.
     */
    sphere(r: number, an1: number, an2: number, an3: number): Shape;

    /**
     * 2D Квадрат, строится в плоскости XOY, центр фигуры в точке [0,0,0].
     * @param {number} a - Сторона квадрата
     * @returns {Shape} Объект типа Shape, квадрат
     */
    square(a: number): Shape;

    /**
     * 3D примитив(объемный) -> тор, строится относительно точки [0,0,0].
     * @param {number} r1 - Большой радиус тора
     * @returns {Shape} Объект типа Shape, тор
     */
    torus(r1: number): Shape;

    /**
     * 3D примитив(объемный) -> тор, строится относительно точки [0,0,0].
     * @param {number} r1 - Большой радиус тора
     * @param {number} r2 - Малый радиус тора
     * @returns {Shape} Объект типа Shape, тор
     */
    torus(r1: number, r2: number): Shape;

    /**
     * 3D примитив(объемный) -> тор, строится относительно точки [0,0,0].
     * @param {number} r1 - Большой радиус тора
     * @param {number} r2 - Малый радиус тора
     * @param {number} ua - Угол поворота по оси U
     * @returns {Shape} Объект типа Shape, тор
     */
    torus(r1: number, r2: number, ua: number): Shape;

    /**
     * 3D примитив(объемный) -> тор, строится относительно точки [0,0,0].
     * @param {number} r1 - Большой радиус тора
     * @param {number} r2 - Малый радиус тора
     * @param {number} va1 - Начальный угол по оси V
     * @param {number} va2 - Конечный угол по оси V
     * @returns {Shape} Объект типа Shape, тор
     */
    torus(r1: number, r2: number, va1: number, va2: number): Shape;

    /**
     * 3D примитив(объемный) -> тор, строится относительно точки [0,0,0].
     * @param {number} r1 - Большой радиус тора
     * @param {number} r2 - Малый радиус тора
     * @param {number} va1 - Начальный угол по оси V
     * @param {number} va2 - Конечный угол по оси V
     * @param {number} ua - Угол поворота по оси U
     * @returns {Shape} Объект типа Shape, тор
     */
    torus(r1: number, r2: number, va1: number, va2: number, ua: number): Shape;

    /**
     * Упрощает геометрическое представление объекта, путём удаления лишних рёбер и объединения граней.
     * @param {Shape} shp - Тело для операции упрощения
     * @returns {Shape} Объект типа Shape, результат упрощения
     */
    unify(shp: Shape): Shape;

    /**
     * Булева операция: Объединить два или более тел.
     * @param {Shape} a - Первое тело для объединения
     * @param {Shape} b - Второе тело для объединения
     * @returns {Shape} Объект типа Shape, результат объединения
     */
    unite(a: Shape, b: Shape): Shape;

    /**
     * Булева операция: Объединить два или более тел.
     * @param {Array<Point3>} shapes - Массив тел для объединения
     * @returns {Shape} Объект типа Shape, результат объединения
     */
    unite(shapes: Array<Point3>): Shape;

    /**
     * Создание вектора в 3D-пространстве, задает направление и длину.
     * @param {number} x - x-координата точки
     * @param {number} y - y-координата точки
     * @param {number} z - z-координата точки
     * @returns {Vector3} Объект типа Vector3, трёхмерный вектор.
     */
    vector3(x: number, y: number, z: number): Vector3;

    /**
     * Создание вектора в 3D-пространстве, задает направление и длину.
     * @param {Point3} p - Точка, задающая начало вектора
     * @returns {Vector3} Объект типа Vector3, трёхмерный вектор.
     */
    vector3(p: Point3): Vector3;

    /**
     * Создание вектора в 3D-пространстве, задает направление и длину.
     * @param {Point3} p1 - Начальная точка вектора
     * @param {Point3} p2 - Конечная точка вектора
     * @returns {Vector3} Объект типа Vector3, трёхмерный вектор.
     */
    vector3(p1: Point3, p2: Point3): Vector3;

};

/**
 * Встроенный объект Material
 */
declare const Material: {
    /**
     * Материал для проводника.
     * @returns {ConductorMaterial} undefined
     */
    conductor(): ConductorMaterial;

    /**
     * Пользовательский материал с заданным цветом.
     * @param {color} [color=Qt.red] - color [default=Qt.red] - Цвет материала.
     * @returns {CustomMaterial} Объект типа CustomMaterial.
     */
    custom(color?: color): CustomMaterial;

    /**
     * Пустой материал.
     * @returns {EmptyMaterial} undefined
     */
    empty(): EmptyMaterial;

    /**
     * Материал для лобовых частей обмоток (Endturns).
     * @returns {EndturnMaterial} undefined
     */
    endturn(): EndturnMaterial;

    /**
     * Материал для воздушной среды.
     * @returns {GeneralMaterial} undefined
     */
    general(): GeneralMaterial;

    /**
     * Материал для железа.
     * @param {Array<Number>} [fillCoefs=[]] - fillCoefs [default=[]] - Коэффициент заполнения материала.
     * @param {number} [dsomaloy=0] - dsomaloy [default=0] - Наименьшее поперечное сечение компонента [м] для материала Somaloy.
     * @returns {IronMaterial} Объект типа IronMaterial.
     */
    iron(fillCoefs?: Array<Number>, dsomaloy?: number): IronMaterial;

    /**
     * Материал для магнита с параллельным намагничиванием.
     * @param {number} [angle=0] - angle [default=0] - Угол параллельного намагничивания.
     * @param {Array<Number>} [segmentRadiuses=[]] - segmentRadiuses [default=[]] - Массив радиусов сегментов магнита.
     * @param {boolean} [savePoleBorder=true] - savePoleBorder [default=true] - Если true — сохраняется граница между магнитами соседних полюсов.
     * @returns {MagnetParallelMaterial} Объект типа MagnetParallelMaterial.
     */
    magnetParallel(angle?: number, segmentRadiuses?: Array<Number>, savePoleBorder?: boolean): MagnetParallelMaterial;

    /**
     * Материал для магнита с радиальным намагничиванием.
     * @param {number} [direction=Magnetization.From] - direction [default=Magnetization.From] - Направление магнетизации.
     * @param {point} [center=Qt.point(0, 0)] - center [default=Qt.point(0, 0)] - Центр магнетизации.
     * @param {Array<Number>} [segmentRadiuses=[]] - segmentRadiuses [default=[]] - Массив радиусов сегментов магнита.
     * @returns {MagnetRadialMaterial} Объект типа MagnetRadialMaterial.
     */
    magnetRadial(direction?: number, center?: point, segmentRadiuses?: Array<Number>): MagnetRadialMaterial;

    /**
     * Материал для обмотки.
     * @param {number} [layer=Winding.LayerAuto] - layer [default=Winding.LayerAuto] - Номер слоя. Может быть: Winding.LayerAuto, Winding.LayerSingle, Winding.LayerDouble.
     * @param {number} [turn=0] - turn [default=0] - Номер витка.
     * @param {number} [strand=0] - strand [default=0] - Номер провода в витке.
     * @returns {WindingMaterial} Объект типа WindingMaterial.
     */
    winding(layer?: number, turn?: number, strand?: number): WindingMaterial;

};

/**
 * Встроенный объект Math
 */
interface Math {
    /**
     * Перевод радиан в градусы.
     * @param {number} radians - Значение угла в радианах.
     * @returns {number} Значение угла в градусах.
     */
    deg(radians: number): number;

    /**
     * Перевод координат точки из полярных координат (radius, angle) в декартовые координаты (x, y).
     * @param {number} radius - Радиус.
     * @param {number} angle - Угол в градусах.
     * @returns {point} Точка в декартовых координатах.
     */
    fromPolar(radius: number, angle: number): point;

    /**
     * Возвращает true, если абсолютное значение arg меньше или равно eps.
     * @param {number} arg - Числовое значение, которое обрабатывается.
     * @param {number} [eps=Math.EPSILON] - eps [default=Math.EPSILON] - Погрешность сравнения чисел с плавающей точкой.
     * @returns {boolean} Результат выполнения операции.
     */
    isEpsilon(arg: number, eps?: number): boolean;

    /**
     * Возвращает true, если разница абсолютных значений arg₁ и arg₂ меньше или равно eps.
     * @param {number} arg1 - Первое числовое значение.
     * @param {number} arg2 - Второе числовое значение.
     * @param {number} [eps=Math.EPSILON] - eps [default=Math.EPSILON] - Погрешность сравнения чисел с плавающей точкой.
     * @returns {boolean} Результат выполнения операции.
     */
    isEqual(arg1: number, arg2: number, eps?: number): boolean;

    /**
     * Возвращает true, если значение arg₁ больше или равно значению arg₂ с учетом точности eps.
     * @param {number} arg1 - Первое числовое значение.
     * @param {number} arg2 - Второе числовое значение.
     * @param {number} [eps=Math.EPSILON] - eps [default=Math.EPSILON] - Погрешность сравнения чисел с плавающей точкой.
     * @returns {boolean} Результат выполнения операции.
     */
    isGreatEqual(arg1: number, arg2: number, eps?: number): boolean;

    /**
     * Возвращает true, если значение arg₁ меньше или равно значению arg₂ с учетом точности eps.
     * @param {number} arg1 - Первое числовое значение.
     * @param {number} arg2 - Второе числовое значение.
     * @param {number} [eps=Math.EPSILON] - eps [default=Math.EPSILON] - Погрешность сравнения чисел с плавающей точкой.
     * @returns {boolean} Результат выполнения операции.
     */
    isLessEqual(arg1: number, arg2: number, eps?: number): boolean;

    /**
     * Расчет среднего угла между углами a₁ и a₂ с учетом направления (CW — по часовой стрелке, CCW — против часовой стрелки).
     * @param {number} a1 - Первый угол (в градусах).
     * @param {number} a2 - Второй угол (в градусах).
     * @param {number} [dir=[Direction.CW | Direction.CCW]] - dir [default=[Direction.CW | Direction.CCW]] - Направление обхода. Возможные значения: Direction.CW (по часовой стрелке), Direction.CCW (против часовой стрелки).
     * @returns {number} Среднее значение угла (в градусах).
     */
    middleAngle(a1: number, a2: number, dir?: number): number;

    /**
     * Нормализирует значение угла, возвращает значение в интервале (0°, 360°) градусов.
     * @param {number} a - Значение угла в градусах.
     * @returns {number} Нормализованное значение угла в интервале (0°, 360°).
     */
    normAngle(a: number): number;

    /**
     * Перевод градусов в радианы.
     * @param {number} degrees - Значение угла в градусах.
     * @returns {number} Значение угла в радианах.
     */
    rad(degrees: number): number;

}

/**
 * Встроенный объект motor
 */
declare const motor: {
    /**
     * Изменить значение свойства. Это изменение можно отменить командой Undo в меню в графическом интерфейсе.
     * @param {string} propName - Имя свойства.
     * @param {any} value - Значение свойства.
     * @returns {boolean} true, если успешно.
     */
    changeProperty(propName: string, value: any): boolean;

    /**
     * Истина, если тип машины RSR.
     * @returns {boolean} Истина, если тип машины RSR.
     */
    isMachineRSR(): boolean;

    /**
     * Истина, если тип машины RSRSR.
     * @returns {boolean} Истина, если тип машины RSRSR.
     */
    isMachineRSRSR(): boolean;

    /**
     * Истина, если тип машины SR.
     * @returns {boolean} Истина, если тип машины SR.
     */
    isMachineSR(): boolean;

    /**
     * Истина, если тип машины SRS.
     * @returns {boolean} Истина, если тип машины SRS.
     */
    isMachineSRS(): boolean;

    /**
     * Истина, если тип машины SRSRS.
     * @returns {boolean} Истина, если тип машины SRSRS.
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
 * Встроенный объект QtWidgets
 */
declare const QtWidgets: {
    /**
     * Описание метода.
     * @param {any} argument - Описание.
     * @returns {void} Описание возвращаемого значения.
     */
    createExclamationIcon(argument: any): void;

    /**
     * Описание метода.
     * @param {any} argument - Описание.
     * @returns {void} Описание возвращаемого значения.
     */
    createNumberEdit(argument: any): void;

    /**
     * Описание метода.
     * @param {any} argument - Описание.
     * @returns {void} Описание возвращаемого значения.
     */
    createNumberPoleSpinBox(argument: any): void;

    /**
     * Описание метода.
     * @param {any} argument - Описание.
     * @returns {void} Описание возвращаемого значения.
     */
    createNumberSlotSpinBox(argument: any): void;

    /**
     * Описание метода.
     * @param {any} argument - Описание.
     * @returns {void} Описание возвращаемого значения.
     */
    createPoleArrangementComboBox(argument: any): void;

    /**
     * Описание метода.
     * @param {any} argument - Описание.
     * @returns {void} Описание возвращаемого значения.
     */
    createQCheckBox(argument: any): void;

    /**
     * Описание метода.
     * @param {any} argument - Описание.
     * @returns {void} Описание возвращаемого значения.
     */
    createQComboBox(argument: any): void;

    /**
     * Описание метода.
     * @param {any} argument - Описание.
     * @returns {void} Описание возвращаемого значения.
     */
    createQDoubleSpinBox(argument: any): void;

    /**
     * Описание метода.
     * @param {any} argument - Описание.
     * @returns {void} Описание возвращаемого значения.
     */
    createQFormLayout(argument: any): void;

    /**
     * Описание метода.
     * @param {any} argument - Описание.
     * @returns {void} Описание возвращаемого значения.
     */
    createQGridLayout(argument: any): void;

    /**
     * Описание метода.
     * @param {any} argument - Описание.
     * @returns {void} Описание возвращаемого значения.
     */
    createQGroupBox(argument: any): void;

    /**
     * Описание метода.
     * @param {any} argument - Описание.
     * @returns {void} Описание возвращаемого значения.
     */
    createQLabel(argument: any): void;

    /**
     * Описание метода.
     * @param {any} argument - Описание.
     * @returns {void} Описание возвращаемого значения.
     */
    createQLineEdit(argument: any): void;

    /**
     * Описание метода.
     * @param {any} argument - Описание.
     * @returns {void} Описание возвращаемого значения.
     */
    createQPushButton(argument: any): void;

    /**
     * Описание метода.
     * @param {any} argument - Описание.
     * @returns {void} Описание возвращаемого значения.
     */
    createQSpinBox(argument: any): void;

    /**
     * Описание метода.
     * @param {any} argument - Описание.
     * @returns {void} Описание возвращаемого значения.
     */
    createQWidget(argument: any): void;

    /**
     * Описание метода.
     * @param {any} argument - Описание.
     * @returns {void} Описание возвращаемого значения.
     */
    createRotorTypeComboBox(argument: any): void;

    /**
     * Описание метода.
     * @param {any} argument - Описание.
     * @returns {void} Описание возвращаемого значения.
     */
    createStatorTypeComboBox(argument: any): void;

    /**
     * Описание метода.
     * @param {any} argument - Описание.
     * @returns {void} Описание возвращаемого значения.
     */
    createWarningIcon(argument: any): void;

    /**
     * Описание метода.
     * @param {any} argument - Описание.
     * @returns {void} Описание возвращаемого значения.
     */
    createWindingConnectionComboBox(argument: any): void;

    /**
     * Описание метода.
     * @param {any} argument - Описание.
     * @returns {void} Описание возвращаемого значения.
     */
    createWindingLayersComboBox(argument: any): void;

    /**
     * Описание метода.
     * @param {any} argument - Описание.
     * @returns {void} Описание возвращаемого значения.
     */
    createWindingLayersOrientationComboBox(argument: any): void;

    /**
     * Описание метода.
     * @param {any} argument - Описание.
     * @returns {void} Описание возвращаемого значения.
     */
    createWindingTypeComboBox(argument: any): void;

};

/**
 * Тип Airgap
 */
interface Airgap {
    /**
     * Изменить значение свойства. Это изменение можно отменить командой Undo в меню в графическом интерфейсе.
     * @param propName {string} - Имя свойства.
     * @param value {any} - Значение свойства.
     * @returns {boolean} true, если успешно.
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

}

/**
 * Тип BoundingBox
 */
interface BoundingBox {
    /**
     * ...
     * @returns {Shape} Объект типа Shape.
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

    /**
     * Середина по оси X.
     * @type {number}
     * @access Только Чтение
     */
    readonly xcenter: number;

    /**
     * Максимальное значение по оси X.
     * @type {number}
     * @access Только Чтение
     */
    readonly xmax: number;

    /**
     * Минимальное значение по оси X.
     * @type {number}
     * @access Только Чтение
     */
    readonly xmin: number;

    /**
     * Размер по оси X.
     * @type {number}
     * @access Только Чтение
     */
    readonly xsize: number;

    /**
     * Середина по оси Y.
     * @type {number}
     * @access Только Чтение
     */
    readonly ycenter: number;

    /**
     * Максимальное значение по оси Y.
     * @type {number}
     * @access Только Чтение
     */
    readonly ymax: number;

    /**
     * Минимальное значение по оси Y.
     * @type {number}
     * @access Только Чтение
     */
    readonly ymin: number;

    /**
     * Размер по оси Y.
     * @type {number}
     * @access Только Чтение
     */
    readonly ysize: number;

    /**
     * Середина по оси Z.
     * @type {number}
     * @access Только Чтение
     */
    readonly zcenter: number;

    /**
     * Максимальное значение по оси Z.
     * @type {number}
     * @access Только Чтение
     */
    readonly zmax: number;

    /**
     * Минимальное значение по оси Z.
     * @type {number}
     * @access Только Чтение
     */
    readonly zmin: number;

    /**
     * Размер по оси Z.
     * @type {number}
     * @access Только Чтение
     */
    readonly zsize: number;

}

/**
 * Тип ConductorMaterial
 */
interface ConductorMaterial {
}

/**
 * Тип CustomMaterial
 */
interface CustomMaterial {
    /**
     * Цвет материала.
     * @type {color}
     * @access Чтение\Запись
     */
     color: color;

}

/**
 * Тип EmptyMaterial
 */
interface EmptyMaterial {
}

/**
 * Тип EndturnMaterial
 */
interface EndturnMaterial {
}

/**
 * Тип GeneralMaterial
 */
interface GeneralMaterial {
}

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

}

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

}

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

}

/**
 * Тип WindingMaterial
 */
interface WindingMaterial {
    /**
     * Описание типа метода.
     * @param argument {any} - Описание.
     * @returns {void} Описание возвращаемого значения.
     */
    isWindingModelFull(argument: any): void;

    /**
     * Описание типа метода.
     * @param argument {any} - Описание.
     * @returns {void} Описание возвращаемого значения.
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

}

/**
 * Тип Mesh
 */
interface Mesh {
    /**
     * Изменить значение свойства. Это изменение можно отменить командой Undo в меню в графическом интерфейсе.
     * @param propName {string} - Имя свойства.
     * @param value {any} - Значение свойства.
     * @returns {boolean} true, если успешно.
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

}

/**
 * Тип Piece
 */
interface Piece {
    /**
     * Сохранить деталь в файле.
     * @param pathFile {string} - Полный путь к файлу или относительный путь от каталога приложения MotorXP-AFM_DS.
     * @returns {void} Пусто значение.
     */
    toFileSTEP(pathFile: string): void;

}

/**
 * Тип Point3
 */
interface Point3 {
    /**
     * Описание типа метода.
     * @param argument {any} - Описание аргумента.
     * @returns {void} Описание возвращаемого значения.
     */
    distance(argument?: any): void;

    /**
     * Описание типа метода.
     * @param argument {any} - Описание.
     * @returns {void} Описание возвращаемого значения.
     */
    mirrorO(argument: any): void;

    /**
     * Описание типа метода.
     * @param argument {any} - Описание.
     * @returns {void} Описание возвращаемого значения.
     */
    mirrorX(argument: any): void;

    /**
     * Описание типа метода.
     * @param argument {any} - Описание.
     * @returns {void} Описание возвращаемого значения.
     */
    mirrorXY(argument: any): void;

    /**
     * Описание типа метода.
     * @param argument {any} - Описание.
     * @returns {void} Описание возвращаемого значения.
     */
    mirrorXZ(argument: any): void;

    /**
     * Описание типа метода.
     * @param argument {any} - Описание.
     * @returns {void} Описание возвращаемого значения.
     */
    mirrorY(argument: any): void;

    /**
     * Описание типа метода.
     * @param argument {any} - Описание.
     * @returns {void} Описание возвращаемого значения.
     */
    mirrorYZ(argument: any): void;

    /**
     * Описание типа метода.
     * @param argument {any} - Описание.
     * @returns {void} Описание возвращаемого значения.
     */
    mirrorZ(argument: any): void;

    /**
     * Описание типа метода.
     * @param argument {any} - Описание.
     * @returns {void} Описание возвращаемого значения.
     */
    move(argument: any): void;

    /**
     * Описание типа метода.
     * @param argument {any} - Описание.
     * @returns {void} Описание возвращаемого значения.
     */
    moveX(argument: any): void;

    /**
     * Описание типа метода.
     * @param argument {any} - Описание.
     * @returns {void} Описание возвращаемого значения.
     */
    moveY(argument: any): void;

    /**
     * Описание типа метода.
     * @param argument {any} - Описание.
     * @returns {void} Описание возвращаемого значения.
     */
    moveZ(argument: any): void;

    /**
     * Описание типа метода.
     * @param argument {any} - Описание.
     * @returns {void} Описание возвращаемого значения.
     */
    rotate(argument: any): void;

    /**
     * Описание типа метода.
     * @param argument {any} - Описание.
     * @returns {void} Описание возвращаемого значения.
     */
    rotateX(argument: any): void;

    /**
     * Описание типа метода.
     * @param argument {any} - Описание.
     * @returns {void} Описание возвращаемого значения.
     */
    rotateY(argument: any): void;

    /**
     * Описание типа метода.
     * @param argument {any} - Описание.
     * @returns {void} Описание возвращаемого значения.
     */
    rotateZ(argument: any): void;

    /**
     * Описание типа метода.
     * @param argument {any} - Описание.
     * @returns {void} Описание возвращаемого значения.
     */
    scale(argument: any): void;

    /**
     * Описание типа метода.
     * @param argument {any} - Описание.
     * @returns {void} Описание возвращаемого значения.
     */
    scaleX(argument: any): void;

    /**
     * Описание типа метода.
     * @param argument {any} - Описание.
     * @returns {void} Описание возвращаемого значения.
     */
    scaleXY(argument: any): void;

    /**
     * Описание типа метода.
     * @param argument {any} - Описание.
     * @returns {void} Описание возвращаемого значения.
     */
    scaleXYZ(argument: any): void;

    /**
     * Описание типа метода.
     * @param argument {any} - Описание.
     * @returns {void} Описание возвращаемого значения.
     */
    scaleXZ(argument: any): void;

    /**
     * Описание типа метода.
     * @param argument {any} - Описание.
     * @returns {void} Описание возвращаемого значения.
     */
    scaleY(argument: any): void;

    /**
     * Описание типа метода.
     * @param argument {any} - Описание.
     * @returns {void} Описание возвращаемого значения.
     */
    scaleYZ(argument: any): void;

    /**
     * Описание типа метода.
     * @param argument {any} - Описание.
     * @returns {void} Описание возвращаемого значения.
     */
    scaleZ(argument: any): void;

    /**
     * Описание типа метода.
     * @param argument {any} - Описание.
     * @returns {void} Описание возвращаемого значения.
     */
    translate(argument: any): void;

    /**
     * Описание типа метода.
     * @param argument {any} - Описание.
     * @returns {void} Описание возвращаемого значения.
     */
    translateX(argument: any): void;

    /**
     * Описание типа метода.
     * @param argument {any} - Описание.
     * @returns {void} Описание возвращаемого значения.
     */
    translateY(argument: any): void;

    /**
     * Описание типа метода.
     * @param argument {any} - Описание.
     * @returns {void} Описание возвращаемого значения.
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

}

/**
 * Тип Rotor
 */
interface Rotor {
    /**
     * Изменить значение свойства. Это изменение можно отменить командой Undo в меню в графическом интерфейсе.
     * @param propName {string} - Имя свойства.
     * @param value {any} - Значение свойства.
     * @returns {boolean} true, если успешно.
     */
    changeProperty(propName: string, value: any): boolean;

    /**
     * Истина, если в моторе элемент ротора нижний.
     * @param itemID {number} - Идентификатор элемента ротора.
     * @returns {boolean} true, если в моторе элемент ротора нижний.
     */
    isLower(itemID: number): boolean;

    /**
     * Истина, если в моторе элемент ротора средний.
     * @param itemID {number} - Идентификатор элемента ротора.
     * @returns {boolean} true, если в моторе элемент ротора средний.
     */
    isMiddle(itemID: number): boolean;

    /**
     * Истина, если в моторе средний элемент ротора с ярмом.
     * @returns {boolean} true, если в моторе средний элемент ротора с ярмом.
     */
    isTypeMiddleYoke(): boolean;

    /**
     * Истина, если в моторе средний элемент ротора без ярма.
     * @returns {boolean} true, если в моторе средний элемент ротора без ярма.
     */
    isTypeMiddleYokeless(): boolean;

    /**
     * Истина, если в моторе элемент ротора верхний.
     * @param itemID {number} - Идентификатор элемента ротора.
     * @returns {boolean} true, если в моторе элемент ротора верхний.
     */
    isUpper(itemID: number): boolean;

    /**
     * Описание типа метода.
     * @param itemID {number} - Идентификатор элемента ротора.
     * @returns {RotorItem} Объект типа RotorItem.
     */
    item(itemID: number): RotorItem;

    /**
     * Угловое смещение элемента ротора в градусах.
     * @param itemID {number} - Идентификатор элемента ротора.
     * @returns {number} Угловое смещение элемента ротора в градусах.
     */
    itemAngularDisplacement(itemID: number): number;

    /**
     * Задать угловое смещение элемента ротора в градусах.
     * @param itemID {number} - Идентификатор элемента ротора.
     * @param angle {number} - Угловое смещение элемента ротора.
     * @returns {void} Пустое значение.
     */
    setItemAngularDisplacement(itemID: number, angle: number): void;

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
     * @access Только Чтение
     */
    readonly nameScript: string;

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
     * @access Только Чтение
     */
    readonly poleAngleSpan: number;

    /**
     * Расположение полюсов
     * @type {number}
     * @access Чтение\Запись
     */
     poleArrangement: number;

    /**
     * Имя файла скрипта
     * @type {string}
     * @access Только Чтение
     */
    readonly script: string;

    /**
     * Тип средней части ротора.
     * @type {number}
     * @access Чтение\Запись
     */
     typeMiddleItem: number;

}

/**
 * Тип RotorItem
 */
interface RotorItem {
    /**
     * Изменить значение свойства. Это изменение можно отменить командой Undo в меню в графическом интерфейсе.
     * @param propName {string} - Имя свойства.
     * @param value {any} - Значение свойства.
     * @returns {boolean} true, если успешно.
     */
    changeProperty(propName: string, value: any): boolean;

    /**
     * Флаг, показывающий положение элемента ротора. Истина, если элемент расположен в нижней части мотора.
     * @returns {boolean} true, если элемент ротора расположен в нижней части мотора.
     */
    isLower(): boolean;

    /**
     * Флаг, показывающий положение элемента ротора. Истина, если элемент расположен в средней части мотора.
     * @returns {boolean} true, если элемент ротора расположен в средней части мотора.
     */
    isMiddle(): boolean;

    /**
     * Флаг, показывающий положение элемента ротора. Истина, если элемент расположен в верхней части мотора.
     * @returns {boolean} true, если элемент ротора расположен в верхней части мотора.
     */
    isUpper(): boolean;

    /**
     * Угловое смещение элемента.
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
     * Идентификатор элемента статора.
     * @type {number}
     * @access Только Чтение
     */
    readonly id: number;

}

/**
 * Тип Shape
 */
interface Shape {
    /**
     * Описание типа метода.
     * @param argument {any} - Описание.
     * @returns {Shape} Описание возвращаемого значения.
     */
    boundBox(argument: any): Shape;

    /**
     * Описание типа метода.
     * @param argument {any} - Описание.
     * @returns {Shape} Описание возвращаемого значения.
     */
    center(argument: any): Shape;

    /**
     * Описание типа метода.
     * @param argument {any} - Описание.
     * @returns {Shape} Описание возвращаемого значения.
     */
    diff(argument: any): Shape;

    /**
     * Описание типа метода.
     * @param argument {any} - Описание.
     * @returns {Shape} Описание возвращаемого значения.
     */
    difference(argument: any): Shape;

    /**
     * Описание типа метода.
     * @param argument {any} - Описание.
     * @returns {Shape} Описание возвращаемого значения.
     */
    extrude(argument: any): Shape;

    /**
     * Описание типа метода.
     * @param argument {any} - Описание.
     * @returns {Shape} Описание возвращаемого значения.
     */
    extrudeX(argument: any): Shape;

    /**
     * Описание типа метода.
     * @param argument {any} - Описание.
     * @returns {Shape} Описание возвращаемого значения.
     */
    extrudeY(argument: any): Shape;

    /**
     * Описание типа метода.
     * @param argument {any} - Описание.
     * @returns {Shape} Описание возвращаемого значения.
     */
    extrudeZ(argument: any): Shape;

    /**
     * Описание типа метода.
     * @param argument {any} - Описание.
     * @returns {Shape} Описание возвращаемого значения.
     */
    intersect(argument: any): Shape;

    /**
     * Описание типа метода.
     * @param argument {any} - Описание.
     * @returns {Shape} Описание возвращаемого значения.
     */
    isEmpty(argument: any): Shape;

    /**
     * Описание типа метода.
     * @returns {Shape} Описание возвращаемого значения.
     */
    mirrorO(): Shape;

    /**
     * Описание типа метода.
     * @returns {Shape} Описание возвращаемого значения.
     */
    mirrorX(): Shape;

    /**
     * Описание типа метода.
     * @returns {Shape} Описание возвращаемого значения.
     */
    mirrorXY(): Shape;

    /**
     * Описание типа метода.
     * @returns {Shape} Описание возвращаемого значения.
     */
    mirrorXZ(): Shape;

    /**
     * Описание типа метода.
     * @returns {Shape} Описание возвращаемого значения.
     */
    mirrorY(): Shape;

    /**
     * Описание типа метода.
     * @returns {Shape} Описание возвращаемого значения.
     */
    mirrorYZ(): Shape;

    /**
     * Описание типа метода.
     * @returns {Shape} Описание возвращаемого значения.
     */
    mirrorZ(): Shape;

    /**
     * Описание типа метода.
     * @param argument {any} - Описание.
     * @returns {Shape} Описание возвращаемого значения.
     */
    move(argument: any): Shape;

    /**
     * Описание типа метода.
     * @param argument {any} - Описание.
     * @returns {Shape} Описание возвращаемого значения.
     */
    moveX(argument: any): Shape;

    /**
     * Описание типа метода.
     * @param argument {any} - Описание.
     * @returns {Shape} Описание возвращаемого значения.
     */
    moveY(argument: any): Shape;

    /**
     * Описание типа метода.
     * @param argument {any} - Описание.
     * @returns {Shape} Описание возвращаемого значения.
     */
    moveZ(argument: any): Shape;

    /**
     * Описание типа метода.
     * @param argument {any} - Описание.
     * @returns {Shape} Описание возвращаемого значения.
     */
    rotate(argument: any): Shape;

    /**
     * Описание типа метода.
     * @param argument {any} - Описание.
     * @returns {Shape} Описание возвращаемого значения.
     */
    rotateX(argument: any): Shape;

    /**
     * Описание типа метода.
     * @param argument {any} - Описание.
     * @returns {Shape} Описание возвращаемого значения.
     */
    rotateY(argument: any): Shape;

    /**
     * Описание типа метода.
     * @param argument {any} - Описание.
     * @returns {Shape} Описание возвращаемого значения.
     */
    rotateZ(argument: any): Shape;

    /**
     * Описание типа метода.
     * @param argument {any} - Описание.
     * @returns {Shape} Описание возвращаемого значения.
     */
    scale(argument: any): Shape;

    /**
     * Описание типа метода.
     * @param argument {any} - Описание.
     * @returns {Shape} Описание возвращаемого значения.
     */
    scaleX(argument: any): Shape;

    /**
     * Описание типа метода.
     * @param argument {any} - Описание.
     * @returns {Shape} Описание возвращаемого значения.
     */
    scaleXY(argument: any): Shape;

    /**
     * Описание типа метода.
     * @param argument {any} - Описание.
     * @returns {Shape} Описание возвращаемого значения.
     */
    scaleXYZ(argument: any): Shape;

    /**
     * Описание типа метода.
     * @param argument {any} - Описание.
     * @returns {Shape} Описание возвращаемого значения.
     */
    scaleXZ(argument: any): Shape;

    /**
     * Описание типа метода.
     * @param argument {any} - Описание.
     * @returns {Shape} Описание возвращаемого значения.
     */
    scaleY(argument: any): Shape;

    /**
     * Описание типа метода.
     * @param argument {any} - Описание.
     * @returns {Shape} Описание возвращаемого значения.
     */
    scaleYZ(argument: any): Shape;

    /**
     * Описание типа метода.
     * @param argument {any} - Описание.
     * @returns {Shape} Описание возвращаемого значения.
     */
    scaleZ(argument: any): Shape;

    /**
     * Описание типа метода.
     * @param argument {any} - Описание.
     * @returns {Shape} Описание возвращаемого значения.
     */
    toFileStep(argument: any): Shape;

    /**
     * Описание типа метода.
     * @param argument {any} - Описание.
     * @returns {Shape} Описание возвращаемого значения.
     */
    translate(argument: any): Shape;

    /**
     * Описание типа метода.
     * @param argument {any} - Описание.
     * @returns {Shape} Описание возвращаемого значения.
     */
    translateX(argument: any): Shape;

    /**
     * Описание типа метода.
     * @param argument {any} - Описание.
     * @returns {Shape} Описание возвращаемого значения.
     */
    translateY(argument: any): Shape;

    /**
     * Описание типа метода.
     * @param argument {any} - Описание.
     * @returns {Shape} Описание возвращаемого значения.
     */
    translateZ(argument: any): Shape;

    /**
     * Описание типа метода.
     * @param argument {any} - Описание.
     * @returns {Shape} Описание возвращаемого значения.
     */
    unify(argument: any): Shape;

    /**
     * Описание типа метода.
     * @param argument {any} - Описание.
     * @returns {Shape} Описание возвращаемого значения.
     */
    unite(argument: any): Shape;

}

/**
 * Тип Stator
 */
interface Stator {
    /**
     * Изменить значение свойства. Это изменение можно отменить командой Undo в меню в графическом интерфейсе.
     * @param propName {string} - Имя свойства.
     * @param value {any} - Значение свойства.
     * @returns {boolean} true, если успешно.
     */
    changeProperty(propName: string, value: any): boolean;

    /**
     * Истина, если в моторе элемент статора нижний.
     * @param itemID {number} - Идентификатор элемента статора.
     * @returns {boolean} true, если в моторе элемент статора нижний.
     */
    isLower(itemID: number): boolean;

    /**
     * Истина, если в моторе элемент статора средний.
     * @param itemID {number} - Идентификатор элемента статора.
     * @returns {boolean} true, если в моторе элемент статора средний.
     */
    isMiddle(itemID: number): boolean;

    /**
     * Истина, если в моторе средний элемент статора с ярмом.
     * @returns {boolean} true, если в моторе средний элемент статора с ярмом.
     */
    isTypeMiddleYoke(): boolean;

    /**
     * Истина, если в моторе средний элемент статора без ярма.
     * @returns {boolean} true, если в моторе средний элемент статора без ярма.
     */
    isTypeMiddleYokeless(): boolean;

    /**
     * Истина, если в моторе элемент статора верхний.
     * @param itemID {number} - Идентификатор элемента статора.
     * @returns {boolean} true, если в моторе элемент статора верхний.
     */
    isUpper(itemID: number): boolean;

    /**
     * Описание типа метода.
     * @param itemID {number} - Идентификатор элемента статора.
     * @returns {StatorItem} Объект типа StatorItem.
     */
    item(itemID: number): StatorItem;

    /**
     * Угловое смещение элемента статора в градусах.
     * @param itemID {number} - Идентификатор элемента статора.
     * @returns {number} Угловое смещение элемента статора в градусах.
     */
    itemAngularDisplacement(itemID: number): number;

    /**
     * Задать угловое смещение элемента статора в градусах.
     * @param itemID {number} - Идентификатор элемента статора.
     * @param angle {number} - Угловое смещение элемента статора.
     * @returns {void} Пустое значение.
     */
    setItemAngularDisplacement(itemID: number, angle: number): void;

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
     * Внутренний диаметр
     * @type {number}
     * @access Чтение\Запись
     */
     innerDiameter: number;

    /**
     * Внутренний радиус.
     * @type {number}
     * @access Чтение\Запись
     */
     innerRadius: number;

    /**
     * Материал стали статора.
     * @type {string}
     * @access Чтение\Запись
     */
     ironMaterial: string;

    /**
     * Коэффициент укладки железа статора.
     * @type {number}
     * @access Чтение\Запись
     */
     ironStacking: number;

    /**
     * Массив элементов статора, количество элементов статора зависит от значения свойства motor.machineType.
     * @type {Array<StatorItem>}
     * @access Только Чтение
     */
    readonly items: Array<StatorItem>;

    /**
     * Имя скрипта.
     * @type {string}
     * @access Только Чтение
     */
    readonly nameScript: string;

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
     * Внешний радиус.
     * @type {number}
     * @access Чтение\Запись
     */
     outerRadius: number;

    /**
     * Имя файла скрипта.
     * @type {string}
     * @access Только Чтение
     */
    readonly script: string;

    /**
     * Угловой размер одного паза статора в градусах.
     * @type {number}
     * @access Только Чтение
     */
    readonly slotAngleSpan: number;

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

}

/**
 * Тип StatorItem
 */
interface StatorItem {
    /**
     * Изменить значение свойства. Это изменение можно отменить командой Undo в меню в графическом интерфейсе.
     * @param propName {string} - Имя свойства.
     * @param value {any} - Значение свойства.
     * @returns {boolean} true, если успешно.
     */
    changeProperty(propName: string, value: any): boolean;

    /**
     * Флаг, показывающий положение элемента статора. Истина, если элемент расположен в нижней части мотора.
     * @returns {boolean} true, если элемент статора расположен в нижней части мотора.
     */
    isLower(): boolean;

    /**
     * Флаг, показывающий положение элемента статора. Истина, если элемент расположен в средней части мотора.
     * @returns {boolean} true, если элемент статора расположен в средней части мотора.
     */
    isMiddle(): boolean;

    /**
     * Флаг, показывающий положение элемента статора. Истина, если элемент расположен в верхней части мотора.
     * @returns {boolean} true, если элемент статора расположен в верхней части мотора.
     */
    isUpper(): boolean;

    /**
     * Угловое смещение элемента.
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
     * Идентификатор элемента статора.
     * @type {number}
     * @access Только Чтение
     */
    readonly id: number;

}

/**
 * Тип Vector3
 */
interface Vector3 {
    /**
     * Описание типа метода.
     * @param argument {any} - Описание.
     * @returns {void} Описание возвращаемого значения.
     */
    angle(argument: any): void;

    /**
     * Описание типа метода.
     * @param argument {any} - Описание.
     * @returns {void} Описание возвращаемого значения.
     */
    isZero(argument: any): void;

    /**
     * Описание типа метода.
     * @param argument {any} - Описание.
     * @returns {void} Описание возвращаемого значения.
     */
    lenght(argument: any): void;

    /**
     * Описание типа метода.
     * @param argument {any} - Описание.
     * @returns {void} Описание возвращаемого значения.
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

}

/**
 * Тип ExclamationIcon
 */
interface ExclamationIcon {
}

/**
 * Тип NumberEdit
 */
interface NumberEdit {
}

/**
 * Тип NumberSlotSpinBox
 */
interface NumberSlotSpinBox {
}

/**
 * Тип PoleArrangementComboBox
 */
interface PoleArrangementComboBox {
}

/**
 * Тип QCheckBox
 */
interface QCheckBox {
}

/**
 * Тип QComboBox
 */
interface QComboBox {
}

/**
 * Тип QDoubleSpinBox
 */
interface QDoubleSpinBox {
}

/**
 * Тип QFormLayout
 */
interface QFormLayout {
}

/**
 * Тип QGridLayout
 */
interface QGridLayout {
}

/**
 * Тип QGroupBox
 */
interface QGroupBox {
}

/**
 * Тип QLabel
 */
interface QLabel {
}

/**
 * Тип QLineEdit
 */
interface QLineEdit {
}

/**
 * Тип QPushButton
 */
interface QPushButton {
}

/**
 * Тип QSpinBox
 */
interface QSpinBox {
}

/**
 * Тип QWidget
 */
interface QWidget {
}

/**
 * Тип RotorConnectionComboBox
 */
interface RotorConnectionComboBox {
}

/**
 * Тип StatorConnectionComboBox
 */
interface StatorConnectionComboBox {
}

/**
 * Тип StatorTypeComboBox
 */
interface StatorTypeComboBox {
}

/**
 * Тип WarningIcon
 */
interface WarningIcon {
}

/**
 * Тип WindingLayersComboBox
 */
interface WindingLayersComboBox {
}

/**
 * Тип WindingLayersOrientationComboBox
 */
interface WindingLayersOrientationComboBox {
}

/**
 * Тип WindingTypeComboBox
 */
interface WindingTypeComboBox {
}

/**
 * Тип Winding
 */
interface Winding {
    /**
     * Изменить значение свойства. Это изменение будет отменить командой Undo в меню в графическом интерфейсе.
     * @param propName {string} - Имя свойства.
     * @param value {any} - Значение свойства.
     * @returns {boolean} true, если успешно.
     */
    changeProperty(propName: string, value: any): boolean;

    /**
     * Истина, если задан двойной слой.
     * @returns {boolean} Истина, если задан двойной слой.
     */
    isDoubleLayer(): boolean;

    /**
     * Истина, если для двойного слоя задана ориентация обмотки Лево/Право.
     * @returns {boolean} Истина, если для двойного слоя задана ориентация обмотки Лево/Право.
     */
    isOrientationLeftRight(): boolean;

    /**
     * Истина, если для двойного слоя задана ориентация обмотки Верх/Низ.
     * @returns {boolean} Истина, если для двойного слоя задана ориентация обмотки Верх/Низ.
     */
    isOrientationUpperLower(): boolean;

    /**
     * Истина, если тип обмотки планарный.
     * @returns {boolean} Истина, если тип обмотки планарный.
     */
    isPlanar(): boolean;

    /**
     * Истина, если задан одинарный слой.
     * @returns {boolean} Истина, если задан одинарный слой.
     */
    isSingleLayer(): boolean;

    /**
     * Истина, если тип обмотки тороидальный.
     * @returns {boolean} Истина, если тип обмотки тороидальный.
     */
    isToroidal(): boolean;

    /**
     * Истина, если задана модель Full.
     * @returns {boolean} Истина, если задана модель Full.
     */
    isWindingModelFull(): boolean;

    /**
     * Истина, если задана модель Lumped.
     * @returns {boolean} Истина, если задана модель Lumped.
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

}


interface point {
    /**
     * x coordinate
     * @type {number}
     * @access Чтение\Запись
     */
    x: number;

    /**
     * y coordinate.
     * @type {number}
     * @access Чтение\Запись
     */
    y: number;
}

interface color {
    /**
     * alpha
     * @type {number}
     * @access Чтение\Запись
     */
    a: number;

    /**
     * blue channel
     * @type {number}
     * @access Чтение\Запись
     */
    b: number;

    /**
     * green channel
     * @type {number}
     * @access Чтение\Запись
     */
    g: number;

    /**
     * hue (HSL)
     * @type {number}
     * @access Чтение\Запись
     */
    hslHue: number;

    /**
     * lightness (HSL)
     * @type {number}
     * @access Чтение\Запись
     */
    hslLightness: number;

    /**
     * saturation (HSL)
     * @type {number}
     * @access Чтение\Запись
     */
    hslSaturation: number;

    /**
     * hue (HSV)
     * @type {number}
     * @access Чтение\Запись
     */
    hsvHue: number;

    /**
     * saturation (HSV)
     * @type {number}
     * @access Чтение\Запись
     */
    hsvSaturation: number;

    /**
     * value (HSV)
     * @type {number}
     * @access Чтение\Запись
     */
    hsvValue: number;

    /**
     * red channel
     * @type {number}
     * @access Чтение\Запись
     */
    r: number;

    /**
     * is valid
     * @type {boolean}
     * @access Только Чтение
     */
    valid: boolean;
}
