# 小味 (xiaowei) — Codex 生图交接说明

方案 A 分工：Codex 只负责 `$imagegen` 生图，其余（提帧、QA、组装、打包）由 Claude 完成。

## 约定

- 每批生成的图放入 `runs/xiaowei/incoming/`，文件名 = job id（如 `base.png`），push 到 GitHub 后告诉 Claude。
- chroma key 是品红 `#FF00FF`，所有生成图的背景必须是纯平品红。
- prompt 文件和参考图都在本 run 目录内，路径见 `imagegen-jobs.json`。

## 第 1 批（当前）：base 底图

给 Codex 的指令示例：

```text
用 $imagegen 生成一张图。
提示词：读取 runs/xiaowei/prompts/base-pet.md，将其全文作为图像提示词。
输入参考图（全部附上，角色均为 pet reference）：
- runs/xiaowei/references/reference-01.jpg
- runs/xiaowei/references/reference-02.jpg
- runs/xiaowei/references/reference-03.jpg
- runs/xiaowei/references/reference-04.jpg
生成后检查：单只居中全身小猫、纯平品红背景、无文字/场景/阴影/漂浮特效。
把选定结果保存为 runs/xiaowei/incoming/base.png
```

完成后 push，Claude 会把它定为 canonical 身份参考，然后在本文件追加第 2 批任务（idle + running-right）。

## 后续批次预告（由 Claude 按依赖顺序逐批追加）

1. ~~base~~ ← 当前
2. idle、running-right（身份与步态检查；running-left 由 Claude 镜像派生，无需生成）
3. waving、jumping、failed、waiting、running、review（可并行）
4. look-cardinals 四方位锚点条
5. look-row-9
6. look-row-10

每批的 prompt 文件、输入图清单、layout guide 都会在追加说明里明确列出。行级 job 必须附带 layout guide（`references/layout-guides/<state>.png`）和 canonical base（`references/canonical-base.png`，base 通过后由 Claude 创建）。
