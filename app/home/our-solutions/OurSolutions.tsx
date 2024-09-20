import Image from 'next/image';

import { Typography } from '@/app/components';
import Architecture from '@/public/assets/svgs/architecture.svg';
import Clock from '@/public/assets/svgs/clock.svg';
import Cloud from '@/public/assets/svgs/cloud.svg';
import Design from '@/public/assets/svgs/design.svg';
import File from '@/public/assets/svgs/file.svg';
import Interface from '@/public/assets/svgs/interface.svg';
import Performance from '@/public/assets/svgs/performance.svg';
import Security from '@/public/assets/svgs/security.svg';

const features = [
  {
    icon: Architecture,
    title: 'Scalable Architecture',
    description: 'Easily handle growth with a flexible and robust system.',
  },
  {
    icon: Performance,
    title: 'High Performance',
    description:
      'Ensure fast load times and smooth operation under any conditions.',
  },
  {
    icon: Interface,
    title: 'User-Friendly Interface',
    description:
      'Deliver intuitive and seamless user experiences across all devices.',
  },
  {
    icon: Security,
    title: 'Security & Compliance',
    description:
      'Protect your data with advanced security measures and industry standards.',
  },
  {
    icon: Clock,
    title: 'Real-Time Analytics',
    description:
      'Track and analyze user behavior with integrated data insights.',
  },
  {
    icon: Cloud,
    title: 'Automated Updates',
    description:
      'Keep your application current with automated maintenance and updates.',
  },
  {
    icon: File,
    title: 'Custom Integrations',
    description: 'Seamlessly connect with third-party services and tools.',
  },
  {
    icon: Design,
    title: 'Responsive Design',
    description:
      'Adapt effortlessly to different screen sizes and devices for a consistent experience.',
  },
];

export function OurSolutions() {
  return (
    <div className="grid md:place-items-center gap-6 px-[4rem] py-[5rem] lg:p-[10rem] lg:px-[15rem] pt-[5rem] pb-[5rem]">
      <Typography align="center" variant="headingXL" color="dark">
        Unlock the Power of <br />
        Our Solutions
      </Typography>
      <Typography className="!leading-8" color="gray" variant="bodyMD">
        Our services come packed with features designed to drive growth,
        efficiency, and success.
      </Typography>
      <div className="mt-8 md:mt-16 md:mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="w-[90%] gap-8 border-b-2 pb-6 border-b-steinnlabs-orange-100 flex items-start">
            <figure className="w-16 h-16 shrink-0 rounded-lg bg-steinnlabs-orange-100 grid place-items-center">
              <Image
                width={30}
                height={30}
                src={feature.icon}
                alt={feature.title}
              />
            </figure>
            <div className="flex flex-col gap-2">
              <Typography variant="headingSM" color="dark">
                {feature.title}
              </Typography>
              <Typography variant="bodySM" color="gray">
                {feature.description}
              </Typography>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
