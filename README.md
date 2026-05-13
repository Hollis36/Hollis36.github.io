# Peifu Zhang — Academic Personal Site

> **Live**: https://hollis36.github.io/
> **Repo**: https://github.com/Hollis36/Hollis36.github.io
> **Tech**: Astro 5 + TypeScript + Content Collections, deployed to GitHub Pages

Static site, all content in markdown / TypeScript data files. Add a paper = add a `.md` file + a JSON entry. Push to `main` → GitHub Actions builds + deploys in ~40s.

---

## Quick start

```bash
cd /Users/kingcode/Documents/my_log/site

npm install          # first time only
npm run dev          # http://localhost:4321/
npm run build        # production build → dist/
npm run preview      # serve built output locally
npm run check        # astro check (TypeScript + content schema)
```

---

## How to update content (most common tasks)

### Add a new publication

1. Open [`src/data/papers.json`](src/data/papers.json), add a new entry. Pick any unique `paperId` (becomes the key):

   ```json
   "my-2026-paper": {
     "authors": [
       { "name": "Author A", "url": "https://...", "equal": true },
       { "name": "Peifu Zhang", "self": true, "equal": true },
       { "name": "Senior Advisor", "url": "https://...", "corresponding": true }
     ],
     "venue": "Conference Full Name (Conf)",
     "venueShort": "Conf",
     "year": 2026,
     "selected": true,
     "tags": ["..."],
     "note": "Oral",
     "links": {
       "pdf": "https://...",
       "arxiv": "https://...",
       "code": "https://...",
       "project": "https://...",
       "website": "https://doi.org/..."
     },
     "bibtex": "@article{...}"
   }
   ```

   Author flags:
   - `self: true` — your name (renders bold)
   - `equal: true` — appends `*` (co-first-author)
   - `corresponding: true` — appends `†` (corresponding author)
   - `url` — author homepage (optional)

2. Create [`src/content/publications/my-2026-paper.md`](src/content/publications) with matching `paperId`:

   ```markdown
   ---
   paperId: "my-2026-paper"
   title: "Your Paper Title"
   abstract: "Full abstract text here..."
   note: "Oral"
   ---
   ```

   The `paperId` **must** match the key in `papers.json`. Title and abstract belong only in the MD file; everything language-independent lives in JSON.

3. Push. Done. Sorted by year desc automatically.

### Add a news entry

Create `src/content/news/YYYY-MM-slug.md`:

```markdown
---
newsId: "my-event"
date: 2026-05-13
---
Markdown content with [inline links](https://...) and **bold** allowed.
```

Sorted descending by `date`. The `newsId` only needs to be unique inside news.

### Add a research project

Create `src/content/projects/slug.md`:

```markdown
---
projectId: "slug"
title: "Project Title"
summary: "One-line description with level (Provincial Key / National / etc.) and your role."
year: 2025
order: 1
tags: ["tag1", "tag2"]
link: "https://optional-project-page"
cover: "/optional-cover.jpg"
---
```

`order` smallest first; ties broken by `year` desc. `link` and `cover` are optional.

### Update identity (name / position / Goal / Interests / social)

Edit [`src/data/profile.ts`](src/data/profile.ts):

```ts
export const profile: Profile = {
  name: 'Peifu Zhang',
  position: 'M.S. Student in Biomedical Engineering',
  affiliation: 'State Key Laboratory of ...',
  goal: 'One-sentence research goal.',
  interests: 'Comma-separated research keywords ending with period.',
  emailAddress: 'peifu@stu.xidian.edu.cn',
  avatarUrl: '/show-photo.jpg',
  cvUrl: '/cv.pdf',
  social: {
    scholar: '',                                   // empty = hide from nav + JSON-LD
    orcid: 'https://orcid.org/0009-0007-8422-3955',
    github: 'https://github.com/Hollis36',
    linkedin: '',                                  // empty = hide
  },
  education: [ ... ],
  experience: [ ... ],
  honorsAwards: [ ... ],
  reviewerService: [],                              // empty = section hidden
}
```

**Conditional nav**: empty social URL → hide that nav link and remove from JSON-LD `sameAs`. To re-enable LinkedIn, just set the URL string.

### Update Education / Experience / Honors / Reviewer Service

All in [`src/data/profile.ts`](src/data/profile.ts):

