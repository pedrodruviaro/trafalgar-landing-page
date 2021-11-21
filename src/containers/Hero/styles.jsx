import styled from "styled-components";
import { ContainerDefault } from "../../components/Container";

export const Container = styled(ContainerDefault)`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: relative;

    > * {
        flex: 1;
    }

    @media (min-width: 600px) {
        flex-direction: row;
        align-items: center;

        > div:first-child {
            flex: 1.25;
        }
    }

    @media (min-width: 900px) {
        > div:first-child {
            flex: 1;
            p {
                font-size: 1.125rem;
            }
        }
    }

    > div:first-child {
        h1 {
            font-size: clamp(2rem, 3vw, 3rem);
            line-height: 50px;

            strong {
                display: block;
            }
        }

        p {
            text-align: left;
            margin: 1rem 0 2rem 0;

            max-width: 25rem;
        }
    }

    > span {
        top: 0.5rem;
        left: 0;

        @media (min-width: 900px) {
            width: 5rem;
            top: 1rem;
        }

        @media (min-width: 1200px) {
            top: 3rem;
        }
    }
`;
