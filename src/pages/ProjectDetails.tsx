import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  ShieldCheck, 
  Maximize2, 
  CheckCircle2, 
  AlertCircle, 
  Workflow, 
  Terminal, 
  ArrowRight, 
  Clock 
} from 'lucide-react';
import { projectsData, ProjectScreenshot } from '../data/projects';
import { WholesaleArchitectureDiagram } from '../components/WholesaleArchitectureDiagram';
import { LightboxModal } from '../components/LightboxModal';

export const ProjectDetails: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [selectedScreenshot, setSelectedScreenshot] = useState<ProjectScreenshot | null>(null);

  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Lightbox Modal */}
      <LightboxModal
        screenshot={selectedScreenshot}
        onClose={() => setSelectedScreenshot(null)}
      />

      {/* Back button */}
      <div>
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-brand-500 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Projects</span>
        </Link>
      </div>

      {/* Project Hero Header */}
      <div className="p-6 sm:p-10 rounded-3xl bg-white dark:bg-navy-900 border border-slate-200/90 dark:border-slate-800/80 shadow-md space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400">
            {project.category}
          </span>
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
            <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse" />
            {project.status}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          {project.title}
        </h1>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-4xl">
          {project.fullDescription}
        </p>

        {/* Tech Stack Tags */}
        <div className="pt-2">
          <span className="block text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2.5">
            Technology Stack
          </span>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-mono font-medium rounded-lg bg-slate-100 dark:bg-navy-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Verified Metrics (if any, like Customer Churn) */}
      {project.metrics && project.metrics.length > 0 && (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {project.metrics.map((metric, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200/90 dark:border-slate-800/80 shadow-sm"
            >
              <div className="text-2xl sm:text-3xl font-extrabold font-mono text-brand-600 dark:text-brand-400">
                {metric.value}
              </div>
              <div className="text-xs font-bold text-slate-900 dark:text-white mt-1">
                {metric.label}
              </div>
              {metric.subtext && (
                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                  {metric.subtext}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Problem Statement & Project Goals */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Problem Statement */}
        <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-white dark:bg-navy-900 border border-slate-200/90 dark:border-slate-800/80 shadow-sm space-y-4">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-amber-500" />
            <span>Problem Statement</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {project.problemStatement}
          </p>
        </div>

        {/* Goals */}
        {project.goals && (
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-white dark:bg-navy-900 border border-slate-200/90 dark:border-slate-800/80 shadow-sm space-y-4">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
              <span>Project Objectives</span>
            </h2>
            <ul className="space-y-2.5">
              {project.goals.map((goal, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-2 shrink-0" />
                  <span>{goal}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Specific Content for Wholesale Ledger */}
      {project.slug === 'wholesale-ledger' && (
        <div className="space-y-12">
          {/* Architecture Diagram */}
          <WholesaleArchitectureDiagram />

          {/* Key Implemented Features */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-navy-900 border border-slate-200/90 dark:border-slate-800/80 shadow-sm space-y-6">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Implemented Capabilities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.features.map((feat, idx) => {
                const [title, ...descParts] = feat.split(': ');
                const desc = descParts.join(': ');
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-slate-50 dark:bg-navy-800/60 border border-slate-200/70 dark:border-slate-700/60 space-y-1"
                  >
                    <div className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0" />
                      <span>{title}</span>
                    </div>
                    {desc && (
                      <p className="text-xs text-slate-600 dark:text-slate-400 pl-6 leading-relaxed">
                        {desc}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Verified Screenshots Gallery */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Application Screenshot Gallery
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Click any screenshot to inspect full resolution in lightbox modal.
                </p>
              </div>
              <span className="text-xs font-mono text-emerald-500 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                3 Verified Local Views
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {project.screenshots.map((s, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedScreenshot(s)}
                  className="group cursor-pointer rounded-2xl overflow-hidden bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-brand-500/50 transition-all flex flex-col"
                >
                  <div className="relative aspect-video overflow-hidden bg-slate-950 flex items-center justify-center">
                    <img
                      src={s.url}
                      alt={s.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-navy-950/90 text-white text-xs font-medium backdrop-blur-md border border-white/20">
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span>Enlarge</span>
                      </span>
                    </div>
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {s.caption}
                    </p>
                    <span className="text-[11px] font-mono text-brand-500 mt-3 block">
                      Inspect view &rarr;
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Implementation Overview & Design Challenges */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-navy-900 border border-slate-200/90 dark:border-slate-800/80 shadow-sm space-y-3">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Terminal className="w-5 h-5 text-brand-500" />
                <span>Technical Implementation</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                The application relies on FastAPI's asynchronous routing with Pydantic schemas validating incoming requests. Database sessions with SQLAlchemy enforce atomic commits, ensuring that stock deductions, purchase records, and ledger balances remain consistent even under concurrent operations.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-navy-900 border border-slate-200/90 dark:border-slate-800/80 shadow-sm space-y-3">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-cyan-500" />
                <span>Security &amp; Data Safeguards</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Administrative endpoints require cryptographically signed JSON Web Tokens (JWT). The public catalog route is strictly read-only and accepts order requests without exposing retailer account dues or financial transaction histories.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Specific Content for Customer Churn Prediction */}
      {project.slug === 'customer-churn-prediction' && (
        <div className="space-y-12">
          {/* Analysis Workflow Diagram */}
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 dark:bg-navy-950 border border-slate-800 text-slate-100 shadow-xl space-y-6">
            <div className="flex items-center gap-2 pb-3 border-b border-slate-800">
              <Workflow className="w-5 h-5 text-cyan-400" />
              <h3 className="text-lg font-bold text-white">End-to-End Analytics Pipeline</h3>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
              {[
                'Raw Customer Data (7,043)',
                'Data Cleaning & Preprocessing',
                'Exploratory Data Analysis',
                'Feature Engineering',
                'Model Comparison (Scikit-Learn)',
                'Churn Risk Scoring',
                'Power BI Dashboard & Insights'
              ].map((step, idx, arr) => (
                <React.Fragment key={idx}>
                  <span className="px-3 py-2 rounded-xl bg-slate-800 text-cyan-300 border border-slate-700">
                    {step}
                  </span>
                  {idx < arr.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-slate-600 hidden sm:block shrink-0" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Model Comparison Table */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-navy-900 border border-slate-200/90 dark:border-slate-800/80 shadow-sm space-y-4">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Model Comparison on 20% Held-Out Test Set
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Logistic Regression was selected over Random Forest for deployment in the retention dashboard because of its higher ROC-AUC (0.842) and superior recall (0.783), catching 78% of actual churners.
            </p>

            <div className="overflow-x-auto pt-2">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-800 text-slate-400 font-mono uppercase text-[11px]">
                    <th className="py-2.5 px-3">Algorithm</th>
                    <th className="py-2.5 px-3">ROC-AUC</th>
                    <th className="py-2.5 px-3">Accuracy</th>
                    <th className="py-2.5 px-3">Precision</th>
                    <th className="py-2.5 px-3">Recall</th>
                    <th className="py-2.5 px-3">F1 Score</th>
                  </tr>
                </thead>
                <tbody className="font-mono divide-y divide-slate-100 dark:divide-slate-800/60">
                  <tr className="bg-brand-500/5 font-semibold text-brand-600 dark:text-brand-400">
                    <td className="py-3 px-3 font-sans font-bold flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      Logistic Regression (Selected)
                    </td>
                    <td className="py-3 px-3">0.842</td>
                    <td className="py-3 px-3">0.738</td>
                    <td className="py-3 px-3">0.504</td>
                    <td className="py-3 px-3 font-bold text-emerald-500">0.783</td>
                    <td className="py-3 px-3">0.614</td>
                  </tr>
                  <tr className="text-slate-600 dark:text-slate-400">
                    <td className="py-3 px-3 font-sans font-medium">Random Forest</td>
                    <td className="py-3 px-3">0.834</td>
                    <td className="py-3 px-3">0.774</td>
                    <td className="py-3 px-3">0.566</td>
                    <td className="py-3 px-3">0.634</td>
                    <td className="py-3 px-3">0.598</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Power BI Dashboard Screenshots */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Power BI Retention Dashboard Views
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Built in Power BI Desktop using scored risk outputs and SQL queries.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.screenshots.map((s, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedScreenshot(s)}
                  className="group cursor-pointer rounded-2xl overflow-hidden bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-brand-500/50 transition-all flex flex-col"
                >
                  <div className="relative aspect-video overflow-hidden bg-slate-950 flex items-center justify-center">
                    <img
                      src={s.url}
                      alt={s.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-navy-950/90 text-white text-xs font-medium backdrop-blur-md border border-white/20">
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span>Enlarge</span>
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {s.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Specific Content for Secure Data Wiping System */}
      {project.slug === 'secure-data-wiping-system' && (
        <div className="space-y-12">
          {/* Overwrite & Safety Architecture */}
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 dark:bg-navy-950 border border-slate-800 text-slate-100 shadow-xl space-y-6">
            <div className="flex items-center gap-2 pb-3 border-b border-slate-800">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              <h3 className="text-lg font-bold text-white">Multi-Pass Sanitization &amp; Safety Pipeline</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs font-mono">
              <div className="p-4 rounded-xl bg-slate-800 border border-slate-700">
                <span className="text-brand-400 font-bold block mb-1">1. Path Check</span>
                <span>Validates target path; rejects system root directories (C:\, Windows, /etc).</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-800 border border-slate-700">
                <span className="text-cyan-400 font-bold block mb-1">2. Overwrite Passes</span>
                <span>Configurable 3-pass / 7-pass cryptographically random byte overwriting.</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-800 border border-slate-700">
                <span className="text-amber-400 font-bold block mb-1">3. Sector Flush</span>
                <span>Low-level handle flush ensuring sectors are overwritten before deletion.</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-800 border border-slate-700">
                <span className="text-emerald-400 font-bold block mb-1">4. PDF Audit</span>
                <span>ReportLab generates timestamped audit certificates with job parameters.</span>
              </div>
            </div>
          </div>

          {/* Key Implemented Capabilities */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-navy-900 border border-slate-200/90 dark:border-slate-800/80 shadow-sm space-y-4">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Implemented Functionality
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.features.map((feat, idx) => {
                const [title, ...descParts] = feat.split(': ');
                const desc = descParts.join(': ');
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-slate-50 dark:bg-navy-800/60 border border-slate-200/70 dark:border-slate-700/60 space-y-1"
                  >
                    <div className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0" />
                      <span>{title}</span>
                    </div>
                    {desc && (
                      <p className="text-xs text-slate-600 dark:text-slate-400 pl-6 leading-relaxed">
                        {desc}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Potential Future Improvements */}
      {project.futureImprovements && (
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-navy-850 border border-slate-200/80 dark:border-slate-800/80 shadow-sm space-y-4">
          <div className="flex items-center gap-2 text-slate-900 dark:text-white">
            <Clock className="w-5 h-5 text-amber-500" />
            <h3 className="text-lg font-bold">
              Potential Future Enhancements
            </h3>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Roadmap items planned for subsequent iterations:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5 pt-1">
            {project.futureImprovements.map((imp, idx) => (
              <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                <span>{imp}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
