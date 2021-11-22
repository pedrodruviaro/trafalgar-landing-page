import styled from "styled-components";
import { ContainerDefault } from "../../components/Container";

export const Container = styled(ContainerDefault)`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 4rem;

    background-image: url("/assets/bg-pattern.svg");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center right;

    h2 {
        text-align: center;
        margin-inline: auto;
    }

    > div {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 2rem;
        position: relative;

        > span {
            width: 7rem;
            left: 0;
            top: -3rem;
        }
    }
`;
