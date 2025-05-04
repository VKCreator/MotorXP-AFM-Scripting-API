import ollama

# === Настройки ===
INPUT_FILE = "index.md"
OUTPUT_FILE = "index_en.md"
MODEL_NAME = "llama3.2"

# === Промт для перевода ===
SYSTEM_PROMPT = """You are a professional translator.
Translate the following Markdown text from Russian to English.
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

# === Основная функция перевода файла ===
def translate_file(input_path, output_path):
    # Чтение исходного файла
    with open(input_path, 'r', encoding='utf-8') as file:
        original_text = file.read()

    print("🔄 Начинаем перевод всего текста...")
    translated_text = translate_text(original_text)

    # Запись результата в новый файл
    with open(output_path, 'w', encoding='utf-8') as file:
        file.write(translated_text)

    print(f"\n:white_check_mark: Перевод завершён. Результат сохранён в '{output_path}'")

# === Запуск ===
if __name__ == "__main__":
    translate_file(INPUT_FILE, OUTPUT_FILE)