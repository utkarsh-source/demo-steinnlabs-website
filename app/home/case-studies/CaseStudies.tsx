import React from 'react';

import { ArrowRight, Button, Typography } from '@/app/components';
import { CaseStudyCard } from '@/app/components/CaseStudyCard/CaseStudyCard';
import { router } from '@/app/utils/routes';

import CaseStudy1 from '../../../public/assets/images/case-study-1.png';
import CaseStudy2 from '../../../public/assets/images/case-study-2.png';
import CaseStudy3 from '../../../public/assets/images/case-study-3.png';

const caseStudies = [
  {
    category: 'Webflow',
    title: 'Revamping E-Commerce Experience',
    description:
      'How we transformed an e-commerce platform to enhance user interaction and drive significant revenue growth.',
    imageSrc: CaseStudy1,
  },
  {
    category: 'Design',
    title: 'Streamlining Healthcare Interfaces',
    description:
      'A look into how we redesigned healthcare applications to simplify processes and elevate user satisfaction.',
    imageSrc: CaseStudy2,
  },
  {
    category: 'Development',
    title: 'Mobile Banking, Enhancing Usability and Security',
    description:
      'Discover how we redesigned a mobile banking app to offer a seamless user experience while ensuring top-notch security.',
    imageSrc: CaseStudy3,
  },
  {
    category: 'Webflow',
    title: 'Revamping E-Commerce Experience',
    description:
      'How we transformed an e-commerce platform to enhance user interaction and drive significant revenue growth.',
    imageSrc: CaseStudy1,
  },
  {
    category: 'Design',
    title: 'Streamlining Healthcare Interfaces',
    description:
      'A look into how we redesigned healthcare applications to simplify processes and elevate user satisfaction.',
    imageSrc: CaseStudy2,
  },
  {
    category: 'Development',
    title: 'Mobile Banking, Enhancing Usability and Security',
    description:
      'Discover how we redesigned a mobile banking app to offer a seamless user experience while ensuring top-notch security.',
    imageSrc: CaseStudy3,
  },
];

export function CaseStudies() {
  return (
    <div
      id={router.getCaseStudiesRoute()}
      className="grid gap-14 px-[4rem] py-[5rem] lg:p-[10rem] pt-0">
      <div className="flex items-start justify-between">
        <Typography color="dark" variant="headingXL">
          Case Studies
        </Typography>
        <Button
          endContent={<ArrowRight />}
          variant="solid"
          color="primary"
          text="sm"
          className="font-medium">
          View more
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
        {caseStudies.map((caseStudy, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <CaseStudyCard key={caseStudy.title + index} {...caseStudy} />
        ))}
      </div>
    </div>
  );
}
