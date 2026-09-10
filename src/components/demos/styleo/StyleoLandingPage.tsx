import React from 'react';
import { StyleoNavbar } from './StyleoNavbar';
import { StyleoHero } from './StyleoHero';
import { StyleoPerksBar } from './StyleoPerksBar';
import { StyleoFeaturedCollection } from './StyleoFeaturedCollection';
import { StyleoNewArrivals } from './StyleoNewArrivals';
import { StyleoPromoBanner } from './StyleoPromoBanner';
import { StyleoBestSellers } from './StyleoBestSellers';
import { StyleoNewsletter } from './StyleoNewsletter';
import { StyleoFooter } from './StyleoFooter';

export const StyleoLandingPage: React.FC = () => {
  return (
    <div className="min-h-[720px] flex flex-col font-sans bg-white text-slate-900 selection:bg-[#a895de] selection:text-slate-950">
      <StyleoNavbar />
      <main className="flex-1">
        <StyleoHero />
        <StyleoPerksBar />
        <StyleoFeaturedCollection />
        <StyleoNewArrivals />
        <StyleoPromoBanner />
        <StyleoBestSellers />
        <StyleoNewsletter />
      </main>
      <StyleoFooter />
    </div>
  );
};
