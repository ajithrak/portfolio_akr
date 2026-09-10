import React from 'react';
import { CleaningHeader } from './CleaningHeader';
import { CleaningHero } from './CleaningHero';
import { CleaningServicesStrip } from './CleaningServicesStrip';
import { CleaningAboutSection } from './CleaningAboutSection';
import { CleaningProcess } from './CleaningProcess';
import { CleaningSanitizationBanner } from './CleaningSanitizationBanner';
import { CleaningCalculator } from './CleaningCalculator';
import { CleaningTestimonials } from './CleaningTestimonials';
import { CleaningBlog } from './CleaningBlog';
import { CleaningFooter } from './CleaningFooter';

export const CleaningLandingPage: React.FC = () => {
  return (
    <div className="min-h-[720px] flex flex-col font-sans bg-white text-slate-800">
      <CleaningHeader />
      <main className="flex-1">
        <CleaningHero />
        <CleaningServicesStrip />
        <CleaningAboutSection />
        <CleaningProcess />
        <CleaningSanitizationBanner />
        <CleaningCalculator />
        <CleaningTestimonials />
        <CleaningBlog />
      </main>
      <CleaningFooter />
    </div>
  );
};
