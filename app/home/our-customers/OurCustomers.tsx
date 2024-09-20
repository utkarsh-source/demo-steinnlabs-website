import React, { LegacyRef, useRef } from 'react';

import Slider from '@ant-design/react-slick';
import Image from 'next/image';

import { Button, ChevronArrow, Typography } from '@/app/components';
import Customer from '@/public/assets/images/customer.png';

const customersData = [
  {
    name: 'Wade Warren',
    company: 'Louis Vuitton',
    description:
      'Even factoring differences in body weight between children and adults into account.',
    imageUrl: '/placeholder.svg?height=100&width=100',
  },
  {
    name: 'Brooklyn Simmons',
    company: 'Nintendo',
    description:
      'So yes, the alcohol (ethanol) in hand sanitizers can be absorbed through the skin, but no, it would not cause intoxication.',
    imageUrl: '/placeholder.svg?height=100&width=100',
  },
  {
    name: 'Jenny Wilson',
    company: 'Starbucks',
    description:
      'Their blood alcohol levels rose to 0.007 to 0.02 o/oo (parts per thousand), or 0.7 to 2.0 mg/L.',
    imageUrl: '/placeholder.svg?height=100&width=100',
  },
  {
    name: 'Albert Flores',
    company: 'Bank of America',
    description:
      'So yes, the alcohol (ethanol) in hand sanitizers can be absorbed through the skin, but no, it would not cause intoxication.',
    imageUrl: '/placeholder.svg?height=100&width=100',
  },
];

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1500,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 780,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

export function OurCustomers() {
  const sliderRef = useRef<Slider>();

  return (
    <div className="p-[10rem] pt-[8rem]">
      <div className="flex items-end justify-between gap-4">
        <div className="flex flex-col gap-6 justify-between">
          <Typography color="dark" variant="headingXL">
            Our Happy Customers
          </Typography>
          <Typography variant="bodyMD" color="gray">
            Know about our clients, we are a wold wide corporate brand
          </Typography>
        </div>
        <div className="flex items-center gap-2">
          <Button
            endContent={<ChevronArrow />}
            variant="solid"
            color="secondary"
            onClick={() => sliderRef.current?.slickPrev()}
            text="sm"
            className="px-0 font-medium min-w-[3rem]"
          />
          <Button
            endContent={
              <span className="rotate-180">
                <ChevronArrow fillColor="white" />
              </span>
            }
            onClick={() => sliderRef.current?.slickNext()}
            variant="solid"
            color="primary"
            text="sm"
            className="px-0 font-medium min-w-[3rem]"
          />
        </div>
      </div>
      <div className="relative w-full h-max mt-16">
        <Slider {...settings} ref={sliderRef as LegacyRef<Slider>}>
          {customersData.map((customer, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <div key={customer.name + index} className="mr-10">
              <div className="flex h-[19rem] rounded-sm w-[21rem] shrink-0 grow flex-col p-8 border-[10px] border-steinnlabs-orange-100">
                <Image
                  src={Customer}
                  alt={customer.name}
                  width={55}
                  height={56}
                  className="object-contain rounded-full"
                />
                <Typography
                  className="mt-4 mb-1 font-semibold"
                  color="dark"
                  variant="bodyLG">
                  {customer.name}
                </Typography>
                <Typography className="mb-6" color="gray" variant="bodyXS">
                  {customer.company}
                </Typography>
                <Typography
                  className="!leading-[22px]"
                  color="gray"
                  variant="bodyOverline">
                  {customer.description}
                </Typography>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
