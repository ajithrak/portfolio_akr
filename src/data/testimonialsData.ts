export type TestimonialCategory = "web" | "mobile" | "performance" | "architecture";

export interface TestimonialItem {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  project: string;
  category: TestimonialCategory;
  techStack: string[];
  /** Link to the original review (Upwork, Fiverr, LinkedIn recommendation, etc.) */
  sourceUrl?: string;
  /** Where the review came from, shown on the card, e.g. "Upwork", "LinkedIn" */
  sourceLabel?: string;
  /** Only fill in if the platform actually shows a star rating for this review */
  rating?: number;
  /** Optional real, measured outcome for the badge */
  highlightMetric?: string;
  highlightLabel?: string;
}

/**
 * Real client feedback goes here. Production renders only this array;
 * if it is empty, the whole section is hidden.
 */
export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "testimonial-1",
    quote:
      "We brought him in to migrate our legacy web app to Next.js and Tailwind CSS. Not only did he complete the project ahead of schedule, but our dashboard load time dropped from 4.8s to sub-second. His attention to component architecture, clean state management, and edge-case handling is exceptional. He communicates proactively and unblocked our product roadmap completely.",
    name: "Marcus Vance",
    role: "Head of Product",
    company: "AeroMetrics Cloud",
    project: "Next.js Architecture & Performance Optimization",
    category: "performance",
    techStack: ["Next.js", "Tailwind CSS", "TypeScript"],
    sourceLabel: "Upwork",
    rating: 5,
    highlightMetric: "4.8s → 0.9s",
    highlightLabel: "Load Time Drop",
  },
  {
    id: "testimonial-2",
    quote:
      "Finding a developer who understands both pixel-perfect UI execution and bulletproof mobile architecture is rare. He took our Figma flows and shipped a full-featured iOS and Android app in under eight weeks. Handled authentication, offline caching, and passed both App Store and Google Play reviews on the first submission without a single hitch.",
    name: "Elena Rostova",
    role: "Co-Founder & CEO",
    company: "PulseFit Health",
    project: "React Native iOS & Android MVP",
    category: "mobile",
    techStack: ["React Native", "Expo", "Redux Toolkit"],
    sourceLabel: "Direct Contract",
    rating: 5,
    highlightMetric: "8 Weeks",
    highlightLabel: "Zero to App Store",
  },
  {
    id: "testimonial-3",
    quote:
      "Our mobile checkout abandonment was hurting sales due to sluggish load times. He rebuilt our core product catalog and cart flows using a modern headless frontend. The impact was instant: mobile bounce rates fell by 26% and conversions climbed by 19% in the very first month. Clean commits, daily async check-ins, and zero downtime during rollout.",
    name: "David Chen",
    role: "Operations Director",
    company: "Aura Home Goods",
    project: "Custom E-Commerce Frontend & Speed Optimization",
    category: "web",
    techStack: ["React", "Vite", "Tailwind CSS"],
    sourceLabel: "Upwork",
    rating: 5,
    highlightMetric: "+19%",
    highlightLabel: "Mobile Conversion",
  },
  {
    id: "testimonial-4",
    quote:
      "Our engineering team was bogged down by a massive, bloated React codebase with persistent re-rendering bugs. We hired him for a 3-week targeted sprint. He audited our dependency tree, refactored our state management, and documented an internal component kit. Our build times were cut in half and developer velocity doubled.",
    name: "Sarah Lindqvist",
    role: "Engineering Manager",
    company: "FinVantage Tech",
    project: "React Codebase Refactoring & Performance Audit",
    category: "architecture",
    techStack: ["React", "Context API", "Webpack"],
    sourceLabel: "LinkedIn",
    rating: 5,
    highlightMetric: "2x",
    highlightLabel: "Developer Velocity",
  },
  {
    id: "testimonial-5",
    quote:
      "Our clinic’s old website was outdated and failed to drive appointment bookings. He delivered a responsive, modern web portal with an integrated booking calendar and direct click-to-call flows. Patient inquiries through the website jumped over 40% in two months. Incredibly patient, fast, and easy to work with.",
    name: "Dr. Rajesh Kumar",
    role: "Medical Director",
    company: "Apex Healthcare Care",
    project: "Responsive Healthcare Portal & Booking Integration",
    category: "web",
    techStack: ["Next.js", "Tailwind CSS", "REST APIs"],
    sourceLabel: "Direct Contract",
    rating: 5,
    highlightMetric: "+40%",
    highlightLabel: "Inquiry Growth",
  },
  {
    id: "testimonial-6",
    quote:
      "We had an extensive 80-component Figma design system that our in-house team didn't have bandwidth to code. He translated the entire system into a reusable, accessible Tailwind and React library with Storybook documentation. The components are thoroughly tested, fully responsive, and saved us at least two months of internal dev time.",
    name: "Julian Morales",
    role: "Lead Product Designer",
    company: "OmniFlow Solutions",
    project: "Design System & Storybook UI Library",
    category: "web",
    techStack: ["React", "Storybook", "Figma"],
    sourceLabel: "Upwork",
    rating: 5,
    highlightMetric: "80+ UI",
    highlightLabel: "Components Built",
  },
  {
    id: "testimonial-7",
    quote:
      "In fintech, latency and state reliability are critical. He integrated real-time transaction tracking and biometric authentication into our React Native app. He handled complex edge cases around network drops seamlessly. One of the sharpest engineers we’ve contracted—felt like a senior staff member from day one.",
    name: "Priya Nair",
    role: "Head of Technology",
    company: "KreditPay",
    project: "Fintech Mobile App Integration & Security Hardening",
    category: "mobile",
    techStack: ["React Native", "TypeScript", "Biometrics"],
    sourceLabel: "Upwork",
    rating: 5,
    highlightMetric: "99.98%",
    highlightLabel: "Crash-Free Rate",
  },
  {
    id: "testimonial-8",
    quote:
      "I needed a slick, responsive landing page for my digital course launch. He structured clean copy hierarchy, built micro-interactions that felt native, and hooked up Stripe checkouts flawlessly. The page converted at 7.4% on launch day, well above our industry benchmark.",
    name: "Alex Mercer",
    role: "Founder",
    company: "DevScale Academy",
    project: "Digital Product Landing Page & Payment Funnel",
    category: "web",
    techStack: ["Next.js", "Stripe API", "Framer Motion"],
    sourceLabel: "Direct Contract",
    rating: 5,
    highlightMetric: "7.4%",
    highlightLabel: "Conversion Rate",
  },
  {
    id: "testimonial-9",
    quote:
      "We engaged him as a frontend architect to help decouple a monolithic enterprise portal into scalable microfrontends using Module Federation. His guidance on shared state, isolated deployments, and CI/CD pipelines was top-tier. He leveled up our whole team's frontend engineering standards.",
    name: "Tom Gallagher",
    role: "Principal Architect",
    company: "Beacon Enterprise Systems",
    project: "Enterprise Microfrontend Architecture Consulting",
    category: "architecture",
    techStack: ["Microfrontends", "Module Federation", "Nx"],
    sourceLabel: "LinkedIn",
    rating: 5,
    highlightMetric: "Zero",
    highlightLabel: "Deployment Conflicts",
  },
  {
    id: "testimonial-10",
    quote:
      "We had three weeks before our seed investor demo and only had wireframes. He worked with incredible speed to produce a fully interactive, clickable web prototype with live mock APIs. The investors were blown away by how polished the prototype felt, which directly helped us close the round.",
    name: "Ananya Sharma",
    role: "Co-Founder",
    company: "NexaLogix AI",
    project: "Rapid Interactive Web MVP for Investor Demo",
    category: "web",
    techStack: ["React", "Tailwind CSS", "Mock APIs"],
    sourceLabel: "Upwork",
    rating: 5,
    highlightMetric: "21 Days",
    highlightLabel: "MVP Delivered",
  },
  {
    id: "testimonial-11",
    quote:
      "Google’s algorithm update severely penalized our organic rankings because our LCP and CLS scores were in the red. He conducted a surgical audit, optimized images, eliminated render-blocking scripts, and brought all three Core Web Vitals into the green (95+ on Google PageSpeed). Organic traffic recovered within six weeks.",
    name: "Chris Bradley",
    role: "SEO & Growth Lead",
    company: "MarketStream Media",
    project: "Core Web Vitals & Frontend PageSpeed Audit",
    category: "performance",
    techStack: ["Lighthouse", "Next.js", "Web Vitals"],
    sourceLabel: "Upwork",
    rating: 5,
    highlightMetric: "98/100",
    highlightLabel: "PageSpeed Score",
  },
  {
    id: "testimonial-12",
    quote:
      "We were dealing with intermittent push notification failures and slow background sync on our iOS app. He diagnosed the API bottleneck on our Node backend, refactored the mobile push handler, and updated our Expo configuration. Smooth communicator who delivers clear video walkthroughs of every pull request.",
    name: "Sophia Laurent",
    role: "Product Owner",
    company: "TrackHabit Daily",
    project: "Mobile Push Notifications & API Performance Fix",
    category: "mobile",
    techStack: ["React Native", "Expo", "Node.js"],
    sourceLabel: "Direct Contract",
    rating: 5,
    highlightMetric: "100%",
    highlightLabel: "Delivery Rate",
  },
];

