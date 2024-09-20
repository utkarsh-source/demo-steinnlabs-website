import React from 'react';

import { Card, CardBody } from '@nextui-org/react';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';

import { Typography } from '../Typography/Typography';

type CaseStudyCardProps = {
  category: string;
  title: string;
  description: string;
  imageSrc: string | StaticImport;
};

export function CaseStudyCard({
  category,
  title,
  description,
  imageSrc,
}: CaseStudyCardProps) {
  return (
    <Card className="flex flex-col shadow-none rounded-2xl p-0">
      <CardBody className="flex flex-col gap-4 p-0">
        <Typography
          className="flex items-center"
          color="orange"
          variant="bodySM">
          <span className="inline-block mr-2 w-2 h-2 rounded-full bg-steinnlabs-orange" />
          {category}
        </Typography>
        <Typography color="dark" variant="headingMD">
          {title}
        </Typography>
        <Typography color="gray" variant="bodySM">
          {description}
        </Typography>
        <Image
          className="mt-auto"
          width={388}
          height={248}
          src={imageSrc}
          alt={category}
        />
      </CardBody>
    </Card>
  );
}
