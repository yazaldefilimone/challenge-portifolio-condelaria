import 'styled-components';
import { theme } from './Variables';

export type Theme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
