import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, FileDown, ArrowUpRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { profileData } from '../data/profile';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Skills', path: '/#skills' },
  { name: 'Experience', path: '/experience' },
  { name: 'Projects', path: '/projects' },
  { name: 'Certifications', path: '/certifications' },
  { name: 'Contact', path: '/contact' },
];

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when location changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname, location.hash]);

  const handleNavClick = (path: string) => {
    if (path.startsWith('/#')) {
      const elementId = path.substring(2);
      if (location.pathname === '/') {
        const el = document.getElementById(elementId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/85 dark:bg-navy-950/85 backdrop-blur-md shadow-md shadow-black/5 dark:shadow-black/20 border-b border-slate-200/80 dark:border-slate-800/80 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-600 to-cyan-500 flex items-center justify-center text-white font-extrabold text-lg shadow-md shadow-brand-500/25 group-hover:scale-105 transition-transform duration-200">
              {profileData.initials}
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-slate-900 dark:text-white text-base leading-tight group-hover:text-brand-500 transition-colors">
                {profileData.name}
              </span>
              <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                Portfolio
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isHashLink = link.path.startsWith('/#');
              if (isHashLink) {
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => handleNavClick(link.path)}
                    className="px-3 py-2 text-sm font-medium rounded-lg text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors"
                  >
                    {link.name}
                  </Link>
                );
              }
              return (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                      isActive && location.pathname === link.path
                        ? 'text-brand-600 dark:text-brand-400 bg-brand-500/10 font-semibold'
                        : 'text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-slate-100 dark:hover:bg-slate-800/60'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              );
            })}
          </nav>

          {/* Right actions: Theme toggle & Resume button */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:text-brand-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400 animate-spin-slow" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>

            {/* Resume Download Button */}
            {profileData.hasResumePdf ? (
              <a
                href={profileData.resumeUrl}
                download="Saravanan_V_Resume.pdf"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-xl text-white bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 hover:to-cyan-500 shadow-sm shadow-brand-500/30 hover:shadow-brand-500/50 hover:shadow-md transition-all duration-200"
              >
                <FileDown className="w-4 h-4" />
                <span>Resume</span>
              </a>
            ) : (
              <span
                title="Resume PDF placeholder"
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium rounded-xl text-slate-400 dark:text-slate-500 border border-slate-300 dark:border-slate-700 cursor-not-allowed"
              >
                Resume (Pending PDF)
              </span>
            )}
          </div>

          {/* Mobile hamburger button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu panel */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 pb-4 px-2 bg-white/95 dark:bg-navy-900/95 backdrop-blur-xl border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl shadow-black/10 transition-all">
            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isHashLink = link.path.startsWith('/#');
                if (isHashLink) {
                  return (
                    <Link
                      key={link.name}
                      to={link.path}
                      onClick={() => handleNavClick(link.path)}
                      className="px-3.5 py-2.5 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/80 hover:text-brand-500 transition-colors"
                    >
                      {link.name}
                    </Link>
                  );
                }
                return (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    className={({ isActive }) =>
                      `px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                        isActive && location.pathname === link.path
                          ? 'text-brand-500 bg-brand-500/10 font-semibold'
                          : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/80 hover:text-brand-500'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                );
              })}

              <div className="pt-3 mt-2 border-t border-slate-200 dark:border-slate-800/80 px-2">
                {profileData.hasResumePdf ? (
                  <a
                    href={profileData.resumeUrl}
                    download="Saravanan_V_Resume.pdf"
                    className="flex items-center justify-center gap-2 w-full px-4 py-2.5 text-sm font-semibold rounded-xl text-white bg-gradient-to-r from-brand-600 to-cyan-500 shadow-md shadow-brand-500/20"
                  >
                    <FileDown className="w-4 h-4" />
                    <span>Download Resume PDF</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
                  </a>
                ) : (
                  <div className="text-center text-xs text-slate-400 py-2">
                    Resume file pending configuration
                  </div>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
