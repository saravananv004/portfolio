import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-24">
      <div className="max-w-md w-full text-center space-y-6 p-8 rounded-3xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-800 shadow-xl">
        <div className="text-6xl font-black font-mono text-brand-500">
          404
        </div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
          Page Not Found
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          The requested page does not exist or may have been relocated.
        </p>
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-white bg-brand-600 hover:bg-brand-500 transition-colors text-sm"
          >
            <Home className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Browse Projects</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
