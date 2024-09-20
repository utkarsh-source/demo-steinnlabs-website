import { SlotsToClasses } from '@nextui-org/react';

export function deepConcatStringRecords<T extends string>(
  records: SlotsToClasses<T>[]
) {
  const result: Record<string, string> = {};

  records.forEach((object) => {
    Object.entries(object).forEach(([key, value]) => {
      const trimmedValue = value as string;
      result[key] = result[key]
        ? `${result[key]} ${trimmedValue}`
        : trimmedValue;
    });
  });

  return result;
}
