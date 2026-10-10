import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';
import { ExperienceItem } from '../data/experience';

export const ExperienceCard: React.FC<{ experience: ExperienceItem }> = ({ experience }) => {
  return (
    <div className="relative p-6 sm:p-8 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200/90 dark:border-slate-800/80 hover:border-brand-500/40 dark:hover:border-brand-500/40 shadow-sm hover:shadow-md transition-all duration-200">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20 mb-2">
            <Briefcase className="w-3.5 h-3.5" />
            Internship
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
            {experience.role}
          </h3>
          <div className="text-base font-semibold text-brand-600 dark:text-brand-400 mt-1">
            {experience.company}
          </div>
        </div>

        <div className="flex flex-col sm:items-end text-xs text-slate-500 dark:text-slate-400 space-y-1">
          <div className="flex items-center gap-1.5 font-medium">
            <Calendar className="w-3.5 h-3.5 text-slate-400" />
            <span>{experience.duration}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-slate-400" />
            <span>{experience.location}</span>
          </div>
        </div>
      </div>

      <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
        {experience.description}
      </p>

      <div>
        <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2.5">
          Key Focus &amp; Practical Areas
        </h4>
        <div className="flex flex-wrap gap-2">
          {experience.keyAreas.map((area) => (
            <span
              key={area}
              className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded-lg bg-slate-100 dark:bg-navy-800 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/60"
            >
              <CheckCircle className="w-3 h-3 text-brand-500" />
              <span>{area}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
