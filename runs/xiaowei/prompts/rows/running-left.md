Create one horizontal animation strip for Codex pet `xiaowei`, state `running-left`.

Use the attached canonical base for identity. Use the attached layout guide only for slot count, spacing, centering, and padding; do not draw the guide.

Output exactly 8 full-body frames in one left-to-right row on flat pure magenta #FF00FF. Treat the row as 8 invisible equal-width slots: one centered complete pose per slot, evenly spaced, with no overlap, clipping, empty slots, labels, or borders.

Identity: same pet in every frame: Xiaowei is a timid 4-month-old golden shaded British Longhair kitten. Very fluffy long, soft muted pale cream-golden fur, slightly messy with wispy flyaway strands; warmer golden-brown shaded tipping on the head, back and plumed tail; prominent pale cream chest ruff, pale muzzle and paws. Round chubby-cheeked face with fluffy cheek ruffs, short (but not flat) muzzle, tiny pink nose, very small rounded ears mostly tucked into the head fur. Signature eyes - NOT round: the upper eyelid is straight and slightly heavy, cutting flat across the top of the large blue-grey iris and drooping a little toward the outer corners; the lower lid curves round; overall a half-moon / 'D'-rotated-flat-side-up shape with dark eyeliner-like rims, small pupils and lots of pale blue-grey iris, giving a permanently mildly worried, aggrieved, innocent look. Eyes open fully round only when startled or looking up. Compact round chibi-friendly body. Personality: gentle, cautious, easily startled, endearing.. Preserve silhouette, face, proportions, markings, palette, material, style, and props.
Style: Pet-safe sprite: compact full-body mascot, readable in a 192x208 cell, clear silhouette, simple face, stable palette/materials, and crisp edges for chroma-key extraction. Style `auto`: Infer the most appropriate pet-safe style from the user request and reference images, then keep that exact style consistent across every row. User style notes: Soft cute stylized mascot rendition of the real kitten photos: keep the true muted pale cream-golden palette with warm shaded tipping and pale chest ruff, the round British Longhair face with chubby cheeks and short muzzle, the signature flat-topped half-moon 'worried' eyes, and the fluffy slightly-messy silhouette; chibi-leaning big-head proportions; simplify fur into readable tufts so details stay clear at 192x208; no photorealism, no text..
Animation continuity: keep apparent pet scale and baseline stable within the row unless the state itself intentionally changes vertical position, such as `jumping`. Move the pose within the slot instead of redrawing the pet larger or smaller frame to frame.

State action: Dragging-left loop: show directional movement to the left through body and limb poses only.

State requirements:
- Show directional drag movement to the left through body, limb, and prop movement only.
- The row must unmistakably face and travel left.
- The movement cadence must alternate visibly across the 8 frames instead of repeating one nearly static stride.
- Do not draw speed lines, dust clouds, floor shadows, motion trails, or detached motion effects.

Clean extraction: crisp opaque edges, safe padding, no scenery, text, guide marks, checkerboard, shadows, glows, motion blur, speed lines, dust, detached effects, stray pixels, or chroma-key colors inside the pet.
