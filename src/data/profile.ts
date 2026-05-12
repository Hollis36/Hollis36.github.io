import type { Locale } from '../i18n/ui';

export type Link = { label: string; href: string };

export type LocalizedProfile = {
  name: string;
  position: string;
  affiliation: string;
  goal: string;
  interests: string;
};

export type HonorAward = {
  year: number;
  en: string;
  zh: string;
  note?: string;
  link?: string;
};

export type Profile = {
  shortName: string;
  shortNameAlt: string;
  emailAddress: string;
  avatarUrl: string;
  cvUrl: string;
  social: {
    scholar: string;
    github: string;
    linkedin: string;
  };
  locales: Record<Locale, LocalizedProfile>;
  honorsAwards: HonorAward[];
  reviewerService: Array<{
    year: number;
    venues: string[];
  }>;
};

export const profile: Profile = {
  shortName: 'Peifu Zhang',
  shortNameAlt: '张培榑',
  emailAddress: 'you@example.edu',
  avatarUrl: '/show-photo.jpg',
  cvUrl: '/cv.pdf',
  social: {
    scholar: 'https://scholar.google.com/citations?user=YOUR_ID',
    github: 'https://github.com/your-username',
    linkedin: 'https://www.linkedin.com/in/your-handle/',
  },
  locales: {
    zh: {
      name: '张培榑',
      position: '博士研究生',
      affiliation: '高性能电子装备机电集成制造国家重点实验室',
      goal: '让机器更好地理解和服务人类。',
      interests:
        '机器学习、机器人学习、强化学习。我对将基础模型与具身智能体相结合、并让它们在真实物理世界中可靠工作的问题特别感兴趣。',
    },
    en: {
      name: 'Peifu Zhang',
      position: 'Ph.D. Student',
      affiliation:
        'State Key Laboratory of Electromechanical Integrated Manufacturing of High-performance Electronic Equipment',
      goal: 'Build machines that better understand and serve humanity.',
      interests:
        'Machine learning, robot learning, reinforcement learning. I am especially interested in combining foundation models with embodied agents, and making them reliable in the real physical world.',
    },
  },
  honorsAwards: [
    {
      year: 2025,
      en: 'National Scholarship for Doctoral Students',
      zh: '博士研究生国家奖学金',
      note: 'Top 1%',
    },
    {
      year: 2025,
      en: 'CSC State-Sponsored Joint-Training Doctoral Fellowship',
      zh: '国家公派联合培养博士生 (CSC)',
    },
    {
      year: 2024,
      en: '1st Prize, "Huawei Cup" China Postgraduate Mathematical Contest in Modeling',
      zh: '"华为杯" 全国研究生数学建模竞赛 一等奖',
    },
    {
      year: 2024,
      en: 'Outstanding Graduate Student of the Year',
      zh: '校级"十佳研究生"',
    },
    {
      year: 2023,
      en: '2nd Prize, China College Students "Internet+" Innovation and Entrepreneurship Competition',
      zh: '中国国际"互联网+"大学生创新创业大赛 国家级二等奖',
    },
    {
      year: 2022,
      en: 'Outstanding Undergraduate Thesis Award',
      zh: '省级优秀本科毕业设计',
    },
  ],
  reviewerService: [
    { year: 2026, venues: ['NeurIPS', 'CVPR', 'ICLR'] },
    { year: 2025, venues: ['NeurIPS', 'ICML', 'ICLR', 'CVPR', 'ICCV', 'ICRA', 'IROS'] },
    { year: 2024, venues: ['NeurIPS', 'ICML', 'ICLR', 'CVPR', 'ECCV', 'ICRA', 'IROS', 'CoRL'] },
  ],
};
