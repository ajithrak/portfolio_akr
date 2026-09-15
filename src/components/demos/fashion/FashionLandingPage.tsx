import React from 'react';
import { FashionNavbar } from './FashionNavbar';
import { FashionHero } from './FashionHero';
import { FashionValueStrip } from './FashionValueStrip';
import { FashionStory } from './FashionStory';
import { FashionCategories } from './FashionCategories';
import { FashionSeasonPromo } from './FashionSeasonPromo';
import { FashionBestSellers } from './FashionBestSellers';
import { FashionNewsletter } from './FashionNewsletter';
import { FashionFAQ } from './FashionFAQ';
import { FashionFooter } from './FashionFooter';

export const FashionLandingPage: React.FC = () => {
  return (
    <div className="min-h-[720px] flex flex-col font-sans bg-white text-neutral-900 selection:bg-neutral-800 selection:text-white">
      <FashionNavbar />
      <main className="flex-1">
        <FashionHero />
        <FashionValueStrip />
        <FashionStory />
        <FashionCategories />
        <FashionSeasonPromo />
        <FashionBestSellers />
        <FashionNewsletter />
        <FashionFAQ />
      </main>
      <FashionFooter />
    </div>
  );
};
