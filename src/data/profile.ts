import type { Locale } from '../i18n/ui';

export type Link = { label: string; href: string };

export type LocalizedProfile = {
  name: string;
  position: string;
  affiliation: string;
  goal: string;
  interests: string;
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
  reviewerService: [
    { year: 2026, venues: ['NeurIPS', 'CVPR', 'ICLR'] },
    { year: 2025, venues: ['NeurIPS', 'ICML', 'ICLR', 'CVPR', 'ICCV', 'ICRA', 'IROS'] },
    { year: 2024, venues: ['NeurIPS', 'ICML', 'ICLR', 'CVPR', 'ECCV', 'ICRA', 'IROS', 'CoRL'] },
  ],
};
