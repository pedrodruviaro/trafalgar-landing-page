import React from "react";
import { Container } from "./styles.jsx";
import { FeatureCard } from "../../components/FeatureCard/index.jsx";
import { Dots } from "../../components/Dots";
import { featureCards } from "./data";

export const Features = () => {
    return (
        <Container>
            <Dots />

            {featureCards.map((card) => (
                <FeatureCard key={card.title} {...card} />
            ))}
        </Container>
    );
};
