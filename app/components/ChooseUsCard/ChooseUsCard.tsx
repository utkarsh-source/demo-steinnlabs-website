import { Card, CardBody, CardHeader } from '@nextui-org/react';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';

import { Typography } from '../Typography/Typography';

type WhyChooseUsCardProps = {
  title: string;
  iconSrc: string | StaticImport;
  features: string[];
};

export function WhyChooseUsCard({
  title,
  iconSrc,
  features,
}: WhyChooseUsCardProps) {
  return (
    <Card className="bg-steinnlabs-orange-100 shadow-none p-6">
      <CardHeader className="grid gap-4 pb-2">
        <div className="grid place-items-center rounded-full h-12 w-12 bg-white">
          <Image src={iconSrc} alt="Icon" className="h-6 w-6" />
        </div>
        <Typography variant="headingMD" color="dark">
          {title}
        </Typography>
      </CardHeader>
      <CardBody>
        <ul className="flex flex-col gap-3 pl-2">
          {features.map((feature) => (
            <li className="flex gap-2 items-center" key={feature}>
              <div className="bg-steinnlabs-grey w-1 h-1 rounded-full" />
              <Typography color="gray" variant="bodyOverline">
                {feature}
              </Typography>
            </li>
          ))}
        </ul>
      </CardBody>
    </Card>
  );
}
