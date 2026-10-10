import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { ContactSection } from '../components/ContactSection';

export const Contact: React.FC = () => {
  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <SectionHeading
        badge="Contact"
        title="Get in Touch"
        subtitle="Interested in hiring, collaborating, or learning more about my background? Reach out directly using the information below."
      />

      <ContactSection />
    </div>
  );
};
