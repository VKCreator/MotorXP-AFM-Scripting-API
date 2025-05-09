const fs = require("fs");
const path = require("path");
const MarkdownIt = require("markdown-it");
const cheerio = require("cheerio");

const md = new MarkdownIt();

// === Конфигурация ===
const DIR = ".";
const OUTPUT_FILE = "./types.d.ts";

function normalizeType(type) {
  const primitives = {
    String: "string",
    Number: "number",
    Boolean: "boolean",
    Null: "null",
    Undefined: "void",
    undefined: "void",
  };

  const cleanType = type.replace(/`/g, "").replace("#!javascript", "").trim();

  if (primitives[cleanType]) {
    return primitives[cleanType];
  }

  // Все объектные и пользовательские типы — с заглавной
  return cleanType;
}

function isDirectory(dirPath) {
  try {
    return fs.statSync(dirPath).isDirectory();
  } catch (err) {
    return false;
  }
}

function getSubdirectories(dir) {
  return fs.readdirSync(dir).filter((f) => {
    const fullPath = path.join(dir, f);
    return f !== "node_modules" && isDirectory(fullPath);
  });
}

function parseFunctionFromMarkdown(filePath) {
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const htmlText = md.render(fileContent);
  const $ = cheerio.load(htmlText);

  let methodName = "";
  let objName = "";
  let description = "";
  let syntaxList = [];
  let params = [];
  let returns = {};

  // Имя метода из H1
  methodName = $("h1").first().text().trim();
  if (methodName.includes(".")) {
    const parts = methodName.split(".");
    objName = parts[0];
    methodName = methodName.replace(/$$.+?$$/, "").trim();
  }

  methodName = methodName.split("(")[0].trim();

  // Описание
  $("h2").each(function () {
    const heading = $(this).text().trim();
    if (heading === "Описание") {
      const paragraph = $(this).next("p");
      if (paragraph.length) {
        description = paragraph.text().trim();
      }
    }
  });

  // === Извлечение секции "Синтаксис" из Markdown ===
  $("h2").each(function () {
    const heading = $(this).text().trim();
    if (heading === "Синтаксис") {
      let nextNode = $(this).next();

      // Проходим до следующего не-заголовка узла
      while (nextNode.length && !nextNode.is("h2")) {
        if (nextNode.is("pre")) {
          const codeBlock = nextNode.find("code").text().trim();

          // Извлекаем каждую строку как отдельную сигнатуру
          const lines = codeBlock.split("\n");

          lines.forEach((line) => {
            const trimmedLine = line.trim();
            if (
              trimmedLine.startsWith(objName + ".") ||
              trimmedLine.includes("->")
            ) {
              syntaxList.push(trimmedLine);
            }
          });
        }

        nextNode = nextNode.next();
      }
    }
  });

  // === Аргументы с поддержкой "Значение по умолчанию" ===
  $("h2").each(function () {
    const heading = $(this).text().trim();
    if (heading === "Аргументы") {
      const table = $(this).next("table");
      const rows = table.find("tr");

      rows.each(function (i) {
        if (i === 0) return; // заголовок

        const cols = $(this).find("td");
        if (cols.length >= 4 || cols.length >= 5) {
          const name = $(cols[0]).text().trim().replace(/`/g, "");
          const rawType = $(cols[1]).text().trim();
          const defaultValue =
            cols.length >= 5 ? $(cols[2]).text().trim() : undefined;
          const requiredCol =
            cols.length >= 5
              ? $(cols[3]).text().trim()
              : $(cols[2]).text().trim();
          const desc =
            cols.length >= 5
              ? $(cols[4]).text().trim()
              : $(cols[3]).text().trim();

          const type = normalizeType(rawType);
          const required = requiredCol.includes(":white_check_mark: Да");
          const isOptional = !required;

          params.push({
            name,
            type,
            required,
            defaultValue:
              defaultValue !== undefined &&
              defaultValue !== "—" &&
              defaultValue !== "-"
                ? defaultValue
                : undefined,
            description: desc,
          });
        }
      });
    }
  });

  // Возвращаемое значение
  $("h2").each(function () {
    const heading = $(this).text().trim();
    if (heading === "Возвращаемое значение") {
      const row = $(this).next("table").find("tbody tr").first();
      const cols = row.find("td");
      if (cols.length >= 2) {
        const type = normalizeType(cols.eq(0).text().trim());
        const desc = cols.eq(1).text().trim();
        returns = { type, description: desc };
      }
    }
  });

  let shortMethodName = methodName.split(".");

  if (shortMethodName.length == 2) shortMethodName = shortMethodName[1];
  else shortMethodName = shortMethodName[0];

  let res = {
    shortMethodName,
    description,
    syntaxList,
    params,
    returns,
  };

  //console.log(res)
  return res;
}

