export interface ProjectStat {
  icon: 'star' | 'downloads';
  value: string;
}

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  platform: 'web' | 'mobile';
  externalUrl?: string;
  externalLabel?: string;
  stats?: ProjectStat[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  achievements: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export const HERO_DATA = {
  name: "Ajithkumar",
  role: "Senior Software Engineer / Front-End Developer",
  tagline: "React & Next.js engineer building AI-integrated e-commerce experiences at OnTrac AI, with production banking software for JPMorgan Chase and healthcare platforms shipped along the way — measured in load-time percentages, not adjectives.",
};

export const ABOUT_DATA = {
  bio: "Senior Frontend Engineer with 8 years in the tech industry (since Jul 2018) and 5-6 years of hands-on software engineering experience building with React and modern frontend ecosystems (since Sep 2020). Specialized in building scalable, high-performance applications across fintech, healthcare, and AI/e-commerce domains. Expert in robust state management, server-side rendering architecture, real-time systems, and seamless API integrations.",
  highlights: [
    "8 years total tenure in the tech industry (since Jul 2018)",
    "5-6 years of hands-on software engineering, specializing in React & Next.js (since Sep 2020)",
    "Experience spans fintech (JPMorgan Chase), healthcare, and AI-driven e-commerce platforms",
  ],
};

export const SOCIAL_LINKS = {
  linkedIn: "https://www.linkedin.com/in/ajith-kumar-6080b8152/",
  gitHub: "https://github.com/ajithrak"
};

export const SKILLS_DATA: SkillCategory[] = [
  {
    category: "Frontend Core",
    skills: ["React.js", "Next.js", "React Native", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"],
  },
  {
    category: "State & Data Management",
    skills: ["Redux", "Redux Toolkit (RTK)", "RTK Query", "REST API Integration"],
  },
  {
    category: "Styling & UI Systems",
    skills: ["TailwindCSS", "Bootstrap", "Responsive Design", "UI/UX Optimization"],
  },
  {
    category: "Backend & Cloud Services",
    skills: ["Node.js", "Firebase"],
  },
  {
    category: "Architecture & Optimization",
    skills: ["Performance Optimization", "Cross-browser Compatibility", "SSR (Server-Side Rendering)", "Secure Data Exchange"],
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    title: "Ford Parts Locator Marketplace (AI-Integrated)",
    description: "Building an e-commerce-style parts marketplace for locating Ford parts, with search, filtering, and discovery across a [X]-item catalog. Integrating AI-driven features into client-facing surfaces, cutting parts-lookup time by [X%].",
    techStack: ["React.js", "Next.js", "AI Integrations", "TypeScript"],
    platform: "web"
  },
  {
    title: "Enterprise Banking Web Application",
    description: "Developed a scalable and secure banking application for JPMorgan Chase, handling complex financial workflows and high user traffic. Implemented code-splitting, lazy loading, and SSR techniques that cut initial page load times by [X%] and supported [X]+ concurrent users.",
    techStack: ["React.js", "Next.js", "RTK Query", "Node.js", "REST APIs"],
    platform: "web"
  },
  {
    title: "High-Performance API & State Management System",
    description: "Architected a centralized data-fetching and caching layer. Integrated query invalidation strategies and global error handling filters that cut redundant network calls by [X%] and reduced payload overhead across [X]+ API endpoints.",
    techStack: ["RTK Query", "Redux Toolkit", "React.js"],
    platform: "web"
  },
  {
    title: "Dynamic Form Builder Application",
    description: "Created an intuitive, drag-and-drop form builder template mapping customized input layouts natively to backend schema engines with real-time live preview generation.",
    techStack: ["Next.js", "Redux", "TailwindCSS"],
    platform: "web"
  },
  {
    title: "Mental Health Appointment Booking Platform",
    description: "Built the CareMe Health React Native app from scratch and shipped it to the Google Play Store. Integrated secure, real-time video conferencing and chat functionalities to support confidential remote health sessions.",
    techStack: ["React", "React Native", "Next.js", "Redux", "TailwindCSS", "Firebase"],
    platform: "mobile",
    externalUrl: "https://play.google.com/store/apps/details?id=com.careme",
    externalLabel: "View on Play Store",
    stats: [
      { icon: "star", value: "4.3" },
      { icon: "downloads", value: "5K+" }
    ]
  },
  {
    title: "TNFoodsafety Complaint Redressal System",
    description: "Built two React Native apps from scratch for Tamil Nadu's Food Safety Department: TN Foodsafety Consumer, used by the public to log food safety complaints, and TNFSD, used by officials to address complaints and update records — maintaining strict compliance with government data integrity and protection standards.",
    techStack: ["React", "React Native", "Redux", "Bootstrap", "Firebase"],
    platform: "mobile"
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    role: "Senior Frontend Developer",
    company: "OnTrac AI",
    period: "Jul 2026 - Present",
    achievements: [
      "Developing a Ford parts locator marketplace, an e-commerce-style platform for parts search, filtering, and discovery.",
      "Integrating AI-driven features into client websites based on evolving project requirements.",
      "Building responsive, high-performance UI components using React.js and Next.js.",
      "Collaborating with cross-functional teams to translate business requirements into scalable frontend solutions."
    ],
  },
  {
    role: "Senior Software Engineer",
    company: "Photon Interactive Pvt Ltd (Client: JPMorgan Chase & Co)",
    period: "Apr 2025 - Jul 2026",
    achievements: [
      "Architecting scalable financial workflows and secure enterprise banking portals leveraging SSR optimizations to drastically lower load speeds.",
      "Implemented streamlined data-fetching paradigms using RTK Query, resulting in a predictable application state and heavily cached, low-latency API footprints.",
      "Engineered clean RESTful backend support logic using Node.js to achieve efficient decoupled full-stack client communication pathways."
    ],
  },
  {
    role: "Front-End Developer",
    company: "CareMe Health Pvt Ltd",
    period: "Sep 2020 - Mar 2025",
    achievements: [
      "Designed and launched responsive cross-platform appointment booking interfaces, simplifying customer healthcare access networks.",
      "Built and published the CareMe Health React Native app from scratch to the Google Play Store, growing it to 5K+ downloads and a 4.3★ rating.",
      "Contributed to secure Electronic Health Records (EHR) system integrations while preserving strict healthcare regulatory standards.",
      "Developed interactive features including real-time video modules, contextual chat windows, and instant cross-platform push notifications."
    ],
  },
  {
    role: "Technical Support Trainee",
    company: "Satvat Infosol Pvt Ltd",
    period: "Jul 2018 - May 2020",
    achievements: [
      "Supported web infrastructure for high-concurrency online examination platforms, ensuring consistent hardware/software reliability thresholds.",
      "Mentored junior desk engineers on complex network diagnostics, directly optimizing support-ticket response workflows."
    ],
  }
];