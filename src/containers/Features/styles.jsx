import styled from "styled-components";
import { ContainerDefault } from "../../components/Container";

export const Container = styled(ContainerDefault)`
    display: grid;
    gap: 8rem;
    position: relative;

    @media (min-width: 750px) {
        article:last-child {
            flex-direction: row-reverse;
        }
    }

    > span {
        width: 5rem;
        top: calc(50% - 26px);
        right: 0;
    }
`;
