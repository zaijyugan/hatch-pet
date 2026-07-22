@echo off
chcp 65001 >nul
rem Windows 一键启动 Miu：双击本文件即可（首次会自动安装依赖）
cd /d %~dp0
where npm >nul 2>nul
if errorlevel 1 (
  echo [!] 未检测到 Node.js，请先到 https://nodejs.org 安装 LTS 版本后重试
  pause
  exit /b 1
)
if not exist node_modules (
  echo 首次运行，正在安装依赖（约 1-2 分钟）...
  call npm install
)
echo 正在启动 Miu... 如果窗口随后自动关闭，下面的报错信息会保留，请截图发我。
call npm start -- "%~dp0..\miu" > "%~dp0pet-log.txt" 2>&1
echo.
echo ============================================================
echo   程序已退出。上面/日志文件 pet-log.txt 里如果有报错，
echo   请把 pet-log.txt 这个文件发给我，或截图下面内容。
echo ============================================================
type "%~dp0pet-log.txt"
echo.
pause
