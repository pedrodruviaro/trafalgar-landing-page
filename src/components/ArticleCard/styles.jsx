import styled from "styled-components";

export const Container = styled.article`
    box-shadow: 10px 40px 50px rgba(229, 233, 246, 0.6);
    background-color: ${(props) => props.theme.light};
    border-radius: 20px;
    overflow: hidden;

    width: 100%;
    max-width: 21.875rem;

    z-index: 9999999;

    main {
        padding: 2rem;
        display: grid;
        gap: 1rem;

        h3 {
            font-size: 1.15rem, 3vw, 1.35rem;
        }
    }

    footer {
        padding: 0 2rem 2rem 2rem;

        a {
            display: flex;
            align-items: center;
            gap: 1rem;
            color: ${(props) => props.theme.blue};

            img {
                max-width: 1rem;
            }
        }
    }
`;
