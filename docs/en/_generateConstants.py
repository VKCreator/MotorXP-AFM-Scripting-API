import os

# Список путей к файлам
file_paths = [
    # Stator
    "types/Stator/constants/index.md",
    "types/Stator/constants/Yokeless.md",
    "types/Stator/constants/Yoke.md",

    # StatorItem
    "types/StatorItem/constants/index.md",
    "types/StatorItem/constants/ID1.md",
    "types/StatorItem/constants/ID2.md",
    "types/StatorItem/constants/ID3.md",

    # Rotor
    "types/Rotor/constants/index.md",
    "types/Rotor/constants/Yokeless.md",
    "types/Rotor/constants/Yoke.md",

    # RotorItem
    "types/RotorItem/constants/index.md",
    "types/RotorItem/constants/ID1.md",
    "types/RotorItem/constants/ID2.md",
    "types/RotorItem/constants/ID3.md",

    # Winding
    "types/Winding/constants/index.md",
    "types/Winding/constants/Planar.md",
    "types/Winding/constants/Toroidal.md",
    "types/Winding/constants/SingleLayer.md",
    "types/Winding/constants/DoubleLayer.md",
    "types/Winding/constants/UpperLower.md",
    "types/Winding/constants/LeftRight.md",
    "types/Winding/constants/Star.md",
    "types/Winding/constants/Delta.md",
    "types/Winding/constants/Lumped.md",
    "types/Winding/constants/Full.md"
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
        
        # Шаблон для констант
        with open(file_path, 'w', encoding='utf-8') as file:
            file.write(f"# {file_name}\n\n")
            file.write("## Описание\n")
            file.write(f"Константа `{file_name}`.\n\n")
            file.write("## Значение\n")
            file.write("`Number`: значение константы.\n\n")
            file.write("## Пример\n")
            file.write("```javascript linenums=\"1\"\n")
            file.write(f"let value = Constants.{file_name};\n")
            file.write(f"console.info(value);\n")
            file.write("```\n\n")
            file.write("!!! info \"См. также\"\n\n")
            file.write("    []()\n\n")
        print(f"Файл создан: {file_path}")

# Вызов функции
create_files(file_paths)