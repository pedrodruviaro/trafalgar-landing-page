import styled from "styled-components";
import { ContainerDefault } from "../../components/Container";

export const Container = styled(ContainerDefault)`
    > div {
        padding: 2rem;
        border-radius: 24px;
        background: linear-gradient(208.18deg, #67c3f3 9.05%, #5a98f2 76.74%);
        color: ${(props) => props.theme.light};
        position: relative;

        h3 {
            font-size: clamp(1.75rem, 3vw, 2.25rem);
            margin-inline: auto;

            text-align: center;
            margin-bottom: 2rem;
        }

        > span {
            top: 1rem;
            right: 1rem;
            width: 5rem;
        }
    }

    > img {
        margin: 2rem auto 0 auto;
        max-width: 17rem;
    }
`;
