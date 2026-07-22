@echo off
setlocal
cd /d "%~dp0"

where npm >nul 2>nul
if errorlevel 1 goto no_node

if not exist node_modules echo Installing dependencies, please wait 1-2 minutes...
if not exist node_modules call npm install

if not exist "node_modules\electron\dist\electron.exe" echo Downloading Electron runtime, please wait...
if not exist "node_modules\electron\dist\electron.exe" node "node_modules\electron\install.js"

if not exist "node_modules\electron\dist\electron.exe" goto no_electron

echo Starting pet...
"node_modules\electron\dist\electron.exe" .
goto done

:no_node
echo [!] Node.js not found. Install the LTS version from https://nodejs.org then retry.
echo [!] See README.txt for details.
pause
goto end

:no_electron
echo [!] Electron runtime could not be installed. Delete the node_modules folder and run again.
pause
goto end

:done
echo.
echo Pet has closed.
pause

:end
