import styled, { css } from "styled-components";

export const Container = styled.span`
    position: absolute;
    width: 3.5rem;
    aspect-ratio: 1;

    background-image: url("/assets/dots.svg");
    background-size: contain;
    background-repeat: no-repeat;

    ${(props) =>
        props.dotsWhite &&
        css`
            background-image: url("/assets/dots-white.svg");
        `}
`;
