# Codex 桌宠独立播放器

不依赖 Codex/Petdex 的极简桌宠播放器，直接播放 Codex 格式的
`pet.json` + spritesheet（v1 8x9 或 v2 8x11 都可以，只用前 9 行动画）。

## MacBook 上运行

1. 安装 Node.js（[nodejs.org](https://nodejs.org) 下载 LTS 版，或 `brew install node`）
2. 克隆/下载本仓库后：

```bash
cd pet-player
npm install
npm start                      # 默认播放 ../mochi-a
npm start -- /path/to/pets/xxx # 播放其他宠物目录（内含 pet.json + spritesheet）
```

窗口是无边框透明置顶的，小猫会直接浮在桌面上。

## 操作

| 操作 | 效果 |
| --- | --- |
| 拖动 | 移动小猫，横向拖动时自动播放对应方向的跑步动画 |
| 单击 | 循环切换状态（idle → 打招呼 → 跳 → 沮丧 → 等待 → 干活 → 检查）；打招呼/跳/沮丧播一遍后自动回到待机 |
| 数字键 1-9 | 直接跳到对应状态行 |
| `+` / `-` | 放大 / 缩小（0.5x-3x，会记住上次选择） |
| `Esc` | 退出 |

## 播放节奏

仿照 Codex 官方桌宠的行为：待机时只偶尔呼吸眨眼（每轮之间随机停顿
3-7 秒），打招呼/跳/沮丧等动作播一遍就回到待机，只有干活、等待、
检查、跑动这类持续状态才循环播放，且各状态帧率不同。

## 说明

- Windows / Linux 同样可用（Electron 跨平台）。
- 本播放器只做展示，不感知 Codex 的真实工作状态；要状态联动请用
  Codex 内置桌宠或 Petdex。
