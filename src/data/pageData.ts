export interface CaseStudyData {
  slug: string;
  label: string;
  title: string;
  role: string;
  company?: string;
  period?: string;
  summary: string;
  overview: string;
  responsibilities: string[];
  techStack: string[];
  highlights: { title: string; detail: string }[];
}

export const FINTECH_DATA: CaseStudyData = {
  slug: "fintech",
  label: "Fintech",
  title: "Enterprise Banking Web Application",
  role: "Senior Software Engineer",
  company: "Photon Interactive Pvt Ltd (Client: JPMorgan Chase & Co)",
  period: "Apr 2025 - Jul 2026",
  summary:
    "A secure banking platform built to handle complex financial workflows and high user traffic.",
  overview:
    "Built and maintained enterprise banking portals where correctness, security, and speed all carry real financial weight. The application handles high-concurrency workflows while keeping page-load times low through SSR and caching.",
  responsibilities: [
    "Built secure, scalable banking portals for high-traffic financial workflows, using SSR to reduce load times.",
    "Implemented RTK Query for data-fetching and caching, keeping application state predictable and cutting down redundant API calls.",
    "Built supporting REST APIs in Node.js to keep the frontend and backend cleanly decoupled.",
    "Applied code-splitting and lazy loading across major routes to reduce initial bundle size and time-to-interactive.",
  ],
  techStack: ["React.js", "Next.js", "RTK Query", "Redux Toolkit", "Node.js", "REST APIs", "TypeScript"],
  highlights: [
    {
      title: "Performance at scale",
      detail: "SSR and code-splitting techniques cut initial load times significantly under high user traffic.",
    },
    {
      title: "Predictable state",
      detail: "RTK Query centralized data-fetching and caching, reducing redundant network calls across the app.",
    },
    {
      title: "Secure by design",
      detail: "Sensitive financial workflows were built with strict data handling and secure exchange patterns throughout.",
    },
  ],
};

export const HEALTHCARE_DATA: CaseStudyData = {
  slug: "healthcare",
  label: "Healthcare",
  title: "Mental Health Appointment Booking Platform",
  role: "Front-End Developer",
  company: "CareMe Health Pvt Ltd",
  period: "Sep 2020 - Mar 2025",
  summary:
    "A cross-platform appointment booking ecosystem with real-time video and chat for confidential remote care.",
  overview:
    "Led front-end development for a patient-facing appointment platform spanning web and mobile, built to simplify access to mental health care while meeting healthcare regulatory and privacy standards. Real-time video and chat brought remote sessions to feature parity with in-person visits.",
  responsibilities: [
    "Designed and launched responsive cross-platform appointment booking interfaces, simplifying customer healthcare access.",
    "Contributed to secure Electronic Health Records (EHR) integrations in line with healthcare regulatory requirements.",
    "Developed interactive features including real-time video modules, contextual chat windows, and instant cross-platform push notifications.",
    "Built shared component logic across React and React Native to keep the web and mobile experiences consistent.",
  ],
  techStack: ["React", "React Native", "Next.js", "Redux", "TailwindCSS", "Firebase"],
  highlights: [
    {
      title: "Confidential by default",
      detail: "Real-time video and chat were built with privacy and regulatory compliance as first-class constraints.",
    },
    {
      title: "One codebase, two platforms",
      detail: "Shared logic between React and React Native kept web and mobile experiences consistent and easy to maintain.",
    },
    {
      title: "Frictionless booking",
      detail: "Streamlined appointment flows reduced the steps needed to book a session, improving patient access.",
    },
  ],
};

export const TNFOODSAFETY_DATA: CaseStudyData = {
  slug: "tnfoodsafety",
  label: "Government / Mobile",
  title: "TNFoodsafety Complaint Redressal System",
  role: "Mobile App Developer",
  summary:
    "Two React Native apps, built from scratch for Tamil Nadu's Food Safety Department, letting citizens report food safety violations and officials manage the cases that follow.",
  overview:
    "Built a two-sided complaint redressal system as a pair of native mobile apps: TN Foodsafety Consumer, the public-facing app for filing food safety complaints, and TNFSD, the officials-facing app for addressing those complaints and updating records. Both apps had to hold up to government standards for data integrity and protection while staying simple enough for the general public to use without friction.",
  responsibilities: [
    "Built TN Foodsafety Consumer from scratch: complaint submission with photo evidence, location tagging, and status tracking for citizens reporting violations.",
    "Built TNFSD from scratch: case queues for officials to review incoming complaints, address them, and update the official record.",
    "Designed a shared data model so complaints filed on TN Foodsafety Consumer flow directly into TNFSD in real time.",
    "Maintained strict compliance with government data integrity and protection standards across both apps.",
  ],
  techStack: ["React Native", "React", "Redux", "Bootstrap", "Firebase"],
  highlights: [
    {
      title: "Two apps, one system",
      detail: "TN Foodsafety Consumer and TNFSD built and shipped as a matched pair, sharing one real-time data model.",
    },
    {
      title: "Compliance-first",
      detail: "Government data integrity and protection standards were a first-class constraint, not an afterthought.",
    },
    {
      title: "Built for the public",
      detail: "Complaint filing was designed for citizens with no technical background — low-friction, evidence-first reporting.",
    },
  ],
};

