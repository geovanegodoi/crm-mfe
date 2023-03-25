import { useState } from 'react';
import Checkbox from './checkbox';

export function useCheckbox(label: string, initial?: boolean): [JSX.Element] {
  const [isChecked, setIsChecked] = useState<boolean>(initial || false);
  return [
    <Checkbox
      label={label}
      isChecked={isChecked}
      onChange={() => setIsChecked(!isChecked)}
    />,
  ];
}
