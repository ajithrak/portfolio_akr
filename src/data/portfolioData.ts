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
  role: "Senior Frontend Engineer / React & Next.js Developer",
  tagline: "React & Next.js engineer building AI-integrated e-commerce experiences at OnTrac AI, with production banking software for JPMorgan Chase and healthcare platforms shipped along the way.",
};

export const ABOUT_DATA = {
  bio: "Senior Frontend Engineer / React & Next.js Developer with 8 years in tech (since Jul 2018) and 5-6 years hands-on with React and modern frontend ecosystems (since Sep 2020). I've built production applications in fintech, healthcare, and AI-driven e-commerce, working across state management, server-side rendering, real-time features, and API integration.",
  highlights: [
    "8 years in the tech industry (since Jul 2018)",
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
    description: "Building an e-commerce-style marketplace for locating Ford parts — search, filtering, and discovery across a large parts catalog. Currently integrating AI-driven features to help customers find the right part faster.",
    techStack: ["React.js", "Next.js", "AI Integrations", "TypeScript"],
    platform: "web"
  },
  {
    title: "Enterprise Banking Web Application",
    description: "Built a secure banking application for JPMorgan Chase that handles complex financial workflows at high traffic volumes. Used code-splitting, lazy loading, and SSR to keep initial load times fast under heavy concurrent use.",
    techStack: ["React.js", "Next.js", "RTK Query", "Node.js", "REST APIs"],
    platform: "web"
  },
  {
    title: "High-Performance API & State Management System",
    description: "Built a centralized data-fetching and caching layer with RTK Query, including query invalidation and shared error handling. Cut down redundant network calls and kept application state consistent across a large set of API endpoints.",
    techStack: ["RTK Query", "Redux Toolkit", "React.js"],
    platform: "web"
  },
  {
    title: "Dynamic Form Builder Application",
    description: "Built a drag-and-drop form builder that maps custom input layouts directly to backend schemas, with a live preview as you build.",
    techStack: ["Next.js", "Redux", "TailwindCSS"],
    platform: "web"
  },
  {
    title: "Mental Health Appointment Booking Platform",
    description: "Built the CareMe Health React Native app from scratch and shipped it to the Google Play Store, with real-time video and chat for confidential remote care sessions.",
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
    description: "Built two React Native apps from scratch for Tamil Nadu's Food Safety Department: TN Foodsafety Consumer, used by the public to log food safety complaints, and TNFSD, used by officials to address complaints and update records — built to meet government data integrity and protection standards.",
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
      "Building a Ford parts locator marketplace — an e-commerce-style platform for parts search, filtering, and discovery.",
      "Integrating AI-driven features into customer-facing surfaces as project requirements evolve.",
      "Building responsive, high-performance UI components with React.js and Next.js.",
      "Working with cross-functional teams to turn business requirements into shipped frontend features."
    ],
  },
  {
    role: "Senior Software Engineer",
    company: "Photon Interactive Pvt Ltd (Client: JPMorgan Chase & Co)",
    period: "Apr 2025 - Jul 2026",
    achievements: [
      "Built secure, scalable banking portals for high-traffic financial workflows, using SSR to reduce load times.",
      "Implemented RTK Query for data-fetching and caching, keeping application state predictable and cutting down redundant API calls.",
      "Built supporting REST APIs in Node.js to keep the frontend and backend cleanly decoupled."
    ],
  },
  {
    role: "Front-End Developer",
    company: "CareMe Health Pvt Ltd",
    period: "Sep 2020 - Mar 2025",
    achievements: [
      "Designed and shipped responsive appointment-booking interfaces for web and mobile, making it easier for patients to book care.",
      "Built and published the CareMe Health React Native app from scratch to the Google Play Store, growing it to 5K+ downloads and a 4.3★ rating.",
      "Contributed to secure Electronic Health Records (EHR) integrations in line with healthcare regulatory requirements.",
      "Built real-time video calling, in-app chat, and push notifications across web and mobile."
    ],
  },
  {
    role: "Technical Support Trainee",
    company: "Satvat Infosol Pvt Ltd",
    period: "Jul 2018 - May 2020",
    achievements: [
      "Supported infrastructure for a high-traffic online examination platform, helping keep systems stable during peak load.",
      "Mentored junior support engineers on network diagnostics and helped streamline ticket response times."
    ],
  }
];