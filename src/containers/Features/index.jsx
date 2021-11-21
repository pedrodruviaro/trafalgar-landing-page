import React from "react";
import { Container } from "./styles.jsx";
import { FeatureCard } from "../../components/FeatureCard/index.jsx";
import { Dots } from "../../components/Dots";

const featureCards = [
    {
        img: "/assets/illu-section02.svg",
        title: "Leading healthcare providers",
        content:
            "Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride in the solutions we deliver.",
    },
    {
        img: "/assets/illu-section03.svg",
        title: "Download our mobile apps",
        content:
            "Our dedicated patient engagement app and web portal allow you to access information instantaneously (notedeous form, long calls, or administrative hassle) and securely.",
    },
];

export const Features = () => {
    return (
        <Container>
            {featureCards.map((card) => (
                <FeatureCard key={card.title} {...card} />
            ))}

            <Dots />
        </Container>
    );
};
