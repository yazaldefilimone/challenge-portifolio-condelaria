import { FunctionComponent } from 'react';
import { ReactNode } from 'react';

import { HeroContainer } from './styles';

interface HeroProps {
  children?: ReactNode;
}

export const Hero: FunctionComponent<HeroProps> = () => {
  return (
    <HeroContainer>
      <h1>Hero</h1>
    </HeroContainer>
  );
};
