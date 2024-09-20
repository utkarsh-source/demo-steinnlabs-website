import {
  Button as NUIButton,
  ButtonProps,
  extendVariants,
} from '@nextui-org/react';
import classNames from 'classnames';

export const Button = extendVariants(
  ({ className = '', children, ...rest }: ButtonProps) => (
    <NUIButton className={classNames('px-8', className)} {...rest}>
      {children}
    </NUIButton>
  ),
  {
    variants: {
      size: {
        sm: 'h-[2rem]',
        md: 'h-[3rem]',
        lg: 'h-[18.6rem]',
      },
      text: {
        sm: 'text-md leading-5',
        md: 'text-lg leading-6',
        lg: 'text-[18px] leading-7',
      },
      variant: {
        text: 'bg-transparent border-none',
        bordered: 'border border-steinnlabs-grey-300',
      },
      color: {
        primary: '!bg-steinnlabs-orange !text-steinnlabs-white',
        secondary:
          'bg-steinnlabs-orange-100 border border-steinnlabs-gray-300 text-steinnlabs-gray',
        white: 'bg-steinnlabs-white text-steinnlabs-grey',
      },
      disabled: {
        true: '!bg-opacity-50 cursor-not-allowed',
      },
    },
    defaultVariants: {
      color: 'primary',
      size: 'md',
      text: 'md',
      radius: 'full',
      variant: 'flat',
    },
  }
);
