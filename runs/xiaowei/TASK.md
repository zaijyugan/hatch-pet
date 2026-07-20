# 当前任务：running-right 重做 + 第 3 批六条动画条 — ChatGPT 版

进度：base ✅ · idle ✅ · running-right ⚠️ 重做中 · running-left（随 running-right 自动重派生）

---

## 任务 2b-重试：running-right.png（8 帧向右跑 · 调整头身比）

第 1 版侧面跑姿头显得过大（大头娃娃感）。本次调整：**头和脸完全不变，
身体在侧面拉长一点**，跑姿更自然。

附：`canonical-base.png` + `layout-guides/running-right.png`

```text
请生成一张横向长条动画帧图（宽横版画布）。附图 1 是角色身份基准，附图 2 只用于理解 8 个等宽格子的排版（不要画出格子线）。

Create one horizontal animation strip: exactly 8 full-body frames of the attached kitten character, left to right, evenly spaced in 8 invisible equal-width slots, one centered pose per slot, no overlap or clipping, on a perfectly flat pure magenta #FF00FF background.

Identity: EXACTLY the same kitten as image 1 — same fur, colors, face, head, eyes and painting style. PROPORTION ADJUSTMENT for the running pose only: in side view the body should be visibly longer than in the seated base image — head-to-body ratio around 1:1.2 to 1:1.3 (body slightly longer than the head is tall), like a real kitten stretching out mid-run. Do NOT shrink or change the head/face itself; extend the torso and legs instead. The result must still read as the same chibi kitten, just stretched naturally into a run.

State: running-right — scurrying to the RIGHT. Every frame faces right (nose, eyes and body pointing to the viewer's right) and reads as traveling right. Show the run through body and leg poses only: alternating gait across the 8 frames — legs extend and gather in different phases (reach, pull, tuck, push), body leans slightly forward, fluffy fur and tail follow with a slight lag. The 8 frames form one smooth cycle (frame 8 leads back into frame 1) and leg positions clearly DIFFER between neighboring frames.

Keep the same apparent size and ground baseline in all frames. Do NOT draw speed lines, dust, motion trails, blur, floor shadows or any detached effects; no text, borders, scenery. Keep magenta/pink out of the kitten.

要求：8 帧一行、等距不重叠、纯平品红背景；全部朝右、明显向右跑；
头和脸保持与 base 一致，但侧面身体拉长到约头高的 1.2~1.3 倍，
跑姿自然舒展；相邻帧腿部姿势明显不同、8 帧成循环；大小和地面
基线一致。生成后给我原始尺寸文件下载。
```

生成后命名 `running-right.png` 上传覆盖，Claude 验收后会自动重新镜像 running-left。

---

以下六条可以**并行**做（每条单独开一轮 ChatGPT 对话）。
每条都附 2 张图：`canonical-base.png` + 对应的 layout guide（路径在各小节）。
生成后下载原图，按小节标题命名上传到 `runs/xiaowei/incoming/`。

**所有条目共同要求**（每条提示词里已包含，无需额外说明）：
宽横版画布、纯平品红 #FF00FF 背景、等距不重叠、身份严格对齐 base、
相邻帧必须有可见姿态差异、无阴影/文字/速度线/漂浮特效。

## 任务 3a：waving.png（4 帧打招呼）

附：`canonical-base.png` + `layout-guides/waving.png`

```text
请生成一张横向长条动画帧图（宽横版画布）。附图 1 是角色身份基准，附图 2 只用于理解 4 个等宽格子的排版（不要画出格子线）。

Create one horizontal animation strip: exactly 4 full-body frames of the attached kitten character, left to right, evenly spaced in 4 invisible equal-width slots, one centered pose per slot, no overlap or clipping, on a perfectly flat pure magenta #FF00FF background.

Identity: EXACTLY the same kitten as image 1 in every frame — same fur, colors, face, eyes, proportions and painting style, seated facing the viewer.

State: a shy tentative wave using one front paw ONLY (pose changes only, no drawn effects):
Frame 1: paw resting on the ground, head slightly tilted.
Frame 2: paw half-raised to chest height, toes beans visible.
Frame 3: paw raised high, tilted outward in a small timid wave, head tilted the other way.
Frame 4: paw returning down to mid-height, so the loop cycles smoothly back to frame 1.

The other three legs stay planted; body stays seated at the same scale and ground line in all frames. Do NOT draw wave marks, motion arcs, lines, sparkles or any floating symbols — the wave is told only through the paw pose.
No shadows, no text, no scenery. Keep magenta/pink out of the kitten.

要求：4 帧一行、等距不重叠、纯平品红背景；只用前爪姿势表现打招呼，禁止画弧线/星星/符号；其余三条腿落地，大小和地面线保持一致。生成后给我原始尺寸文件下载。
```

