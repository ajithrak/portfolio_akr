import React from 'react';
import { SiReact, SiNextdotjs, SiRedux, SiNodedotjs, SiTypescript, SiTailwindcss, SiBootstrap, SiFirebase } from 'react-icons/si';
import { FiStar, FiDownload } from 'react-icons/fi';
import type { ProjectStat } from '../data/portfolioData';

// Maps known tech-stack labels to a recognizable logo so cards read at a glance
// instead of requiring the visitor to parse a wall of text pills.
const TECH_ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  'React.js': SiReact,
  'React': SiReact,
  'React Native': SiReact,
  'Next.js': SiNextdotjs,
  'Redux': SiRedux,
  'Redux Toolkit': SiRedux,
  'RTK Query': SiRedux,
  'Node.js': SiNodedotjs,
  'TypeScript': SiTypescript,
  'TailwindCSS': SiTailwindcss,
  'Bootstrap': SiBootstrap,
  'Firebase': SiFirebase,
};

export const TechBadge: React.FC<{ tech: string; className?: string }> = ({ tech, className = '' }) => {
  const Icon = TECH_ICON_MAP[tech];
  return (
    <span className={`inline-flex items-center gap-1.5 text-xs font-mono bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded ${className}`}>
      {Icon && <Icon className="w-3 h-3 shrink-0" />}
      {tech}
    </span>
  );
};

const STAT_STYLES: Record<ProjectStat['icon'], { Icon: React.ComponentType<{ className?: string }>; className: string }> = {
  star: { Icon: FiStar, className: 'bg-amber-50 dark:bg-amber-950/30 text-amber-700 dark:text-amber-400' },
  downloads: { Icon: FiDownload, className: 'bg-sky-50 dark:bg-sky-950/30 text-sky-700 dark:text-sky-400' },
};

export const StatBadge: React.FC<{ stat: ProjectStat }> = ({ stat }) => {
  const { Icon, className } = STAT_STYLES[stat.icon];
  return (
    <span className={`inline-flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-md ${className}`}>
      <Icon className="w-3 h-3" />
      {stat.value}
    </span>
  );
};
