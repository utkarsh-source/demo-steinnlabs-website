import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { Button, Typography } from '@/app/components';
import { router } from '@/app/utils/routes';
import Facebook from '@/public/assets/svgs/facebook.svg';
import Instagram from '@/public/assets/svgs/instagram.svg';
import Linkedin from '@/public/assets/svgs/linkedin.svg';
import SteinnLabsLogo from '@/public/assets/svgs/steinnlabs-logo-black.svg';
import Twitter from '@/public/assets/svgs/twitter.svg';

const links = [
  {
    title: 'Services',
    link: router.getServicesRoute(),
  },
  {
    title: 'Case studies',
    link: router.getCaseStudiesRoute(),
  },
  {
    title: 'Blogs',
    link: router.getBlogsRoute(),
  },
  {
    title: 'Careers',
    link: router.getCareersRoute(),
  },
  {
    title: 'About',
    link: router.getAboutRoute(),
  },
  {
    title: 'Contact Us',
    link: router.getContactUsRoute(),
  },
];

export function Footer() {
  return (
    <div className="grid gap-10 px-[4rem] py-[5rem] lg:pt-[5rem] lg:p-[10rem] lg:pb-5 pb-10 pt-0">
      <div className="flex items-center justify-between">
        <Image src={SteinnLabsLogo} alt="Steinn Labs" />
        <Button
          text="sm"
          className="rounded-md"
          variant="solid"
          color="primary">
          Schedule a consultation today
        </Button>
      </div>
      <div className="flex items-center justify-around py-8 border-y border-y-steinnlabs-grey-200">
        {links.map((link) => (
          <Link key={link.title} href={link.link}>
            {link.title}
          </Link>
        ))}
      </div>
      <div className="flex justify-between items-center gap-8">
        <div className="flex items-center gap-10">
          <Link href="#">
            <Typography color="gray" variant="bodyOverline">
              @SteinnLabs 2024
            </Typography>
          </Link>
          <Link href="#">
            <Typography color="gray" variant="bodyOverline">
              Privacy policy
            </Typography>
          </Link>
          <Link href="#">
            <Typography color="gray" variant="bodyOverline">
              Cookies
            </Typography>
          </Link>
          <Link href="#">
            <Typography
              className="font-semibold"
              color="gray"
              variant="bodyOverline">
              Terms of service
            </Typography>
          </Link>
        </div>
        <div className="flex items-center gap-6">
          <Link href="#">
            <Image src={Facebook} alt="Facebook" />
          </Link>
          <Link href="#">
            <Image src={Twitter} alt="Twitter" />
          </Link>
          <Link href="#">
            <Image src={Instagram} alt="Instagram" />
          </Link>
          <Link href="#">
            <Image src={Linkedin} alt="Linkedin" />
          </Link>
        </div>
      </div>
    </div>
  );
}
