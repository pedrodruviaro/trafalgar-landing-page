import React from "react";
import { Header } from "./components/Header";
import { Articles } from "./containers/Articles";
import { Features } from "./containers/Features";
import { Hero } from "./containers/Hero";
import { Services } from "./containers/Services";
import { Testimonials } from "./containers/Testimonials";

export const App = () => {
    return (
        <>
            <Header />
            <Hero />
            <Services />
            <Features />
            <Testimonials />
            <Articles />
        </>
    );
};
