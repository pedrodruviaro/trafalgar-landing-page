import React from "react";
import { Header } from "./components/Header";
import { Features } from "./containers/Features";
import { Hero } from "./containers/Hero";
import { Services } from "./containers/Services";

export const App = () => {
    return (
        <>
            <Header />
            <Hero />
            <Services />
            <Features />
        </>
    );
};
