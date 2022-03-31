import React, { HTMLAttributes } from 'react';
import { Label, StyledInput } from './styles';

interface Props extends HTMLAttributes<HTMLInputElement> {
  label: string;
}

function Input({ label, id, ...rest }: Props) {
  return (
    <Label htmlFor={id}>
      {label}
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <StyledInput id={id} {...rest} />
    </Label>
  );
}

export default Input;
