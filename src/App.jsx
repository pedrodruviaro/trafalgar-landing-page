import React from "react";
import { Header } from "./components/Header";
import { Hero } from "./containers/Hero";
import { Services } from "./containers/Services";

export const App = () => {
    return (
        <>
            <Header />
            <Hero />
            <Services />
        </>
    );
};
