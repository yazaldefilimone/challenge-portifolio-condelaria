import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  ::root {
    --hue: ${({ theme }) => theme.var.hue};
    --sat: ${({ theme }) => theme.var.sat};
    --lig:${({ theme }) => theme.var.lig};
  }
  * {
    outline: none;
    font-family: ${({ theme }) => `${theme.fonts}`};
    color: ${(props) => props.theme.colors.firstColor};
    ::-webkit-scrollbar {
      width: 8px;
      height: 5px;
    }
    ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.colors.firstColor};
      border-radius: 10px;
    }
    ::-webkit-scrollbar-track{
      background: ${({ theme }) => theme.colors.firstColorAlt};
    }
  }

  *{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

body{
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: ${({ theme }) => `${theme.fonts}`};
  font-size: ${({ theme }) => theme.fontSizes.normal};
  background-color: ${({ theme }) => theme.colors.bodyColor};
  color: ${({ theme }) => theme.colors.textColor};
  transition: .3s; 
}
h1,h2,h3{
  color: ${({ theme }) => theme.colors.titleColor};
  font-weight: 600;  
}
ul{
  list-style: none;
}
a{
  text-decoration: none;
}


img {
  width: 100%;
  max-width: 100%;
  user-select: none;
  pointer-events: none;
  cursor: default;
}
`;
