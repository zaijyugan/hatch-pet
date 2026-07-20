Create one horizontal animation strip for Codex pet `xiaowei`, state `waving`.

Use the attached canonical base for identity. Use the attached layout guide only for slot count, spacing, centering, and padding; do not draw the guide.

Output exactly 4 full-body frames in one left-to-right row on flat pure magenta #FF00FF. Treat the row as 4 invisible equal-width slots: one centered complete pose per slot, evenly spaced, with no overlap, clipping, empty slots, labels, or borders.

Identity: same pet in every frame: Xiaowei is a timid 4-month-old golden shaded British Longhair kitten. Very fluffy long cream-golden fur with warmer golden-brown shaded tipping on the head, back and plumed tail; pale cream chest, muzzle and paws. Round chubby-cheeked face with a short (but not flat) muzzle, tiny pink nose, small rounded ears tucked into fur, large round blue-grey eyes with a slightly worried, shy expression. Compact round chibi-friendly body. Personality: gentle, cautious, easily startled, endearing.. Preserve silhouette, face, proportions, markings, palette, material, style, and props.
Style: Pet-safe sprite: compact full-body mascot, readable in a 192x208 cell, clear silhouette, simple face, stable palette/materials, and crisp edges for chroma-key extraction. Style `auto`: Infer the most appropriate pet-safe style from the user request and reference images, then keep that exact style consistent across every row. User style notes: Soft cute stylized mascot rendition of the real kitten photos: keep the true fur palette (cream-golden with warm shaded tipping, pale chest), the round British Longhair face with chubby cheeks and short muzzle, worried shy eyes and fluffy silhouette; simplify fur into readable tufts so details stay clear at 192x208; no photorealism, no text..
Animation continuity: keep apparent pet scale and baseline stable within the row unless the state itself intentionally changes vertical position, such as `jumping`. Move the pose within the slot instead of redrawing the pet larger or smaller frame to frame.

State action: Greeting loop: paw or limb down, raised, tilted, and returning in a friendly attention gesture.

State requirements:
- Show the greeting through paw, hand, wing, or limb pose only.
- Do not draw wave marks, motion arcs, lines, sparkles, symbols, or floating effects around the gesture.

Clean extraction: crisp opaque edges, safe padding, no scenery, text, guide marks, checkerboard, shadows, glows, motion blur, speed lines, dust, detached effects, stray pixels, or chroma-key colors inside the pet.
