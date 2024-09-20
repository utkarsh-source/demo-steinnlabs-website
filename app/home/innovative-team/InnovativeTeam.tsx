import Image from 'next/image';

import { ArrowRight, Button, Typography } from '@/app/components';
import Base1 from '@/public/assets/images/base-1.png';
import Base2 from '@/public/assets/images/base-2.png';
import Base from '@/public/assets/images/base.png';

export function InnovativeTeam() {
  return (
    <div className="grid place-items-center px-[4rem] py-[5rem] lg:p-[10rem] pt-0">
      <div className="flex gap-16 p-20 rounded-2xl bg-steinnlabs-orange-100">
        <div className="flex gap-4">
          <div className="flex flex-col gap-4">
            <Image height={200} src={Base1} alt="Team" />
            <Image height={200} src={Base2} alt="Team" />
          </div>
          <Image width={300} src={Base} alt="Team" />
        </div>
        <div className="flex flex-col gap-4">
          <Typography variant="headingXL" color="dark">
            Be a Part of Our <br />
            Innovative Team
          </Typography>
          <Typography variant="bodyLG" color="gray">
            We’re looking for passionate, driven individuals who are ready to
            shape the future of technology with us.
          </Typography>
          <Button
            className="mt-auto w-max"
            variant="solid"
            color="primary"
            text="sm"
            endContent={<ArrowRight />}>
            Explore career
          </Button>
        </div>
      </div>
    </div>
  );
}
