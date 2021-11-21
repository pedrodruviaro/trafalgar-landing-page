import styled from "styled-components";

export const Container = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    > div {
        display: grid;
        text-align: center;
        justify-content: center;

        img {
            margin-bottom: 1rem;
            max-width: 8rem;
        }

        span:last-child {
            color: rgba(255, 255, 255, 0.8);
        }
    }

    p {
        color: rgba(255, 255, 255, 0.8);
    }

    @media (min-width: 700px) {
        flex-direction: row;

        > * {
            flex: 1;
        }

        > div {
            column-gap: 1rem;
            grid-template-columns: max-content max-content;
            grid-template-rows: min-content min-content;
            grid-template-areas:
                "img name"
                "img desc";

            img {
                grid-area: img;
                margin: 0;
            }

            span:not(:last-child) {
                grid-area: name;
                align-self: end;
                text-align: left;
                margin-right: auto;
            }

            span:last-child {
                grid-area: desc;
                align-self: start;
                text-align: left;
                margin-right: auto;
            }
        }
    }
`;
