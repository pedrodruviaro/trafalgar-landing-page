import styled, { css } from "styled-components";

export const Container = styled.button`
    font-size: 18px;
    line-height: 55px;
    font-weight: 700;
    border-radius: 40px;
    min-width: 12rem;
    background-color: ${(props) => props.theme.blue};
    color: ${(props) => props.theme.light};

    border: none;
    padding: 0 1rem;
    cursor: pointer;
    display: inline-block;

    transition: filter 200ms ease;

    &:hover,
    &:focus {
        filter: brightness(0.8);
    }

    ${(props) =>
        props.secondary &&
        css`
            background-color: transparent;
            color: ${(props) => props.theme.blue};
            border: 1px solid ${(props) => props.theme.blue};
        `}
`;
