import styled, { css } from "styled-components";

export const Container = styled.h2`
    font-size: 36px;
    line-height: 56px;
    font-weight: 700;

    border: 1px solid;
    width: fit-content;

    &::after {
        content: "";
        width: 56px;
        height: 2px;
        border: 10px;
        background-color: ${(props) => props.theme.dark};
        display: block;

        margin-top: 1rem;
        margin-right: auto;
    }

    ${(props) =>
        props.lineCenter &&
        css`
            &::after {
                margin: 1rem auto;
            }
        `}
`;
