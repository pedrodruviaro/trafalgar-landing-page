import React from "react";
import { Container } from "./styles.jsx";
import { LineTitle } from "../../components/LineTitle";
import { Testimonial } from "../../components/Testimonial";
import { Dots } from "../../components/Dots/index.jsx";

export const Testimonials = () => {
    return (
        <Container>
            <div>
                <LineTitle lineCenter as="h3">
                    What our customer are saying
                </LineTitle>
                <Testimonial />

                <Dots dotsWhite />
            </div>
            <img src="/assets/arrow-nav.svg" alt="" />
        </Container>
    );
};