## 任务 3b：jumping.png（5 帧原地跳）

附：`canonical-base.png` + `layout-guides/jumping.png`

```text
请生成一张横向长条动画帧图（宽横版画布）。附图 1 是角色身份基准，附图 2 只用于理解 5 个等宽格子的排版（不要画出格子线）。

Create one horizontal animation strip: exactly 5 full-body frames of the attached kitten character, left to right, evenly spaced in 5 invisible equal-width slots, one centered pose per slot, no overlap or clipping, on a perfectly flat pure magenta #FF00FF background.

Identity: EXACTLY the same kitten as image 1 in every frame — same fur, colors, face, eyes, proportions and painting style, facing the viewer.

State: an in-place hop, told ONLY through body pose and vertical position within each slot:
Frame 1: anticipation — crouched low, body compressed, ears back slightly.
Frame 2: lift-off — body stretched upward, hind legs extended, positioned higher in the slot.
Frame 3: airborne peak — highest position in the slot, legs tucked, ears floating up, eyes wide open round (she opens them round when excited).
Frame 4: descent — body lower than peak, front paws reaching down.
Frame 5: landing settle — paws on the ground, body squashing slightly, so the loop returns to frame 1.

The vertical position of the kitten inside each slot MUST change across frames (low, mid, high, mid, low). Do NOT draw any ground shadow, oval shadow, dust, landing marks, bounce pads or motion lines — the air feel comes only from body position.
No text, no scenery. Keep magenta/pink out of the kitten.

要求：5 帧一行、等距不重叠、纯平品红背景；跳跃只靠身体在格子里的高低位置和姿态表现（低-中-高-中-低）；严禁地面阴影/尘土/落地痕迹。生成后给我原始尺寸文件下载。
```

## 任务 3c：failed.png（8 帧失败沮丧）

附：`canonical-base.png` + `layout-guides/failed.png`

```text
请生成一张横向长条动画帧图（宽横版画布）。附图 1 是角色身份基准，附图 2 只用于理解 8 个等宽格子的排版（不要画出格子线）。

Create one horizontal animation strip: exactly 8 full-body frames of the attached kitten character, left to right, evenly spaced in 8 invisible equal-width slots, one centered pose per slot, no overlap or clipping, on a perfectly flat pure magenta #FF00FF background.

Identity: EXACTLY the same kitten as image 1 in every frame — same fur, colors, face, eyes, proportions and painting style, seated facing the viewer.

State: something went wrong and the timid kitten deflates in gentle dismay:
Frames 1-2: shoulders start to slump, ears begin to droop, eyes lower.
Frames 3-4: fully slumped — head down, ears flat, eyes sadly closed, body sunk into itself; a single small tear may cling to the corner of one closed eye (the tear must touch the face, never falling or floating).
Frames 5-6: a tiny discouraged quiver/sigh — body trembles slightly, still slumped.
Frames 7-8: a small recovery breath — head lifts a little, eyes half-open and glistening, leading back into frame 1.

Every neighboring frame must differ visibly in ear angle, head height or body slump. Do NOT draw red X marks, floating symbols, detached stars, separated smoke, falling tear drops, or any loose effects. Any tear stays attached to the face.
No shadows, no text, no scenery. Keep magenta/pink out of the kitten.

要求：8 帧一行、等距不重叠、纯平品红背景；沮丧靠垂耳/低头/瘫坐/闭眼表现，泪珠只能贴在脸上不能悬空滴落；禁止红叉/漂浮符号。生成后给我原始尺寸文件下载。
```

## 任务 3d：waiting.png（6 帧等待指示）

附：`canonical-base.png` + `layout-guides/waiting.png`

```text
请生成一张横向长条动画帧图（宽横版画布）。附图 1 是角色身份基准，附图 2 只用于理解 6 个等宽格子的排版（不要画出格子线）。

Create one horizontal animation strip: exactly 6 full-body frames of the attached kitten character, left to right, evenly spaced in 6 invisible equal-width slots, one centered pose per slot, no overlap or clipping, on a perfectly flat pure magenta #FF00FF background.

Identity: EXACTLY the same kitten as image 1 in every frame — same fur, colors, face, eyes, proportions and painting style, seated.

State: expectantly waiting for her human's answer — clearly different from calm resting: head tilted UP looking at the viewer, eyes open fully round and glossy (her hopeful asking look), one front paw lifted off the ground in a small asking gesture.
Frame 1: head up, round hopeful eyes, one paw slightly lifted.
Frame 2: head tilts left, lifted paw rises a bit more.
Frame 3: head tilts further, ears forward, leaning toward the viewer.
Frame 4: head swings to tilt right, paw adjusts.
Frame 5: still tilted right, blinks softly (eyes half closed).
Frame 6: head returning to center, eyes round again, paw lowering slightly — loops back to frame 1.

Body stays seated at the same scale and ground line. Do NOT draw question marks, speech bubbles, symbols or any floating effects — the asking feel comes only from pose and expression.
No shadows, no text, no scenery. Keep magenta/pink out of the kitten.

要求：6 帧一行、等距不重叠、纯平品红背景；仰头看着用户、眼睛睁圆、抬一只前爪"询问"，头左右歪动构成循环；禁止问号/气泡/符号。生成后给我原始尺寸文件下载。
```

