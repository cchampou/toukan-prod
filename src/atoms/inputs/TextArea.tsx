import React, { HTMLAttributes } from 'react';
import { Label, StyledTextArea } from './styles';

interface Props extends HTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

function TextArea({ label, id, children, ...rest }: Props) {
  return (
    <Label htmlFor={id}>
      {label}
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <StyledTextArea id={id} {...rest}>
        {children}
      </StyledTextArea>
    </Label>
  );
}

export default TextArea;
