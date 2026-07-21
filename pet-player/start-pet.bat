@echo off
rem Windows 一键启动：双击本文件即可（首次会自动安装依赖）
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
call npm start
