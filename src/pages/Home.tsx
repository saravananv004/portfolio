import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  GraduationCap, 
  Languages, 
  Sparkles, 
  CheckCircle2 
} from 'lucide-react';
import { Hero } from '../components/Hero';
import { SectionHeading } from '../components/SectionHeading';
import { SkillCard } from '../components/SkillCard';
import { ExperienceCard } from '../components/ExperienceCard';
import { ProjectCard } from '../components/ProjectCard';
import { CertificationCard } from '../components/CertificationCard';
import { ContactSection } from '../components/ContactSection';
import { profileData } from '../data/profile';
import { skillCategories } from '../data/skills';
import { experienceData } from '../data/experience';
import { projectsData } from '../data/projects';
import { educationData } from '../data/education';
import { certificationsData } from '../data/certifications';

export const Home: React.FC = () => {
  const featuredCertifications = certificationsData.filter((c) => c.featuredHome);

  return (
    <div className="space-y-24 sm:space-y-32 pb-24">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. About & Focus Areas Section */}
      <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="About Me"
          title="Bridging Data, Automation & Software"
          subtitle="A passionate Computer Science graduate dedicated to building reliable data pipelines, intelligent workflows, and robust applications."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Biography Box */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-white dark:bg-navy-900 border border-slate-200/90 dark:border-slate-800/80 shadow-sm space-y-4">
            <div className="flex items-center gap-3.5 mb-2">
              <div className="w-12 h-12 rounded-xl overflow-hidden ring-1 ring-brand-500/30 p-0.5 bg-gradient-to-br from-brand-500 to-cyan-400 shrink-0 shadow-md">
                <img
                  src={profileData.photoUrl}
                  alt={profileData.name}
                  className="w-full h-full object-cover rounded-[10px]"
                />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  Practical Problem Solver &amp; Fast Learner
                </h3>
                <span className="text-xs text-brand-600 dark:text-brand-400 font-semibold">{profileData.name} &bull; {profileData.location}</span>
              </div>
            </div>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              I am a Computer Science Engineering graduate interested in data engineering, analytics, Generative AI, and automation. Through internships and practical projects, I have gained exposure to data processing, data quality, LLM workflows, REST APIs, database operations, and full-stack application development.
            </p>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              I enjoy breaking down technical problems into manageable steps, building practical solutions, validating outputs, and communicating results clearly. I am looking for opportunities where I can contribute, strengthen my technical skills, and grow as an engineer.
            </p>

            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 dark:text-brand-400 hover:text-brand-500 transition-colors"
              >
                <span>Read detailed profile</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Focus Areas Card */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-900 to-navy-950 border border-slate-800 text-slate-100 shadow-xl space-y-4">
            <div className="flex items-center gap-2 text-cyan-400">
              <Sparkles className="w-5 h-5" />
              <h4 className="text-base font-bold tracking-tight text-white uppercase text-xs">
                Key Professional Focus Areas
              </h4>
            </div>

            <ul className="space-y-2.5 pt-1">
              {profileData.focusAreas.map((area) => (
                <li key={area} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{area}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
              <span>Location: {profileData.location}</span>
              <span className="text-cyan-400 font-mono">Fresher / Graduate</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Technical Skills Section */}
      <section id="skills" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Technical Skills"
          title="Skills &amp; Technology Stack"
          subtitle="Carefully organized competencies spanning data engineering, analytics, AI workflows, and software development."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat) => (
            <SkillCard key={cat.id} category={cat} />
          ))}
        </div>
      </section>

      {/* 4. Featured Projects Section */}
      <section id="projects" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider uppercase rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              Portfolio Projects
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              Featured Work
            </h2>
            <div className="h-1 w-16 bg-gradient-to-r from-brand-500 to-cyan-400 rounded-full mt-4" />
          </div>

          <Link
            to="/projects"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 dark:text-brand-400 hover:text-brand-500 transition-colors"
          >
            <span>View all 3 projects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Project 1: Wholesale Ledger (Prominent Featured Card) */}
        <div className="space-y-8">
          <ProjectCard project={projectsData[0]} featured={true} />

          {/* Projects 2 and 3: Responsive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard project={projectsData[1]} />
            <ProjectCard project={projectsData[2]} />
          </div>
        </div>
      </section>

      {/* 5. Professional Experience (Internships) */}
      <section id="experience" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider uppercase rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              Work Experience
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              Internship Experience
            </h2>
            <div className="h-1 w-16 bg-gradient-to-r from-brand-500 to-cyan-400 rounded-full mt-4" />
          </div>

          <Link
            to="/experience"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 dark:text-brand-400 hover:text-brand-500 transition-colors"
          >
            <span>Explore internship details</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="space-y-6">
          {experienceData.map((exp) => (
            <ExperienceCard key={exp.id} experience={exp} />
          ))}
        </div>
      </section>

      {/* 6. Education & Languages Block */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Education &amp; Background"
          title="Academic Credentials"
          subtitle="Engineering foundation and communication proficiency."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Degree 1 */}
          <div className="p-6 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200/90 dark:border-slate-800/80 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="p-2 rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
                  <GraduationCap className="w-5 h-5" />
                </span>
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                  {educationData[0].period}
                </span>
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                {educationData[0].degree}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                {educationData[0].location}
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
              <span className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">
                Academic Score
              </span>
              <span className="text-sm font-bold font-mono text-brand-600 dark:text-brand-400 bg-brand-500/10 px-2 py-0.5 rounded">
                CGPA {educationData[0].score}
              </span>
            </div>
          </div>

          {/* HSC */}
          <div className="p-6 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200/90 dark:border-slate-800/80 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="p-2 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                  <GraduationCap className="w-5 h-5" />
                </span>
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                  {educationData[1].period}
                </span>
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                {educationData[1].degree}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                {educationData[1].location}
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
              <span className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">
                Score
              </span>
              <span className="text-sm font-bold font-mono text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded">
                Percentage {educationData[1].score}
              </span>
            </div>
          </div>

          {/* Languages Block */}
          <div className="p-6 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200/90 dark:border-slate-800/80 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="p-2 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  <Languages className="w-5 h-5" />
                </span>
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                  Communication
                </span>
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                Language Proficiency
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                {profileData.languages}
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-xs text-slate-500 dark:text-slate-400">
                Fluent in technical &amp; stakeholder collaboration
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Certifications Highlights */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider uppercase rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              Certifications &amp; Training
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              Professional Credentials
            </h2>
            <div className="h-1 w-16 bg-gradient-to-r from-brand-500 to-cyan-400 rounded-full mt-4" />
          </div>

          <Link
            to="/certifications"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 dark:text-brand-400 hover:text-brand-500 transition-colors"
          >
            <span>View all 16 certifications</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCertifications.map((cert) => (
            <CertificationCard key={cert.id} cert={cert} />
          ))}
        </div>
      </section>

      {/* 8. Contact Section */}
      <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Get in Touch"
          title="Let's Connect"
          subtitle="Have an opening, internship, or project? Reach out directly via the form or contact links below."
        />

        <ContactSection />
      </section>
    </div>
  );
};
