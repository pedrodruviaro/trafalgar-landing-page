import React from "react";
import { Container } from "./styles.jsx";

export const ArticleCard = ({ img, title, content }) => {
    return (
        <Container>
            <header>
                <img src={img} alt={title} />
            </header>
            <main>
                <h3>{title}</h3>
                <p>{content}</p>
            </main>
            <footer>
                <a href="/">
                    Read more
                    <img src="/assets/arrow.svg" alt="" />
                </a>
            </footer>
        </Container>
    );
};
