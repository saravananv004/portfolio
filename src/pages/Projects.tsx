import React, { useState } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { ProjectCard } from '../components/ProjectCard';
import { projectsData } from '../data/projects';

type FilterCategory = 'All' | 'Full Stack' | 'Data Analytics' | 'Python and Security';

const categories: FilterCategory[] = [
  'All',
  'Full Stack',
  'Data Analytics',
  'Python and Security',
];

export const Projects: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<FilterCategory>('All');

  const filteredProjects = projectsData.filter((project) => {
    if (selectedFilter === 'All') return true;
    return project.filterCategory === selectedFilter;
  });

  // Wholesale Ledger is always first and featured if present in current filtered list
  const featuredProject = filteredProjects.find((p) => p.slug === 'wholesale-ledger');
  const otherProjects = filteredProjects.filter((p) => p.slug !== 'wholesale-ledger');

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Page Header */}
      <SectionHeading
        badge="Projects"
        title="Featured Engineering Projects"
        subtitle="Practical applications across full-stack development, predictive machine learning pipelines, and secure data destruction algorithms."
      />

      {/* Category Filters */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {categories.map((cat) => {
          const count =
            cat === 'All'
              ? projectsData.length
              : projectsData.filter((p) => p.filterCategory === cat).length;

          return (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                selectedFilter === cat
                  ? 'bg-brand-600 text-white shadow-md shadow-brand-500/25'
                  : 'bg-white dark:bg-navy-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-brand-500/40'
              }`}
            >
              <span>{cat}</span>
              <span
                className={`text-[10px] px-2 py-0.5 rounded-full ${
                  selectedFilter === cat
                    ? 'bg-white/20 text-white'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Project Cards Display */}
      {filteredProjects.length === 0 ? (
        <div className="text-center py-16 p-8 rounded-3xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-800">
          <p className="text-base text-slate-500 dark:text-slate-400">
            No projects found in this category.
          </p>
        </div>
      ) : (
        <div className="space-y-8">
          {/* Featured Wholesale Ledger card if in filter */}
          {featuredProject && (
            <ProjectCard project={featuredProject} featured={true} />
          )}

          {/* Other projects in responsive 2-column grid */}
          {otherProjects.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {otherProjects.map((proj) => (
                <ProjectCard key={proj.id} project={proj} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
