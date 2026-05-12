export const LOCALES = ['en', 'zh'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'en';

export const HTML_LANG: Record<Locale, string> = {
  en: 'en',
  zh: 'zh-CN',
};

export const LOCALE_LABEL: Record<Locale, string> = {
  en: 'EN',
  zh: '中文',
};

type UIDict = Record<string, string>;

export const ui: Record<Locale, UIDict> = {
  en: {
    'nav.cv': 'CV',
    'nav.email': 'Email',
    'nav.scholar': 'Google Scholar',
    'nav.github': 'GitHub',
    'nav.linkedin': 'LinkedIn',
    'section.news': 'News',
    'section.publications': 'Publications',
    'section.projects': 'Selected Projects',
    'section.honors': 'Honors & Awards',
    'section.reviewer': 'Reviewer Service',
    'hero.goal': 'Goal',
    'hero.interests': 'Research Interests',
    'pub.abstract': 'Abstract',
    'pub.bibtex': 'BibTeX',
    'pub.pdf': 'PDF',
    'pub.arxiv': 'arXiv',
    'pub.code': 'Code',
    'pub.project': 'Project',
    'pub.video': 'Video',
    'pub.website': 'Website',
    'pub.copy': 'Copy',
    'pub.copied': 'Copied',
    'pub.copy_aria': 'Copy BibTeX to clipboard',
    'footer.updated': 'Last updated',
  },
  zh: {
    'nav.cv': '简历',
    'nav.email': '邮箱',
    'nav.scholar': 'Google Scholar',
    'nav.github': 'GitHub',
    'nav.linkedin': 'LinkedIn',
    'section.news': '新闻',
    'section.publications': '出版物',
    'section.projects': '精选项目',
    'section.honors': '荣誉与奖项',
    'section.reviewer': '审稿服务',
    'hero.goal': '目标',
    'hero.interests': '研究兴趣',
    'pub.abstract': '摘要',
    'pub.bibtex': 'BibTeX',
    'pub.pdf': 'PDF',
    'pub.arxiv': 'arXiv',
    'pub.code': '代码',
    'pub.project': '项目',
    'pub.video': '视频',
    'pub.website': '网页',
    'pub.copy': '复制',
    'pub.copied': '已复制',
    'pub.copy_aria': '复制 BibTeX 到剪贴板',
    'footer.updated': '最后更新',
  },
};

export function t(locale: Locale, key: string): string {
  return ui[locale]?.[key] ?? ui[DEFAULT_LOCALE][key] ?? key;
}

export function localizedPath(locale: Locale, path = ''): string {
  const clean = path.replace(/^\/+/, '').replace(/\/$/, '');
  if (locale === DEFAULT_LOCALE) {
    return clean ? `/${clean}` : '/';
  }
  return clean ? `/${locale}/${clean}` : `/${locale}`;
}

export function otherLocales(current: Locale): Locale[] {
  return LOCALES.filter((l) => l !== current);
}
