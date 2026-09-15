import React from 'react';
import { VoltEdgeNavbar } from './VoltEdgeNavbar';
import { VoltEdgeHero } from './VoltEdgeHero';
import { VoltEdgeStats } from './VoltEdgeStats';
import { VoltEdgeAbout } from './VoltEdgeAbout';
import { VoltEdgeServices } from './VoltEdgeServices';
import { VoltEdgeEmergencyBanner } from './VoltEdgeEmergencyBanner';
import { VoltEdgeTestimonials } from './VoltEdgeTestimonials';
import { VoltEdgeFooter } from './VoltEdgeFooter';

export const VoltEdgeLandingPage: React.FC = () => {
  return (
    <div className="min-h-[720px] flex flex-col font-sans bg-white text-slate-900 selection:bg-lime-400 selection:text-slate-950">
      <VoltEdgeNavbar />
      <main className="flex-1">
        <VoltEdgeHero />
        <VoltEdgeStats />
        <VoltEdgeAbout />
        <VoltEdgeServices />
        <VoltEdgeEmergencyBanner />
        <VoltEdgeTestimonials />
      </main>
      <VoltEdgeFooter />
    </div>
  );
};
