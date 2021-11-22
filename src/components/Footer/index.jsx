import React from "react";
import { Container, Wrapper } from "./styles.jsx";
import { Dots } from "../Dots";

export const Footer = () => {
    return (
        <Wrapper>
            <Container>
                <div>
                    <div>
                        <img src="/assets/logo-footer.svg" alt="" />
                    </div>
                    <p>
                        Trafalgar provides progressive, and affordable
                        healthcare, accessible on mobile and online for everyone
                    </p>
                    <p>©Trafalgar PTY LTD 2020. All rights reserved</p>
                </div>
                <div>
                    <h4>Company</h4>
                    <a href="/">About</a>
                    <a href="/">Testimonials</a>
                    <a href="/">Find a doctor</a>
                    <a href="/">Apps</a>
                </div>
                <div>
                    <h4>Region</h4>
                    <a href="/">Indonesia</a>
                    <a href="/">Singapore</a>
                    <a href="/">Hongkong</a>
                    <a href="/">Canada</a>
                </div>
                <div>
                    <h4>Help</h4>
                    <a href="/">Help center</a>
                    <a href="/">Contact support</a>
                    <a href="/">Instructions</a>
                    <a href="/">How it works</a>
                </div>

                <Dots dotsWhite />
            </Container>
        </Wrapper>
    );
};
