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

export type ExperienceEntry = {
  yearStart: number;
  yearEnd?: number;
  yearLabel?: string;
  title: string;
  organization: string;
  location?: string;
  description?: string;
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
    orcid: string;
    github: string;
    linkedin: string;
  };
  education: EducationEntry[];
  experience: ExperienceEntry[];
  honorsAwards: HonorAward[];
  reviewerService: Array<{
    year: number;
    venues: string[];
  }>;
};

export const profile: Profile = {
  name: 'Researcher',
  position: 'Graduate Researcher',
  affiliation: 'Research Lab, Engineering Department',
  goal: 'Bridging multi-modal sensing with physics-informed deep learning for intelligent integrated manufacturing and biomedical imaging.',
  interests:
    'Multi-modal fusion · Industrial defect detection · SLM monitoring · PINN · Biomedical imaging',
  emailAddress: '',
  avatarUrl: '',
  cvUrl: '',
  social: {
    scholar: '',
    orcid: '',
    github: '',
    linkedin: '',
  },
  education: [
    {
      degree: 'M.S.',
      field: 'Biomedical Engineering',
      institution: 'Research University',
      yearStart: 2024,
    },
    {
      degree: 'B.E.',
      institution: 'Research University',
      yearStart: 2020,
      yearEnd: 2024,
    },
  ],
  experience: [
    {
      yearStart: 2024,
      yearEnd: 2025,
      title: 'Volunteer Teacher',
      organization: 'Volunteer Teaching Program',
      description: 'One-year volunteer teaching service in underserved regions.',
    },
    {
      yearStart: 2024,
      yearLabel: 'Summer 2024',
      title: 'Visiting Student, Medical Digitization Project',
      organization: 'Visiting Research Program (Overseas)',
    },
    {
      yearStart: 2023,
      yearLabel: 'Summer 2023',
      title: 'Research Training in Deep Learning',
      organization: 'Summer Research Program (Overseas)',
    },
    {
      yearStart: 2023,
      yearLabel: 'Summer 2023',
      title: 'Summer Research Intern, Brain-Computer Interface',
      organization: 'Summer Research Lab (Domestic)',
    },
  ],
  honorsAwards: [
    {
      year: 2025,
      label: 'Graduate Scholarship & National Volunteer Honors',
    },
    {
      year: 2024,
      label: 'University Distinguished Student & National Performance Award',
    },
    {
      year: 2024,
      label: 'Robotics Competition Awards (Champion · Outstanding Instructor)',
    },
    {
      year: 2023,
      label: 'Provincial Innovation & Research Awards (Challenge Cup · Internet+)',
    },
    {
      year: 2022,
      label: 'National Innovation Training & Industry Scholarship & Modeling Contest',
    },
  ],
  reviewerService: [],
};
