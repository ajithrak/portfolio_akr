import React from 'react';
import { GilmoreHeader } from './GilmoreHeader';
import { GilmoreHero } from './GilmoreHero';
import { GilmoreAbout } from './GilmoreAbout';
import { GilmoreServices } from './GilmoreServices';
import { GilmoreCTABanner } from './GilmoreCTABanner';
import { GilmoreConsultingAndStats } from './GilmoreConsultingAndStats';
import { GilmoreProjects } from './GilmoreProjects';
import { GilmoreTeam } from './GilmoreTeam';
import { GilmoreTestimonial } from './GilmoreTestimonial';
import { GilmoreQuoteForm } from './GilmoreQuoteForm';
import { GilmoreBlog } from './GilmoreBlog';
import { GilmoreContactMap } from './GilmoreContactMap';
import { GilmoreFooter } from './GilmoreFooter';

export const GilmoreLandingPage: React.FC = () => {
  return (
    <div className="min-h-[720px] flex flex-col font-sans bg-white selection:bg-purple-700 selection:text-white">
      <GilmoreHeader />
      <main className="flex-1">
        <GilmoreHero />
        <GilmoreAbout />
        <GilmoreServices />
        <GilmoreCTABanner />
        <GilmoreConsultingAndStats />
        <GilmoreProjects />
        <GilmoreTeam />
        <GilmoreTestimonial />
        <GilmoreQuoteForm />
        <GilmoreBlog />
        <GilmoreContactMap />
      </main>
      <GilmoreFooter />
    </div>
  );
};
