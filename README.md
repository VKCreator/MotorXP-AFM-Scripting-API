# Установка и настройка MkDocs с Material и интернационализацией

Этот документ содержит пошаговые инструкции по установке MkDocs, темы Material, плагина для интернационализации (i18n), а также запуску и сборке проекта.

---

## Установка MkDocs

Для начала убедитесь, что у вас установлен Python версии 3.8 или выше. Затем установите MkDocs с помощью `pip`.

Тема Material for MkDocs предоставляет современный дизайн и множество полезных функций.

Для поддержки многоязычной документации используйте плагин mkdocs-static-i18n.

Установка инструментов с помощью `pip`:
```bash
pip install mkdocs
mkdocs --version

pip install mkdocs-material
pip install mkdocs-static-i18n
pip install mike
pip install mkdocs-print-site-plugin
pip install mkdocs-with-pdf
pip install mkdocs-section-index
pip install mkdocs-exclude
pip install mkdocs-include-markdown-plugin
pip install mkdocs-git-revision-date-localized-plugin
```

## Структура папок для многоязычной документации 
    docs/
    ├── en/
    │   ├── index.md
    │   └── about.md
    ├── ru/
    │   ├── index.md
    │   └── about.md
    └── fr/
        ├── index.md
        └── about.md

## Запуск локального сервера 
Чтобы запустить локальный сервер для предварительного просмотра документации, выполните команду:
``` mkdocs serve ```
Откройте браузер и перейдите по адресу:  `http://127.0.0.1:8000/`

## Генерация PDF-документации
Для генерации pdf-документации необходимо внимательно настроить плагин `print-site` : https://pypi.org/project/mkdocs-with-pdf/.

## Сборка документации
Для сборки статических файлов документации выполните команду: 
``` mkdocs build --site-dir ScriptAPI_manual```

Собранные файлы будут сохранены в директории `ScriptAPI_manual/`.

## После сборки документации

В директории `ScriptAPI_manual/` (или другой) нужно создать папку `ru` и перенести туда папку `pdf`.