## 任务 3e：running.png（6 帧专注干活 · 注意不是跑步！）

附：`canonical-base.png` + `layout-guides/running.png`

```text
请生成一张横向长条动画帧图（宽横版画布）。附图 1 是角色身份基准，附图 2 只用于理解 6 个等宽格子的排版（不要画出格子线）。

Create one horizontal animation strip: exactly 6 full-body frames of the attached kitten character, left to right, evenly spaced in 6 invisible equal-width slots, one centered pose per slot, no overlap or clipping, on a perfectly flat pure magenta #FF00FF background.

Identity: EXACTLY the same kitten as image 1 in every frame — same fur, colors, face, eyes, proportions and painting style, seated facing the viewer.

State: BUSY WORKING on a task (like a computer running a job) — IMPORTANT: this is NOT running/jogging/locomotion. The kitten sits in place and "works" with focused kneading paw motions, like typing on an invisible keyboard on the ground:
Frame 1: leaning slightly forward, focused eyes looking down, left paw raised mid-tap.
Frame 2: left paw taps down, right paw lifts.
Frame 3: right paw taps down, left paw lifts higher, head bobs down a touch.
Frame 4: quick alternation — both paws low, shoulders busy, ears twitched forward.
Frame 5: left paw lifts again, head bobs up slightly, eyes still focused down.
Frame 6: right paw mid-lift, easing back toward frame 1 to close the loop.

The paw taps alternate left/right across frames like busy typing. Keep the seated position, scale and ground line identical in all frames. Do NOT show walking, jogging, sprinting, directional travel, raised running knees, speed lines, dust or any motion effects. No laptop, keyboard or props — the typing is mimed on the ground.
No shadows, no text, no scenery. Keep magenta/pink out of the kitten.

要求：6 帧一行、等距不重叠、纯平品红背景；这是"干活"不是跑步——坐着原地、两只前爪像打字一样左右交替拍地、眼神专注向下；禁止画键盘等道具、禁止跑动。生成后给我原始尺寸文件下载。
```

## 任务 3f：review.png（6 帧检查成果）

附：`canonical-base.png` + `layout-guides/review.png`

```text
请生成一张横向长条动画帧图（宽横版画布）。附图 1 是角色身份基准，附图 2 只用于理解 6 个等宽格子的排版（不要画出格子线）。

Create one horizontal animation strip: exactly 6 full-body frames of the attached kitten character, left to right, evenly spaced in 6 invisible equal-width slots, one centered pose per slot, no overlap or clipping, on a perfectly flat pure magenta #FF00FF background.

Identity: EXACTLY the same kitten as image 1 in every frame — same fur, colors, face, eyes, proportions and painting style, seated.

State: carefully inspecting finished work — scrutiny through eyes and head only, distinct from waiting (no raised paw, eyes narrowed not round):
Frame 1: leaning forward, eyes narrowed in concentration, looking down-left.
Frame 2: head tilts left, eyes narrowed further, ears angled forward.
Frame 3: slow blink mid-inspection (eyes closed), still leaning in.
Frame 4: head swings to tilt right, narrowed eyes now scanning down-right.
Frame 5: leans in even closer, one ear twitches, squinting hard.
Frame 6: easing back upright, eyes reopening — loops back to frame 1.

Body stays seated at the same scale and ground line. Do NOT add magnifying glasses, papers, screens, code, symbols or any props. The inspection is told only through lean, squint, blink and head tilt.
No shadows, no text, no scenery. Keep magenta/pink out of the kitten.

要求：6 帧一行、等距不重叠、纯平品红背景；靠前倾+眯眼+歪头表现"检查"，和 waiting 的仰头圆眼区分开；禁止放大镜/纸张/道具。生成后给我原始尺寸文件下载。
```

---

## 批次进度

- [x] 1. base 底图 ✅
- [x] 2. idle ✅ / running-right ✅ / running-left ✅（镜像）
- [ ] 3. waving、jumping、failed、waiting、running、review ← **当前，可并行**
- [ ] 4. look-cardinals 四方位锚点条
- [ ] 5. look-row-9（8 个视线方向）
- [ ] 6. look-row-10（8 个视线方向）
