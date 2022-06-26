import { ReactNode } from 'react';

import * as styles from './styles';

interface ContainerProps {
  children: ReactNode;
}

function Container({ children }: ContainerProps) {
  return (
    <styles.Container>
      <h1>Container</h1>
      {children}
    </styles.Container>
  );
}

export default Container;
