import styled from 'styled-components';

export const ButtonContainer = styled.button`
    display: inline-flex;
    align-items: center;
    column-gap: .5rem;
    background-color: ${({ theme }) => theme.colors.firstColor};
    color: #fff;
    padding: 1.15rem 1.5rem;
    border-radius: .5rem;
    transition: .3s;
    box-shadow: 0 8px 24px hsla(var(--hue), var(--sat), var(--lig), .25);

    & i{
        font-size: 1.25rem;
    }

    &:hover{
        background-color: ${({ theme }) => theme.colors.firstColorAlt};
    }

    .small{
        padding: .75rem;
        box-shadow: none;
    }
    .gray{
        background-color: ${({ theme }) => theme.colors.textColorLighten};
        color: ${({ theme }) => theme.colors.titleColor};

        &:hover{
            background-color: ${({ theme }) => theme.colors.textColorLight};
        }
    }
`;
