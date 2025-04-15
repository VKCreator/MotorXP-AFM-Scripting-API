import os

# Список путей к файлам
file_paths = [
    
    # Stator
    "types/Stator/index.md",
    "types/Stator/props/index.md",
    "types/Stator/props/objectName.md",
    "types/Stator/props/outerDiameter.md",
    "types/Stator/props/outerRadius.md",
    "types/Stator/props/innerDiameter.md",
    "types/Stator/props/innerRadius.md",
    "types/Stator/props/numberSlots.md",
    "types/Stator/props/slotAngleSpan.md",
    "types/Stator/props/typeMiddleItem.md",
    "types/Stator/props/ironMaterial.md",
    "types/Stator/props/ironStacking.md",
    "types/Stator/props/windingMaterial.md",
    "types/Stator/props/windingTemperature.md",
    "types/Stator/props/script.md",
    "types/Stator/props/nameScript.md",
    "types/Stator/props/countItem.md",
    "types/Stator/props/items.md",
    "types/Stator/props/simDomain.md",
    "types/Stator/props/simRadialOuterDomain.md",
    "types/Stator/methods/index.md",
    "types/Stator/methods/item.md",
    "types/Stator/methods/isLower.md",
    "types/Stator/methods/isMiddle.md",
    "types/Stator/methods/isUpper.md",
    "types/Stator/methods/itemAngularDisplacement.md",
    "types/Stator/methods/setItemAngularDisplacement.md",

    # StatorItem
    "types/StatorItem/index.md",
    "types/StatorItem/props/index.md",
    "types/StatorItem/props/objectName.md",
    "types/StatorItem/props/id.md",
    "types/StatorItem/props/height.md",
    "types/Stator/statorItem/index.md",
    "types/StatorItem/methods/isUpper.md",
    "types/StatorItem/methods/isMiddle.md",
    "types/StatorItem/methods/isLower.md",
    "types/StatorItem/methods/angularDisplacement.md",
    "types/StatorItem/methods/setAngularDisplacement.md",

    # Rotor
    "types/Rotor/index.md",
    "types/Rotor/props/index.md",
    "types/Rotor/props/outerDiameter.md",
    "types/Rotor/props/outerRadius.md",
    "types/Rotor/props/innerDiameter.md",
    "types/Rotor/props/innerRadius.md",
    "types/Rotor/props/numberPolePairs.md",
    "types/Rotor/props/poleAngleSpan.md",
    "types/Rotor/props/poleArrangement.md",
    "types/Rotor/props/typeMiddleItem.md",
    "types/Rotor/props/ironStacking.md",
    "types/Rotor/props/ironMaterial.md",
    "types/Rotor/props/magnetTemperature.md",
    "types/Rotor/props/magnetMaterial.md",
    "types/Rotor/props/conductorTemperature.md",
    "types/Rotor/props/conductorMaterial.md",
    "types/Rotor/props/script.md",
    "types/Rotor/props/nameScript.md",
    "types/Rotor/props/countItem.md",
    "types/Rotor/props/items.md",
    "types/Rotor/props/simDomain.md",
    "types/Rotor/props/simRadialOuterDomain.md",
    "types/Rotor/methods/index.md",
    "types/Rotor/methods/item.md",
    "types/Rotor/methods/isLower.md",
    "types/Rotor/methods/isMiddle.md",
    "types/Rotor/methods/isUpper.md",
    "types/Rotor/methods/itemAngularDisplacement.md",
    "types/Rotor/methods/setItemAngularDisplacement.md",

    # RotorItem
    "types/RotorItem/index.md",
    "types/RotorItem/props/index.md",
    "types/RotorItem/props/id.md",
    "types/RotorItem/props/height.md",
    "types/RotorItem/props/angularDisplacement.md",
    "types/RotorItem/methods/index.md",
    "types/RotorItem/methods/isUpper.md",
    "types/RotorItem/methods/isMiddle.md",
    "types/RotorItem/methods/isLower.md",
    "types/RotorItem/methods/angularDisplacement.md",
    "types/RotorItem/methods/setAngularDisplacement.md",

    # Winding
    "types/Winding/index.md",
    "types/Winding/props/index.md",
    "types/Winding/props/objectName.md",
    "types/Winding/props/circuit.md",
    "types/Winding/props/statorConnection.md",
    "types/Winding/props/parallelPaths.md",
    "types/Winding/props/numberTurns.md",
    "types/Winding/props/strandsConductor.md",
    "types/Winding/props/numberOuterSegments.md",
    "types/Winding/props/type.md",
    "types/Winding/props/numberLayers.md",
    "types/Winding/props/layersOrientation.md",
    "types/Winding/props/autoCalcOverhandEndturns.md",
    "types/Winding/props/radialOverhandOuterEndturn.md",
    "types/Winding/props/radialOverhandInnerEndturn.md",
    "types/Winding/props/heightOuterEndturn.md",
    "types/Winding/props/heightInnerEndturn.md",
    "types/Winding/methods/index.md",
    "types/Winding/methods/isPlanar.md",
    "types/Winding/methods/isToroidal.md",
    "types/Winding/methods/isSingleLayer.md",
    "types/Winding/methods/isDoubleLayer.md",
    "types/Winding/methods/isOrientationUpperLower.md",
    "types/Winding/methods/isOrientationLeftRight.md",
    "types/Winding/methods/checkOverlapEndturns.md",
    "types/Winding/methods/volumeOverlapEndturns.md",
    "types/Winding/methods/distanceBetweenEndturns.md",

    # Mesh
    "types/Mesh/index.md",
    "types/Mesh/props/index.md",
    "types/Mesh/props/objectName.md",
    "types/Mesh/props/autoSizeBound.md",
    "types/Mesh/props/sizeBound.md",
    "types/Mesh/props/numberSlices.md",
    "types/Mesh/props/airgapQuality.md",
    "types/Mesh/props/horizontalSymmetry.md",

    # SimDomain
    "types/SimDomain/index.md",
    "types/SimDomain/props/index.md",
    "types/SimDomain/props/inner.md",
    "types/SimDomain/props/outer.md",
    "types/SimDomain/methods/index.md",
    "types/SimDomain/methods/range.md"
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
            file.write(f"```javascript\n{method_name}(argument: type) : returnType\n```\n\n")
            file.write("## Аргументы\n")
            file.write("- `argument` (type, обязательно): описание аргумента.\n\n")
            file.write("## Возвращаемое значение\n")
            file.write("`returnType`: описание возвращаемого значения.\n\n")
            file.write("## Пример\n")
            file.write("```javascript linenums=\"1\"\n")
            file.write(f"let result = {method_name}(value);\n")
            file.write("console.info(result);\n")
            file.write("```\n\n")
            file.write("!!! info \"См. также\"\n\n")
            file.write("    []()\n\n")
        
        print(f"Файл создан: {file_path}")

# Вызов функции
create_files(file_paths)