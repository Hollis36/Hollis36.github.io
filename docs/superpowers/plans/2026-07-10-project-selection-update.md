# Homepage Project Selection Update Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Update Selected Projects cards to TianWen, ABB Offline Coder, and Newton VLA Demo with concise academic summaries and correct links.

**Architecture:** Make content-only edits inside the Selected Projects block in root `index.html`. Keep class names and list structure intact so styles and layout do not change. Validate by asserting exact title/link/summary strings and project count.

**Tech Stack:** Static HTML, PowerShell, ripgrep (`rg`), git

---

### Task 1: Replace Selected Projects Card Content

**Files:**
- Modify: `index.html`
- Test: `index.html` assertions via `rg`

- [ ] **Step 1: Write the failing test**

```powershell
Set-Location 'C:\Users\Administrator\copilot-worktrees\Hollis36.github.io\hollis36-expert-pancake'
rg -n 'ABB Offline Coder|Newton VLA Demo' index.html
```

Expected: no matches before update.

- [ ] **Step 2: Run test to verify it fails**

Run:

```powershell
Set-Location 'C:\Users\Administrator\copilot-worktrees\Hollis36.github.io\hollis36-expert-pancake'
$m = rg -n 'ABB Offline Coder|Newton VLA Demo' index.html
if (($m | Measure-Object).Count -eq 0) { 'FAIL (expected before implementation)' } else { 'Unexpected pre-existing matches' }
```

Expected: `FAIL (expected before implementation)`.

- [ ] **Step 3: Write minimal implementation**

In `index.html` under `<ul class="project-grid">`, keep three cards and set content exactly:

```html
<h3 class="project-card__title">TianWen</h3>
<p class="project-card__summary">A modular framework for detector–VLM fusion with distillation and multimodal decision integration.</p>
```

```html
<a class="project-card" href="https://hollis36.github.io/abb-offline-coder/" target="_blank" rel="noopener noreferrer">
  <div class="project-card__body">
    <h3 class="project-card__title">ABB Offline Coder</h3>
    <p class="project-card__summary">A privacy-preserving offline coding framework for reproducible local AI-assisted development.</p>
  </div>
</a>
```

```html
<a class="project-card" href="https://hollis36.github.io/newton-vla-demo/" target="_blank" rel="noopener noreferrer">
  <div class="project-card__body">
    <h3 class="project-card__title">Newton VLA Demo</h3>
    <p class="project-card__summary">A VLA demonstration for embodied perception-to-action reasoning in robotic tasks.</p>
  </div>
</a>
```

- [ ] **Step 4: Run test to verify it passes**

Run:

```powershell
Set-Location 'C:\Users\Administrator\copilot-worktrees\Hollis36.github.io\hollis36-expert-pancake'
rg -n 'ABB Offline Coder|Newton VLA Demo' index.html
rg -n 'https://hollis36.github.io/abb-offline-coder/|https://hollis36.github.io/newton-vla-demo/' index.html
```

Expected: both commands return matches.

- [ ] **Step 5: Commit**

```bash
git add index.html
git commit -m "feat: update selected projects to tianwen abb-offline-coder and newton-vla-demo"
```

### Task 2: Final Integrity Check (Scope and Count)

**Files:**
- Verify: `index.html`

- [ ] **Step 1: Write the failing test**

```powershell
Set-Location 'C:\Users\Administrator\copilot-worktrees\Hollis36.github.io\hollis36-expert-pancake'
rg -n '<li>\s*<(a class="project-card"|div class="project-card")' index.html
```

Expected: should be exactly 3.

- [ ] **Step 2: Run test to verify it fails when count differs**

Run:

```powershell
Set-Location 'C:\Users\Administrator\copilot-worktrees\Hollis36.github.io\hollis36-expert-pancake'
$count = (rg -n '<li>\s*<(a class="project-card"|div class="project-card")' index.html | Measure-Object).Count
if ($count -eq 3) { 'PASS' } else { "FAIL project_count=$count" }
```

Expected: `PASS`.

- [ ] **Step 3: Review final diff scope**

```bash
git --no-pager diff -- index.html
git --no-pager status --short
```

- [ ] **Step 4: Run final string assertions**

Run:

```powershell
Set-Location 'C:\Users\Administrator\copilot-worktrees\Hollis36.github.io\hollis36-expert-pancake'
rg -n 'TianWen|ABB Offline Coder|Newton VLA Demo' index.html
rg -n 'A modular framework for detector–VLM fusion with distillation and multimodal decision integration\.' index.html
rg -n 'A privacy-preserving offline coding framework for reproducible local AI-assisted development\.' index.html
rg -n 'A VLA demonstration for embodied perception-to-action reasoning in robotic tasks\.' index.html
```

Expected: all patterns match once in the Selected Projects section.

- [ ] **Step 5: Commit**

```bash
git add index.html
git commit -m "chore: finalize selected projects content update checks"
```
