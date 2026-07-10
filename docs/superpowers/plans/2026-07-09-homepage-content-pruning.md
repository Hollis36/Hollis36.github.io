# Homepage Content Pruning Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Prune homepage content to a concise research-focused version: keep Hero, latest 3 Publications, and 3 selected Projects.

**Architecture:** Make surgical content-only edits in root `index.html`, which is the deployed static source. Remove whole low-priority sections and prune list items within Publications/Projects without changing CSS, metadata, or Hero/navigation copy. Verify by deterministic string/count checks.

**Tech Stack:** Static HTML, PowerShell, ripgrep (`rg`), git

---

### Task 1: Remove Full Homepage Sections (News/Education/Experience/Honors)

**Files:**
- Modify: `index.html`
- Test: `index.html` assertions via `rg`

- [ ] **Step 1: Write the failing test**

```powershell
Set-Location 'C:\Users\Administrator\copilot-worktrees\Hollis36.github.io\hollis36-expert-pancake'
rg -n 'id="news"|id="education"|id="experience"|id="honors"' index.html
```

Expected: 4 matches (sections still present before removal).

- [ ] **Step 2: Run test to verify it fails**

Run:

```powershell
Set-Location 'C:\Users\Administrator\copilot-worktrees\Hollis36.github.io\hollis36-expert-pancake'
$m = rg -n 'id="news"|id="education"|id="experience"|id="honors"' index.html
if (($m | Measure-Object).Count -gt 0) { 'FAIL (expected before implementation)' } else { 'Unexpected pre-removed state' }
```

Expected: `FAIL (expected before implementation)`.

- [ ] **Step 3: Write minimal implementation**

In `index.html`, delete complete blocks:

```html
<section class="section"> ... id="news" ... </section>
<section class="section"> ... id="education" ... </section>
<section class="section"> ... id="experience" ... </section>
<section class="section"> ... id="honors" ... </section>
```

Also remove adjacent redundant `<hr>` separators so the flow is:

```html
<section class="hero">...</section>
<hr>
<section class="section">... id="publications" ...</section>
<hr>
<section class="section">... id="projects" ...</section>
```

- [ ] **Step 4: Run test to verify it passes**

Run:

```powershell
Set-Location 'C:\Users\Administrator\copilot-worktrees\Hollis36.github.io\hollis36-expert-pancake'
rg -n 'id="news"|id="education"|id="experience"|id="honors"' index.html
```

Expected: no output.

- [ ] **Step 5: Commit**

```bash
git add index.html
git commit -m "refactor: remove non-core homepage sections for concise academic layout"
```

### Task 2: Prune Publications to Latest 3 Entries

**Files:**
- Modify: `index.html`
- Test: `index.html` assertions via `rg`

- [ ] **Step 1: Write the failing test**

```powershell
Set-Location 'C:\Users\Administrator\copilot-worktrees\Hollis36.github.io\hollis36-expert-pancake'
rg -n '<li class="pub-item">' index.html
```

Expected: more than 3 matches.

- [ ] **Step 2: Run test to verify it fails**

Run:

```powershell
Set-Location 'C:\Users\Administrator\copilot-worktrees\Hollis36.github.io\hollis36-expert-pancake'
$count = (rg -n '<li class="pub-item">' index.html | Measure-Object).Count
if ($count -gt 3) { "FAIL (expected before implementation): pub_count=$count" } else { "Unexpected pre-pruned state: pub_count=$count" }
```

Expected: `FAIL (expected before implementation): pub_count=<N>`.

- [ ] **Step 3: Write minimal implementation**

In `index.html` publications list (`<ul class="pub-list">`), keep only the first 3 `<li class="pub-item">...</li>` blocks (already reverse chronological), and delete all remaining pub-item blocks after the third one.

Keep intact for retained 3 items:

```html
<h3 class="pub-item__title">...</h3>
<p class="pub-item__authors">...</p>
<p class="pub-item__venue">...</p>
<div class="pub-item__links">...</div>
<div class="pub-item__abstract" hidden>...</div>
<div class="pub-item__bibtex-wrap" hidden>...</div>
```

- [ ] **Step 4: Run test to verify it passes**

Run:

```powershell
Set-Location 'C:\Users\Administrator\copilot-worktrees\Hollis36.github.io\hollis36-expert-pancake'
$count = (rg -n '<li class="pub-item">' index.html | Measure-Object).Count
"pub_count=$count"
```

Expected: `pub_count=3`.

- [ ] **Step 5: Commit**

```bash
git add index.html
git commit -m "feat: keep only latest three publications on homepage"
```

### Task 3: Prune Selected Projects to Approved 3 Items

