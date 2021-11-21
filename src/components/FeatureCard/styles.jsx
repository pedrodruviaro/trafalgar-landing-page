import styled from "styled-components";

export const Container = styled.article`
    display: flex;
    flex-direction: column;
    gap: 2rem;

    align-items: center;

    p {
        max-width: 30rem;
    }

    img {
        max-width: 20rem;
    }

    div:last-child {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 2rem;

        h3 {
            font-size: clamp(1.5rem, 3vw, 2.5rem);
            line-height: 1.5;
        }
    }

    @media (min-width: 750px) {
        img {
            max-width: 100%;
        }

        align-items: center;
        flex-direction: row;
        gap: 6rem;

        > * {
            flex: 1;
        }
    }
`;
