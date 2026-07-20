# 当前任务（第 2 批：idle + running-right 两条动画条）— ChatGPT 版

base 已定稿（就是你最喜欢的第 2 版）✅
本批生成两条动画条，是后面所有行的"身份+步态"试金石。

**两条分开发，每条单独开一轮对话发给 ChatGPT 更稳。**

每条都要附 2 张图（都在仓库里，先保存到手机）：
1. `runs/xiaowei/references/canonical-base.png`（身份基准，就是定稿 base）
2. 对应的排版参考图（见各小节）

生成后下载原图，上传到 `runs/xiaowei/incoming/`，文件名分别为
`idle.png` 和 `running-right.png`，然后告诉 Claude。

---

## 任务 2a：idle（6 帧安静待机）

附图：`canonical-base.png` + `runs/xiaowei/references/layout-guides/idle.png`

```text
请生成一张横向长条动画帧图（宽横版画布）。附图 1 是角色身份基准，
附图 2 是排版参考（只用来理解 6 个等宽格子的间距和居中方式，
不要把参考图里的任何线框、格子或标记画进结果）。

Create one horizontal animation strip: exactly 6 full-body frames of the
attached kitten character, in one left-to-right row, evenly spaced as 6
invisible equal-width slots, one centered complete pose per slot, no
overlap, no clipping, no empty slots, on a perfectly flat pure magenta
#FF00FF background covering the whole canvas.

Identity: EXACTLY the same kitten as attached image 1 in every frame —
same soft pale cream-golden fluffy fur with messy flyaway strands, same
golden shaded tipping on head/back/tail, same pale cream chest ruff, same
big glossy round blue-grey eyes with catchlights and shy worried gaze,
same tiny pink nose, small tucked ears, chibi big-head proportions, same
sitting pose and slight head tilt as the base image. Same painting style.

State: idle — a calm quiet resting loop. Across the 6 frames show ONLY
subtle motion: gentle breathing (body rises/settles slightly), one tiny
blink around the middle frames, a very slight head or body bob, tiny fur
sway. The pose, facing direction, silhouette and expression stay
essentially the same in all frames. Frame 1 and frame 6 must look almost
identical so the loop plays smoothly. The motion must still be visible —
do not output 6 identical copies.

Do NOT show: walking, waving, jumping, big gestures, emotional changes,
new props, shadows, glows, motion lines, text, borders, or scenery.
Keep magenta and pink tones out of the kitten itself.

要求：宽横版画布；6 个姿势一行排开、等距居中、互不重叠；
纯平品红背景；第 1 帧和第 6 帧几乎一样；只有呼吸/眨眼/微晃级别的
安静小动作。生成后给我原始尺寸文件下载。
```

## 任务 2b：running-right（8 帧向右跑）

附图：`canonical-base.png` + `runs/xiaowei/references/layout-guides/running-right.png`

```text
请生成一张横向长条动画帧图（宽横版画布）。附图 1 是角色身份基准，
附图 2 是排版参考（只用来理解 8 个等宽格子的间距和居中方式，
不要把参考图里的任何线框、格子或标记画进结果）。

Create one horizontal animation strip: exactly 8 full-body frames of the
attached kitten character, in one left-to-right row, evenly spaced as 8
invisible equal-width slots, one centered complete pose per slot, no
overlap, no clipping, no empty slots, on a perfectly flat pure magenta
#FF00FF background covering the whole canvas.

Identity: EXACTLY the same kitten as attached image 1 in every frame —
same soft pale cream-golden fluffy fur with flyaway strands, same golden
shaded tipping, same pale cream chest ruff, same big glossy round
blue-grey eyes with shy worried gaze, same tiny pink nose, small tucked
ears, chibi big-head proportions, same painting style.

State: running-right — the kitten is being dragged/scurrying to the
RIGHT. Every frame faces right (nose, eyes and body pointing to the
viewer's right) and reads as traveling right. Show the run through body
and leg poses only: alternating gait across the 8 frames — legs extend
and gather in different phases (reach, pull, tuck, push), body leans
slightly rightward/forward, fluffy fur and tail follow the motion with a
slight lag. The 8 frames must form one smooth cycle where frame 8 leads
back into frame 1, and the leg positions clearly DIFFER between
neighboring frames (no repeated near-identical stride).

Keep the same apparent size and the same ground baseline in all frames.

Do NOT draw: speed lines, dust, motion trails, blur, floor shadows, or
any detached effects; no text, borders, scenery. Keep magenta/pink tones
out of the kitten.

要求：宽横版画布；8 个姿势一行排开、等距居中、互不重叠；全部朝右、
明显在向右跑；相邻帧腿部姿势要有明显差异、8 帧构成循环步态；
大小和地面基线保持一致；纯平品红背景。生成后给我原始尺寸文件下载。
```

---

## 常见翻车点（不合格 Claude 会退回重试）

- 帧数不对（idle 必须 6 个，running-right 必须 8 个）
- 相邻姿势互相重叠或贴边裁切
- 把排版参考图的格子线画进了结果
- 猫和 base 不像（脸型/毛色/眼睛变了）
- running-right 有朝左或朝正面的帧
- 出现阴影、速度线、尘土等特效

## 批次进度

- [x] 1. base 底图 ✅（定稿：第 2 版）
- [ ] 2. idle、running-right ← **当前**（running-left 由 Claude 镜像派生）
- [ ] 3. waving、jumping、failed、waiting、running、review 六条动画条
- [ ] 4. look-cardinals 四方位锚点条
- [ ] 5. look-row-9（8 个视线方向）
- [ ] 6. look-row-10（8 个视线方向）
