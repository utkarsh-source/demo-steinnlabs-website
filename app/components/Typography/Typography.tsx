import React, { ReactNode } from 'react';

import classNames from 'classnames';

export type VariantType =
  | 'bodyXS'
  | 'bodySM'
  | 'bodyMD'
  | 'bodyLG'
  | 'bodyXL'
  | 'bodyOverline'
  | 'headingXS'
  | 'headingSM'
  | 'headingMD'
  | 'headingLG'
  | 'headingXL'
  | 'statsXS'
  | 'statsSM'
  | 'statsMD'
  | 'statsLG'
  | 'statsXL';

export type AlignType = 'center' | 'justify' | 'left' | 'right';

export type ColorType = 'gray' | 'orange' | 'dark' | 'dirty-gray' | 'white';

export type TypographyProps = {
  capitalize?: boolean;
  className?: string;
  children: ReactNode;
  color?: ColorType;
  variant?: VariantType;
  align?: AlignType;
  textEllipse?: boolean;
} & React.HTMLAttributes<HTMLParagraphElement>;

const variantStyleClass: {
  [V in VariantType]: string;
} = {
  bodyXS: 'text-xs leading-[1.125rem] font-medium',
  bodySM: 'text-md leading-[1.31rem] font-medium',
  bodyMD: 'text-xl leading-6 font-medium',
  bodyLG: 'text-[18px] leading-7 font-medium',
  bodyXL: 'text-[1.8rem] leading-10 font-medium',
  bodyOverline: 'text-base leading-[1.125rem] tracking-[10%]',
  headingXS: 'text-xl leading-6 font-semibold font-spacegrotesk',
  headingSM: 'text-2xl leading-6 font-semibold font-spacegrotesk',
  headingMD: 'text-3xl leading-8 font-semibold font-spacegrotesk',
  headingLG: 'text-4xl leading-10 font-semibold font-spacegrotesk',
  headingXL: 'text-[4rem] leading-[4.375rem] font-semibold font-spacegrotesk',
  statsXS: 'text-base leading-[1.125rem] font-medium',
  statsSM: 'text-md leading-5 font-medium',
  statsMD: 'text-xl leading-6 font-medium',
  statsLG: 'text-[1.125rem] leading-7 font-medium',
  statsXL: 'text-3xl leading-8 font-semibold',
};

const alignStyleClass: { [A in AlignType]: string } = {
  center: 'text-center',
  justify: 'text-justify',
  left: 'text-left',
  right: 'text-right',
};

const colorClasses: { [C in ColorType]: string } = {
  orange: 'text-steinnlabs-orange',
  gray: 'text-steinnlabs-grey-300',
  dark: 'text-steinnlabs-grey',
  'dirty-gray': 'text-steinnlabs-grey-400',
  white: 'text-steinnlabs-white',
};

export function Typography({
  children,
  className,
  textEllipse,
  capitalize,
  color,
  variant = 'bodySM',
  align = 'left',
  ...rest
}: TypographyProps) {
  return (
    <p
      className={classNames(
        '!bg-transparent',
        variantStyleClass[variant],
        alignStyleClass[align],
        { [colorClasses[color!]]: color },
        {
          capitalize,
          'overflow-hidden text-nowrap text-ellipsis max-w-[8rem]': textEllipse,
        },
        className
      )}
      {...rest}>
      {children}
    </p>
  );
}
