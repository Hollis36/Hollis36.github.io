export type HonorAward = {
  year: number;
  label: string;
  note?: string;
  link?: string;
};

export type EducationEntry = {
  degree: string;
  field?: string;
  institution: string;
  school?: string;
  yearStart: number;
  yearEnd?: number;
  gpa?: string;
  rank?: string;
  advisor?: string;
  note?: string;
};

export type Profile = {
  name: string;
  position: string;
  affiliation: string;
  goal: string;
  interests: string;
  emailAddress: string;
  avatarUrl: string;
  cvUrl: string;
  social: {
    scholar: string;
    github: string;
    linkedin: string;
  };
  education: EducationEntry[];
  honorsAwards: HonorAward[];
  reviewerService: Array<{
    year: number;
    venues: string[];
  }>;
};

export const profile: Profile = {
  name: 'Peifu Zhang',
  position: 'M.S. Student in Biomedical Engineering',
  affiliation:
    'State Key Laboratory of Electromechanical Integrated Manufacturing of High-performance Electronic Equipment, School of Mechano-Electronic Engineering, Xidian University',
  goal: 'Bridging multi-modal sensing with physics-informed deep learning for intelligent integrated manufacturing and biomedical imaging.',
  interests:
    'Multi-modal information fusion, industrial defect detection, selective laser melting (SLM) monitoring, embodied intelligence, physics-informed neural networks (PINN), and AI-driven biomedical imaging.',
  emailAddress: 'peifu@stu.xidian.edu.cn',
  avatarUrl: '/show-photo.jpg',
  cvUrl: '/cv.pdf',
  social: {
    scholar: 'https://scholar.google.com/citations?user=YOUR_ID',
    github: 'https://github.com/Hollis36',
    linkedin: 'https://www.linkedin.com/in/your-handle/',
  },
  education: [
    {
      degree: 'M.S.',
      field: 'Biomedical Engineering',
      institution: 'Xidian University',
      school: 'School of Mechano-Electronic Engineering',
      yearStart: 2024,
      gpa: '89.47 / 100',
      advisor: 'Prof. Ruichan Lv (吕锐婵)',
      note: 'Full-time, recommended admission (推免). Currently applying for direct Ph.D. continuation (硕博连读).',
    },
    {
      degree: 'B.E.',
      institution: 'Xidian University',
      school: 'School of Artificial Intelligence',
      yearStart: 2020,
      yearEnd: 2024,
      gpa: '3.7 / 4.0',
      rank: 'Top 2%',
    },
  ],
  honorsAwards: [
    {
      year: 2025,
      label: 'Graduate Distinguished Scholarship',
      note: 'Top-tier graduate award',
    },
    {
      year: 2024,
      label: 'Champion, World Robot Contest — Shaanxi Selection',
    },
    {
      year: 2024,
      label: '1st Prize (National), 7th University Student Art Performance',
    },
    {
      year: 2023,
      label: '1st Prize (Provincial), "Challenge Cup" National College Students Extracurricular Academic Science and Technology Works Competition',
    },
    {
      year: 2023,
      label: 'Silver Medal (Provincial), China College Students "Internet+" Innovation and Entrepreneurship Competition',
    },
    {
      year: 2022,
      label: 'National Student Innovation and Entrepreneurship Training Project (funded)',
    },
    {
      year: 2022,
      label: 'Huawei "Future Star" Scholarship',
    },
    {
      year: 2022,
      label: '1st Prize (Provincial), China Undergraduate Mathematical Contest in Modeling',
    },
  ],
  reviewerService: [],
};
