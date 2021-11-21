import React from "react";
import { Container } from "./styles.jsx";
import { Button } from "../../components/Button";

export const Hero = () => {
    return (
        <Container>
            <div>
                <h1>
                    Virtual healthcare <strong>for you</strong>
                </h1>
                <p>
                    Trafalgar provides progressive, and affordable healthcare,
                    accessible on mobile and online for everyone
                </p>
                <Button type="button">Consult today</Button>
            </div>

            <div>
                <img src="/assets/hero.svg" alt="hero" />
            </div>
            <span className="dots"></span>
        </Container>
    );
};
