import styled, { css } from "styled-components";

export const Container = styled.button`
    font-size: 1rem;
    line-height: 1.5;
    font-weight: 700;
    border-radius: 40px;
    min-width: 10rem;
    background-color: ${(props) => props.theme.blue};
    color: ${(props) => props.theme.light};

    border: none;
    padding: 0.75em 1em;
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
