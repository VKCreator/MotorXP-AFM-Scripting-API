const fs = require('fs');
const path = require('path');
const MarkdownIt = require('markdown-it');
const cheerio = require('cheerio');

function normalizeType(type) {
    const primitives = {
        'String': 'string',
        'Number': 'number',
        'Boolean': 'boolean',
        'Null': 'null',
        'Undefined': 'void',
        'undefined': 'void'
    };

    if (primitives[type]) {
        return primitives[type];
    }

    // Все объектные и пользовательские типы — с заглавной
    return type;
}

const md = new MarkdownIt();

// === Конфигурация ===
const DOCS_DIR = '.';
const OUTPUT_FILE = './globalFuncs.d.ts';

// === Парсинг одного файла ===
function parseFunctionFromMarkdown(filePath) {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const htmlText = md.render(fileContent);

    // console.log(htmlText)

    const $ = cheerio.load(htmlText);

    let funcName = '';
    let description = '';
    let params = [];
    let returns = '';

    // === Получаем имя функции из H1 ===
    funcName = $('h1').first().text().trim();
    funcName = funcName.split('(')[0].trim();;

    // console.log(funcName)

    // === Описание ===
    $('h2').each(function () {
        const heading = $(this).text().trim();

        if (heading === 'Описание') {
            const paragraph = $(this).next('p');
            if (paragraph.length) {
                description = paragraph.text().trim();
                return false; // выходим из each()
            }
        }
    });

    // === Аргументы ===
    $('h2').each(function () {
        const heading = $(this).text().trim();

        if (heading === 'Аргументы') {
            const table = $(this).next('table');
            if (table.length) {
                $('tbody tr', table).each(function () {
                    const cols = $(this).find('td');
                    if (cols.length >= 4) {
                        // Поддержка разного количества столбцов
                        let name = $(cols[0]).text().trim();
                        let rawType  = $(cols[1]).text().trim().replace(/`/g, '').replace("#!javascript", "").trim();
                        let defaultValue = cols.length >= 5 ? $(cols[2]).text().trim() : undefined;
                        let requiredCol = cols.length >= 5 ? $(cols[3]).text().trim() : $(cols[2]).text().trim();
                        let description = cols.length >= 5 ? $(cols[4]).text().trim() : $(cols[3]).text().trim();

                        const type = normalizeType(rawType);

                        params.push({
                            name,
                            type,
                            required: requiredCol.includes('Да'),
                            defaultValue,
                            description
                        });
                    }
                });
            }
        }
    });

    // === Возвращаемое значение ===
    $('h2').each(function () {
        const heading = $(this).text().trim();
    
        if (heading === 'Возвращаемое значение') {
            let nextNode = $(this).next();
    
            // Если сразу после заголовка идёт таблица
            if (nextNode.is('table')) {
                const rows = nextNode.find('tbody tr');
                if (rows.length > 0) {
                    const cols = rows.find('td');
                    if (cols.length >= 2) {
                        let typeText = $('code', cols.eq(0)).text().trim() || cols.eq(0).text().trim();
                        let descriptionText = cols.eq(1).text().trim();
                        
                        rawReturns = typeText.replace("#!javascript", "").trim();
                        rawReturns = normalizeType(rawReturns);

                        if (rawReturns == "void")
                            descriptionText = "Функция ничего не возвращает.";

                        returns = `{${rawReturns}} ${descriptionText}`;
                    }
                }
            } else if (nextNode.is('p')) {
                // Если просто абзац
                rawReturns = nextNode.text().trim();
                rawReturns = normalizeType(rawReturns);

                returns = `{${rawReturns}}`;
            }
        }
    });

    return {
        funcName,
        description,
        params,
        returns,
        rawReturns
    };
}

// === Генерация .d.ts контента ===
function generateDtsContent(functions) {
    let output = '';

    functions.forEach(fn => {
        output += '/**\n';
        output += ` * ${fn.description}\n`;

        fn.params.forEach(p => {
            const type = `{${p.type}}`;
            const nameWithDefault = p.defaultValue && p.defaultValue !== '—'
                ? `[${p.name}=${p.defaultValue}]`
                : p.name;

            output += ` * @param ${type} ${nameWithDefault} - ${p.description}\n`;
        });

        if (fn.returns) {
            output += ` * @returns ${fn.returns}\n`;
        }

        output += ' */\n';

        // === Здесь изменяется declare function (...) ===
        const paramsLine = fn.params.map(p => {
            return `${p.name}${p.defaultValue && p.defaultValue != "—" ? '?' : ''}: ${p.type}`;
        }).join(', ');

        // console.log(paramsLine)

        const returnType = fn.rawReturns ? `: ${fn.rawReturns}` : '';

        output += `declare function ${fn.funcName}(${paramsLine})${returnType};\n\n`;
    });

    return output;
}

// === Основная логика ===
function globalFuncsMdToJSDoc(inputDir) {
    try {
        const files = fs.readdirSync(inputDir).filter(f => !f.includes("index") && f.endsWith('.md'));
        const allFunctions = [];

        for (const file of files) {
            const fullPath = path.join(inputDir, file);
            const funcData = parseFunctionFromMarkdown(fullPath);
            if (funcData.funcName) {
                allFunctions.push(funcData);
            }
        }
        
        return generateDtsContent(allFunctions);
    } catch (err) {
        console.error('Ошибка:', err.message);
    }
}

module.exports = globalFuncsMdToJSDoc;