export const LOCALES = ['en', 'zh'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'en';

type UIDict = Record<string, string>;

export const ui: Record<Locale, UIDict> = {
  zh: {
    'nav.cv': 'CV',
    'nav.email': '邮箱',
    'nav.scholar': 'Google Scholar',
    'nav.github': 'GitHub',
    'nav.linkedin': 'LinkedIn',
    'nav.lang_other': 'EN',
    'section.news': '新闻',
    'section.publications': '出版物',
    'section.projects': '精选项目',
    'section.reviewer': '审稿服务',
    'pub.abstract': '摘要',
    'pub.bibtex': 'BibTeX',
    'pub.pdf': 'PDF',
    'pub.arxiv': 'arXiv',
    'pub.code': '代码',
    'pub.project': '项目主页',
    'pub.video': '视频',
    'pub.website': '网页',
    'pub.copy': '复制',
    'pub.copied': '已复制',
    'pub.copy_aria': '复制 BibTeX 到剪贴板',
    'hero.goal': '目标',
    'hero.interests': '研究兴趣',
    'footer.copyright': '版权所有',
    'footer.updated': '最后更新',
  },
  en: {
    'nav.cv': 'CV',
    'nav.email': 'Email',
    'nav.scholar': 'Google Scholar',
    'nav.github': 'GitHub',
    'nav.linkedin': 'LinkedIn',
    'nav.lang_other': '中文',
    'section.news': 'News',
    'section.publications': 'Publications',
    'section.projects': 'Selected Projects',
    'section.reviewer': 'Reviewer Service',
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
    'hero.goal': 'Goal',
    'hero.interests': 'Research Interests',
    'footer.copyright': 'All rights reserved',
    'footer.updated': 'Last updated',
  },
};

export function t(locale: Locale, key: string): string {
  return ui[locale][key] ?? key;
}

export function otherLocale(locale: Locale): Locale {
  return locale === 'en' ? 'zh' : 'en';
}

export function localizedPath(locale: Locale, path = ''): string {
  const clean = path.replace(/^\/+/, '').replace(/\/$/, '');
  if (locale === DEFAULT_LOCALE) {
    return clean ? `/${clean}` : '/';
  }
  return clean ? `/${locale}/${clean}` : `/${locale}`;
}
