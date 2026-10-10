import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  FileDown, 
  Mail, 
  Github, 
  Linkedin, 
  Database, 
  Cpu, 
  BarChart2, 
  GitBranch, 
  Server, 
  Activity
} from 'lucide-react';
import { profileData } from '../data/profile';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background ambient decorative light */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-brand-500/10 dark:bg-brand-600/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-cyan-500/10 dark:bg-cyan-500/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Introduction & Call-to-actions */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Profile Avatar & Intro Badge */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <div className="relative group">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden ring-2 ring-brand-500/30 p-1 bg-gradient-to-br from-brand-500 via-cyan-400 to-brand-600 shadow-xl shadow-brand-500/20 group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={profileData.photoUrl}
                    alt={profileData.name}
                    className="w-full h-full object-cover rounded-[14px]"
                  />
                </div>
                <span
                  className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 ring-2 ring-white dark:ring-navy-950 animate-pulse"
                  title="Available for opportunities"
                />
              </div>

              <div className="text-center sm:text-left space-y-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20 text-xs font-semibold tracking-wider uppercase">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>{profileData.shortIntro}</span>
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  Computer Science Engineering Graduate
                </div>
              </div>
            </div>

            {/* Main Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {profileData.name}
            </h1>

            {/* Professional Headline */}
            <p className="text-lg sm:text-xl font-semibold bg-gradient-to-r from-brand-600 via-brand-500 to-cyan-500 bg-clip-text text-transparent leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {profileData.headline}
            </p>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {profileData.heroDescription}
            </p>

            {/* Primary & Secondary Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 hover:to-cyan-500 shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>Explore My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 hover:bg-slate-200 dark:bg-navy-850 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 transition-all duration-200"
              >
                <span>Get In Touch</span>
              </Link>

              {profileData.hasResumePdf && (
                <a
                  href={profileData.resumeUrl}
                  download="Saravanan_V_Resume.pdf"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-brand-600 dark:text-brand-400 bg-brand-500/10 hover:bg-brand-500/20 border border-brand-500/20 transition-all duration-200"
                >
                  <FileDown className="w-4 h-4" />
                  <span>Download Resume</span>
                </a>
              )}
            </div>

            {/* Social / Direct Connect Links */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-5">
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-400 dark:text-slate-500">
                Connect:
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2.5 rounded-xl text-slate-600 dark:text-slate-400 hover:text-brand-500 hover:bg-slate-100 dark:hover:bg-slate-800/80 border border-slate-200/80 dark:border-slate-800 transition-all"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2.5 rounded-xl text-slate-600 dark:text-slate-400 hover:text-brand-500 hover:bg-slate-100 dark:hover:bg-slate-800/80 border border-slate-200/80 dark:border-slate-800 transition-all"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${profileData.email}`}
                  aria-label="Send Email"
                  className="p-2.5 rounded-xl text-slate-600 dark:text-slate-400 hover:text-brand-500 hover:bg-slate-100 dark:hover:bg-slate-800/80 border border-slate-200/80 dark:border-slate-800 transition-all"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Distinctive Technical Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-md p-6 rounded-3xl bg-slate-900/90 dark:bg-navy-900/90 border border-slate-700/60 dark:border-slate-800 shadow-2xl backdrop-blur-xl text-slate-200">
              
              {/* Header bar of the visual card */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-xs font-mono text-slate-400 ml-2">pipeline_engine.py</span>
                </div>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                  <Activity className="w-3 h-3 animate-pulse" />
                  ONLINE
                </span>
              </div>

              {/* Data Node Flow Diagram */}
              <div className="space-y-4">
                {/* Node 1: Ingestion & Raw Data */}
                <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/70 flex items-center justify-between group hover:border-brand-500/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-brand-500/20 text-brand-400">
                      <Database className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white">Data Ingestion &amp; Storage</div>
                      <div className="text-[11px] text-slate-400 font-mono">PostgreSQL | CSV | APIs</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono uppercase bg-brand-500/15 text-brand-300 px-2 py-0.5 rounded">
                    ETL Active
                  </span>
                </div>

                {/* Connecting arrow with pulse */}
                <div className="flex justify-center -my-1 text-brand-400">
                  <div className="h-4 w-0.5 bg-gradient-to-b from-brand-500 to-cyan-400 animate-pulse" />
                </div>

                {/* Node 2: Transformation & ML/AI Engine */}
                <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/70 flex items-center justify-between group hover:border-cyan-500/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-400">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white">Analytics &amp; GenAI Processing</div>
                      <div className="text-[11px] text-slate-400 font-mono">Python | Scikit-learn | LLM Workflows</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono uppercase bg-cyan-500/15 text-cyan-300 px-2 py-0.5 rounded">
                    Scoring
                  </span>
                </div>

                {/* Connecting arrow with pulse */}
                <div className="flex justify-center -my-1 text-cyan-400">
                  <div className="h-4 w-0.5 bg-gradient-to-b from-cyan-400 to-emerald-400 animate-pulse" />
                </div>

                {/* Node 3: BI Dashboards & Full Stack Delivery */}
                <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/70 flex items-center justify-between group hover:border-emerald-500/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400">
                      <BarChart2 className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white">Decision Support &amp; Delivery</div>
                      <div className="text-[11px] text-slate-400 font-mono">Power BI | React Web | REST APIs</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono uppercase bg-emerald-500/15 text-emerald-300 px-2 py-0.5 rounded">
                    Verified
                  </span>
                </div>
              </div>

              {/* Floating technical pills grid */}
              <div className="mt-6 pt-4 border-t border-slate-800/80">
                <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2.5">
                  Core Technical Capabilities
                </div>
                <div className="flex flex-wrap gap-1.5">
                  <span className="px-2.5 py-1 text-xs font-mono rounded-lg bg-slate-800 text-brand-300 border border-slate-700">
                    Python
                  </span>
                  <span className="px-2.5 py-1 text-xs font-mono rounded-lg bg-slate-800 text-cyan-300 border border-slate-700">
                    SQL
                  </span>
                  <span className="px-2.5 py-1 text-xs font-mono rounded-lg bg-slate-800 text-amber-300 border border-slate-700">
                    Power BI
                  </span>
                  <span className="px-2.5 py-1 text-xs font-mono rounded-lg bg-slate-800 text-indigo-300 border border-slate-700">
                    GenAI &amp; LLM
                  </span>
                  <span className="px-2.5 py-1 text-xs font-mono rounded-lg bg-slate-800 text-emerald-300 border border-slate-700">
                    FastAPI
                  </span>
                  <span className="px-2.5 py-1 text-xs font-mono rounded-lg bg-slate-800 text-sky-300 border border-slate-700">
                    PostgreSQL
                  </span>
                  <span className="px-2.5 py-1 text-xs font-mono rounded-lg bg-slate-800 text-rose-300 border border-slate-700">
                    UiPath RPA
                  </span>
                </div>
              </div>

              {/* Live pipeline status footer */}
              <div className="mt-4 pt-3 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span className="flex items-center gap-1.5">
                  <Server className="w-3.5 h-3.5 text-slate-500" />
                  Chennai, Tamil Nadu
                </span>
                <span className="flex items-center gap-1.5">
                  <GitBranch className="w-3.5 h-3.5 text-slate-500" />
                  B.E. CSE (CGPA 8.3)
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
