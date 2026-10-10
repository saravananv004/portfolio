import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { ExperienceCard } from '../components/ExperienceCard';
import { experienceData } from '../data/experience';

export const Experience: React.FC = () => {
  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Page Header */}
      <SectionHeading
        badge="Experience"
        title="Internship Journey"
        subtitle="Hands-on industry experience building Generative AI workflows, full-stack applications, and API integrations."
      />

      <div className="space-y-8 max-w-4xl mx-auto">
        {experienceData.map((exp) => (
          <ExperienceCard key={exp.id} experience={exp} />
        ))}
      </div>
    </div>
  );
};
