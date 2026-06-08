---
name: wf-badge-override-reset-edges
description: Overriding the shared .wf-badge anchor in a concept must reset the opposite edges to auto
metadata:
  type: feedback
---

When a wireframe concept repositions the shared `.wf-badge` (defined in `wireframes/index/_wireframe.css` as `position:fixed; bottom:14px; right:14px; border-radius:999px`), the override MUST also set the opposite edges to `auto`. Concept 04 moved it to `top:10px; left:50%` but left `bottom`/`right` inherited — the box stretched to ~1000×970px and `border-radius:999px` rendered it as a giant dark circle filling the screen.

**Why:** with both `top`+`bottom` and `left`+`right` set on a fixed element, it stretches to fill between them instead of sizing to content.

**How to apply:** when overriding any shared fixed-position element's anchor edge, also reset the opposite edges (`bottom:auto; right:auto`) and consider `width:max-content`. Also: diagnose a visual bug from the actual element/cascade before guessing — I first wrongly blamed a 🔍 emoji.
