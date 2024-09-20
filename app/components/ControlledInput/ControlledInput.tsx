import { InputProps } from '@nextui-org/react';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';

import { Input } from '../Input/Input';

type ControllerInputProps<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
} & InputProps;

export function ControlledInput<T extends FieldValues>({
  control,
  name,
  ...rest
}: ControllerInputProps<T>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <Input {...rest} value={value} onChange={onChange} />
      )}
    />
  );
}
