const fs = require('fs');
const path = require('path');

// === Подключение парсеров ===
const constantsMdToJSDoc = require('./ConstMdtoJSDoc');
const globalFuncsMdToJSDoc = require('./GFMdToJSDoc');
const globalObjectsMdToJSDoc = require('./GOMdtoJSDoc');
const typesMdToJSDoc = require('./TypesMdtoJSDoc');

// === Конфигурация ===
const OUTPUT_FILE = './autocompletion_MotorXP-AFM.d.ts';

// === Пути к папкам с Markdown файлами ===
const paths = {
    constDir: './constants',
    globalFuncsDir: './globalFuncs',
    globalObjectsDir: './globalObjects',
    typesDir: './types'
};

// === Главная функция сборки ===
function main() {
    try {
        let dtsContent = '';

        if (fs.existsSync(paths.constDir))
            dtsContent += constantsMdToJSDoc(paths.constDir);

        if (fs.existsSync(paths.globalFuncsDir))
            dtsContent += globalFuncsMdToJSDoc(paths.globalFuncsDir);

        if (fs.existsSync(paths.globalObjectsDir))
            dtsContent += globalObjectsMdToJSDoc(paths.globalObjectsDir);

        if (fs.existsSync(paths.typesDir))
            dtsContent += typesMdToJSDoc(paths.typesDir);

        fs.writeFileSync(OUTPUT_FILE, dtsContent, "utf-8");
        
        console.log(`Все файлы обработаны. ${OUTPUT_FILE} создан.`);

    } catch (err) {
        console.error('Ошибка:', err.message);
    }
}

main();