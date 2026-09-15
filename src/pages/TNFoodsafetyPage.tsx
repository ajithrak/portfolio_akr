import React from 'react';
import { CaseStudyLayout } from '../components/CaseStudyLayout';
import { TNFOODSAFETY_DATA } from '../data/pageData';

const TNFoodsafetyPage: React.FC = () => {
  return (
    <CaseStudyLayout
      data={TNFOODSAFETY_DATA}
      badgeClassName="bg-violet-50 dark:bg-violet-950/40 text-violet-600 dark:text-violet-400"
    />
  );
};

export default TNFoodsafetyPage;
