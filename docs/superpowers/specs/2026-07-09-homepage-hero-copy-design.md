# Homepage Hero Copy Refresh Design

**Date:** 2026-07-09  
**Scope:** Hero copy refresh with metadata consistency

## Context

This repository is maintained as deployed static output. The homepage is directly edited in root `index.html` with prebuilt `_astro/` assets.

The user requested a concise, research-first hero refresh in English, with structure preserved.

## Goals

1. Keep existing hero layout unchanged.
2. Refresh hero text to be concise and research-focused.
3. Prioritize mission framing in the hero narrative.
4. Keep metadata descriptions aligned with updated hero messaging.

## Non-Goals

1. Redesigning hero layout or avatar placement.
2. Adding new components, buttons, or sections.
3. Editing lower-page sections.

## Approved Content Direction

1. **Language:** English-first
2. **Scope:** Copy-only update (no structure changes)
3. **Approach:** Mission-first framing

### Approved Hero Copy

- **Role:** `AI4Science Researcher`
- **Mission:** `Building grounded AI for scientific discovery and embodied intelligence.`
- **Focus line:** `AI for Science · Industrial Embodied Intelligence · Multimodal Perception · Robotics`

## Implementation Surfaces

1. Root `index.html` hero text nodes:
   - Role line
   - Mission sentence
   - Focus/interests line
2. Root `index.html` metadata descriptions:
   - `<meta name="description">`
   - Open Graph description
   - Twitter description
   - JSON-LD `description`

## Error Handling and Safety

1. Preserve all existing links and structural markup.
2. Keep semantic labels and accessibility-relevant structure unchanged.
3. Apply content-only replacement to avoid style/layout regressions.

## Validation Criteria

1. Hero visual structure remains unchanged.
2. Approved copy appears exactly once in the hero.
3. Metadata description text is consistent with the updated mission framing.
