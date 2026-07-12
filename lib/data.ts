// ─────────────────────────────────────────────────────────────
// Single source of truth for all portfolio content.
// Update your details here — every component reads from this file.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Mayank Raj',
  initials: 'MR',
  role: 'Aspiring Software Engineer · AI Enthusiast · Prompt Engineer · JEE Main 2027 Aspirant',
  tagline: 'Learning Today, Building Tomorrow.',
  bootLines: [
    'booting mayank_raj.profile...',
    'loading modules: [ai, prompt-eng, jee-prep]',
    'status: online',
  ],
  location: 'Biharsharif, Nalanda, Bihar – 803101',
  email: 'mayankriu0.2156@gmail.com',
  phone: '9304197083',
  // Replace with your own photo at /public/profile.jpg — this is a placeholder.
  photo: '/profile.jpg',
  resumeUrl: '#', // Add your resume PDF to /public and point this to e.g. "/Mayank_Raj_Resume.pdf"
};

export const about = `I am Mayank Raj from Biharsharif, Nalanda, Bihar, India. I completed Class 10 in 2023 and Class 12 in 2026 under the Bihar School Examination Board (BSEB). I am currently preparing for JEE Main 2027 with the goal of securing admission to a good government engineering college in the Electronics and Communication Engineering (ECE) branch.

I am passionate about Artificial Intelligence, Prompt Engineering, Software Development, and emerging technologies. I enjoy learning new skills, solving problems, and continuously improving myself. My long-term goal is to become an AI Engineer and contribute to innovative technologies that make a positive impact.`;

export const careerObjective = `My objective is to secure admission to a reputed government engineering college through JEE Main 2027, specialize in Electronics and Communication Engineering, and build a successful career in AI and Software Engineering.`;

export type EducationEntry = {
  level: string;
  board: string;
  year: string;
  score: string;
  note: string;
};

export const education: EducationEntry[] = [
  {
    level: 'Intermediate (Class 12)',
    board: 'Bihar School Examination Board (BSEB)',
    year: '2026',
    score: '68.2%',
    note: 'Currently preparing for JEE Main 2027 alongside foundational AI & CS learning.',
  },
  {
    level: 'Matriculation (Class 10)',
    board: 'Bihar School Examination Board (BSEB)',
    year: '2023',
    score: '72.2%',
    note: 'Built early interest in mathematics and problem solving.',
  },
];

export type SkillEntry = {
  name: string;
  status: 'active' | 'learning';
};

export const skills: SkillEntry[] = [
  { name: 'Artificial Intelligence', status: 'active' },
  { name: 'Prompt Engineering', status: 'active' },
  { name: 'ChatGPT & AI Tools', status: 'active' },
  { name: 'Problem Solving', status: 'active' },
  { name: 'Quick Learning', status: 'active' },
  { name: 'C++', status: 'learning' },
  { name: 'Python', status: 'learning' },
  { name: 'HTML', status: 'learning' },
  { name: 'CSS', status: 'learning' },
  { name: 'JavaScript', status: 'learning' },
  { name: 'React', status: 'learning' },
  { name: 'Git & GitHub', status: 'learning' },
  { name: 'Data Structures & Algorithms', status: 'learning' },
];

// Add real projects here as you build them — each card renders automatically.
export type Project = {
  title: string;
  description: string;
  tags: string[];
  link?: string;
};
export const projects: Project[] = [];

export type Achievement = { title: string; description: string; date?: string };
export const achievements: Achievement[] = [];

export type Certificate = { title: string; issuer: string; date?: string; link?: string };
export const certificates: Certificate[] = [];

export const socials = {
  github: 'https://github.com/', // replace with your GitHub username URL
  linkedin: 'https://linkedin.com/', // replace with your LinkedIn profile URL
  twitter: 'https://x.com/', // replace with your X (Twitter) profile URL
};

export const siteMeta = {
  title: 'Mayank Raj — Portfolio',
  description:
    'Mayank Raj — Aspiring Software Engineer, AI Enthusiast, Prompt Engineer, and JEE Main 2027 Aspirant from Bihar, India.',
  url: 'https://mayankraj.example.com', // replace with your deployed domain
};
