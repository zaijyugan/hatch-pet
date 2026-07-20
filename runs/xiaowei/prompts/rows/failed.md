Create one horizontal animation strip for Codex pet `xiaowei`, state `failed`.

Use the attached canonical base for identity. Use the attached layout guide only for slot count, spacing, centering, and padding; do not draw the guide.

Output exactly 8 full-body frames in one left-to-right row on flat pure magenta #FF00FF. Treat the row as 8 invisible equal-width slots: one centered complete pose per slot, evenly spaced, with no overlap, clipping, empty slots, labels, or borders.

Identity: same pet in every frame: Xiaowei is a timid 4-month-old golden shaded British Longhair kitten. Very fluffy long cream-golden fur with warmer golden-brown shaded tipping on the head, back and plumed tail; pale cream chest, muzzle and paws. Round chubby-cheeked face with a short (but not flat) muzzle, tiny pink nose, small rounded ears tucked into fur, large round blue-grey eyes with a slightly worried, shy expression. Compact round chibi-friendly body. Personality: gentle, cautious, easily startled, endearing.. Preserve silhouette, face, proportions, markings, palette, material, style, and props.
Style: Pet-safe sprite: compact full-body mascot, readable in a 192x208 cell, clear silhouette, simple face, stable palette/materials, and crisp edges for chroma-key extraction. Style `auto`: Infer the most appropriate pet-safe style from the user request and reference images, then keep that exact style consistent across every row. User style notes: Soft cute stylized mascot rendition of the real kitten photos: keep the true fur palette (cream-golden with warm shaded tipping, pale chest), the round British Longhair face with chubby cheeks and short muzzle, worried shy eyes and fluffy silhouette; simplify fur into readable tufts so details stay clear at 192x208; no photorealism, no text..
Animation continuity: keep apparent pet scale and baseline stable within the row unless the state itself intentionally changes vertical position, such as `jumping`. Move the pose within the slot instead of redrawing the pet larger or smaller frame to frame.

State action: Blocked/failed loop: slumped or deflated reaction with sad or closed eyes.

State requirements:
- Show failure through slumped pose, drooping ears/limbs, closed or sad eyes, and lower body position.
- Tears, small smoke puffs, or tiny stars are allowed only if attached to or overlapping the pet silhouette and kept inside the same frame slot.
- Do not draw red X marks, floating symbols, detached stars, separated smoke clouds, falling tear drops, dust, or other loose effects.

Clean extraction: crisp opaque edges, safe padding, no scenery, text, guide marks, checkerboard, shadows, glows, motion blur, speed lines, dust, detached effects, stray pixels, or chroma-key colors inside the pet.
