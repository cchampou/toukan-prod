import React, { TextareaHTMLAttributes } from 'react';
import { Label, StyledTextArea } from './styles';

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

function TextArea({ label, id, children, ...rest }: Props) {
  return (
    <Label htmlFor={id}>
      {label}
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <StyledTextArea id={id} rows={10} {...rest}>
        {children}
      </StyledTextArea>
    </Label>
  );
}

export default TextArea;
