import { ThemeProvider } from 'styled-components';
import { Variables } from './Variables';
import { GlobalStyles } from './global';
import { FunctionComponent, ReactNode } from 'react';

type ThemeContainerProps = {
  children: ReactNode;
};

export const ThemeContainer: FunctionComponent<ThemeContainerProps> = ({ children }) => {
  const variables = new Variables();
  console.log(variables.theme);
  return (
    <ThemeProvider theme={variables.theme()}>
      {children}
      <GlobalStyles />
    </ThemeProvider>
  );
};
