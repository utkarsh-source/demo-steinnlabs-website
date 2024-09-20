import { Textarea as NUITextarea, TextAreaProps } from '@nextui-org/react';
import classnames from 'classnames';

import { deepConcatStringRecords } from '../../utils';

export function Textarea({ children, classNames, ...rest }: TextAreaProps) {
  return (
    <NUITextarea
      minRows={1}
      rows={1}
      disableAnimation
      {...rest}
      labelPlacement="outside"
      classNames={deepConcatStringRecords([
        {
          errorMessage:
            'text-base leading-4 tracking-[0.3px] !text-steinnlabs-orange text-opacity-100',
          inputWrapper: classnames(
            'rounded-xl !bg-steinnlabs-white border-none p-6 pr-2',
            {
              ' border !border-tawazun-red-700': rest.isInvalid,
            }
          ),
          innerWrapper: classnames({
            '[&>svg>*]:!fill-steinnlanbs-orange': rest.isInvalid,
          }),
          input: classnames(
            'text-md text-steinnlabs-grey placeholder:text-steinnlabs-grey-300',
            {
              '!text-steinnlabs-orange': rest.isInvalid,
            }
          ),
          helperWrapper: 'p-2 pb-0',
          label:
            'flex overflow-visible font-montserrat !leading-5 font-normal text-md !tracking-[-0.5%] !text-steinnlabs-grey after:text-tawazun-red-700 after:ml-1',
        },
        {
          ...classNames,
        },
      ])}>
      {children}
    </NUITextarea>
  );
}
