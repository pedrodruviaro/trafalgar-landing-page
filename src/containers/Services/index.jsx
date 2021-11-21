import React from "react";
import { Container } from "./styles.jsx";
import { LineTitle } from "../../components/LineTitle";
import { Button } from "../../components/Button";
import { ServiceCard } from "../../components/ServiceCard/index.jsx";

const cards = [
    {
        img: "/assets/search-doctor.svg",
        title: "Search doctor",
        content:
            "Choose your doctor from thousands of specialist, general, and trusted hospitals",
    },
    {
        img: "/assets/online-pharmacy.svg",
        title: "Online pharmacy",
        content:
            "Buy  your medicines with our mobile application with a simple delivery system",
    },
    {
        img: "/assets/consultation.svg",
        title: "Consultation",
        content:
            "Free consultation with our trusted doctors and get the best recomendations",
    },
    {
        img: "/assets/details-info.svg",
        title: "Details info",
        content:
            "Free consultation with our trusted doctors and get the best recomendations",
    },
    {
        img: "/assets/emergency-care.svg",
        title: "Emergency care",
        content:
            "You can get 24/7 urgent care for yourself or your children and your lovely family",
    },
    {
        img: "/assets/tracking.svg",
        title: "Tracking",
        content: "Track and save your medical history and health data ",
    },
];

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

            <span className="dots"></span>

            <Button secondary>Learn more</Button>
        </Container>
    );
};
