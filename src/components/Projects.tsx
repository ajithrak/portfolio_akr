import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiMonitor, FiSmartphone } from 'react-icons/fi';
import { PROJECTS_DATA, type Project } from '../data/portfolioData';
import { TechBadge, StatBadge } from './ProjectBadges';

// Maps a project card to its dedicated case study route, if one exists.
const PROJECT_ROUTES: Record<string, string> = {
  "Ford Parts Locator Marketplace (AI-Integrated)": "/ford-parts",
  "Enterprise Banking Web Application": "/fintech",
  "High-Performance API & State Management System": "/api-state-management",
  "Dynamic Form Builder Application": "/form-builder",
  "Mental Health Appointment Booking Platform": "/healthcare",
  "TNFoodsafety Complaint Redressal System": "/tnfoodsafety",
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const route = PROJECT_ROUTES[project.title];
  const hasLink = Boolean(route || project.externalUrl);
  const PlatformIcon = project.platform === 'mobile' ? FiSmartphone : FiMonitor;

  return (
    <div
      className={`flex flex-col h-full bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl overflow-hidden transition-all ${
        hasLink ? 'hover:shadow-lg hover:-translate-y-0.5' : 'hover:shadow-md'
      }`}
    >
      <div className="p-6 flex flex-col h-full justify-between">
        <div>
          <div className="flex items-start justify-between gap-3 mb-2">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              {project.title}
            </h3>
            <span className="shrink-0 w-8 h-8 rounded-lg bg-gray-100 dark:bg-zinc-800 flex items-center justify-center text-gray-500 dark:text-zinc-400">
              <PlatformIcon className="w-4 h-4" />
            </span>
          </div>
          {project.stats && (
            <div className="flex flex-wrap gap-1.5 mb-3">
              {project.stats.map((stat, sIdx) => (
                <StatBadge key={sIdx} stat={stat} />
              ))}
            </div>
          )}
          <p className="text-gray-600 dark:text-zinc-400 text-sm mb-6 leading-relaxed">
            {project.description}
          </p>
        </div>
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.techStack.map((tech, tIdx) => (
            <TechBadge key={tIdx} tech={tech} />
          ))}
        </div>
        {hasLink && (
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            {route && (
              <Link to={route} className="text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:underline rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500">
                View case study →
              </Link>
            )}
            {project.externalUrl && (
              <a
                href={project.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:underline rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
              >
                {project.externalLabel ?? 'View live'} ↗
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

const ProjectGroup: React.FC<{ label: string; icon: React.ReactNode; projects: Project[] }> = ({ label, icon, projects }) => {
  if (projects.length === 0) return null;
  return (
    <div className="mb-12 last:mb-0">
      <div className="flex items-center gap-2 mb-5">
        <span className="w-7 h-7 rounded-md bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
          {icon}
        </span>
        <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-zinc-400">
          {label}
        </h3>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>
    </div>
  );
};

export const Projects: React.FC = () => {
  const webProjects = PROJECTS_DATA.filter((p) => p.platform === 'web');
  const mobileProjects = PROJECTS_DATA.filter((p) => p.platform === 'mobile');

  return (
    <section id="projects" className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-12 border-b pb-2 border-gray-100 dark:border-zinc-800">
          Selected Production Architecture
        </h2>
        <ProjectGroup label="Web Applications" icon={<FiMonitor className="w-4 h-4" />} projects={webProjects} />
        <ProjectGroup label="Mobile Apps" icon={<FiSmartphone className="w-4 h-4" />} projects={mobileProjects} />
      </motion.div>
    </section>
  );
};
