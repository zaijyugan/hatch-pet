@echo off
setlocal
cd /d "%~dp0"

where npm >nul 2>nul
if errorlevel 1 (
  echo [!] Node.js not found. Install the LTS version from https://nodejs.org then retry.
  echo [!] See README.txt for details.
  pause
  exit /b 1
)

if not exist node_modules (
  echo Installing dependencies for the first time, please wait 1-2 minutes...
  call npm install
)

echo Starting Miu...
call npm start > "%~dp0pet-log.txt" 2>&1

echo.
echo ============================================================
echo   Player exited. If the pet did not appear or there was an
echo   error, please send the file  pet-log.txt  (in this folder).
echo ============================================================
type "%~dp0pet-log.txt"
echo.
pause
