import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { CertificationCard } from '../components/CertificationCard';
import { certificationsData } from '../data/certifications';

type CertCategory =
  | 'All'
  | 'AWS Cloud'
  | 'Linux'
  | 'Python & Web'
  | 'UiPath RPA'
  | 'Spring & Backend';

const categories: CertCategory[] = [
  'All',
  'AWS Cloud',
  'Linux',
  'Python & Web',
  'UiPath RPA',
  'Spring & Backend',
];

export const Certifications: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<CertCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCerts = certificationsData.filter((cert) => {
    const matchesCategory =
      selectedCategory === 'All' || cert.category === selectedCategory;
    const matchesSearch =
      cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.issuer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (cert.details && cert.details.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Page Header */}
      <SectionHeading
        badge="Credentials"
        title="Certifications &amp; Professional Training"
        subtitle="Comprehensive training across AWS cloud architecture, Linux system fundamentals, RPA process automation, and enterprise web development."
      />

      {/* Search and Filters Bar */}
      <div className="space-y-4 max-w-3xl mx-auto">
        {/* Search input */}
        <div className="relative">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search certifications by keyword, title, or issuer..."
            className="w-full pl-12 pr-4 py-3 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200/90 dark:border-slate-800 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 shadow-sm transition-all"
          />
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => {
            const count =
              cat === 'All'
                ? certificationsData.length
                : certificationsData.filter((c) => c.category === cat).length;

            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 flex items-center gap-1.5 ${
                  selectedCategory === cat
                    ? 'bg-brand-600 text-white shadow-md shadow-brand-500/25'
                    : 'bg-white dark:bg-navy-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-brand-500/40'
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    selectedCategory === cat
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
      </div>

      {/* Grid of Certifications */}
      {filteredCerts.length === 0 ? (
        <div className="text-center py-16 p-8 rounded-3xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-800 max-w-md mx-auto">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            No certifications match your search query. Try clearing the filters.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCerts.map((cert) => (
            <CertificationCard key={cert.id} cert={cert} />
          ))}
        </div>
      )}
    </div>
  );
};
