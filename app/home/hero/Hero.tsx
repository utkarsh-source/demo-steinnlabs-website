import React from 'react';

import Image from 'next/image';

import { ArrowRight, Button, Typography } from '@/app/components';
import BannerGirl from '@/public/assets/images/bannerGirl.png';
import Clutch2 from '@/public/assets/images/clutch-2.png';
import Clutch from '@/public/assets/images/clutch.png';
import Ribbon from '@/public/assets/svgs/ribbon.svg';

export function Hero() {
  return (
    <div className="flex items-center gap-4 relative px-[10rem] py-[6rem] w-full bg-steinnlabs-orange-100 h-[40rem]">
      <div className="grid gap-8 w-full md:max-w-full max-w-[52rem]">
        <Typography color="dark" variant="headingXL">
          Delivering custom{' '}
          <span className="text-steinnlabs-orange">solutions</span> that elevate
          your <span className="text-steinnlabs-orange">business</span>
        </Typography>
        <Typography variant="bodyXL" color="dark">
          Tailored technology and design services designed to drive growth and
          innovation.
        </Typography>
        <Button
          text="sm"
          className="w-max shadow-none"
          endContent={<ArrowRight />}
          variant="shadow"
          color="primary">
          Lets schedule a call
        </Button>
        <div className="absolute bottom-[-40px] left-[-40px] grid grid-cols-2 gap-1">
          <Image src={Ribbon} alt="Ribbon" width={65} height={65} />
          <Image src={Ribbon} alt="Ribbon" width={65} height={65} />
          <Image src={Ribbon} alt="Ribbon" width={65} height={65} />
          <Image src={Ribbon} alt="Ribbon" width={65} height={65} />
        </div>
        <div className="absolute right-[-10px] top-[-40px] grid grid-cols-2 gap-1">
          <Image src={Ribbon} alt="Ribbon" width={80} height={80} />
          <Image src={Ribbon} alt="Ribbon" width={80} height={80} />
          <Image src={Ribbon} alt="Ribbon" width={80} height={80} />
          <Image src={Ribbon} alt="Ribbon" width={80} height={80} />
          <Image src={Ribbon} alt="Ribbon" width={80} height={80} />
          <Image src={Ribbon} alt="Ribbon" width={80} height={80} />
        </div>
        <div className="shadow-sm absolute bottom-0 translate-y-1/2 flex items-center gap-4 bg-steinnlabs-white h-max p-4">
          <Image width={70} height={70} src={Clutch} alt="Banner" />
          <Image width={70} height={70} src={Clutch2} alt="Banner" />
          <div className="grid gap-1">
            <Typography className="ml-10" color="orange" variant="bodyXL">
              glassdoor
            </Typography>
            <div className="flex items-center gap-1">
              <Typography className="mr-2" color="orange" variant="bodyMD">
                4.9
              </Typography>
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  <div
                    // eslint-disable-next-line react/no-array-index-key
                    key={index}
                    className="grid place-items-center w-[1.5rem] h-[1.5rem] bg-steinnlabs-orange">
                    <div
                      style={{
                        clipPath:
                          'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
                      }}
                      className="bg-steinnlabs-white w-[1rem] h-[1rem]"
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden lg:block relative top-14">
        <Image src={BannerGirl} alt="Banner" />
      </div>
    </div>
  );
}
