import { FunctionComponent, ReactNode } from 'react';

import { ButtonContainer } from './styles';

interface ButtonProps {
  children: ReactNode;
}

export const Button: FunctionComponent<ButtonProps> = ({ children }) => {
  return <ButtonContainer>{children}</ButtonContainer>;
};
