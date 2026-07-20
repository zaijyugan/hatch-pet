# 给 Codex 的当前任务（第 1 批：base 底图）

把下面代码块里的内容**整段复制**发给 Codex 即可，无需查看其他文件。
（前提：Codex 工作目录是本仓库的克隆，仓库里已有 `runs/xiaowei/` 目录。）

```text
请用 $imagegen 生成一张图像，这是 hatch-pet 流程的 base 底图任务。

图像提示词（原文使用，不要改写、不要套用共享 prompt 模板）：

Create one clean full-body reference sprite for Codex pet 小味.

Pet identity: Xiaowei is a timid 4-month-old golden shaded British Longhair kitten. Very fluffy long cream-golden fur with warmer golden-brown shaded tipping on the head, back and plumed tail; pale cream chest, muzzle and paws. Round chubby-cheeked face with a short (but not flat) muzzle, tiny pink nose, small rounded ears tucked into fur, large round blue-grey eyes with a slightly worried, shy expression. Compact round chibi-friendly body. Personality: gentle, cautious, easily startled, endearing.

Style: Pet-safe sprite: compact full-body mascot, readable in a 192x208 cell, clear silhouette, simple face, stable palette/materials, and crisp edges for chroma-key extraction. Style `auto`: Infer the most appropriate pet-safe style from the user request and reference images, then keep that exact style consistent across every row. User style notes: Soft cute stylized mascot rendition of the real kitten photos: keep the true fur palette (cream-golden with warm shaded tipping, pale chest), the round British Longhair face with chubby cheeks and short muzzle, worried shy eyes and fluffy silhouette; simplify fur into readable tufts so details stay clear at 192x208; no photorealism, no text.

Place a single centered pose on a perfectly flat pure magenta #FF00FF chroma-key background. Keep the full pet visible, compact, readable at 192x208, and easy to animate. Preserve approved reference identity cues. No scenery, text, borders, checkerboard transparency, shadows, glows, detached effects, or extra props. Keep #FF00FF and close colors out of the pet, props, highlights, and effects.

附上以下 4 张参考图（角色均为 pet reference）：
- runs/xiaowei/references/reference-01.jpg
- runs/xiaowei/references/reference-02.jpg
- runs/xiaowei/references/reference-03.jpg
- runs/xiaowei/references/reference-04.jpg

生成后自查：画面中只有一只居中的全身小猫，背景是纯平品红 #FF00FF，
没有文字、场景、边框、阴影、发光、漂浮特效或额外道具。

把选定的结果保存为 runs/xiaowei/incoming/base.png，
然后 git add、commit 并 push 该文件。
```

## 完成后

push 之后回来告诉 Claude"base 好了"即可。Claude 会审核身份还原度，通过后把本文件更新为第 2 批任务（idle + running-right）。

## 批次进度

- [ ] 1. base 底图 ← **当前**
- [ ] 2. idle、running-right（running-left 由 Claude 镜像派生）
- [ ] 3. waving、jumping、failed、waiting、running、review
- [ ] 4. look-cardinals 四方位锚点条
- [ ] 5. look-row-9
- [ ] 6. look-row-10
