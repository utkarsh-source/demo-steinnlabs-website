import { useForm } from 'react-hook-form';

import {
  ArrowRight,
  Button,
  ControlledInput,
  ControlledTextarea,
  Typography,
} from '@/app/components';

export function ContactUs() {
  const formMethods = useForm();

  return (
    <div className="px-[4rem] py-[5rem] lg:p-[10rem] pt-0">
      <div className="grid gap-6 p-10 lg:p-20 rounded-3xl bg-steinnlabs-orange-100">
        <Typography align="center" color="dark" variant="headingXL">
          Have a project in mind?
        </Typography>
        <Typography align="center" color="gray" variant="bodyMD">
          The right move at the right time saves your investment. live the dream
          of expanding your business.
        </Typography>
        <div className="grid gap-8 p-0 lg:p-20 pt-8 pb-6">
          <div className="flex items-start gap-8">
            <ControlledInput
              classNames={{
                label: 'hidden',
              }}
              isRequired
              label="Name"
              placeholder="Enter your name"
              control={formMethods.control}
              name="name"
            />
            <ControlledInput
              classNames={{
                label: 'hidden',
              }}
              isRequired
              label="Company"
              placeholder="Enter your company (optional)"
              control={formMethods.control}
              name="company"
            />
          </div>
          <div className="flex items-start gap-8">
            <ControlledInput
              classNames={{
                label: 'hidden',
              }}
              isRequired
              label="Email"
              placeholder="Enter your email address"
              control={formMethods.control}
              name="email"
            />
            <ControlledInput
              classNames={{
                label: 'hidden',
              }}
              type="number"
              isRequired
              label="Phone"
              placeholder="Enter your phone"
              control={formMethods.control}
              name="phone"
            />
          </div>
          <ControlledTextarea
            isRequired
            classNames={{
              label: 'hidden',
            }}
            minRows={6}
            label="Describe yourself"
            placeholder="Tell us about yourself"
            control={formMethods.control}
            name="description"
          />
        </div>
        <div className="px-0 lg:px-20 flex items-center justify-between">
          <Button color="primary" variant="solid" endContent={<ArrowRight />}>
            Send message
          </Button>
          <Typography
            className="underline cursor-pointer underline-offset-1"
            variant="bodySM"
            color="gray">
            By clicking contact us button, you agree our terms and policy,
          </Typography>
        </div>
      </div>
    </div>
  );
}
