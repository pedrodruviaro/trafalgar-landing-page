import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    *{ 
        font-family: 'Mulish', sans-serif;
    }

    body {
        background-color: ${(props) => props.theme.light};
        color: ${(props) => props.theme.dark};

        line-height: 1.5;
    }

    h1,h2,h3,h4,h5,h6{
        font-weight: 700;
    }

    p, span button, a{
        font-weight: 400;

        color: ${(props) => props.theme.text};
    }
    
`;
