import React from 'react';

import Image from 'next/image';

import { ArrowRight, Button, Chip, Typography } from '@/app/components';
import { Clock } from '@/app/components/Icons/Clock';
import ResourceBg from '@/public/assets/images/resource.png';
import Lightning from '@/public/assets/svgs/lighting.svg';
import Wave from '@/public/assets/svgs/wave.svg';

export function Resources() {
  return (
    <div className="pt-0 px-[4rem] py-[5rem] lg:p-[10rem] grid place-items-center">
      <div className="w-full lg:w-[65vw] relative rounded-2xl bg-steinnlabs-orange py-14 md:px-16 lg:px-28 flex">
        <div className="flex flex-col gap-4 max-w-[22rem]">
          <Chip
            startContent={<Clock />}
            color="white"
            className="!bg-opacity-20">
            <Typography color="white" variant="bodySM">
              48 Hrs free access
            </Typography>
          </Chip>
          <Typography color="white" variant="headingLG">
            Free Access to Our Exclusive Resources
          </Typography>
          <Typography color="white" variant="bodySM">
            Gain unlimited access to valuable industry knowledge curated by
            experts.
          </Typography>
          <Button
            className="w-max mt-4"
            variant="solid"
            text="md"
            endContent={<ArrowRight fillColor="#121212" />}
            color="white">
            Lets schedule a call
          </Button>
        </div>
        <Image
          className="z-10 absolute md:right-[300px] lg:right-[380px] top-1/2"
          src={Lightning}
          alt="Icon"
        />
        <Image src={Wave} alt="Wave" className="absolute right-0 bottom-0" />
        <Image
          className="absolute md:h-[300px] md:right-0 lg:right-10 md:top-20 lg:top-8 object-contain"
          src={ResourceBg}
          alt="Resources"
        />
      </div>
    </div>
  );
}
