import styled, { css } from "styled-components";

export const Container = styled.h2`
    font-size: 2rem;
    line-height: 1.5;
    font-weight: 700;

    width: fit-content;

    &::after {
        content: "";
        width: 56px;
        height: 2px;
        border: 10px;
        background-color: currentColor;
        display: block;

        margin-top: 1rem;
        margin-right: auto;
    }

    @media (min-width: 700px) {
        font-size: 2.5rem;
    }

    ${(props) =>
        props.lineCenter &&
        css`
            &::after {
                margin: 1rem auto 0 auto;
            }
        `}
`;