**Files:**
- Modify: `index.html`
- Test: `index.html` assertions via `rg`

- [ ] **Step 1: Write the failing test**

```powershell
Set-Location 'C:\Users\Administrator\copilot-worktrees\Hollis36.github.io\hollis36-expert-pancake'
rg -n '<li>\s*<(a class="project-card"|div class="project-card")' index.html
rg -n 'Knowledge-Graph-Based Panoramic Information System for Manufacturing Industry Chains' index.html
```

Expected: project count is 4 and knowledge-graph project text is present.

- [ ] **Step 2: Run test to verify it fails**

Run:

```powershell
Set-Location 'C:\Users\Administrator\copilot-worktrees\Hollis36.github.io\hollis36-expert-pancake'
$count = (rg -n '<li>\s*<(a class="project-card"|div class="project-card")' index.html | Measure-Object).Count
$kg = rg -n 'Knowledge-Graph-Based Panoramic Information System for Manufacturing Industry Chains' index.html
if ($count -eq 4 -and $kg) { 'FAIL (expected before implementation)' } else { "Unexpected pre-pruned state: count=$count" }
```

Expected: `FAIL (expected before implementation)`.

- [ ] **Step 3: Write minimal implementation**

In `index.html` projects list (`<ul class="project-grid">`), delete only this project card `<li>...</li>`:

```html
<h3 class="project-card__title">Knowledge-Graph-Based Panoramic Information System for Manufacturing Industry Chains</h3>
```

Keep these three:

```text
TianWen: A Universal Training Framework for Detection-VLM Fusion
Multi-modal Intelligent Reconstruction for In-situ Defect Detection in Integrated Manufacturing
Multi-source Information Fusion for Intelligent Fault Prediction in Additive Manufacturing
```

- [ ] **Step 4: Run test to verify it passes**

Run:

```powershell
Set-Location 'C:\Users\Administrator\copilot-worktrees\Hollis36.github.io\hollis36-expert-pancake'
$count = (rg -n '<li>\s*<(a class="project-card"|div class="project-card")' index.html | Measure-Object).Count
$kg = rg -n 'Knowledge-Graph-Based Panoramic Information System for Manufacturing Industry Chains' index.html
"project_count=$count"
if (-not $kg) { 'kg_removed=yes' } else { 'kg_removed=no' }
```

Expected: `project_count=3` and `kg_removed=yes`.

- [ ] **Step 5: Commit**

```bash
git add index.html
git commit -m "feat: keep three selected projects and remove knowledge-graph project card"
```

### Task 4: Final Integrity Checks (No Hero/Nav/Metadata Drift)

**Files:**
- Verify: `index.html`

- [ ] **Step 1: Write the failing test**

```powershell
Set-Location 'C:\Users\Administrator\copilot-worktrees\Hollis36.github.io\hollis36-expert-pancake'
rg -n '<p class="hero__position">AI4Science Researcher</p>' index.html
rg -n '<meta name="description" content="Building grounded AI for scientific discovery and embodied intelligence\.">' index.html
```

Expected: both patterns must exist exactly once.

- [ ] **Step 2: Run test to verify it fails when drift exists**

Run:

```powershell
Set-Location 'C:\Users\Administrator\copilot-worktrees\Hollis36.github.io\hollis36-expert-pancake'
$role = (rg -n '<p class="hero__position">AI4Science Researcher</p>' index.html | Measure-Object).Count
$meta = (rg -n '<meta name="description" content="Building grounded AI for scientific discovery and embodied intelligence\.">' index.html | Measure-Object).Count
if ($role -eq 1 -and $meta -eq 1) { 'PASS' } else { "FAIL role=$role meta=$meta" }
```

Expected: `PASS`.

- [ ] **Step 3: Review final diff scope**

```bash
git --no-pager diff -- index.html
git --no-pager status --short
```

- [ ] **Step 4: Run final section-count checks**

Run:

```powershell
Set-Location 'C:\Users\Administrator\copilot-worktrees\Hollis36.github.io\hollis36-expert-pancake'
"pub_count=$((rg -n '<li class=\"pub-item\">' index.html | Measure-Object).Count)"
"project_count=$((rg -n '<li>\\s*<(a class=\"project-card\"|div class=\"project-card\")' index.html | Measure-Object).Count)"
rg -n 'id="news"|id="education"|id="experience"|id="honors"' index.html
```

Expected:

```text
pub_count=3
project_count=3
```

and no output for removed section ids.

- [ ] **Step 5: Commit**

```bash
git add index.html
git commit -m "chore: finalize homepage pruning with integrity checks"
```
