const fs = require('fs');
const path = require('path');
const MarkdownIt = require('markdown-it');
const cheerio = require('cheerio');

// === Конфигурация ===
const INPUT_DIR = '.';         // папка с .md файлами
const OUTPUT_FILE = './constants.d.ts';  // результирующий .d.ts

const md = new MarkdownIt();

function determineType(value) {
    if (value === null || value === 'null') return 'null';
    if (value === 'undefined') return 'undefined';
    if (!isNaN(value)) return 'number';
    if (value === 'true' || value === 'false') return 'boolean';
    if (/^['"].*['"]$/.test(value)) return 'string';
    if (/^[a-zA-Z_][a-zA-Z0-9_]*$(?:.*)$/.test(value)) return 'object'; // например Point3

    return 'unknown';
}

/**
 * Парсит Markdown и извлекает категории констант
 */
function parseEnumsFromMarkdown(filePath) {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const htmlText = md.render(fileContent);
    const $ = cheerio.load(htmlText);
    console.log(htmlText)

    let enums = [];

    // Ищем ВСЕ таблицы в документе
    $('table').each(function () {
        const table = $(this);

        // Проверяем, что это таблица с минимум 3 колонками
        const rows = table.find('tr');
        if (rows.length <= 1) return; // пропускаем пустые или короткие

        const colsInFirstRow = rows.eq(1).find('td');
        if (colsInFirstRow.length < 3) return;

        const firstCell = colsInFirstRow.eq(0).text().trim();

        // Проверяем, есть ли точка в первом столбце — значит, это enum
        if (!firstCell.includes('.')) return;

        // Извлекаем имя типа: "Coil", "Direction" и т.д.
        const fullName = firstCell.trim();
        const typeName = fullName.split('.')[0];

        const entries = [];

        // Перебираем все строки таблицы, кроме заголовков
        rows.each(function (i) {
            if (i === 0) return; // пропускаем строку заголовков

            const cols = $(this).find('td');

            if (cols.length >= 3) {
                const fullName = cols.eq(0).text().trim();
                const propName = fullName.split('.').pop();
                const description = cols.eq(1).text().trim();
                const value = cols.eq(2).text().trim();

                let normalizedValue = value == '+1' ? '1' : value;
                const valueType = determineType(normalizedValue);

                if (valueType === 'unknown') {
                    console.warn(`[Предупреждение] Неизвестный тип значения: "${normalizedValue}"`);
                    normalizedValue = `\"${propName}\"`;
                }

                entries.push({ propName, fullName, description, normalizedValue });
            }
        });

        if (entries.length > 0) {

            console.log({
                categoryName: typeName,
                entries
            })

            enums.push({
                categoryName: typeName,
                entries
            });
        }
    });

    return enums;
}

/**
 * Генерация .d.ts содержимого
 */
function generateDtsContent(allEnums) {
    let output = '';
    const allEntries = {};

    // Собираем все записи по типу (например, Coil)
    for (let enm of allEnums) {
        const firstEntry = enm.entries[0];
        const typeName = firstEntry.fullName.split('.')[0]; // "Coil"

        if (!allEntries[typeName]) {
            allEntries[typeName] = [];
        }

        allEntries[typeName].push(...enm.entries);
    }

    // Генерируем declare const
    for (let typeName in allEntries) {
        const entries = allEntries[typeName];

        output += `/**\n`;
        output += ` * ${typeName} — набор констант\n`;
        output += ` */\ndeclare const ${typeName}: {\n`;

        for (let entry of entries) {
            output += `    /**\n`;
            output += `     * ${entry.description} (${entry.normalizedValue})\n`;
            output += `     */\n`;
            output += `    ${entry.propName}: ${entry.normalizedValue};\n`;
        }

        output += `};\n\n`;
    }

    return output;
}

/**
 * Основная логика
 */
function main() {
    try {
        // Читаем все .md файлы в папке
        const files = fs.readdirSync(INPUT_DIR).filter(f => !f.includes('index') && f.endsWith('.md'));

        let allEnums = [];

        // Парсим каждый файл
        for (const file of files) {
            const fullPath = path.join(INPUT_DIR, file);
            const enums = parseEnumsFromMarkdown(fullPath);
            allEnums.push(...enums);
        }

        // Генерируем .d.ts
        const dtsContent = generateDtsContent(allEnums);
        fs.writeFileSync(OUTPUT_FILE, dtsContent, 'utf-8');

        console.log(`Файл "${OUTPUT_FILE}" успешно создан.`);
    } catch (err) {
        console.error('Ошибка:', err.message);
    }
}

main();