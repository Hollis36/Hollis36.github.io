# 个人学术主页（Astro + 双语）

参考 [tairanhe.com](https://tairanhe.com/) 风格的极简学术个人主页，基于 Astro 5 + 内置 i18n，中英双语切换。

## 快速开始

```bash
cd /Users/kingcode/Documents/my_log/site
npm install
npm run dev
# 浏览器打开 http://localhost:4321
```

构建生产版本：

```bash
npm run build
npm run preview
```

类型检查：

```bash
npm run check
```

## 目录结构

```
site/
├── astro.config.mjs            # i18n 配置（en 默认无前缀，zh 用 /zh/）
├── public/                     # 静态资源
│   ├── avatar.svg              # 占位头像 — 替换成你自己的 avatar.jpg
│   ├── cv.pdf                  # 把你的 CV 放这里
│   └── favicon.svg
├── src/
│   ├── content.config.ts       # publications / news / projects 的 Zod schema
│   ├── content/
│   │   ├── publications/{zh,en}/*.md   # 每篇论文一个 MD 文件 × 两种语言
│   │   ├── news/{zh,en}/*.md           # 每条新闻一个 MD 文件 × 两种语言
│   │   └── projects/{zh,en}/*.md
│   ├── data/
│   │   ├── papers.json         # 论文的语言无关元数据（作者、venue、年份、links、bibtex）
│   │   └── profile.ts          # 个人信息（姓名、职位、Goal、研究兴趣、社交链接、审稿服务）
│   ├── i18n/
│   │   └── ui.ts               # 中英 UI 字典
│   ├── layouts/BaseLayout.astro
│   ├── components/*.astro
│   ├── pages/
│   │   ├── index.astro         # 英文首页（URL: /，默认）
│   │   └── zh/index.astro      # 中文首页（URL: /zh）
│   ├── scripts/bibtex-copy.ts  # 展开折叠 + 复制 BibTeX
│   └── styles/global.css
└── package.json
```

## 修改个人信息

打开 `src/data/profile.ts`，把姓名 / 邮箱 / 头像 / CV / 社交链接 / 中英文的职位、单位、Goal、研究兴趣、审稿服务 全部改成你自己的。

替换 `public/avatar.svg` 为 `public/avatar.jpg`（150×150 推荐），同步改 `profile.ts` 里的 `avatarUrl`。
放置 `public/cv.pdf`。

## 添加一篇论文

1. 在 `src/data/papers.json` 中加一个新条目（key 是你自定义的 paperId）：

```json
"my-2026-novel": {
  "authors": [
    { "name": "Your Name", "self": true },
    { "name": "Co Author", "url": "https://...", "corresponding": true }
  ],
  "venue": "Conference Full Name (Conf)",
  "venueShort": "Conf",
  "year": 2026,
  "selected": true,
  "note": "Oral",
  "links": {
    "pdf": "https://...",
    "arxiv": "https://...",
    "code": "https://...",
    "project": "https://..."
  },
  "bibtex": "@inproceedings{key2026,\n  ...\n}"
}
```

2. 在 `src/content/publications/zh/my-2026-novel.md` 与 `src/content/publications/en/my-2026-novel.md` 分别写好对应语言的 `title` / `abstract` / 可选 `note`：

```markdown
---
paperId: "my-2026-novel"
title: "中文标题"
abstract: "中文摘要……"
---
```

`paperId` 必须与 `papers.json` 的 key 完全一致。

## 添加一条新闻

`src/content/news/{zh,en}/2026-XX.md`，frontmatter 写 `newsId` 和 `date`，正文用 Markdown，可包含 `[文字](链接)`。

## 添加一个项目

`src/content/projects/{zh,en}/your-project.md`，按 schema 填 `projectId` / `title` / `summary` / `year` / `order` / `link` / `cover`。

## 部署

**GitHub Pages**：在仓库新建 `.github/workflows/deploy.yml`（参考 [Astro 官方 GitHub Pages 文档](https://docs.astro.build/en/guides/deploy/github/)）。`astro.config.mjs` 的 `site` 字段改成你的最终域名。

**Vercel / Netlify**：直接连仓库一键部署，自动识别 Astro。

**自定义域名**：把域名指向托管平台，按平台文档配置。

## 技术栈

- **Astro 5+**：Content Collections + 内置 i18n + 零 JS 默认
- **TypeScript strict**：所有内容数据 schema 类型安全
- **原生 `<details>` + Vanilla JS**：Abstract / BibTeX 折叠展开 + 复制按钮，无运行时框架

## 设计参考

视觉风格高度参考 [tairanhe.com](https://tairanhe.com/) ——纯白底、sans-serif、单栏 760px 居中、`[ Section ]` 括号标题、学术蓝链接。
