from selenium import webdriver
from selenium.webdriver.common.by import By
import time

# Открытие браузера
driver = webdriver.Chrome()
driver.get("https://deepl.com/translator")

# Вставка текста
source_text = open("_index.md", "r", encoding="utf-8").read()
textarea = driver.find_element(By.XPATH, '//textarea[@aria-label="Source text"]')
textarea.send_keys(source_text)

# Ожидание перевода
time.sleep(5)

# Копирование переведенного текста
translated_text = driver.find_element(By.XPATH, '//textarea[@aria-label="Translation"]').text

# Запись в файл
with open("_index_translated.md", "w", encoding="utf-8") as file:
    file.write(translated_text)

driver.quit()