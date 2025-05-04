# Укажите корневую папку, где находятся файлы
$rootFolder = "D:/Projects/MotorXP-Doc/MotorXP-AFM_Docs/docs/en"

# Укажите старое имя файла и новое имя файла
$oldFileName = "_index.md"
$newFileName = "index.md"

# Рекурсивно найти все файлы с указанным именем и переименовать их
Get-ChildItem -Path $rootFolder -Recurse -Filter $oldFileName | ForEach-Object {
    $newFilePath = Join-Path $_.DirectoryName $newFileName
    Rename-Item -Path $_.FullName -NewName $newFileName
   # Write-Host ("Переименован файл: $($_.FullName) ->  $newFilePath")
}