- `education[]` — renders `<Education />` (year + degree + institution + GPA + advisor + note)
- `experience[]` — renders `<Experience />` (year + role + organization + location)
- `honorsAwards[]` — renders `<Honors />` (year + label + optional note + optional link)
- `reviewerService[]` — renders `<ReviewerService />`. **Empty array hides the whole section.**

Schemas are at the top of `profile.ts` (`EducationEntry`, `ExperienceEntry`, `HonorAward`).

### Swap avatar / photo

1. Resize new photo to ≤800px max dim, save as JPEG quality 88:
   ```bash
   sips -Z 800 source.png --setProperty format jpeg --setProperty formatOptions 88 \
        --out public/show-photo.jpg
   ```
2. If face placement is off after circular crop, edit `.hero__avatar img { object-position: 50% 20%; }` in [`src/styles/global.css`](src/styles/global.css). Lower the second percent to show more of the upper half.

### Update CV PDF

Drop the new file at `public/cv.pdf` (replace). Nav `[CV]` automatically serves it.

### Regenerate OG preview image

The `public/og-image.jpg` is a 1200×630 social-share card. To regen:

1. Open a temp HTML template (see git history `feat(og)` commit for the full template) hosted via `npm run dev`.
2. Open Playwright/Chrome at 1200×630 viewport.
3. Screenshot → save to `public/og-image.jpg`.
4. Push. After deploy, force Facebook/Twitter/LinkedIn card debuggers to re-scrape (they cache aggressively).

In practice, just ask Claude to regenerate from updated `profile.ts` data.

---

## Project structure

```
site/
├── astro.config.mjs           # site URL, sitemap integration
├── package.json
├── tsconfig.json
├── .gitignore
├── .github/workflows/deploy.yml   # auto-deploy on push to main
│
├── public/                     # served as-is at site root
│   ├── show-photo.jpg          # avatar (533×800 JPEG, 74KB)
│   ├── og-image.jpg            # OG social card (1200×630, 58KB)
│   ├── cv.pdf                  # CV (replace as needed)
│   ├── favicon.svg             # PZ monogram
│   └── robots.txt              # allow + sitemap reference
│
└── src/
    ├── content.config.ts       # Zod schemas for publications / news / projects
    ├── content/
    │   ├── publications/*.md   # 1 file per paper (title + abstract + note)
    │   ├── news/*.md           # 1 file per news item (frontmatter + markdown body)
    │   └── projects/*.md       # 1 file per project
    ├── data/
    │   ├── papers.json         # language-neutral paper metadata (authors, venue, bibtex, links)
    │   └── profile.ts          # identity + education + experience + honors + reviewerService
    ├── layouts/
    │   └── BaseLayout.astro    # <html>, <head> (SEO meta, OG, Twitter, JSON-LD), header, footer
    ├── components/
    │   ├── Header.astro        # data-driven nav (CV · Email · social*)
    │   ├── Hero.astro          # name + position + affiliation + goal + interests + avatar
    │   ├── SectionTitle.astro  # `[ TITLE ]` style bracket header
    │   ├── NewsList.astro      # reads news collection, sorts by date desc
    │   ├── Education.astro     # reads profile.education
    │   ├── Experience.astro    # reads profile.experience
    │   ├── PublicationItem.astro  # one paper card (with abstract + bibtex toggles)
    │   ├── ProjectCard.astro   # one project card (grid item)
    │   ├── Honors.astro        # reads profile.honorsAwards
    │   └── ReviewerService.astro  # reads profile.reviewerService (auto-hides if empty)
    ├── pages/
    │   └── index.astro         # the single page — assembles all sections
    ├── scripts/
    │   └── bibtex-copy.ts      # vanilla JS for <details> toggles + clipboard copy
    └── styles/
        └── global.css          # design tokens + all section styles
```

---

## Deployment

Push to `main` triggers `.github/workflows/deploy.yml`:

1. `actions/checkout`
2. `withastro/action@v3` — installs node 20, runs `npm ci && npm run build`
3. `actions/deploy-pages` — publishes `dist/` to GitHub Pages

Takes ~40 seconds. View progress at https://github.com/Hollis36/Hollis36.github.io/actions.

The site URL (`https://hollis36.github.io/`) is hardcoded in `astro.config.mjs` and used for canonical / OG / JSON-LD URLs. To migrate to a custom domain, change `site:` in `astro.config.mjs`, add `public/CNAME` with the domain, and configure DNS.

