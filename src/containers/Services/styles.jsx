import styled from "styled-components";
import { ContainerDefault } from "../../components/Container";

export const Container = styled(ContainerDefault)`
    display: grid;
    gap: 2rem;
    position: relative;

    background-image: url("/assets/bg-pattern.svg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    @media (min-width: 800px) {
        background-size: contain;
        background-position: 3rem center;
    }

    h2 {
        margin-inline: auto;
    }

    > p {
        text-align: center;
        max-width: 54rem;
        margin-inline: auto;
    }

    > button {
        margin-inline: auto;
    }

    > div {
        display: grid;
        gap: 2rem;

        > article {
            max-width: 25rem;
            margin-inline: auto;
        }

        @media (min-width: 600px) {
            grid-template-columns: 1fr 1fr;

            article {
                max-width: auto;
                padding: 2rem;
            }
        }

        @media (min-width: 950px) {
            grid-template-columns: 1fr 1fr 1fr;
        }
    }

    > span {
        width: 5rem;

        top: 50%;
        z-index: -1;
        right: 0;

        transform: rotate(180deg);
    }
`;
