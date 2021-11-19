import React, { useState } from "react";
import { Container, Hamburger, NavLink } from "./styles.jsx";

const links = ["Home", "Find a doctor", "Apps", "Testimonials", "About us"];

export const Header = () => {
    const [navbarActive, setNavbarActive] = useState(false);

    return (
        <Container active={navbarActive}>
            <div>
                <img src="/assets/logo.svg" alt="Trafalgar" />
            </div>
            <nav>
                {links.map((link) => (
                    <NavLink key={link}>{link}</NavLink>
                ))}
            </nav>

            <Hamburger
                active={navbarActive}
                onClick={() => setNavbarActive(!navbarActive)}
            >
                <div></div>
            </Hamburger>
        </Container>
    );
};
