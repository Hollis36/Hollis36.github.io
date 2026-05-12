export type HonorAward = {
  year: number;
  label: string;
  note?: string;
  link?: string;
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
  honorsAwards: HonorAward[];
  reviewerService: Array<{
    year: number;
    venues: string[];
  }>;
};

export const profile: Profile = {
  name: 'Peifu Zhang',
  position: 'Ph.D. Student',
  affiliation:
    'State Key Laboratory of Electromechanical Integrated Manufacturing of High-performance Electronic Equipment',
  goal: 'Build machines that better understand and serve humanity.',
  interests:
    'Machine learning, robot learning, reinforcement learning. I am especially interested in combining foundation models with embodied agents, and making them reliable in the real physical world.',
  emailAddress: 'you@example.edu',
  avatarUrl: '/show-photo.jpg',
  cvUrl: '/cv.pdf',
  social: {
    scholar: 'https://scholar.google.com/citations?user=YOUR_ID',
    github: 'https://github.com/your-username',
    linkedin: 'https://www.linkedin.com/in/your-handle/',
  },
  honorsAwards: [
    {
      year: 2025,
      label: 'National Scholarship for Doctoral Students',
      note: 'Top 1%',
    },
    {
      year: 2025,
      label: 'CSC State-Sponsored Joint-Training Doctoral Fellowship',
    },
    {
      year: 2024,
      label: '1st Prize, "Huawei Cup" China Postgraduate Mathematical Contest in Modeling',
    },
    {
      year: 2024,
      label: 'Outstanding Graduate Student of the Year',
    },
    {
      year: 2023,
      label: '2nd Prize, China College Students "Internet+" Innovation and Entrepreneurship Competition',
    },
    {
      year: 2022,
      label: 'Outstanding Undergraduate Thesis Award',
    },
  ],
  reviewerService: [
    { year: 2026, venues: ['NeurIPS', 'CVPR', 'ICLR'] },
    { year: 2025, venues: ['NeurIPS', 'ICML', 'ICLR', 'CVPR', 'ICCV', 'ICRA', 'IROS'] },
    { year: 2024, venues: ['NeurIPS', 'ICML', 'ICLR', 'CVPR', 'ECCV', 'ICRA', 'IROS', 'CoRL'] },
  ],
};
