# Homepage Content Pruning Design

**Date:** 2026-07-09  
**Scope:** Homepage section pruning and curation

## Context

The homepage is maintained directly in root `index.html` (static output repository pattern).  
The user wants a cleaner, research-focused homepage and explicitly requested keep/delete selection.

## Goals

1. Keep homepage concise and academically focused.
2. Retain high-signal research content only.
3. Remove lower-priority sections without changing visual style.

## Non-Goals

1. Redesigning layout or introducing new components.
2. Editing `_astro` assets or stylesheet files.
3. Changing hero and top navigation content.

## Approved Structure

Homepage order remains:

1. Hero
2. Publications (latest 3 entries only)
3. Selected Projects (3 items only)
4. Footer/Contact

The following full sections are removed from homepage:

1. News
2. Education
3. Experience
4. Honors & Awards

## Approved Content Retention

### Publications

Keep only the latest 3 publications in reverse chronological order, preserving:

1. title
2. author list
3. venue/year note
4. existing links and toggle behavior

### Selected Projects

Keep 3 projects:

1. TianWen: A Universal Training Framework for Detection-VLM Fusion
2. Multi-modal Intelligent Reconstruction for In-situ Defect Detection in Integrated Manufacturing
3. Multi-source Information Fusion for Intelligent Fault Prediction in Additive Manufacturing

Remove:

1. Knowledge-Graph-Based Panoramic Information System for Manufacturing Industry Chains

## Implementation Surface

Only `index.html` is modified, via content block removal and item-level pruning.

## Safety and Consistency

1. Preserve section markup style and class naming conventions.
2. Do not alter Hero wording, top nav links, or metadata in this pass.
3. Keep existing publication interaction controls for retained items.

## Validation Criteria

1. Homepage contains Hero + Publications + Selected Projects + Footer.
2. `News`, `Education`, `Experience`, `Honors & Awards` headings are absent.
3. Publications list count is exactly 3.
4. Selected Projects count is exactly 3 with the approved set.
