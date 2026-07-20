# 当前任务（第 1 批：base 底图）— ChatGPT 版

生图改用 ChatGPT（带图像生成功能的对话）。你只需要三步：

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
请根据我附上的 4 张真实小猫照片，生成一张桌面宠物用的角色底图。严格按以下要求：

Create one clean full-body reference sprite for a desktop pet named 小味 (Xiaowei).

Pet identity: Xiaowei is a timid 4-month-old golden shaded British Longhair kitten. Very fluffy long cream-golden fur with warmer golden-brown shaded tipping on the head, back and plumed tail; pale cream chest, muzzle and paws. Round chubby-cheeked face with a short (but not flat) muzzle, tiny pink nose, small rounded ears tucked into fur, large round blue-grey eyes with a slightly worried, shy expression. Compact round chibi-friendly body. Personality: gentle, cautious, easily startled, endearing.

Style: Soft cute stylized mascot rendition of the real kitten in the attached photos: keep the true fur palette (cream-golden with warm shaded tipping, pale chest), the round British Longhair face with chubby cheeks and short muzzle, worried shy eyes and fluffy silhouette; simplify fur into readable tufts so details stay clear when displayed at 192x208 pixels; no photorealism, no text. Keep this exact style reusable for future animation frames.

Place a single centered standing full-body pose on a perfectly flat pure magenta #FF00FF chroma-key background covering the entire canvas. Keep the full pet visible, compact, readable at small size, and easy to animate. No scenery, text, borders, checkerboard transparency, shadows, glows, detached effects, or extra props. Keep #FF00FF and similar pink/magenta colors out of the cat's fur, eyes, nose and highlights.

要求：整张画布背景必须是纯平品红色 #FF00FF，无渐变无纹理；
画面里只有一只居中的全身小猫；不要阴影、不要文字、不要装饰特效。
生成后请给我原始尺寸的图片文件下载。
```

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
