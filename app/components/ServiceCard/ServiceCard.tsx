import React from 'react';

import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/react';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';

import { Button } from '../Button/Button';
import { Chip } from '../Chip/Chip';
import { ArrowRight } from '../Icons';
import { Typography } from '../Typography/Typography';

type ServiceCardProps = {
  iconSrc: string | StaticImport;
  heading: React.ReactNode;
  offerings: string[];
  onClick: () => void;
};

export function ServiceCard({
  heading,
  iconSrc,
  offerings,
  onClick,
}: ServiceCardProps) {
  return (
    <Card className="flex flex-col shadow-none rounded-2xl p-6">
      <CardHeader className="grid gap-4">
        <figure className="grid place-items-center w-14 h-14 rounded-full bg-steinnlabs-orange-100">
          <Image width={27} height={27} src={iconSrc} alt="Icon" />
        </figure>
        <Typography color="dark" variant="headingMD">
          {heading}
        </Typography>
      </CardHeader>
      <CardBody className="flex flex-col gap-4">
        {offerings.map((offering) => (
          <Chip
            startContent={
              <span className="inline-block w-2 mr-2 h-2 rounded-full bg-steinnlabs-orange" />
            }
            variant="solid"
            radius="full"
            classNames={{
              base: 'h-8 px-4',
            }}
            color="primary"
            key={offering}>
            <Typography
              className="!font-normal"
              color="dark"
              variant="bodyOverline">
              {offering}
            </Typography>
          </Chip>
        ))}
        <CardFooter className="mt-auto">
          <Button
            endContent={<ArrowRight />}
            onClick={onClick}
            className="w-max mt-4 h-10"
            text="sm"
            size="md"
            variant="solid"
            color="primary">
            Explore service
          </Button>
        </CardFooter>
      </CardBody>
    </Card>
  );
}
