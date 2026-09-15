import React from 'react';
import { CaseStudyLayout } from '../components/CaseStudyLayout';
import { FORM_BUILDER_DATA } from '../data/pageData';

const FormBuilderPage: React.FC = () => {
  return (
    <CaseStudyLayout
      data={FORM_BUILDER_DATA}
      badgeClassName="bg-sky-50 dark:bg-sky-950/40 text-sky-600 dark:text-sky-400"
    />
  );
};

export default FormBuilderPage;
