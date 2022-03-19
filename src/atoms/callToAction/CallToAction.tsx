import React, { ReactNode } from 'react';
import { NavLinkProps, useNavigate } from 'react-router-dom';
import { Button } from './styles';

type Props = { children: ReactNode } & Pick<NavLinkProps, 'to'>;

function CallToAction({ children, to }: Props) {
  const navigate = useNavigate();

  return (
    <div>
      <Button onClick={() => navigate(to)}>{children}</Button>
    </div>
  );
}

export default CallToAction;
