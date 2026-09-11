import React from 'react';
import { CaseStudyLayout } from '../components/CaseStudyLayout';
import { API_STATE_MANAGEMENT_DATA } from '../data/pageData';

const ApiStateManagementPage: React.FC = () => {
  return (
    <CaseStudyLayout
      data={API_STATE_MANAGEMENT_DATA}
      badgeClassName="bg-teal-50 dark:bg-teal-950/40 text-teal-600 dark:text-teal-400"
    />
  );
};

export default ApiStateManagementPage;
