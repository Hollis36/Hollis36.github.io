# Homepage Hero Refresh Design

**Date:** 2026-06-27  
**Scope:** Homepage hero and directly coupled metadata only

## Context

The repository currently appears to contain the deployed static site output directly, centered around a root-level `index.html` plus prebuilt `_astro/` assets, rather than the original Astro source tree. This design therefore targets the existing published homepage structure and keeps changes tightly scoped to the current static output.

The current homepage already has a stable academic layout:

1. Top brand and lightweight link navigation
2. Two-column hero with text on the left and avatar on the right
3. News, Education, Experience, Publications, Honors & Awards, and Selected Projects below

The user wants to refresh the homepage so that the hero communicates a clearer identity around **AI4Science** and **Industrial Embodied Intelligence**, while keeping the page academically credible, restrained, and trustworthy.

## Goals

1. Reposition the homepage hero around the user's current identity: **AI4Science Researcher**
2. Replace the current biomedical-engineering-first framing with a broader research framing that covers scientific discovery, industrial perception, and embodied robotic intelligence
3. Keep the existing academic tone and overall page structure
4. Update top-level metadata so browser title, search previews, and social previews match the new hero positioning

## Non-Goals

1. Reordering or redesigning the lower homepage sections
2. Updating News, Publications, Honors & Awards, or Selected Projects in this design pass
3. Introducing new UI components such as CTA buttons, animations, banners, or decorative visual effects
4. Rebuilding the site architecture or migrating from deployed output back to source files

## Approved Hero Content

### Primary identity

- **Name:** `Peifu Zhang`
- **Role line:** `AI4Science Researcher`

### Affiliation

`State Key Laboratory of Electromechanical Integrated Manufacturing of High-performance Electronic Equipment, School of Electro-Mechanical Engineering, Xidian University`

### Research statement

`Building physically grounded AI systems for scientific discovery, industrial perception, and embodied robotic intelligence.`

### Focus areas

The current long-form interests sentence should be replaced with a compact, high-signal list:

- `AI for Science`
- `Industrial Embodied Intelligence`
- `Multimodal & Robotic Perception`
- `Deployable AI Systems`

### Hero links

The hero/top navigation links should present:

- `Email`
- `Google Scholar`
- `GitHub`

The current ORCID link should be removed from the hero navigation and replaced with the user-provided Google Scholar profile:

`https://scholar.google.com/citations?user=cqbM0hEAAAAJ&hl=en`

The existing email and GitHub destinations should remain unchanged unless the user later provides replacements.

### Avatar

The existing hero photo should remain in place.

## Layout and Presentation

The update should preserve the current visual hierarchy and avoid unnecessary layout churn:

1. Keep the existing two-column hero layout
2. Keep the current avatar position on the right
3. Keep the top lightweight navigation pattern
4. Preserve the restrained academic visual tone
5. Prefer content replacement over structural redesign

Within that structure, the hero should read in this order:

1. Name
2. Role
3. Affiliation
4. Research statement
5. Compact focus-area line
6. Link row

## Metadata and Consistency Requirements

The hero refresh must be reflected consistently across the page metadata and structured data so the new identity is visible both on-page and off-page.

### Browser/social title

Use a title aligned with the new positioning:

`Peifu Zhang | AI4Science Researcher`

### Description

Use the approved research statement as the base description across standard metadata, Open Graph, and Twitter:

`Building physically grounded AI systems for scientific discovery, industrial perception, and embodied robotic intelligence.`

### Structured data

Update JSON-LD `Person` data so that:

- `jobTitle` reflects `AI4Science Researcher`
- `description` matches the approved research statement
- `knowsAbout` aligns with the four approved focus areas
- `sameAs` keeps the existing GitHub and ORCID entries and adds the approved Google Scholar profile

## Implementation Surfaces

Because this repository is currently a static-site output repository, the implementation should be limited to the surfaces directly responsible for rendered content and metadata:

1. Root `index.html` hero content
2. Root `index.html` top navigation links
3. Root `index.html` document title and description metadata
4. Root `index.html` Open Graph and Twitter metadata
5. Root `index.html` JSON-LD `Person` block

No other files should be changed unless they are directly required to keep those surfaces consistent.

## Error Handling and Content Safety

1. Do not introduce placeholder copy
2. Do not partially update hero copy without also updating coupled metadata
3. Keep all external links explicit and valid
4. Preserve existing image references unless the user later supplies a replacement asset

## Validation

The implementation phase should confirm:

1. The hero reads naturally and maintains the intended academic tone
2. The new Scholar link replaces ORCID cleanly
3. Metadata text matches the on-page positioning
4. The existing layout remains intact on the current page structure

## Open Follow-Up After This Spec

This spec intentionally isolates the hero refresh. After this work lands, follow-up specs can cover:

1. News updates
2. Education and Experience updates
3. Publications cleanup
4. Honors & Awards updates
5. Selected Projects refresh
