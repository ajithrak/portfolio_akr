import React from 'react';
import { CareerNavbar } from './CareerNavbar';
import { CareerHero } from './CareerHero';
import { CareerAbout } from './CareerAbout';
import { CareerProblems } from './CareerProblems';
import { CareerOfferings } from './CareerOfferings';
import { CareerTestimonials } from './CareerTestimonials';
import { CareerCTA } from './CareerCTA';
import { CareerFooter } from './CareerFooter';

export const CareerLandingPage: React.FC = () => {
  return (
    <div className="min-h-[720px] flex flex-col font-sans bg-white selection:bg-neutral-800 selection:text-white">
      <CareerNavbar />
      <main className="flex-1">
        <CareerHero />
        <CareerAbout />
        <CareerProblems />
        <CareerOfferings />
        <CareerTestimonials />
        <CareerCTA />
      </main>
      <CareerFooter />
    </div>
  );
};
