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
export const TESTIMONIALS_DATA: TestimonialItem[] = [];

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
