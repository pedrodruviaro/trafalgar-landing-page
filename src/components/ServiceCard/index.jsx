import React from "react";
import { Container } from "./styles.jsx";

export const ServiceCard = ({ title, img, content }) => {
    return (
        <Container>
            <header>
                <img src={img} alt={title} />
            </header>
            <main>
                <h3>{title}</h3>
                <p>{content}</p>
            </main>
        </Container>
    );
};
