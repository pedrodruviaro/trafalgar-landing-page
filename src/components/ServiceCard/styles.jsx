import styled from "styled-components";

export const Container = styled.article`
    background-color: ${(props) => props.theme.light};
    border-radius: 8px;
    padding: 1rem;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;

    > header {
        margin-bottom: 1rem;
        height: 6rem;
        overflow: hidden;

        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: auto;
        width: fit-content;

        img {
            max-width: 50px;
            height: auto;
        }
    }

    > main {
        display: grid;
        gap: 1rem;

        h3 {
            font-size: clamp(1.35rem, 3vw, 1.75rem);
        }
    }
`;
