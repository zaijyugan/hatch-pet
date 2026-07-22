@echo off
setlocal
cd /d "%~dp0"
set ELECTRON_MIRROR=https://npmmirror.com/mirrors/electron/

where npm >nul 2>nul
if errorlevel 1 goto no_node

if not exist node_modules echo Installing dependencies, please wait 1-2 minutes...
if not exist node_modules call npm install

if not exist "node_modules\electron\dist\electron.exe" echo Downloading Electron runtime, please wait 1-2 minutes...
if not exist "node_modules\electron\dist\electron.exe" node "node_modules\electron\install.js"

if not exist "node_modules\electron\dist\electron.exe" goto no_electron

echo Starting pet...
"node_modules\electron\dist\electron.exe" . 1> "%~dp0pet-log.txt" 2>&1

echo.
echo ============================================================
echo   Player exited. If the pet did not appear, please send the
echo   file  pet-log.txt  (in this folder) to me.
echo ============================================================
if exist "%~dp0pet-log.txt" type "%~dp0pet-log.txt"
echo.
pause
goto end

:no_node
echo [!] Node.js not found. Install the LTS version from https://nodejs.org then retry.
echo [!] See README.txt for details.
pause
goto end

:no_electron
echo [!] Electron runtime is missing and could not be downloaded.
echo [!] Please check your network connection, then run this file again.
pause
goto end

:end
