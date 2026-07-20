# 当前任务（第 1 批：base 底图 · 第 3 次重试）— ChatGPT 版

第 2 版已接近，但对比真猫还差三点，本次专修：
**毛色改淡改柔（奶油金，不要饱和橘）、眼睛稍收小并露出更多蓝灰虹膜
（怯生生上望，不要惊讶瞪大）、坐姿更缩更怯（前爪并拢往里收）。**
保留第 2 版成功之处：乱蓬飞毛、微歪头、深金渐层、奶白围脖。

生图用 ChatGPT。你只需要三步：

1. **发给 ChatGPT**：把下面代码块整段复制到 ChatGPT，同时**附上 4 张小味的照片**
   （就是你拍的这 4 张：`20260720-105443(13).jpg`、`(6)`、`(10)`、`(1)`；
   手机相册里的原图即可，也可以从仓库 `runs/xiaowei/references/` 里保存）。
2. **下载结果**：让 ChatGPT 生成后，**长按/点击下载原图文件**（PNG 或 WebP 都行）。
   ⚠️ 不要截图——截图会压缩画质、可能带界面元素。
3. **传回仓库**：在 GitHub 网页版进入 `runs/xiaowei/incoming/` 目录 →
   Add file → Upload files，把图片传上去（文件名改成 `base.png` 最好；
   传到 main 分支也没关系，Claude 会自己合并），然后告诉 Claude"base 好了"。

## 发给 ChatGPT 的内容（附 4 张照片一起发）

```text
请根据我附上的 4 张真实小猫照片重新生成一张桌面宠物角色底图。
上一版（也附上了，标注为 previous attempt）方向对了但还差三点：
毛色太橘太饱和、眼睛大得发惊、坐姿不够胆怯。这次请严格按以下要求：

Create one clean full-body character sprite of the exact kitten shown in the attached reference photos — a timid 4-month-old golden shaded British Longhair named 小味 (Xiaowei). A previous attempt is also attached: keep its messy flyaway fur, slight head tilt, golden shaded tipping and pale cream chest ruff, but fix the following three problems.

1. COLOR: The previous attempt is too orange and saturated. Match the photos instead: soft muted pale cream-golden fur with gentle warm golden-brown shaded tipping on the head, back and plumed tail; overall paler, softer, lower-saturation palette with soft lighting, like the real kitten.

2. EYES — this is Xiaowei's signature feature, get the SHAPE right: her eyes are NOT round. The upper eyelid is straight and slightly heavy, cutting flat across the top of the large blue-grey iris and drooping a little toward the outer corners; the lower lid curves round. The overall eye shape is a half-moon / a "D" rotated flat-side-up. Dark eyeliner-like rims around the eyes, small pupils, and lots of pale blue-grey iris showing. This flat-topped eye shape is what gives her the permanently mildly worried, aggrieved, innocent look. Moderately large (clearly smaller than the previous attempt), wide-set, soft catchlights. Never perfectly round (she only opens them round when startled), never huge, never sad-droopy.

3. POSE: Make the sitting pose read as timid: body slightly hunched and huddled into itself, front paws tucked close together beneath the chest ruff, shoulders low, head tilted a few degrees — like a shy kitten trying to look small. Fluffy tail curled beside the body.

Keep everything else: very small rounded ears mostly tucked into the fluffy head fur, tiny pink nose, round chubby cheeks with fluffy cheek ruffs, short British Longhair muzzle (not a flat Persian face), chibi-leaning big-head proportions, compact round short-legged body, semi-realistic softly painted fur simplified into readable tufts so it stays clear at 192x208 pixels. No text.

Place a single centered full-body pose on a perfectly flat pure magenta #FF00FF chroma-key background covering the entire canvas. Full pet visible, compact, easy to animate. No scenery, text, borders, shadows, glows, detached effects, or props. Keep #FF00FF and similar pink/magenta tones out of the fur, eyes, nose and highlights.

要求：整张画布背景必须是纯平品红色 #FF00FF，无渐变无纹理；
画面里只有一只居中的全身小猫；不要阴影、不要文字、不要特效。
本次三个修改重点：①毛色更淡更柔的奶油金（别橘）；②眼型改成小味
标志性的"刀刀眼"——上眼睑平直微沉、外眼角略下压、下眼睑圆弧，
整体上平下圆的半月形，带深色眼线圈、小瞳孔、大面积蓝灰虹膜，
不许画正圆眼；③坐姿缩成一团、前爪并拢内收，显得胆小想藏起来。
生成后请给我原始尺寸的图片文件下载。
```

**注意**：这次发 ChatGPT 时除了 4 张照片，**把上一版生成图也一起附上**
（仓库路径 `runs/xiaowei/incoming/base-attempt-2.png`），让它知道
"保留什么、修什么"。

## Claude 收图后的自查项（供参考）

- 是不是同一只猫：毛色、渐层晕染、圆脸肉颊、蓝灰大眼、怯生生的表情
- 背景是否纯平品红，猫身上有没有沾品红/粉色
- 全身完整、居中、无阴影无文字无特效

不合格的话 Claude 会给出修改后的提示词重试。

## 批次进度

- [ ] 1. base 底图 ← **当前**
- [ ] 2. idle、running-right 两条 8 帧动画条（running-left 由 Claude 镜像派生）
- [ ] 3. waving、jumping、failed、waiting、running、review 六条动画条
- [ ] 4. look-cardinals 四方位锚点条
- [ ] 5. look-row-9（8 个视线方向）
- [ ] 6. look-row-10（8 个视线方向）

## 换用 ChatGPT 的注意事项（Claude 已考虑）

- ChatGPT 生成的品红背景可能有轻微色偏/噪点：没关系，流程里的提帧和
  despill 脚本按阈值处理，最终以确定性校验为准。
- 后面批次的 8 帧动画条对"恰好 8 个分离姿势"要求较高，ChatGPT 可能需要
  重试几次，属于正常情况；每批任务里会给出针对性的提示词。
- 生成 8 帧条时请选横版尺寸（任务里会注明）。
