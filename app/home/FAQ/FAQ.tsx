import React from 'react';

import {
  Accordion,
  AccordionItem,
  ChevronArrow,
  Typography,
} from '@/app/components';

const faqData = [
  {
    question: 'Where is my order? Quisque molestie',
    answer:
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature Id pro doctus mediocrem erroribus, diam nostro sed cu. Ea pri graeco tritani partiendo. Omittantur No tale choro fastidii his, pri cu epicuri perpetua. Enim dictas omittantur et duo, vocent lucilius quaestio mea ex. Ex illum officiis id.',
    isExpanded: true,
  },
  {
    question: 'How can I return an item purchased online?',
    answer:
      'To return an item purchased online, please follow these steps: 1) Log into your account, 2) Go to your order history, 3) Select the item you wish to return, 4) Print the prepaid return label, 5) Pack the item securely, 6) Attach the label and drop off at any post office. Refunds are typically processed within 5-7 business days after we receive the return.',
    isExpanded: false,
  },
  {
    question: 'Can I cancel or change my order?',
    answer:
      "Yes, you can cancel or change your order within 1 hour of placing it. After that, the order enters our fulfillment process and can no longer be modified. To make changes, log into your account, go to your recent orders, and select the 'Modify Order' option if it's available. If not, please contact our customer service team for assistance.",
    isExpanded: false,
  },
  {
    question: 'I have promotional or discount code?',
    answer:
      'Great! To use a promotional or discount code, simply enter it in the designated field during checkout, before you complete your payment. The discount will be applied automatically to eligible items. Please note that some promotions cannot be combined with other offers, and certain products may be excluded from promotional discounts.',
    isExpanded: false,
  },
  {
    question: 'What are the delivery types you use?',
    answer:
      'We offer several delivery options to suit your needs: 1) Standard Shipping (3-5 business days), 2) Express Shipping (1-2 business days), 3) Next Day Delivery (order by 2pm for delivery next business day), 4) In-Store Pickup (free, available at select locations). International shipping is also available for most countries. Delivery times and costs vary depending on the destination.',
    isExpanded: false,
  },
  {
    question: 'How can I pay for my purchases?',
    answer:
      'We accept various payment methods for your convenience: 1) Credit/Debit Cards (Visa, MasterCard, American Express, Discover), 2) PayPal, 3) Apple Pay (on compatible devices), 4) Google Pay, 5) Store Gift Cards, 6) Financing options (on qualifying purchases). All transactions are securely processed and your payment information is never stored on our servers.',
    isExpanded: false,
  },
  {
    question: 'Can I cancel my order?',
    answer:
      "Order cancellation is possible within a limited timeframe. If your order hasn't entered the shipping process, you can usually cancel it by logging into your account and selecting 'Cancel Order' next to the relevant item. If this option isn't available, it means your order is already being processed. In this case, you may need to wait for the item to arrive and then initiate a return.",
    isExpanded: false,
  },
];

export function FAQ() {
  return (
    <div className="grid gap-16 px-[4rem] py-[5rem] lg:p-[10rem] mx-auto w-full lg:w-[80vw] pt-0">
      <Typography align="center" color="dark" variant="headingXL">
        Frequently asked questions
      </Typography>
      <Accordion variant="splitted" className="">
        {faqData.map((faq) => (
          <AccordionItem
            indicator={<ChevronArrow fillColor="#121212" />}
            className="px-0 !rounded-md bg-steinnlabs-orange-100 mb-6 shadow-none"
            key={faq.question}
            classNames={{
              title: 'font-semibold',
              heading:
                'px-6 !rounded-md [&[data-open="true"]]:!bg-steinnlabs-orange [&[data-open="true"]_span]:!text-steinnlabs-white',
              content: 'px-6 py-8 pb-2 bg-steinnlabs-white',
              indicator: '[&[data-open="true"]_path]:!fill-steinnlabs-white',
            }}
            title={faq.question}>
            {faq.answer}
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
