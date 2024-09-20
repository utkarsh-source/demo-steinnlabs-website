import Image from 'next/image';

import { Typography } from '@/app/components';

import Client1 from '../../../public/assets/svgs/client-1.svg';
import Client2 from '../../../public/assets/svgs/client-2.svg';
import Client3 from '../../../public/assets/svgs/client-3.svg';
import Client4 from '../../../public/assets/svgs/client-4.svg';
import Client5 from '../../../public/assets/svgs/client-5.svg';
import Client6 from '../../../public/assets/svgs/client-6.svg';
import Client7 from '../../../public/assets/svgs/client-7.svg';
import Client8 from '../../../public/assets/svgs/client-8.svg';
import Client9 from '../../../public/assets/svgs/client-9.svg';

export function Client() {
  return (
    <div className="px-[2rem] py-[10rem] lg:p-[10rem] pb-[5rem] grid place-items-center gap-20">
      <Typography
        align="center"
        className="font-medium"
        variant="bodyXL"
        color="dirty-gray">
        Trusted by the world’s leading <br /> companies
      </Typography>
      <div className="flex gap-8 items-center flex-wrap justify-center">
        <Image width={200} height={80} src={Client1} alt="Client" />
        <Image width={200} height={80} src={Client2} alt="Client" />
        <Image width={200} height={80} src={Client3} alt="Client" />
        <Image width={200} height={80} src={Client4} alt="Client" />
        <Image width={200} height={80} src={Client5} alt="Client" />
        <Image width={200} height={80} src={Client6} alt="Client" />
        <Image width={200} height={80} src={Client7} alt="Client" />
        <Image width={200} height={80} src={Client8} alt="Client" />
        <Image width={200} height={80} src={Client9} alt="Client" />
      </div>
    </div>
  );
}
