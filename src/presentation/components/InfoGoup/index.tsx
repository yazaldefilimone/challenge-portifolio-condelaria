import { FunctionComponent, ReactNode } from 'react';

import { InfoGroupContainer } from './styles';

interface InfoGroupProps {
  children: ReactNode;
  infoNumber: string | number;
}

export const InfoGroup: FunctionComponent<InfoGroupProps> = ({ children, infoNumber }) => {
  return (
    <InfoGroupContainer>
      <h3>{infoNumber}</h3>
      {children}
    </InfoGroupContainer>
  );
};
