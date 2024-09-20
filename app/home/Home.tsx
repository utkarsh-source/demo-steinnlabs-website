import React from 'react';
import { Client } from './clients/Client';
import { Divider } from '@nextui-org/react';
import { Services } from './services/Services';
import { WhyChooseUs } from './why-choose-us/WhyChooseUs';
import { CaseStudies } from './case-studies/CaseStudies';
import { WhoWeSupport } from './who-we-support/WhoWeSupport';
import { Resources } from './resources/Resources';
import { OurSolutions } from './our-solutions/OurSolutions';
import { OurCustomers } from './our-customers/OurCustomers';
import { InnovativeTeam } from './innovative-team/InnovativeTeam';
import { News } from './news/News';
import { ContactUs } from './contact-us/ContactUs';
import { FAQ } from './FAQ/FAQ';
import { Footer } from './footer/Footer';
import { Hero } from './hero/Hero';

export function Home() {
  return (
    <>
      <Hero />
      <Client />
      <Divider className="bg-steinnlabs-orange w-[80%] mx-auto" />
      <Services />
      <WhyChooseUs />
      <CaseStudies />
      <WhoWeSupport />
      <Resources />
      <OurSolutions />
      <Divider className="bg-steinnlabs-orange w-[80%] mx-auto" />
      <OurCustomers />
      <InnovativeTeam />
      <News />
      <ContactUs />
      <FAQ />
      <Footer />
    </>
  );
}