function parsePropertyFromMarkdown(filePath) {
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const htmlText = md.render(fileContent);
  const $ = cheerio.load(htmlText);

  let propName = "";
  let description = "";
  let type = "";
  let access = "";

  // === Имя свойства из H1 ===
  const h1 = $("h1").first().text().trim();
  if (h1.includes(".")) {
    propName = h1.split(".")[1].trim(); // например: mesh
  } else {
    propName = h1.trim();
  }

  // === Описание ===
  $("h2").each(function () {
    const heading = $(this).text().trim();
    if (heading === "Описание") {
      const paragraph = $(this).next("p");
      if (paragraph.length) {
        description = paragraph.text().trim();
      }
    }
  });

  // === Тип значения свойства ===
  $("h2").each(function () {
    const heading = $(this).text().trim();
    if (heading === "Тип значения свойства") {
      const paragraph = $(this).next("p");
      if (paragraph.length) {
        type = normalizeType(paragraph.text().trim());
      }
    }
  });

  // === Доступ ===
  $("h2").each(function () {
    const heading = $(this).text().trim();
    if (heading === "Доступ") {
      const paragraph = $(this).next("p");
      if (paragraph.length) {
        access = paragraph.text().trim();
      }
    }
  });

  return {
    propName,
    description,
    type,
    access,
  };
}

function generateDtsFile(typesData) {
  let dtsContent = "";

  for (let objName in typesData) {
    const obj = typesData[objName];

    if (!obj.methods || obj.methods.length === 0) continue;

    dtsContent += `/**\n`;
    dtsContent += ` * Тип ${objName}\n`;
    dtsContent += ` */\ninterface ${objName} {\n`;

    // Проходим по каждому методу
    for (let method of obj.methods) {
      // --- JSDoc ---
      dtsContent += `    /**
     * ${method.description || "Без описания"}
`;

      // --- @param ---
      if (method.params && method.params.length > 0) {
        for (let param of method.params) {
          dtsContent += `     * @param ${param.name}`;
          if (param.type) dtsContent += ` {${param.type}}`;
          if (param.defaultValue !== undefined) {
            dtsContent += ` [default: ${param.defaultValue}]`;
          }
          dtsContent += ` - ${param.description || ""}\n`;
        }
      }

      // --- @returns ---
      if (method.returns) {
        dtsContent += `     * @returns {${method.returns.type}}\n`;
      }

      dtsContent += `     */\n`;

      // --- Сигнатура метода ---
      const paramsList = method.params
        .map((p) => {
          return `${p.name}${p.required ? "" : "?"}: ${p.type}`;
        })
        .join(", ");

      // console.log(method.returns.type)
      dtsContent += `    ${method.shortMethodName}(${paramsList}): ${
        method.returns.type || "void"
      };\n\n`;
    }

    // Проходим по свойствам
    if (obj.props?.length > 0) {
      for (let prop of obj.props) {
        const access = prop.access ? prop.access.trim() : "";
        const isReadonly = access === "Только Чтение";

        dtsContent += `    /**
    * ${prop.description || "Без описания"}
    * @type {${prop.type}}
    * @access ${access || "read-write"}
    */
    ${isReadonly ? "readonly" : ""} ${prop.propName}: ${prop.type};\n`;
      }
    }

    dtsContent += `};\n\n`;
  }

  return dtsContent;
}

function readMarkdownFilesFromMethodsDir(dirPath) {
  if (!fs.existsSync(dirPath)) return [];

  let files = fs
    .readdirSync(dirPath)
    .filter((file) => file.endsWith(".md") && file !== "index.md");

  return files.map((file) =>
    parseFunctionFromMarkdown(path.join(dirPath, file), "utf-8")
  );
}

function readMarkdownFilesFromPropsDir(dirPath) {
  if (!fs.existsSync(dirPath)) return [];
  const files = fs
    .readdirSync(dirPath)
    .filter(
      (file) =>
        !file.startsWith("~") && file.endsWith(".md") && file !== "index.md"
    );
  return files.map((file) =>
    parsePropertyFromMarkdown(path.join(dirPath, file))
  );
}

function readMarkdownFilesFromConstantsDir(dirPath) {
  if (!fs.existsSync(dirPath)) return [];

  return [];
}

/**
 * Основная логика
 */
function typesMdToJSDoc(inputDir) {
  try {
    const result = [];

    // Получаем список глобальных объектов
    const objectNames = getSubdirectories(inputDir);

    for (let objName of objectNames) {
      const objDir = path.join(inputDir, objName);

      const subDirs = getSubdirectories(objDir);

      result[objName] = {};

      for (let subDir of subDirs) {
        const fullPath = path.join(objDir, subDir);

        if (subDir == "constants") {
          const constInfo = readMarkdownFilesFromConstantsDir(fullPath);
          result[objName][subDir] = constInfo;
        } else if (subDir == "props") {
          const propsInfo = readMarkdownFilesFromPropsDir(fullPath);
          result[objName][subDir] = propsInfo;
        } else if (subDir == "methods") {
          const methodsInfo = readMarkdownFilesFromMethodsDir(fullPath);
          result[objName][subDir] = methodsInfo;
        }
      }
    }

    return generateDtsFile(result);
  } catch (err) {
    console.error("❌ Ошибка:", err.message);
  }
}

module.exports = typesMdToJSDoc
