import styled from "styled-components";

export const Wrapper = styled.div`
    background: linear-gradient(183.41deg, #67c3f3 -8.57%, #5a98f2 82.96%);
`;

export const Container = styled.footer`
    max-width: 80rem;
    margin-inline: auto;
    padding: 6rem 2rem;

    display: flex;
    align-items: flex-start;
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap: 3rem;

    position: relative;

    p,
    a,
    h4 {
        color: ${(props) => props.theme.light};
    }

    h4 {
        font-size: 1.15rem;
    }

    > div:first-child {
        display: grid;
        gap: 1rem;

        p {
            max-width: 25rem;
        }

        p:last-child {
            font-size: 0.9rem;
        }
    }

    > div:not(:first-child) {
        display: grid;
        gap: 1rem;

        flex: 1;

        h4 {
            margin-bottom: 1rem;
        }
    }

    > span {
        width: 5rem;
        bottom: 0;
        left: 0;
    }
`;
