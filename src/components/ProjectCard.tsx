import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Github, ExternalLink, Sparkles, CheckCircle2 } from 'lucide-react';
import { ProjectItem } from '../data/projects';

interface ProjectCardProps {
  project: ProjectItem;
  featured?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, featured = false }) => {
  const primaryScreenshot = project.screenshots[0];

  return (
    <div
      className={`group rounded-3xl bg-white dark:bg-navy-900 border border-slate-200/90 dark:border-slate-800/80 hover:border-brand-500/40 dark:hover:border-brand-500/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden ${
        featured ? 'lg:grid lg:grid-cols-12 lg:gap-8 p-6 sm:p-8' : 'p-6 sm:p-7'
      }`}
    >
      {/* Visual / Screenshot (if featured, spans 5 cols; otherwise top image) */}
      <div
        className={`${
          featured
            ? 'lg:col-span-5 mb-6 lg:mb-0'
            : 'mb-5'
        }`}
      >
        <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-900 border border-slate-800/80 flex items-center justify-center group-hover:shadow-lg transition-shadow">
          {primaryScreenshot ? (
            <img
              src={primaryScreenshot.url}
              alt={primaryScreenshot.alt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
              onError={(e) => {
                // Graceful fallback to abstract technical placeholder if remote image fails
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
          ) : (
            <div className="p-6 text-center">
              <div className="w-12 h-12 mx-auto rounded-xl bg-brand-500/10 text-brand-400 flex items-center justify-center font-mono font-bold mb-2">
                &lt;/&gt;
              </div>
              <p className="text-xs text-slate-400 font-mono">Backend Engine &amp; Security</p>
            </div>
          )}

          {/* Status badge overlaid on image */}
          <div className="absolute top-3 left-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-navy-950/80 text-white backdrop-blur-md border border-white/10 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse" />
              {project.status}
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div
        className={`flex flex-col flex-1 ${
          featured ? 'lg:col-span-7 justify-between' : 'justify-between'
        }`}
      >
        <div>
          {/* Category & Featured Pill */}
          <div className="flex flex-wrap items-center gap-2 mb-2.5">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400">
              {project.category}
            </span>
            {featured && (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                <Sparkles className="w-3 h-3" />
                Featured Project
              </span>
            )}
          </div>

          {/* Project Title */}
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-brand-500 transition-colors">
            <Link to={`/projects/${project.slug}`}>
              {project.title}
            </Link>
          </h3>

          {/* Short Description */}
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            {project.shortDescription}
          </p>

          {/* Highlights */}
          {project.features && project.features.length > 0 && (
            <div className="space-y-1.5 mb-5">
              {project.features.slice(0, 3).map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="line-clamp-2">{feat}</span>
                </div>
              ))}
            </div>
          )}

          {/* Technology Badges */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-0.5 text-xs font-mono font-medium rounded-md bg-slate-100 dark:bg-navy-800 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/60"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap items-center gap-3">
          <Link
            to={`/projects/${project.slug}`}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-xl text-white bg-brand-600 hover:bg-brand-500 shadow-sm shadow-brand-500/25 transition-all"
          >
            <span>View Details</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          {/* GitHub button only if valid URL */}
          {project.githubUrl && project.githubUrl.trim() !== '' ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium rounded-xl text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-navy-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>Source</span>
            </a>
          ) : null}

          {/* Live demo button only if valid URL */}
          {project.liveDemoUrl && project.liveDemoUrl.trim() !== '' ? (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium rounded-xl text-brand-600 dark:text-brand-400 bg-brand-500/10 hover:bg-brand-500/20 border border-brand-500/20 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Demo</span>
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
};
