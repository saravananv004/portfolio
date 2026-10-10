import React from 'react';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  Languages, 
  MapPin, 
  CheckCircle2, 
  Layers, 
  ArrowRight,
  FileDown
} from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { profileData } from '../data/profile';
import { educationData } from '../data/education';

export const About: React.FC = () => {
  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Page Header */}
      <SectionHeading
        badge="About Me"
        title="Background &amp; Professional Profile"
        subtitle="Computer Science Engineering graduate with internship experience across Generative AI workflows, data pipelines, and full-stack web applications."
      />

      {/* Main Grid: Bio & Compact Summary Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Bio Left Column */}
        <div className="lg:col-span-7 space-y-6">
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-navy-900 border border-slate-200/90 dark:border-slate-800/80 shadow-sm space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              Who I Am
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              I am a Computer Science Engineering graduate interested in data engineering, analytics, Generative AI, and automation. Through internships and practical projects, I have gained exposure to data processing, data quality, LLM workflows, REST APIs, database operations, and full-stack application development.
            </p>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              I enjoy breaking down technical problems into manageable steps, building practical solutions, validating outputs, and communicating results clearly. I am looking for opportunities where I can contribute, strengthen my technical skills, and grow as an engineer.
            </p>
          </div>

          {/* Core Technical Focus Areas */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-navy-900 border border-slate-200/90 dark:border-slate-800/80 shadow-sm space-y-4">
            <div className="flex items-center gap-2.5">
              <Layers className="w-5 h-5 text-brand-500" />
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Core Focus Areas
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {profileData.focusAreas.map((area) => (
                <div
                  key={area}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-navy-800 border border-slate-200/70 dark:border-slate-700/60"
                >
                  <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200">
                    {area}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Compact Summary Card Right Column */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 dark:bg-navy-950 border border-slate-800 text-slate-100 shadow-xl space-y-6">
            <div className="flex items-center gap-4 pb-4 border-b border-slate-800">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden ring-2 ring-brand-500/40 p-0.5 bg-gradient-to-br from-brand-500 via-cyan-400 to-brand-600 shrink-0 shadow-lg shadow-brand-500/20">
                <img
                  src={profileData.photoUrl}
                  alt={profileData.name}
                  className="w-full h-full object-cover rounded-[14px]"
                />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white">{profileData.name}</h4>
                <p className="text-xs text-brand-400 font-medium">B.E. Computer Science &amp; Engineering</p>
                <span className="inline-flex items-center gap-1.5 text-[11px] text-emerald-400 font-mono mt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Available for Hire
                </span>
              </div>
            </div>

            <div className="space-y-3.5 text-xs text-slate-300">
              <div className="flex items-center justify-between py-1 border-b border-slate-800/80">
                <span className="text-slate-400">Location</span>
                <span className="font-semibold text-slate-200 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-brand-400" />
                  {profileData.location}
                </span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-slate-800/80">
                <span className="text-slate-400">Email</span>
                <a href={`mailto:${profileData.email}`} className="font-semibold text-brand-300 hover:underline">
                  {profileData.email}
                </a>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-slate-800/80">
                <span className="text-slate-400">Phone</span>
                <a href={`tel:${profileData.phone.replace(/\s+/g, '')}`} className="font-semibold text-slate-200">
                  {profileData.phone}
                </a>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-slate-800/80">
                <span className="text-slate-400">Degree &amp; CGPA</span>
                <span className="font-semibold text-emerald-400 font-mono">B.E. CSE — 8.3 CGPA</span>
              </div>
              <div className="flex items-center justify-between py-1">
                <span className="text-slate-400">Status</span>
                <span className="font-semibold text-cyan-400">Open to Opportunities</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              {profileData.hasResumePdf && (
                <a
                  href={profileData.resumeUrl}
                  download="Saravanan_V_Resume.pdf"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 hover:to-cyan-500 shadow-md transition-all"
                >
                  <FileDown className="w-4 h-4" />
                  <span>Download Resume</span>
                </a>
              )}
              <Link
                to="/contact"
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-all"
              >
                <span>Contact Me</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Languages Block */}
          <div className="p-6 rounded-3xl bg-white dark:bg-navy-900 border border-slate-200/90 dark:border-slate-800/80 shadow-sm space-y-3">
            <div className="flex items-center gap-2">
              <Languages className="w-4 h-4 text-brand-500" />
              <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider text-xs">
                Language Skills
              </h4>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {profileData.languages}
            </p>
          </div>
        </div>
      </div>

      {/* Education Timeline */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
          Formal Education
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educationData.map((edu) => (
            <div
              key={edu.id}
              className="p-6 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200/90 dark:border-slate-800/80 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="p-2 rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-400">
                    <GraduationCap className="w-5 h-5" />
                  </span>
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                    {edu.period}
                  </span>
                </div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white">
                  {edu.degree}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  {edu.location}
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                <span className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">
                  {edu.scoreLabel}
                </span>
                <span className="text-sm font-bold font-mono text-brand-600 dark:text-brand-400 bg-brand-500/10 px-2 py-0.5 rounded">
                  {edu.score}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
