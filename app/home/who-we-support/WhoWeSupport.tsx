import React from 'react';

import Image from 'next/image';

import { ArrowRight, Button, Typography } from '@/app/components';

import SupportBg from '../../../public/assets/images/supportBg.png';
import B2B from '../../../public/assets/svgs/b2b.svg';
import B2C from '../../../public/assets/svgs/b2c.svg';
import Market from '../../../public/assets/svgs/market.svg';
import Saas from '../../../public/assets/svgs/saas.svg';

const businessModels = [
  {
    name: 'B2C (Business to Consumer)',
    description:
      'Deliver exceptional experiences and drive engagement with tailored consumer-focused solutions.',
    imgSrc: B2C,
  },
  {
    name: 'B2B (Business to Business)',
    description:
      'Optimize operations and create powerful connections with custom solutions for business clients.',
    imgSrc: B2B,
  },
  {
    name: 'Marketplaces',
    description:
      "Enhance your platform's functionality and user experience for seamless transactions and interactions.",
    imgSrc: Market,
  },
  {
    name: 'SaaS (Software as a Service)',
    description:
      'Build scalable, reliable SaaS products that meet the demands of modern businesses and users.',
    imgSrc: Saas,
  },
];

export function WhoWeSupport() {
  return (
    <div className="flex justify-around px-[4rem] py-[5rem] lg:p-[10rem] pt-0">
      <div className="flex flex-col gap-4 flex-1 lg:flex-[0.6]">
        <Typography variant="headingXL" color="dark">
          Who we support
        </Typography>
        <Typography className="!leading-8" color="gray" variant="bodyMD">
          We tailor our services to meet the unique needs of different business
          models, helping you succeed no matter your industry or offering.
        </Typography>
        <div className="mt-4 flex flex-col gap-6">
          {businessModels.map((model) => (
            <div key={model.name} className="flex gap-4">
              <figure className="shrink-0 w-14 h-14 bg-steinnlabs-orange-100 rounded-full grid place-items-center">
                <Image
                  width={28}
                  height={28}
                  src={model.imgSrc}
                  alt={model.name}
                />
              </figure>
              <div className="flex flex-col gap-4">
                <Typography color="dark" variant="headingSM">
                  {model.name}
                </Typography>
                <Typography color="gray" variant="bodySM">
                  {model.description}
                </Typography>
              </div>
            </div>
          ))}
        </div>
        <Button
          className="w-max mt-4"
          color="primary"
          text="sm"
          variant="solid"
          endContent={<ArrowRight />}>
          Explore service
        </Button>
      </div>
      <Image
        className="hidden lg:block"
        height={600}
        width={400}
        src={SupportBg}
        alt="Support"
      />
    </div>
  );
}
