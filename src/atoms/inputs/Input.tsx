import React, { InputHTMLAttributes } from 'react';
import { Label, StyledInput } from './styles';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

function Input({ label, id, ...rest }: Props) {
  return (
    <Label htmlFor={id}>
      {label}
      <StyledInput id={id} {...rest} />
    </Label>
  );
}

export default Input;
