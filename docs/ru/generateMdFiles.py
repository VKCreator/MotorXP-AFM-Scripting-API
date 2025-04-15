import os

# Список путей к файлам
file_paths = [
    "embeddedObjects/Geom/methods/index.md",
    "embeddedObjects/Geom/methods/angle.md",
    "embeddedObjects/Geom/methods/angleX.md",
    "embeddedObjects/Geom/methods/angleY.md",
    "embeddedObjects/Geom/methods/angleZ.md",
    "embeddedObjects/Geom/methods/angleBetweenVectors.md",
    "embeddedObjects/Geom/methods/radius.md",
    "embeddedObjects/Geom/methods/radiusX.md",
    "embeddedObjects/Geom/methods/radiusY.md",
    "embeddedObjects/Geom/methods/radiusZ.md",
    "embeddedObjects/Geom/methods/vector3.md",
    "embeddedObjects/Geom/methods/point3.md",
    "embeddedObjects/Geom/methods/segment.md",
    "embeddedObjects/Geom/methods/polysegment.md",
    "embeddedObjects/Geom/methods/bspline.md",
    "embeddedObjects/Geom/methods/arc.md",
    "embeddedObjects/Geom/methods/circle.md",
    "embeddedObjects/Geom/methods/ellipse.md",
    "embeddedObjects/Geom/methods/ring.md",
    "embeddedObjects/Geom/methods/ngon.md",
    "embeddedObjects/Geom/methods/square.md",
    "embeddedObjects/Geom/methods/rectangle.md",
    "embeddedObjects/Geom/methods/polygon.md",
    "embeddedObjects/Geom/methods/infplane.md"
]

# Функция для создания файлов
def create_files(file_paths):
    for file_path in file_paths:
        # Создание директорий, если они не существуют
        directory = os.path.dirname(file_path)
        if directory and not os.path.exists(directory):
            os.makedirs(directory)
        
        # Получение имени метода из пути файла
        method_name = os.path.basename(file_path).replace('.md', '')
        
        # Создание файла с кодировкой UTF-8
        with open(file_path, 'w', encoding='utf-8') as file:
            file.write(f"# {method_name}()\n\n")
            file.write("## Описание\n")
            file.write("Описание метода.\n\n")
            file.write("## Синтаксис\n")
            file.write(f"```javascript\n{method_name}(arguments) : returnType\n```\n\n")
            file.write("## Аргументы\n")
            file.write("- `argument` (type, обязательно): описание аргумента.\n\n")
            file.write("## Возвращаемое значение\n")
            file.write("- `returnType`: описание возвращаемого значения.\n\n")
            file.write("## Пример\n")
            file.write("```javascript linenums=\"1\"\n")
            file.write(f"let result = {method_name}(value);\n")
            file.write("console.info(result);\n")
            file.write("```\n\n")
            file.write("!!! info \"См. также\"\n\n")
            file.write("    [Math.rad()](rad.md)\n\n")
            file.write("    [Math.normAngle()](normAngle.md)\n\n")
            file.write("    [Math.middleAngle()](middleAngle.md)\n")
        
        print(f"Файл создан: {file_path}")

# Вызов функции
create_files(file_paths)