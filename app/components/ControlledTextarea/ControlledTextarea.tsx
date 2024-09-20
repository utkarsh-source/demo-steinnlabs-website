import { TextAreaProps } from '@nextui-org/react';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';

import { Textarea } from '../Textarea/Textarea';

type ControlledTextareaProps<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
} & TextAreaProps;

export function ControlledTextarea<T extends FieldValues>({
  control,
  name,
  ...rest
}: ControlledTextareaProps<T>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <Textarea {...rest} value={value} onChange={onChange} />
      )}
    />
  );
}
