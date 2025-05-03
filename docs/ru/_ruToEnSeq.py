import os
import ollama
import time

# === Настройки ===
ROOT_DIR = "."  # корневая папка для поиска .md файлов
MODEL_NAME = "llama3.2"
SOURCE_LANG = "Russian"
TARGET_LANG = "English"

# === Промт для перевода ===
SYSTEM_PROMPT = f"""You are a professional translator.
Translate the following Markdown text from {SOURCE_LANG} to {TARGET_LANG}.
Preserve all formatting including headers, lists, tables, links, code blocks and indentation.
Do not add or remove any content. Just translate the text inside."""

# === Функция перевода через Ollama ===
def translate_text(text):
    try:
        response = ollama.chat(model=MODEL_NAME, messages=[
            {'role': 'system', 'content': SYSTEM_PROMPT},
            {'role': 'user', 'content': text}
        ])
        return response['message']['content']
    except Exception as e:
        print(f"[Ошибка перевода] {e}")
        return text

# === Поиск всех подходящих .md файлов ===
def find_md_files(root_dir):
    md_files = []
    for dirpath, dirnames, filenames in os.walk(root_dir):
        for filename in filenames:
            if filename.endswith(".md") and not filename.startswith("~"):
                full_path = os.path.join(dirpath, filename)
                md_files.append(full_path)
    return md_files

# === Основная функция перевода файла ===
def translate_file(file_path, index, total):
    print(f"\nФайл {index}/{total}: {file_path}")
    start_time = time.time()

    try:
        with open(file_path, 'r', encoding='utf-8') as file:
            original_text = file.read()

        translated_text = translate_text(original_text)

        # Перезаписываем файл переведённым содержимым
        with open(file_path, 'w', encoding='utf-8') as file:
            file.write(translated_text)

        end_time = time.time()
        elapsed = end_time - start_time
        print(f"Перевод завершён за {elapsed:.2f} секунд(ы): {file_path}")

    except Exception as e:
        print(f"Ошибка при обработке файла '{file_path}': {e}")

# === Запуск ===
if __name__ == "__main__":
    files = find_md_files(ROOT_DIR)
    total_files = len(files)

    if not files:
        print("Не найдено подходящих .md файлов.")
    else:
        print(f"Найдено {total_files} файлов для перевода.")
        for i, file in enumerate(files, 1):
            translate_file(file, i, total_files)

        print("\nВсе файлы успешно переведены!")