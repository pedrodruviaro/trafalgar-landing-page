import styled, { css } from "styled-components";

export const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 4rem;
    padding-inline: 2rem;

    position: relative;

    max-width: 80rem;
    margin-inline: auto;

    nav {
        display: flex;
        align-items: center;
        gap: 2rem;

        z-index: 999;
    }

    @media screen and (max-width: 800px) {
        nav {
            position: fixed;

            top: 4rem;
            right: 2rem;

            display: grid;
            gap: 1rem;
            padding: 1rem;

            background-color: ${(props) => props.theme.blue};

            transition: transform 200ms ease-in-out;

            transform: scale(0);
            transform-origin: top right;

            ${(props) =>
                props.active &&
                css`
                    transform: scale(1);
                `}

            a {
                color: ${(props) => props.theme.light};
                font-weight: 500;
            }
        }
    }
`;

export const NavLink = styled.a`
    font-size: 1.125rem;

    /* mockup */
    &:first-child {
        font-weight: 800;
        color: ${(props) => props.theme.dark};
    }

    ${(props) =>
        props.active &&
        css`
            font-weight: 800;
            color: ${(props) => props.theme.dark};
        `}
`;

export const Hamburger = styled.div`
    gap: 0.25rem;

    display: none;

    @media screen and (max-width: 800px) {
        display: grid;
    }

    &::before {
        content: "";
        background-color: ${(props) => props.theme.dark};
        width: 25px;
        height: 2px;
        display: block;
        position: relative;
        transition: transform 200ms ease-in-out;
    }

    &::after {
        content: "";
        background-color: ${(props) => props.theme.dark};
        width: 25px;
        height: 2px;
        display: block;
        position: relative;
        transition: transform 200ms ease-in-out;
    }

    div {
        display: grid;
        background-color: ${(props) => props.theme.dark};
        width: 25px;
        height: 2px;
    }

    ${(props) =>
        props.active &&
        css`
            &::before {
                transform: rotate(45deg);
                top: 4px;
            }

            &::after {
                transform: rotate(-45deg);
                bottom: 2px;
            }

            div {
                display: none;
            }
        `}
`;
