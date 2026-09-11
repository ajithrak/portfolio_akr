import React from 'react';
import { CaseStudyLayout } from '../components/CaseStudyLayout';
import { FORD_PARTS_DATA } from '../data/pageData';

const FordPartsPage: React.FC = () => {
  return (
    <CaseStudyLayout
      data={FORD_PARTS_DATA}
      badgeClassName="bg-orange-50 dark:bg-orange-950/40 text-orange-600 dark:text-orange-400"
    />
  );
};

export default FordPartsPage;
