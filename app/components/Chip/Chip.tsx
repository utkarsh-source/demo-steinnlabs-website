import { Chip as NUIChip, extendVariants } from '@nextui-org/react';

export const Chip = extendVariants(NUIChip, {
  variants: {
    variant: {
      light: {
        base: '!bg-transparent',
      },
      bordered: {
        base: 'border border-steinnlabs-gray-300',
      },
    },
    color: {
      primary: {
        base: '!bg-steinnlabs-orange-100',
        content: 'text-steinnlabs-grey-400',
      },
      white: {
        base: '!bg-steinnlabs-white',
        content: 'text-steinnlabs-grey',
      },
    },
  },
});