export const FORD_PARTS_DATA: CaseStudyData = {
  slug: "ford-parts",
  label: "AI / E-commerce",
  title: "Ford Parts Locator Marketplace (AI-Integrated)",
  role: "Senior Frontend Developer",
  company: "OnTrac AI",
  period: "Jul 2026 - Present",
  summary:
    "An e-commerce-style marketplace for locating Ford parts, with AI-driven features layered on top of search and discovery.",
  overview:
    "Currently building a parts marketplace where the core challenge is helping customers find the exact part they need across a large, unwieldy catalog. The focus is fast, filterable search paired with AI-assisted discovery, so customers land on the right part without digging through categories by hand.",
  responsibilities: [
    "Building search, filtering, and discovery flows for a large Ford parts catalog.",
    "Integrating AI-driven features into customer-facing surfaces as project requirements evolve.",
    "Building responsive, high-performance UI components with React.js and Next.js.",
    "Working with cross-functional teams to turn business requirements into shipped frontend features.",
  ],
  techStack: ["React.js", "Next.js", "TypeScript", "AI Integrations"],
  highlights: [
    {
      title: "Built for scale",
      detail: "Search and filtering designed to stay fast across a large, growing parts catalog.",
    },
    {
      title: "AI-assisted discovery",
      detail: "AI features layered onto search to help customers find the right part faster.",
    },
    {
      title: "In active development",
      detail: "This is current, ongoing work — scope and features are still evolving.",
    },
  ],
};

export const API_STATE_MANAGEMENT_DATA: CaseStudyData = {
  slug: "api-state-management",
  label: "Architecture",
  title: "High-Performance API & State Management System",
  role: "Frontend Engineer",
  summary:
    "A centralized data-fetching and caching layer built to cut down redundant network calls and keep application state predictable.",
  overview:
    "The problem: different parts of a large application were fetching and caching data independently, leading to redundant network calls and state that could drift out of sync. Built a centralized RTK Query layer with consistent invalidation rules and shared error handling to fix that.",
  responsibilities: [
    "Built a centralized data-fetching and caching layer using RTK Query.",
    "Designed query invalidation strategies to keep cached data fresh without over-fetching.",
    "Built shared error-handling filters used across API calls.",
    "Cut down redundant network calls and kept application state consistent across a large set of endpoints.",
  ],
  techStack: ["RTK Query", "Redux Toolkit", "React.js", "TypeScript"],
  highlights: [
    {
      title: "One source of truth",
      detail: "Centralized caching replaced scattered, duplicate data-fetching logic.",
    },
    {
      title: "Fewer redundant calls",
      detail: "Query invalidation rules cut down on unnecessary re-fetches.",
    },
    {
      title: "Consistent error handling",
      detail: "Shared error-handling filters gave every API call the same failure behavior.",
    },
  ],
};

export const FORM_BUILDER_DATA: CaseStudyData = {
  slug: "form-builder",
  label: "Tooling",
  title: "Dynamic Form Builder Application",
  role: "Frontend Engineer",
  summary:
    "A drag-and-drop form builder that maps custom input layouts directly to backend schemas, with a live preview as you build.",
  overview:
    "Built for teams that needed to create custom data-entry forms without writing code for each one. The builder maps drag-and-drop layouts directly onto backend schema definitions, so a form built visually is immediately usable by the backend — with a live preview so you can see exactly what end users will see.",
  responsibilities: [
    "Built a drag-and-drop form builder interface with React and Redux for state management.",
    "Mapped custom input layouts natively to backend schema engines.",
    "Implemented a real-time live preview so changes are reflected immediately.",
    "Styled the builder and generated forms with TailwindCSS for a consistent look.",
  ],
  techStack: ["Next.js", "Redux", "TailwindCSS", "TypeScript"],
  highlights: [
    {
      title: "No-code form creation",
      detail: "Non-technical users can build complex forms without touching code.",
    },
    {
      title: "Schema-native",
      detail: "Forms map directly to backend schemas — no separate translation layer.",
    },
    {
      title: "Live preview",
      detail: "Changes render instantly, so what you build is what users see.",
    },
  ],
};
