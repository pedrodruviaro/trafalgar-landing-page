import React from "react";
import { Container } from "./styles.jsx";
import { LineTitle } from "../../components/LineTitle";
import { Button } from "../../components/Button";
import { ServiceCard } from "../../components/ServiceCard/index.jsx";
import { Dots } from "../../components/Dots";
import { cards } from "./data";

export const Services = () => {
    return (
        <Container>
            <LineTitle lineCenter>Our services</LineTitle>
            <p>
                We provide to you the best choiches for you. Adjust it to your
                health needs and make sure your undergo treatment with our
                highly qualified doctors you can consult with us which type of
                service is suitable for your health
            </p>

            <div>
                {cards.map((card) => (
                    <ServiceCard key={card.title} {...card} />
                ))}
            </div>

            <Dots />

            <Button secondary>Learn more</Button>
        </Container>
    );
};
