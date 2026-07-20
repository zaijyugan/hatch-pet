# 当前任务（第 1 批：base 底图 · 第 4 次 = 改图不重画）— ChatGPT 版

第 3 版眼型矫枉过正（八字哭包眼、吻部变扁），第 2 版整体最可爱。
本次**只发第 2 版那张图给 ChatGPT 做局部修改**：只动眼睑形状，
其他一切保持原样。

⚠️ 这次只附 1 张图：`runs/xiaowei/incoming/base-attempt-2.png`
（就是你觉得最可爱那版），**不要附照片**，避免 ChatGPT 重画。

1. **发给 ChatGPT**：把下面代码块整段复制到 ChatGPT，同时**附上 4 张小味的照片**
   （就是你拍的这 4 张：`20260720-105443(13).jpg`、`(6)`、`(10)`、`(1)`；
   手机相册里的原图即可，也可以从仓库 `runs/xiaowei/references/` 里保存）。
2. **下载结果**：让 ChatGPT 生成后，**长按/点击下载原图文件**（PNG 或 WebP 都行）。
   ⚠️ 不要截图——截图会压缩画质、可能带界面元素。
3. **传回仓库**：在 GitHub 网页版进入 `runs/xiaowei/incoming/` 目录 →
   Add file → Upload files，把图片传上去（文件名改成 `base.png` 最好；
   传到 main 分支也没关系，Claude 会自己合并），然后告诉 Claude"base 好了"。

## 发给 ChatGPT 的内容（只附 base-attempt-2.png 这一张图）

```text
请对我附上的这张小猫角色图做一次局部修改（image edit）。
不要重画、不要改构图，除了眼睛以外的一切都保持和原图完全一致：
毛色、毛发质感、飞毛、歪头角度、坐姿、尾巴、耳朵、鼻子、嘴、
背景纯品红 #FF00FF，全部原样保留。

只修改眼睛，按以下要求：

Edit ONLY the eyes of the attached kitten character. Keep everything else pixel-faithful to the original image: fur color, fur texture, flyaway strands, head tilt, pose, tail, ears, nose, mouth, and the flat magenta #FF00FF background.

Eye edit: reshape the eyelids so the eyes are no longer perfectly round. Lower the upper eyelid into a nearly straight, slightly heavy line that cuts flat across the top of the iris — like the eye shape of a mildly worried kitten. Keep the outer and inner corners at the SAME height as the original (do NOT slant the eyes downward or upward — no sad puppy angle). The lower lid keeps its round curve. Keep the same eye position and spacing; overall eye height becomes slightly shorter because of the lowered upper lid. Show a bit more pale blue-grey iris by making the dark pupils slightly smaller. Keep the soft catchlights.

The result should read as the same cute kitten, just with her signature calm "flat-topped" worried eyes instead of wide startled round eyes — still adorable, NOT sad, NOT crying, NOT droopy.

要求总结：只把两只眼睛的上眼睑改平（像有点担心事情的小猫半敛着眼），
内外眼角高度保持不变，绝不能画成外角下垂的八字哭包眼；
瞳孔略缩小、多露一点蓝灰虹膜；其余全部不动。
改完请给我原始尺寸的图片文件下载。
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