---

## Analytics

**GoatCounter** dashboard: https://peifuzhang.goatcounter.com/

- Login: `peifu@stu.xidian.edu.cn`
- Script in [`BaseLayout.astro`](src/layouts/BaseLayout.astro): `<script ... data-goatcounter="https://peifuzhang.goatcounter.com/count" src="//gc.zgo.at/count.js"></script>`
- No cookies. Localhost is auto-filtered. Bots are filtered.
- GDPR / CCPA / PIPL compliant by default — no consent banner needed.

---

## SEO

- `robots.txt` (public/) — allows all crawlers, points to sitemap
- `sitemap-index.xml` + `sitemap-0.xml` — auto-generated by `@astrojs/sitemap`
- `<meta name="google-site-verification">` — set in BaseLayout (Hollis36 account verified)
- OG + Twitter Card meta — generated per-page in BaseLayout
- JSON-LD `Person` schema — auto-built from `profile.ts`, includes `sameAs` (Scholar/ORCID/GitHub/LinkedIn) and `identifier` (ORCID PropertyValue)

**Google Search Console**: https://search.google.com/search-console/ (login with Hollis36's google account). Sitemap is submitted; check there for indexing status.

---

## Tech stack

- **Astro 5** — content-driven static site generator
- **TypeScript strict** — type-checked schemas via Zod
- **EB Garamond Variable + Inter Variable + JetBrains Mono Variable** — via `@fontsource-variable/*` (self-hosted woff2)
- **No framework runtime** — zero JS by default; `bibtex-copy.ts` is ~30 lines of vanilla JS for `<details>` toggles + clipboard
- **GitHub Pages** — free static hosting
- **GoatCounter** — privacy-friendly analytics

---

## Known TODO / future improvements

| Item | Notes |
|---|---|
| Google Scholar profile | `profile.social.scholar` empty. Create Scholar profile → fill URL. |
| LinkedIn URL | `profile.social.linkedin` empty. Add real URL if applicable. |
| Patents section | If patents granted, add a `Patents.astro` + `profile.patents[]`. |
| Real talks | If invited talks given, add Talks section. |
| Custom domain | Currently github.io subdomain. Buy `peifuzhang.com` etc. when going on the academic market. |
| RSS feed for news | Add `@astrojs/rss` if want subscribable updates. |

---

## Troubleshooting

| Symptom | Likely cause / fix |
|---|---|
| Build fails on schema error | `paperId` in MD doesn't match key in `papers.json`, or required field missing. Run `npm run check`. |
| Page shows "No data received" in GoatCounter | Adblocker blocks `gc.zgo.at`. Test in private window. Localhost is auto-filtered. |
| OG preview shows old image after update | FB/Twitter/LinkedIn cache. Use their debugger tools to force re-scrape. |
| Photo crops weird in circle | Adjust `object-position` in global.css `.hero__avatar img`. |
| `/zh` or other path returns 404 | Site is English-only; the i18n setup was removed. To re-add, see git history. |
| Lost dev server | Run `npm run dev` again. Auto-binds to 4321. Kill with `lsof -ti:4321 \| xargs kill`. |

---

## Git workflow

```bash
cd /Users/kingcode/Documents/my_log/site

# After any content/profile change
git add -A
git commit -m "update: <what changed>"
git push

# Wait ~40s. Verify:
curl -sI https://hollis36.github.io/ | head -1   # HTTP/2 200
```

Git is authenticated via `gh` CLI (already logged in as `Hollis36`). No password needed.

---

## Useful one-liners

```bash
# Force-redeploy without code change
git commit --allow-empty -m "chore: trigger deploy" && git push

# Watch the latest deploy
gh run watch --repo Hollis36/Hollis36.github.io

# Open the deploy logs in browser
gh run view --repo Hollis36/Hollis36.github.io --web

# Find all placeholders left in code
grep -rEn 'YOUR_|your-|example\.(com|edu)|placeholder|TODO' src/ public/

# Validate all links return 200
grep -hoE 'https?://[^"]+' src/data/papers.json src/data/profile.ts | sort -u | while read url; do
  echo -n "$url → "; curl -sI -o /dev/null -w "%{http_code}\n" -L "$url"
done
```
