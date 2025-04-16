import os

# как запускать:
# cmd> python _genMdFiles.py
# Список путей к файлам
file_paths = [
  
    "types/Point3/index.md",
    "types/Point3/props/index.md",
    "types/Point3/props/x.md",
    "types/Point3/props/y.md",
    "types/Point3/props/z.md",
    "types/Point3/methods/index.md",
    "types/Point3/methods/distance.md",
    "types/Point3/methods/translate.md",
    "types/Point3/methods/translateX.md",
    "types/Point3/methods/translateY.md",
    "types/Point3/methods/translateY.md",
    "types/Point3/methods/move.md",
    "types/Point3/methods/moveX.md",
    "types/Point3/methods/moveY.md",
    "types/Point3/methods/moveZ.md",
    "types/Point3/methods/rotate.md",
    "types/Point3/methods/rotateX.md",
    "types/Point3/methods/rotateY.md",
    "types/Point3/methods/rotateZ.md",
    "types/Point3/methods/mirrorO.md",
    "types/Point3/methods/mirrorX.md",
    "types/Point3/methods/mirrorY.md",
    "types/Point3/methods/mirrorZ.md",
    "types/Point3/methods/mirrorXY.md",
    "types/Point3/methods/mirrorYZ.md",
    "types/Point3/methods/mirrorXZ.md",
    "types/Point3/methods/scale.md",
    "types/Point3/methods/scaleX.md",
    "types/Point3/methods/scaleY.md",
    "types/Point3/methods/scaleZ.md",
    "types/Point3/methods/scaleXY.md",
    "types/Point3/methods/scaleYZ.md",
    "types/Point3/methods/scaleXZ.md",
    "types/Point3/methods/scaleXYZ.md",
    "types/Vector3/index.md",
    "types/Vector3/props/index.md",
    "types/Vector3/props/x.md",
    "types/Vector3/props/y.md",
    "types/Vector3/props/z.md",
    "types/Vector3/methods/index.md",
    "types/Vector3/methods/lenght.md",
    "types/Vector3/methods/lenght2.md",
    "types/Vector3/methods/angle.md",
    "types/Vector3/methods/isZero.md",
    "types/Shape/index.md",
    "types/Shape/props/index.md",
    "types/Shape/methods/index.md",
    "types/Shape/methods/isEmpty.md",
    "types/Shape/methods/toFileSTEP.md",
    "types/Shape/methods/unite.md",
    "types/Shape/methods/intersect.md",
    "types/Shape/methods/difference.md",
    "types/Shape/methods/diff.md",
    "types/Shape/methods/extrude.md",
    "types/Shape/methods/extrudeX.md",
    "types/Shape/methods/extrudeY.md",
    "types/Shape/methods/extrudeZ.md",
    "types/Shape/methods/unify.md",
    "types/Shape/methods/center.md",
    "types/Shape/methods/boundBox.md",
    "types/Shape/methods/translate.md",
    "types/Shape/methods/translateX.md",
    "types/Shape/methods/translateY.md",
    "types/Shape/methods/translateY.md",
    "types/Shape/methods/move.md",
    "types/Shape/methods/moveX.md",
    "types/Shape/methods/moveY.md",
    "types/Shape/methods/moveZ.md",
    "types/Shape/methods/rotate.md",
    "types/Shape/methods/rotateX.md",
    "types/Shape/methods/rotateY.md",
    "types/Shape/methods/rotateZ.md",
    "types/Shape/methods/mirrorO.md",
    "types/Shape/methods/mirrorX.md",
    "types/Shape/methods/mirrorY.md",
    "types/Shape/methods/mirrorZ.md",
    "types/Shape/methods/mirrorXY.md",
    "types/Shape/methods/mirrorYZ.md",
    "types/Shape/methods/mirrorXZ.md",
    "types/Shape/methods/scale.md",
    "types/Shape/methods/scaleX.md",
    "types/Shape/methods/scaleY.md",
    "types/Shape/methods/scaleZ.md",
    "types/Shape/methods/scaleXY.md",
    "types/Shape/methods/scaleYZ.md",
    "types/Shape/methods/scaleXZ.md",
    "types/Shape/methods/scaleXYZ.md"
]

# Функция для создания файлов
def create_files(file_paths):
    for file_path in file_paths:
        # Создание директорий, если они не существуют
        directory = os.path.dirname(file_path)
        if directory and not os.path.exists(directory):
            os.makedirs(directory)
        
        # Получение имени файла без расширения
        file_name = os.path.basename(file_path).replace('.md', '')
        
        # Проверка, является ли файл index.md
        if file_name == "index":
            with open(file_path, 'w', encoding='utf-8') as file:
                file.write("")  # Оставляем файл пустым
            print(f"Файл создан (пустой): {file_path}")
            continue
        
        # Проверка, находится ли файл в папке props
        if "/props/" in file_path:
            # Шаблон для свойств (props)
            with open(file_path, 'w', encoding='utf-8') as file:
                file.write(f"# {file_name}\n\n")
                file.write("## Описание\n")
                file.write(f"The `{file_name}` property...\n\n")
                file.write("## Принимаемые значения:\n")
                file.write("...\n\n")
                file.write("## Тип значения свойства\n")
                file.write("`Number`\n\n")
                file.write("## Доступ\n")
                file.write("`Чтение\\Запись`\n\n")
                file.write("## Синтаксис\n")
                file.write("```javascript\n")
                file.write(f"{file_name} = value\n")
                file.write("```\n\n")
                file.write("## Пример\n")
                file.write("```javascript linenums=\"1\"\n")
                file.write(f"let result = motor.{file_name}\n")
                file.write(f"console.info(result)\n")
                file.write("```\n\n")
                file.write("!!! info \"См. также\"\n\n")
                file.write("    []()\n\n")
            print(f"Файл создан (props): {file_path}")
        else:
            # Шаблон для методов (methods)
            with open(file_path, 'w', encoding='utf-8') as file:
                file.write(f"# {file_name}()\n\n")
                file.write("## Описание\n")
                file.write("Описание метода.\n\n")
                file.write("## Синтаксис\n")
                file.write(f"```javascript\n{file_name}(argument: type) : returnType\n```\n\n")
                file.write("## Аргументы\n")
                file.write("- `argument` (type, обязательно): описание аргумента.\n\n")
                file.write("## Возвращаемое значение\n")
                file.write("`returnType`: описание возвращаемого значения.\n\n")
                file.write("## Пример\n")
                file.write("```javascript linenums=\"1\"\n")
                file.write(f"let result = {file_name}(value)\n")
                file.write("console.info(result)\n")
                file.write("```\n\n")
                file.write("!!! info \"См. также\"\n\n")
                file.write("    []()\n\n")
            print(f"Файл создан (methods): {file_path}")

# Вызов функции
create_files(file_paths)