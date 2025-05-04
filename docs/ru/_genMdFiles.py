import os

# как запускать:
# cmd> python _genMdFiles.py
# Список путей к файлам
file_paths = [

"types/widgets/index.md",
"types/widgets/WarningIcon.md",
"types/widgets/ExclamationIcon.md",
"types/widgets/NumberEdit.md",
"types/widgets/NumberSlotSpinBox.md",
"types/widgets/StatorTypeComboBox.md",
"types/widgets/WindingLayersComboBox.md",
"types/widgets/WindingLayersOrientationComboBox.md",
"types/widgets/WindingTypeComboBox.md",
"types/widgets/PoleArrangementComboBox.md",
"types/widgets/StatorConnectionComboBox.md",
"types/widgets/RotorConnectionComboBox.md",
"types/widgets/QWidget.md",
"types/widgets/QLabel.md",
"types/widgets/QLineEdit.md",
"types/widgets/QPushButton.md",
"types/widgets/QSpinBox.md",
"types/widgets/QDoubleSpinBox.md",
"types/widgets/QComboBox.md",
"types/widgets/QGroupBox.md",
"types/widgets/QCheckBox.md",
"types/widgets/QGridLayout.md",
"types/widgets/QFormLayout.md"

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
                file.write(f"```javascript\n{file_name}(argument: type) -> returnType\n```\n\n")
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