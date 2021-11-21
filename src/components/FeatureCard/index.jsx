import React from "react";
import { Button } from "../Button/index.jsx";
import { LineTitle } from "../LineTitle/index.jsx";
import { Container } from "./styles.jsx";

export const FeatureCard = ({ img, title, content }) => {
    return (
        <Container>
            <div>
                <img src={img} alt={title} />
            </div>

            <div>
                <LineTitle as="h3">{title}</LineTitle>
                <p>{content}</p>
                <Button secondary>Learn more</Button>
            </div>
        </Container>
    );
};
