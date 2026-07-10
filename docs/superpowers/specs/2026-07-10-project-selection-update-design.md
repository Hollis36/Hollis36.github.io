# Homepage Project Selection Update Design

**Date:** 2026-07-10  
**Scope:** Selected Projects card content update only

## Context

The homepage is served from root `index.html` in this static-output repository.
The user requested changing the three retained project cards to:

1. TianWen
2. ABB Offline Coder (`https://hollis36.github.io/abb-offline-coder/`)
3. Newton VLA Demo (`https://hollis36.github.io/newton-vla-demo/`)

## Goals

1. Keep exactly three project cards in Selected Projects.
2. Replace titles, links, and summaries with concise academic wording.
3. Preserve page structure and styling.

## Non-Goals

1. No changes to Hero, Publications, navigation, or metadata.
2. No CSS or `_astro` asset changes.
3. No section reordering.

## Approved Content

### Card 1

- **Title:** `TianWen`
- **Summary:** `A modular framework for detector–VLM fusion with distillation and multimodal decision integration.`
- **Link:** keep existing TianWen URL

### Card 2

- **Title:** `ABB Offline Coder`
- **Summary:** `A privacy-preserving offline coding framework for reproducible local AI-assisted development.`
- **Link:** `https://hollis36.github.io/abb-offline-coder/`

### Card 3

- **Title:** `Newton VLA Demo`
- **Summary:** `A VLA demonstration for embodied perception-to-action reasoning in robotic tasks.`
- **Link:** `https://hollis36.github.io/newton-vla-demo/`

## Implementation Surface

Modify only the Selected Projects block in `index.html` by replacing card title/link/summary content while keeping existing class names and list structure.

## Validation Criteria

1. Selected Projects still has exactly 3 cards.
2. Card titles exactly match approved names.
3. ABB and Newton cards point to user-provided URLs.
4. No unrelated homepage sections are modified.
