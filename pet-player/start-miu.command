#!/bin/bash
# macOS 一键启动 Miu：双击本文件即可（首次会自动安装依赖）
cd "$(dirname "$0")"
if ! command -v npm >/dev/null 2>&1; then
  echo "[!] 未检测到 Node.js，请先到 https://nodejs.org 安装 LTS 版本后重试"
  read -r -p "按回车关闭..."
  exit 1
fi
if [ ! -d node_modules ]; then
  echo "首次运行，正在安装依赖（约 1-2 分钟）..."
  npm install
fi
npm start -- "$(cd .. && pwd)/miu"
