import React, { ReactNode } from 'react';
import { NavLinkProps, useNavigate } from 'react-router-dom';
import { Button } from './styles';

type Props = { children: ReactNode } & Pick<NavLinkProps, 'to'>;

function CallToAction({ children, to }: Props) {
  const navigate = useNavigate();

  return <Button onClick={() => navigate(to)}>{children}</Button>;
}

export default CallToAction;
