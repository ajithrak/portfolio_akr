import React from 'react';
import { RevivyNavbar } from './RevivyNavbar';
import { RevivyHero } from './RevivyHero';
import { RevivyBrandLogos } from './RevivyBrandLogos';
import { RevivyAbout } from './RevivyAbout';
import { RevivySelection } from './RevivySelection';
import { RevivyCollections } from './RevivyCollections';
import { RevivyOfferBanner } from './RevivyOfferBanner';
import { RevivyStories } from './RevivyStories';
import { RevivyFooter } from './RevivyFooter';

export const RevivyLandingPage: React.FC = () => {
  return (
    <div className="min-h-[720px] flex flex-col font-sans bg-[#faf8f7] text-slate-800 selection:bg-purple-200 selection:text-purple-950">
      <RevivyNavbar />
      <main className="flex-1">
        <RevivyHero />
        <RevivyBrandLogos />
        <RevivyAbout />
        <RevivySelection />
        <RevivyCollections />
        <RevivyOfferBanner />
        <RevivyStories />
      </main>
      <RevivyFooter />
    </div>
  );
};
