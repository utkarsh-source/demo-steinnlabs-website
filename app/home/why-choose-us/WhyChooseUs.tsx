import React from 'react';

import { Typography } from '@/app/components';
import { WhyChooseUsCard } from '@/app/components/ChooseUsCard/ChooseUsCard';

import Arrow from '../../../public/assets/svgs/arrow.svg';
import Bulb from '../../../public/assets/svgs/bulb.svg';
import Grid from '../../../public/assets/svgs/grid.svg';

const features = [
  {
    title: 'Expertise',
    icon: 'expertise',
    features: [
      'Skilled Professionals',
      'Industry Knowledge',
      'Cutting-Edge Solutions',
    ],
    iconSrc: Bulb,
  },
  {
    title: 'Innovation',
    icon: 'innovation',
    features: [
      'Forward-Thinking',
      'Creative Problem-Solving',
      'Advanced Technologies',
    ],
    iconSrc: Arrow,
  },
  {
    title: 'Client-Centric',
    icon: 'client-centric',
    features: [
      'Tailored Solutions',
      'Proactive Communication',
      'Long-Term Relationships',
    ],
    iconSrc: Grid,
  },
  {
    title: 'Quality',
    icon: 'quality',
    features: ['Attention to Detail', 'Consistent Delivery', 'Best Practices'],
    iconSrc: Bulb,
  },
  {
    title: 'Reliability',
    icon: 'reliability',
    features: [
      'On-Time Delivery',
      'Transparent Processes',
      'Dependable Support',
    ],
    iconSrc: Arrow,
  },
  {
    title: 'Global Reach',
    icon: 'global-reach',
    features: [
      'Diverse Expertise',
      'International Standards',
      'Cross-Industry Experience',
    ],
    iconSrc: Grid,
  },
];

export function WhyChooseUs() {
  return (
    <div className="grid gap-10 px-[2rem] py-[5rem] lg:p-[10rem] place-items-center pt-0">
      <Typography align="center" variant="headingXL" color="dark">
        Why Choose Us
      </Typography>
      <Typography
        className="!leading-8"
        align="center"
        color="gray"
        variant="bodyMD">
        Our streamlined process ensures that your project is handled with
        precision, creativity,
        <br /> and efficiency from start to finish.
      </Typography>
      <div className="mt-4 grid gap-14 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <WhyChooseUsCard key={feature.title} {...feature} />
        ))}
      </div>
    </div>
  );
}
