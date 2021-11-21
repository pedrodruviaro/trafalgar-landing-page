import React from "react";
import { Container } from "./styles.jsx";

export const Testimonial = () => {
    return (
        <Container>
            <div>
                <img src="/assets/person.png" alt="Customer" />
                <span>Edward Newgate</span>
                <span>Founder Circle</span>
            </div>

            <p>
                &quot;Our dedicated patient engagement app and web portal allow
                you to access information instantaneously (no tedeous form, long
                calls, or administrative hassle) and securely&quot;
            </p>
        </Container>
    );
};
