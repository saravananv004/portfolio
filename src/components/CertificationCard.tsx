import React from 'react';
import { Calendar, Building2 } from 'lucide-react';
import { CertificationItem } from '../data/certifications';

const categoryColors: Record<string, string> = {
  'AWS Cloud': 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20',
  'Linux': 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20',
  'Python & Web': 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20',
  'UiPath RPA': 'bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20',
  'Spring & Backend': 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
};

export const CertificationCard: React.FC<{ cert: CertificationItem }> = ({ cert }) => {
  const badgeStyle = categoryColors[cert.category] || 'bg-brand-500/10 text-brand-600 border-brand-500/20';

  return (
    <div className="h-full flex flex-col p-5 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200/90 dark:border-slate-800/80 hover:border-brand-500/40 dark:hover:border-brand-500/40 shadow-sm hover:shadow-md transition-all duration-200">
      <div className="flex items-start justify-between gap-3 mb-3">
        <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold border ${badgeStyle}`}>
          {cert.category}
        </span>
        <div className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400 shrink-0">
          <Calendar className="w-3.5 h-3.5 text-slate-400" />
          <span>{cert.date}</span>
        </div>
      </div>

      <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug mb-2">
        {cert.title}
      </h3>

      <div className="flex items-center gap-2 text-xs font-medium text-slate-600 dark:text-slate-300 mt-auto pt-2">
        <Building2 className="w-3.5 h-3.5 text-brand-500 shrink-0" />
        <span>{cert.issuer}</span>
      </div>

      {cert.details && (
        <p className="mt-2 text-xs text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800/60 pt-2">
          {cert.details}
        </p>
      )}
    </div>
  );
};
