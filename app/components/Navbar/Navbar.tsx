import {
  Navbar as NUINavbar,
  NavbarBrand as NUINavbarBrand,
  NavbarContent as NUINavbarContent,
  NavbarItem as NUINavbarItem,
} from '@nextui-org/react';
import Image from 'next/image';
import Link from 'next/link';

import { router } from '@/app/utils/routes';

import { Button } from '../Button/Button';
import { ArrowRight } from '../Icons';

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

export function Navbar() {
  return (
    <NUINavbar
      classNames={{
        wrapper: 'w-full mx-20 max-w-full',
      }}
      className="!bg-steinnlabs-white flex justify-between h-[6rem]">
      <NUINavbarBrand>
        <Image
          height={36}
          width={246}
          src="/assets/svgs/steinnlabs-logo-black.svg"
          alt="Steinn Labs"
        />
      </NUINavbarBrand>
      <NUINavbarContent className="flex items-center gap-10" justify="center">
        {links.map((link) => (
          <NUINavbarItem key={link.title}>
            <Link
              className="text-steinnlabs-grey font-medium text-lg"
              href={link.link}>
              {link.title}
            </Link>
          </NUINavbarItem>
        ))}
      </NUINavbarContent>
      <NUINavbarContent justify="end">
        <NUINavbarItem>
          <Button
            text="sm"
            endContent={<ArrowRight />}
            color="primary"
            variant="solid">
            Get Started
          </Button>
        </NUINavbarItem>
      </NUINavbarContent>
    </NUINavbar>
  );
}
