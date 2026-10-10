import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, ArrowUp, Phone, MapPin, Sparkles } from 'lucide-react';
import { profileData } from '../data/profile';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-100 dark:bg-navy-900 border-t border-slate-200 dark:border-slate-800/80 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-600 to-cyan-500 flex items-center justify-center text-white font-extrabold text-base shadow-md shadow-brand-500/20">
                {profileData.initials}
              </div>
              <span className="text-xl font-bold text-slate-900 dark:text-white">
                {profileData.name}
              </span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md leading-relaxed">
              Building practical solutions with data, Python, automation, and AI.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 pt-1">
              <MapPin className="w-3.5 h-3.5 text-brand-500 shrink-0" />
              <span>{profileData.location}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-slate-200 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-slate-600 dark:text-slate-400 hover:text-brand-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-600 dark:text-slate-400 hover:text-brand-500 transition-colors">
                  About Me
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-slate-600 dark:text-slate-400 hover:text-brand-500 transition-colors">
                  Featured Projects
                </Link>
              </li>
              <li>
                <Link to="/experience" className="text-slate-600 dark:text-slate-400 hover:text-brand-500 transition-colors">
                  Internships
                </Link>
              </li>
              <li>
                <Link to="/certifications" className="text-slate-600 dark:text-slate-400 hover:text-brand-500 transition-colors">
                  Certifications
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-600 dark:text-slate-400 hover:text-brand-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-slate-200 mb-4">
              Connect
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${profileData.email}`}
                  className="flex items-center gap-2.5 text-slate-600 dark:text-slate-400 hover:text-brand-500 transition-colors group"
                >
                  <Mail className="w-4 h-4 text-slate-400 group-hover:text-brand-500 transition-colors" />
                  <span className="truncate">{profileData.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${profileData.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-2.5 text-slate-600 dark:text-slate-400 hover:text-brand-500 transition-colors group"
                >
                  <Phone className="w-4 h-4 text-slate-400 group-hover:text-brand-500 transition-colors" />
                  <span>{profileData.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-slate-600 dark:text-slate-400 hover:text-brand-500 transition-colors group"
                >
                  <Linkedin className="w-4 h-4 text-slate-400 group-hover:text-brand-500 transition-colors" />
                  <span>LinkedIn Profile</span>
                </a>
              </li>
              <li>
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-slate-600 dark:text-slate-400 hover:text-brand-500 transition-colors group"
                >
                  <Github className="w-4 h-4 text-slate-400 group-hover:text-brand-500 transition-colors" />
                  <span>GitHub Profile</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500 dark:text-slate-400 text-center sm:text-left">
            &copy; {currentYear} {profileData.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-cyan-400" />
              Built with React, Vite &amp; Tailwind CSS
            </span>

            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="p-2 rounded-lg bg-slate-200 dark:bg-slate-800 hover:bg-brand-500 hover:text-white dark:hover:bg-brand-600 text-slate-600 dark:text-slate-300 transition-all duration-200"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
