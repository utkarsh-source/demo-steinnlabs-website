import {
  Input as NUIInput,
  InputProps,
  extendVariants,
} from '@nextui-org/react';
import classnames from 'classnames';

import { deepConcatStringRecords } from '@/app/utils';

export const Input = extendVariants(
  ({
    classNames = {},
    size = 'md',
    variant = 'bordered',
    labelPlacement = 'outside',
    ...rest
  }: InputProps) => (
    <NUIInput
      size={size}
      variant={variant}
      labelPlacement={labelPlacement}
      classNames={deepConcatStringRecords([
        {
          errorMessage:
            'text-base leading-4 w-max tracking-[0.3px] !text-steinnlabs-orange text-opacity-100',
          inputWrapper: classnames(
            'shadow-none bg-steinnlabs-white py-8 rounded-xl border-none px-6',
            {
              'border !border-steinnlabs-orange [&>svg>path]:color:!#FF3A30':
                rest.isInvalid,
            }
          ),
          innerWrapper: classnames({
            '[&>svg>path]:fill-tawazun-red-600': rest.isInvalid,
          }),
          input: classnames(
            'text-md text-steinnlabs-grey placeholder:text-steinnlabs-grey-300',
            {
              '!text-steinnlabs-orange': rest.isInvalid,
            }
          ),
          helperWrapper: 'p-2 pb-0',
          base: '!mt-0',
          label:
            'flex overflow-visible font-spacegrotesk !leading-5 top-3 font-normal text-md !tracking-[-0.5%] !text-steinnlabs-grey-300 !font-medium after:text-steinnlabs-orange after:ml-1',
        },
        { ...classNames },
      ])}
      {...rest}
    />
  ),
  {
    variants: {
      disabled: {
        true: {
          input: 'cursor-not-allowed',
        },
      },
    },
  }
);