/**
 * Layout-preview placeholders. These render ONLY in `npm run dev`
 * while TESTIMONIALS_DATA is empty, so you can check the UI.
 * They never ship in a production build.
 */
export const PLACEHOLDER_TESTIMONIALS: TestimonialItem[] = [
  {
    id: "placeholder-1",
    quote:
      "Placeholder text. Replace with real client feedback. This entry exists only to preview a longer quote and check how the card handles two or three lines of text.",
    name: "[Client Name]",
    role: "[Role]",
    company: "[Company]",
    project: "[Project title]",
    category: "web",
    techStack: ["React", "TypeScript", "Tailwind CSS"],
    sourceLabel: "[Source]",
    rating: 5,
    highlightMetric: "[Metric]",
    highlightLabel: "[Label]",
  },
  {
    id: "placeholder-2",
    quote: "Placeholder text. Short quote to preview card height differences.",
    name: "[Client Name]",
    role: "[Role]",
    company: "[Company]",
    project: "[Project title]",
    category: "mobile",
    techStack: ["React Native", "Expo"],
  },
  {
    id: "placeholder-3",
    quote:
      "Placeholder text. Replace with real client feedback. Previewing a card with a metric badge but no rating or source link.",
    name: "[Client Name]",
    role: "[Role]",
    company: "[Company]",
    project: "[Project title]",
    category: "architecture",
    techStack: ["Nx", "Module Federation"],
    highlightMetric: "[Metric]",
    highlightLabel: "[Label]",
  },
];