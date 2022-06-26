import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    outline: none;
    margin: 0;
    padding: 0;
    border: none;
    box-sizing: border-box;
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

  body {
    background: ${(props) => props.theme.colors.bodyColor};
    font: 400 1rem ${({ theme }) => `${theme.fonts}`};
  }

  img {
    width: 100%;
    max-width: 100%;
    user-select: none;
    pointer-events: none;
    cursor: default;
  }

  ul, li{
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }


`;
