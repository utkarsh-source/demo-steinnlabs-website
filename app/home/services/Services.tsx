import React from 'react';

import { Divider } from '@nextui-org/react';

import { Button, Typography } from '@/app/components';
import { ServiceCard } from '@/app/components/ServiceCard/ServiceCard';

import AIML from '../../../public/assets/svgs/ai-ml.svg';
import Android from '../../../public/assets/svgs/android.svg';
import Apple from '../../../public/assets/svgs/apple.svg';
import Earth from '../../../public/assets/svgs/earth.svg';
import ReactLine from '../../../public/assets/svgs/react.svg';
import Recycle from '../../../public/assets/svgs/recycle.svg';

const serviceOfferings = [
  {
    heading: 'Product Engineering',
    offerings: [
      'Custom Software Development',
      'ERP Development',
      'API Integration & Development',
    ],
    iconSrc: Apple,
  },
  {
    heading: 'Advance Web Solutions',
    offerings: [
      'Responsive Web Design',
      'Webflow Development',
      'Web Application Development',
    ],
    iconSrc: Android,
  },
  {
    heading: 'Advance Mobile Solutions',
    offerings: [
      'iOS App Development',
      'Android App Development',
      'Flutter Development',
    ],
    iconSrc: Recycle,
  },
  {
    heading: 'End to end Design Services',
    offerings: ['Wireframe Development', 'UI/UX Design', 'UX Audit'],
    iconSrc: ReactLine,
  },
  {
    heading: 'AI/ML & AR/VR Solutions',
    offerings: [
      'Artificial Intelligence',
      'Machine Learning',
      'Virtual Reality',
    ],
    iconSrc: AIML,
  },
  {
    heading: 'Best Web3 Solutions',
    offerings: [
      'Blockchain Development',
      'Smart Contract Development',
      'NFT and Tokenization Platforms',
    ],
    iconSrc: Earth,
  },
];

export function Services() {
  return (
    <div className="p-[3rem] py-[5rem] lg:p-[10rem]">
      <div className="bg-steinnlabs-orange-100 rounded-3xl p-12">
        <div className="flex items-start justify-between">
          <div className="grid gap-5">
            <Typography color="dark" variant="headingXL">
              Our Service Offerings
            </Typography>
            <Typography color="gray" variant="bodyMD">
              Innovative solutions to meet all your business needs.
            </Typography>
          </div>
          <Button
            variant="solid"
            color="primary"
            text="sm"
            className="rounded-sm font-medium">
            Know more
          </Button>
        </div>
        <Divider className="bg-steinnlabs-grey-200 my-14" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-14">
          {serviceOfferings.map((service) => (
            <ServiceCard
              key={service.heading}
              onClick={() => console.log('Clicked')}
              {...service}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
