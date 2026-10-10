import React from 'react';
import { 
  Database, 
  BarChart3, 
  Cpu, 
  Cloud, 
  Terminal, 
  CheckCircle2, 
  LucideIcon 
} from 'lucide-react';
import { SkillCategory } from '../data/skills';

const iconMap: Record<string, LucideIcon> = {
  Database,
  BarChart3,
  Cpu,
  Cloud,
  Terminal,
  CheckCircle2
};

export const SkillCard: React.FC<{ category: SkillCategory }> = ({ category }) => {
  const IconComponent = iconMap[category.iconName] || Terminal;

  return (
    <div className="h-full flex flex-col p-6 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200/90 dark:border-slate-800/80 hover:border-brand-500/40 dark:hover:border-brand-500/40 shadow-sm hover:shadow-md transition-all duration-200 group">
      {/* Header */}
      <div className="flex items-center gap-3.5 mb-3">
        <div className="p-2.5 rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/15 group-hover:scale-105 transition-transform">
          <IconComponent className="w-5 h-5" />
        </div>
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">
          {category.name}
        </h3>
      </div>

      {/* Description */}
      <p className="text-xs text-slate-600 dark:text-slate-400 mb-5 leading-relaxed">
        {category.description}
      </p>

      {/* Skills list tags */}
      <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className="inline-flex items-center px-2.5 py-1 text-xs font-medium rounded-lg bg-slate-100 dark:bg-navy-800 text-slate-700 dark:text-slate-300 border border-slate-200/70 dark:border-slate-700/60 hover:border-brand-500/30 transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};
