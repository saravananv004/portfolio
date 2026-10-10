import React from 'react';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  align = 'center',
}) => {
  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      {badge && (
        <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider uppercase rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
          {badge}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div
        className={`h-1 w-16 bg-gradient-to-r from-brand-500 to-cyan-400 rounded-full mt-4 ${
          align === 'center' ? 'mx-auto' : ''
        }`}
      />
    </div>
  );
};
