import styled from 'styled-components';

export const InfoGroupContainer = styled.div`
  text-align: center;
  > h3 {
    font-size: ${({ theme }) => theme.fontSizes.normal};
    margin-bottom: .25rem;
  }
  > p {
    font-size: ${({ theme }) => theme.fontSizes.smaller};
    font-weight: 500;
  }

`;
