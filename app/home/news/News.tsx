import { ArrowRight, Button, Typography } from '@/app/components';
import { CaseStudyCard } from '@/app/components/CaseStudyCard/CaseStudyCard';

import CaseStudy1 from '../../../public/assets/images/case-study-1.png';
import CaseStudy2 from '../../../public/assets/images/case-study-2.png';
import CaseStudy3 from '../../../public/assets/images/case-study-3.png';

const latestNews = [
  {
    category: 'Webflow',
    title: 'Revamping E-Commerce Experience',
    description:
      'How we transformed an e-commerce platform to enhance user interaction and drive significant revenue growth.',
    imageSrc: CaseStudy1,
  },
  {
    category: 'Design',
    title: 'Streamlining Healthcare Interfaces',
    description:
      'A look into how we redesigned healthcare applications to simplify processes and elevate user satisfaction.',
    imageSrc: CaseStudy2,
  },
  {
    category: 'Development',
    title: 'Mobile Banking, Enhancing Usability and Security',
    description:
      'Discover how we redesigned a mobile banking app to offer a seamless user experience while ensuring top-notch security.',
    imageSrc: CaseStudy3,
  },
];

export function News() {
  return (
    <div className="grid gap-14 px-[4rem] py-[5rem] lg:p-[10rem] pt-0">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-4">
          <Typography color="dark" variant="headingXL">
            Latest News
          </Typography>
          <Typography color="gray" variant="bodyMD">
            From Our blog and Event fan page
          </Typography>
        </div>
        <Button
          endContent={<ArrowRight />}
          variant="solid"
          color="primary"
          text="sm"
          className="font-medium">
          View more
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
        {latestNews.map((news) => (
          <CaseStudyCard key={news.title} {...news} />
        ))}
      </div>
    </div>
  );
}
