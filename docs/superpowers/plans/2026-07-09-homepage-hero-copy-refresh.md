# Homepage Hero Copy Refresh Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Update homepage hero copy to a concise, research-first message and keep metadata descriptions consistent, without changing layout structure.

**Architecture:** The implementation is a content-only edit in root `index.html`, which is the deployed static page source in this repository. Work is split into two isolated edit tasks: hero content and metadata/JSON-LD consistency. Validation uses deterministic text checks against `index.html` rather than introducing new tooling.

**Tech Stack:** Static HTML, built assets (`_astro`), PowerShell, ripgrep (`rg`), git

---

### Task 1: Update Hero Copy (Mission-First, Structure Preserved)

**Files:**
- Modify: `index.html`
- Test: `index.html` text assertions via `rg`

- [ ] **Step 1: Write the failing test (assert new hero mission is not yet present)**

```powershell
Set-Location 'C:\Users\Administrator\copilot-worktrees\Hollis36.github.io\hollis36-expert-pancake'
rg -n "Building grounded AI for scientific discovery and embodied intelligence\." index.html
```

Expected: no output (new mission sentence is not present yet).

- [ ] **Step 2: Run test to verify it fails**

Run:

```powershell
Set-Location 'C:\Users\Administrator\copilot-worktrees\Hollis36.github.io\hollis36-expert-pancake'
rg -n "Building grounded AI for scientific discovery and embodied intelligence\." index.html; if ($LASTEXITCODE -eq 1) { Write-Output "FAIL (expected before implementation)" } else { Write-Output "Unexpected pre-existing match" }
```

Expected: `FAIL (expected before implementation)`.

- [ ] **Step 3: Write minimal implementation (hero text only)**

Edit `index.html` in the hero block so these values are exact:

```html
<p class="hero__position">AI4Science Researcher</p>
<p class="hero__goal"><strong>Goal:</strong> Building grounded AI for scientific discovery and embodied intelligence.</p>
<p class="hero__interests"><strong>Research Interests:</strong> AI for Science · Industrial Embodied Intelligence · Multimodal Perception · Robotics</p>
```

- [ ] **Step 4: Run test to verify it passes**

Run:

```powershell
Set-Location 'C:\Users\Administrator\copilot-worktrees\Hollis36.github.io\hollis36-expert-pancake'
rg -n "Building grounded AI for scientific discovery and embodied intelligence\." index.html
rg -n "AI for Science · Industrial Embodied Intelligence · Multimodal Perception · Robotics" index.html
```

Expected: both patterns return one match in the hero section.

- [ ] **Step 5: Commit**

```bash
git add index.html
git commit -m "feat: refresh homepage hero copy with concise mission-first wording"
```

### Task 2: Align Metadata and JSON-LD Description with Hero Mission

**Files:**
- Modify: `index.html`
- Test: `index.html` text assertions via `rg`

- [ ] **Step 1: Write the failing test (assert metadata does not yet match new mission)**

```powershell
Set-Location 'C:\Users\Administrator\copilot-worktrees\Hollis36.github.io\hollis36-expert-pancake'
rg -n "Building grounded AI for scientific discovery and embodied intelligence\." index.html
```

Expected: fewer than 5 matches (hero may already match, but all metadata/JSON-LD fields are not yet fully aligned).

- [ ] **Step 2: Run test to verify it fails**

Run:

```powershell
Set-Location 'C:\Users\Administrator\copilot-worktrees\Hollis36.github.io\hollis36-expert-pancake'
$matches = rg -n "Building grounded AI for scientific discovery and embodied intelligence\." index.html
if (($matches | Measure-Object).Count -lt 5) { "FAIL (metadata alignment incomplete)" } else { "Unexpected pre-existing full alignment" }
```

Expected: `FAIL (metadata alignment incomplete)`.

- [ ] **Step 3: Write minimal implementation (description fields only)**

In `index.html`, set the following fields to exactly:

```text
Building grounded AI for scientific discovery and embodied intelligence.
```

Update all of:

```html
<meta name="description" ...>
<meta property="og:description" ...>
<meta name="twitter:description" ...>
"description" in JSON-LD Person block
```

- [ ] **Step 4: Run test to verify it passes**

Run:

```powershell
Set-Location 'C:\Users\Administrator\copilot-worktrees\Hollis36.github.io\hollis36-expert-pancake'
$matches = rg -n "Building grounded AI for scientific discovery and embodied intelligence\." index.html
($matches | Measure-Object).Count
```

Expected: `5` matches (hero goal + 4 metadata/JSON-LD description fields).

- [ ] **Step 5: Commit**

```bash
git add index.html
git commit -m "fix: align homepage metadata descriptions with updated hero mission"
```

### Task 3: Final Integrity Check and Delivery Commit

**Files:**
- Verify: `index.html`
- Verify: git diff for unintended changes

- [ ] **Step 1: Write the failing test (assert exact interest separators and unchanged structure anchors)**

```powershell
Set-Location 'C:\Users\Administrator\copilot-worktrees\Hollis36.github.io\hollis36-expert-pancake'
rg -n "<section class=\"hero\">" index.html
rg -n "hero__avatar" index.html
rg -n "AI for Science · Industrial Embodied Intelligence · Multimodal Perception · Robotics" index.html
```

Expected: if any pattern is missing, checks fail and block delivery.

- [ ] **Step 2: Run test to verify it fails when structure/copy is incorrect**

Run:

```powershell
Set-Location 'C:\Users\Administrator\copilot-worktrees\Hollis36.github.io\hollis36-expert-pancake'
$a = rg -n "<section class=\"hero\">" index.html
$b = rg -n "hero__avatar" index.html
$c = rg -n "AI for Science · Industrial Embodied Intelligence · Multimodal Perception · Robotics" index.html
if (!$a -or !$b -or !$c) { "FAIL (copy/structure integrity check)" } else { "PASS" }
```

Expected: `PASS` after Tasks 1-2 are correctly implemented.

- [ ] **Step 3: Review change surface and ensure only intended file changes**

```bash
git --no-pager status --short
git --no-pager diff -- index.html
```

- [ ] **Step 4: Run final pass check**

```powershell
Set-Location 'C:\Users\Administrator\copilot-worktrees\Hollis36.github.io\hollis36-expert-pancake'
rg -n "AI4Science Researcher" index.html
rg -n "Building grounded AI for scientific discovery and embodied intelligence\." index.html
```

Expected: role appears in hero, mission appears in hero and metadata-aligned locations.

- [ ] **Step 5: Commit**

```bash
git add index.html
git commit -m "chore: finalize homepage hero copy refresh and consistency checks"
```
